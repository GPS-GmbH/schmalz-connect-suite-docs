# Creating an App

Within the Sicon platform, you have different integration possibilities.
All of the time, you will create a docker image that contains your environment.

There are several levels of how tightly integrated your app is. These can be combined as defined below.

## Types of Integration

* Service
* Server
* Client

### Service

This container provides services like OPCUA, MQTT or similar. In the case, you want to expose the data for use in another protocol, or provide the data to cloud providers.

Containers can open ports, as long as they are not used by other services already.

Configuration

### Server

Can provide a webserver on port `80` to show a website for e.g. custom visualization.
Our reverse proxy picks the app up and serves it with `/server/` and your [docker namespace](#docker-namespace).
For example: `https://siconos.local/server/sicon/view`

Additionally, your web view will be embedded as iframe with our navigation around on this address:

Example: `https://siconos.local/apps/sicon/view`

#### Limitations

Iframes are limited in its capability to route to other pages or its own subpages. If you are providing subpages, a page refresh will lead you to the homepage again.
Also, from within the iframe, you are not able to e.g. link to a system page or other app, unless you use another iframe.

#### Query Parameters

There are a few query parameters to control the behavior of the layout and or communicate with the iframe.
This can be used embed your dashboard

* `?frameless` - hide the layout
* `?path` - path to webserver in iframe, for e.g. initial load


### Client - Work in Progress

A client-app is a tightly integrated front-end application that has access to the in-built components and API functions. There is no need to write extra wrappers.

E.g. `https://siconstratos.local/apps/gps/view`

::: tip Work in Progress
This integration mode is not available yet. We will update the documentation, once this is ready for developers.
:::

## Build and Deployment

Your app has to be deployed to a docker registry of your choice.

### Docker Namespace

Your docker image should be named with the following convention:

`<registry>/<vendor>/<app-name>`

Example: `myregistry.azurecr.com/gps/view`

Throughout the App-Store, `vendor` and `app-name` has to be unique.
This will be checked when [registering the app in the app-store](./publish-app.md).

