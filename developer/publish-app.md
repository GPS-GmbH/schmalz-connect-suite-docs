# Publish an App

Once your app is ready and available via a registry, you need to publish your app to our app-store.
The Sicon App-Store stores only meta data needed to map which app has its image located on which registry.

Once the mapping is done, your IoT Gateway can install the app.

::: warning Work in Progress
This is a manual process right now.
It is explained below
:::

With your credentials, you can login to the [app-store](https://app-store.exa.sicon.io).

## Register the app with the App-Store

Send a JSON file with your settings to [martin.muzatko@gps-stuttgart.de](mailto:martin.muzatko@gps-stuttgart.de?subject=Sicon%20App-Store%20Registration).

You can download [the template here](/app-template.json).

### App JSON Schema

Fields marked with `*` are mandatory.

``` json
{
    "name": "VIEW", - * Name to be displayed in the App-Store
    "dockerImage": "sicon/cockpit", - * docker image vendor + app-name namespace
    "integration": { - * as described in previous page
        "server": true,
        "client": false,
        "service": false
    },
    "runType": "extend", - extend or replace, extend also gives ENV variables to access APIs
    "runSettings": { - See https://docs.docker.com/engine/api/v1.40/#operation/ContainerCreate
        "Env": [
            "PORT=80"
        ]
    },
    "price": 150, - not used yet
    "description": "Read device data and listen to events", - displayed in app-store, can contain markdown
    "iconFallback": "power", - pictogram shown in sidebar - pick from https://material.io/tools/icons
    "allowedSerials": [ 1000101 ], - an array of serial numbers that are allowed to see and download app
    "public": true, - controls whether the app is shown or not
    "pictures": [ - array of pictures for previews of the app - first one is used in app-store as picture

    ],
    "icon": null, - picture of the app icon, not used yet
    "channels": [ - * choose which stability levels your app is deployed with
        {
            "maturity": "stable",
            "app": 1
        },
        {
            "maturity": "beta",
            "app": 1
        },
        {
            "maturity": "alpha",
            "app": 1
        }
    ],
    "author": {
        "username": "sicon", *
        "email": "martin.muzatko@gps-stuttgart.de", *
        "defaultRegistry": 1 - ID of the registry that is used by default for new apps
    },
    "registry": {
        "id": 1,
        "name": "Sicon", - just for identification
        "username": "acr-read", - * make sure to use a read-only user
        "password": "1234", - * plain text, needed for IoT Gateway to download the images
        "url": "https://sicon.azurecr.io" *
    }
}

```

Once that is set up, you can start notifying the app-store of new versions.

See next page: [Deploy App](./deploy-app.md)

UI Preview

![](/app-store.png)

