# Charm for the vanillaframework.io website

## Local development

To work on this charm locally, you first need to set up an environment, follow [this section](https://juju.is/docs/sdk/write-your-first-kubernetes-charm-for-a-flask-app#heading--set-things-up) of the tutorial.

Then, you can run the following command to pack and upload the rock:

```bash
# Pull rock dependencies and pack the rock.
rockcraft pack
# Push the rock to your local docker registry. This will allow you to pull and run it with `docker run` in later steps.
rockcraft.skopeo --insecure-policy copy oci-archive:./vanillaframework-io_0.1_amd64.rock docker-daemon:vanillaframework-io:latest
```

This will pack the application into a [rock](https://documentation.ubuntu.com/rockcraft/en/latest/explanation/rocks/) (OCI image) and upload it to the local registry.

You can run the rock as a docker image locally with:

```bash
sudo docker run -d -p 8080:8000 --env-file .env -ti vanillaframework-io:latest
```

The site should now be live at http://127.0.0.1:8080.

Please note that the app will be served at port 8000 within the OCI container, **regardless of environment variables**.
The [flask-framework extension](https://documentation.ubuntu.com/rockcraft/en/latest/reference/extensions/flask-framework/#flask-framework)
always exposes port 8000.

## TODO

Details on building and running the Charm will be added in separate pull requests.
