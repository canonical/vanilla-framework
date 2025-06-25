# Charm for the vanillaframework.io website

## Rockcraft

The first stage of building this charm is to create a rock using [rockcraft](https://documentation.ubuntu.com/rockcraft).

```bash
# Install rockcraft
sudo snap install rockcraft --classic
# Pull rock dependencies and pack the rock.
rockcraft pack
# Push the rock to your local docker registry. This will allow you to pull and run it with `docker run` in later steps.
rockcraft.skopeo --insecure-policy copy oci-archive:./vanillaframework-io_0.1_amd64.rock docker-daemon:vanillaframework-io:latest
```

This will pack the application into a [rock](https://documentation.ubuntu.com/rockcraft/en/latest/explanation/rocks/) (OCI image) and upload it to the local registry.

You can run the rock as a docker image locally with:

```bash
sudo docker run -p 8080:8000 --env-file .env -ti vanillaframework-io:latest
```

The site should now be live at http://127.0.0.1:8080.

Please note that the app will be served at port 8000 within the OCI container, **regardless of environment variables**.
The [flask-framework extension](https://documentation.ubuntu.com/rockcraft/en/latest/reference/extensions/flask-framework/#flask-framework)
always exposes port 8000.

## Charm Development

This site is deployed using the [PAAS Charm](https://github.com/canonical/paas-charm).

### Packing a Charm

To work on the Charm locally, first install [Multipass](https://multipass.run/) and create a Multipass instance:

```bash
# Install Multipass
sudo snap install multipass
# Create a Multipass instance
multipass launch --name juju-dev-env --cpus 4 --memory 8G --disk=100G
```

Mount a host directory containing the charm code to the Multipass instance.
This will allow the instance to access the charm code.
The command below assumes your current working directory is the root of Vanilla.

```bash
multipass mount --type=classic $(pwd) juju-dev-env:/home/ubuntu/vanilla-framework
```

The following commands will be run from within the Multipass instance, so first open a shell in the instance:

```bash
# Open a shell in the instance
multipass shell juju-dev-env
```

Next, install & bootstrap microk8s and Juju inside the Multipass instance:

```bash
# Install microk8s and Juju
sudo snap install microk8s --classic
sudo snap install juju
alias kubectl="microk8s kubectl"
# Add user to microk8s group so we can run microk8s without sudo
sudo usermod -a -G microk8s $USER
# Ensure the user has access to the microk8s config
sudo chown -R ubuntu ~/.kube
# Reload the group membership
newgrp microk8s
# Wait for microk8s to be ready
microk8s status --wait-ready
# Required for Juju to provide storage volumes
microk8s enable hostpath-storage
# Required to host the OCI image of the application
microk8s enable registry
# Required to expose the application
microk8s enable ingress
# Grant Juju access to K8s cbnfig
sudo mkdir -p /var/snap/juju/current/microk8s/credentials
microk8s config | sudo tee /var/snap/juju/current/microk8s/credentials/client.config
sudo chown -R $USER:$USER /var/snap/juju/current/microk8s/credentials

juju bootstrap microk8s local-k8s
```

Next, let's build the charm using `charmcraft`.

```bash
# Install charmcraft
sudo snap install charmcraft --channel latest/stable --classic
# Navigate to the mounted Vanilla directory
cd ~/vanilla-framework
mkdir -p charm && cd charm
# Initialize Charmcraft. You may need to add --force if the charm directory already exists.
charmcraft init --profile flask-framework --name vanillaframework-io --force
# Fetch charm libraries
charmcraft fetch-libs
# Build the charm
charmcraft pack -v
```

You should now have a Charm file named `vanillaframework-io_ubuntu-22.04_amd64.charm` in the `/vanilla-framework/charm` directory.

### Deploying the Charm with Juju

You should already have a rock file in `vanilla-framework`, following completion of the [Rockcraft setup](#rockcraft).
If not, please install Rockcraft on your local machine (**not on Multipass**) and create the rock as described above.
This is because the Multipass instance does not have write access to the host filesystem, so it cannot pack the rock directly.

Set up Rockcraft inside the Multipass instance and push the rock to the microk8s registry.

```bash
sudo snap install rockcraft --classic
rockcraft.skopeo --insecure-policy copy --dest-tls-verify=false oci-archive:../vanillaframework-io_0.1_amd64.rock docker://localhost:32000/vanillaframework-io:latest
```

Add a testing Juju model:

```bash
juju add-model test
```

Copy the charm from the mounted directory to the multipass instance.

Finally, deploy the charm:

```bash
juju deploy ./*.charm --resource flask-app-image=localhost:32000/vanillaframework-io:latest
```

You can monitor the status of the deployment with:

```bash
juju status --watch 1s
```

The above command will also display the address of the application, within the Multipass instance.
You can use this to verify the site is served correctly.

The simplest way to check this is with `curl`:

```bash
curl {IP_OF_CHARMHUB_IO_UNIT}:8000
```

For more advanced verification, you can add a webserver integrator like `nginx-ingress-integrator` to expose the application to your host:

```bash
juju deploy nginx-ingress-integrator --channel=latest/stable --trust
juju integrate nginx-ingress-integrator vanillaframework-io
juju config nginx-ingress-integrator service-hostname=vanilla.local path-routes=/
```

Then, on your host machine, get the IP of the Multipass instance and add it to your `/etc/hosts` file:

```bash
multipass ls
echo "{IP_OF_VM} vanilla.local" | sudo tee -a /etc/hosts
```

You should now be able to access the site at `http://vanilla.local`.
