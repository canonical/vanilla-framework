# Charm for the vanillaframework.io website

This charm deploys the Vanilla Framework as a [12-factor app](https://canonical-12-factor-app-support.readthedocs-hosted.com/latest/)
using the [PAAS Charm](https://github.com/canonical/paas-charm) on Kubernetes.
The PAAS Charm is our web team's standard practice for deploying a Flask 12-factor app.
It pulls Python dependencies and runs Flask with minimal extra configuration.

## Prerequisites

Before you begin, ensure you have:

- [Docker](https://docs.docker.com/get-docker/) installed
- At least 8GB RAM and 100GB disk space available
- A Linux system. Ubuntu 22.04 or later is recommended.

## Quick Start

1. **Build the rock** (see [Rockcraft section](#rockcraft))
2. **Set up development environment** (see [Charm Development section](#charm-development))
3. **Deploy the charm** (see [Deploying the Charm section](#deploying-the-charm))

---

## Rockcraft

The first stage of building this charm is to create a rock using [rockcraft](https://documentation.ubuntu.com/rockcraft).

### Host Machine Commands

```bash
# Install rockcraft
sudo snap install rockcraft --classic

# Pull rock dependencies and pack the rock
rockcraft pack

# Push the rock to your local docker registry
rockcraft.skopeo --insecure-policy copy oci-archive:./vanillaframework-io_0.1_amd64.rock docker-daemon:vanillaframework-io:latest
```

This will pack the application into a [rock](https://documentation.ubuntu.com/rockcraft/en/latest/explanation/rocks/) (OCI image) and upload it to the local registry.

### Local Testing

You can run the rock as a docker image locally with:

```bash
sudo docker run -p 8080:8000 --env-file .env -ti vanillaframework-io:latest
```

The site should now be live at http://127.0.0.1:8080.

> **Note:** The app will be served at port 8000 within the OCI container, **regardless of environment variables**. The [flask-framework extension](https://documentation.ubuntu.com/rockcraft/en/latest/reference/extensions/flask-framework/#flask-framework) always exposes port 8000.

---

## Charm Development

This site is deployed using the [PAAS Charm](https://github.com/canonical/paas-charm).

### Setting Up the Development Environment

#### 1. Create Multipass Instance

```bash
# Install Multipass (if not already installed)
sudo snap install multipass

# Create a Multipass instance
multipass launch --name juju-dev-env --cpus 4 --memory 8G --disk=100G
```

#### 2. Mount Project Directory

Mount a host directory containing the charm code to the Multipass instance. This allows the instance to access the charm code.

```bash
# Ensure you're in the vanilla-framework root directory
cd /path/to/vanilla-framework

# Mount the directory to Multipass
multipass mount --type=classic $(pwd) juju-dev-env:/home/ubuntu/vanilla-framework
```

#### 3. Set Up Kubernetes Environment

Open a shell in the Multipass instance:

```bash
# Open a shell in the instance
multipass shell juju-dev-env
```

Install and configure microk8s and Juju:

```bash
# Install microk8s and Juju
sudo snap install microk8s --classic
sudo snap install juju

# Set up kubectl alias
alias kubectl="microk8s kubectl"

# Add user to microk8s group
sudo usermod -a -G microk8s $USER

# Reload the group membership
newgrp microk8s

# Wait for microk8s to be ready
microk8s status --wait-ready

# Ensure the user has access to the microk8s config
sudo chown -R ubuntu ~/.kube

# Enable required microk8s addons
microk8s enable hostpath-storage  # Required for Juju storage volumes
microk8s enable registry          # Required to host the OCI image
microk8s enable ingress           # Required to expose the application

# Grant Juju access to K8s config
sudo mkdir -p /var/snap/juju/current/microk8s/credentials
microk8s config | sudo tee /var/snap/juju/current/microk8s/credentials/client.config
sudo chown -R $USER:$USER /var/snap/juju/current/microk8s/credentials

# Bootstrap Juju
juju bootstrap microk8s local-k8s
```

### Building the Charm

```bash
# Install charmcraft
sudo snap install charmcraft --channel latest/stable --classic

# Navigate to the mounted Vanilla directory
cd ~/vanilla-framework

# Create and navigate to charm directory
mkdir -p charm && cd charm

# Initialize Charmcraft (use --force if directory already exists)
charmcraft init --profile flask-framework --name vanillaframework-io --force

# Fetch charm libraries
charmcraft fetch-libs

# Build the charm. This may take a few minutes the first time you run it.
charmcraft pack -v
```

You should now have a Charm file named `vanillaframework-io_ubuntu-22.04_amd64.charm` in the `/vanilla-framework/charm` directory.

---

## Deploying the Charm

### Prerequisites

You should already have a rock file in the `vanilla-framework` root directory, following completion of the [Rockcraft setup](#rockcraft). If not, please install Rockcraft on your local machine (**not on Multipass**, as it will not have permissions to write the rock to your mounted host filesystem) and create the rock as described above.

### Push Rock to Registry

From within the Multipass instance:

```bash
# Install rockcraft in Multipass
sudo snap install rockcraft --classic

# Push the rock to the microk8s registry
rockcraft.skopeo --insecure-policy copy --dest-tls-verify=false oci-archive:../vanillaframework-io_0.1_amd64.rock docker://localhost:32000/vanillaframework-io:latest
```

### Deploy the Application

```bash
# Acts as a project wrapper, name can be anything
juju add-model vanillaframework

# Deploy the charm. Note that you must use `flask-app-image`, not `app-image`, as the resource identifier, and the resource name must map exactly to the image name that was pushed to the registry.
juju deploy ./*.charm --resource flask-app-image=localhost:32000/vanillaframework-io:latest
```

### Monitor Deployment

```bash
# Watch the deployment status. It will usually be ready in ~10 seconds or less.
juju status --watch 1s
```

The above command will display the address of the application within the Multipass instance.

### Verify Deployment

Test the deployment with curl:

```bash
curl {IP_OF_CHARMHUB_IO_UNIT}:8000
```

### Expose to Host (Optional)

For more advanced verification, you can add an nginx integrator to expose the application to your host:

```bash
# Deploy nginx integrator
juju deploy nginx-ingress-integrator --channel=latest/stable --trust

# Integrate with the application
juju integrate nginx-ingress-integrator vanillaframework-io

# Configure the service
juju config nginx-ingress-integrator service-hostname=vanilla.local path-routes=/
```

Then, on your host machine, add the Multipass IP to your hosts file:

```bash
# The IP of multipass vm can be retrieved with `multipass ls`.
# Or, a one-liner would give
IP_OF_VM="$(multipass ls | grep 'juju-dev-env' | awk '{print $3}')"
# Adding it to the hosts file
echo "$IP_OF_VM vanilla.local" | sudo tee -a /etc/hosts
```

You should now be able to access the site at `http://vanilla.local`.

---

## Additional Resources

- [Rockcraft Documentation](https://documentation.ubuntu.com/rockcraft)
- [Charmcraft Documentation](https://canonical-charmcraft.readthedocs-hosted.com/stable/)
- [Juju Documentation](https://juju.is/docs)
- [PAAS Charm Repository](https://github.com/canonical/paas-charm)
