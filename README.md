<div align="center">
  <a href="https://koyeb.com">
    <img src="https://www.koyeb.com/static/images/icons/koyeb.svg" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Koyeb Serverless Platform</h3>
  <p align="center">
    Deploy a Fixie SOCKS proxy on Koyeb
    <br />
    <a href="https://koyeb.com">Learn more about Koyeb</a>
    ·
    <a href="https://koyeb.com/docs">Explore the documentation</a>
    ·
    <a href="https://koyeb.com/tutorials">Discover our tutorials</a>
  </p>
</div>


## About Koyeb and the Fixie SOCKS proxy example application

Koyeb is a developer-friendly serverless platform to deploy apps globally. No-ops, servers, or infrastructure management.  This repository contains a Fixie SOCKS proxy example application you can deploy on the Koyeb serverless platform for testing.

This example application is designed to show how an application can use Fixie to connect to IP-restricted resources via a SOCKS proxy.  The application proxies requests from a local port to [World Clock API](http://worldclockapi.com). This same strategy can be used to connect to remote databases and other resources where you wish to configure IP address based access restrictions.

## Getting Started

Follow the steps below to deploy and run the Fixie SOCKS proxy application on your Koyeb account.

### Requirements

You need a Koyeb account to successfully deploy and run this application. If you don't already have an account, you can sign-up for free [here](https://app.koyeb.com/auth/signup).

You also need a [Fixie account](https://app.usefixie.com/login) with a SOCKS proxy configured.  You will need the **Proxy URL** for your SOCKS proxy.

### Deploy using the Koyeb button

The fastest way to deploy the Fixie SOCKS proxy application is to click the **Deploy to Koyeb** button below.

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&name=fixie-wrench-koyeb-example-app&repository=github.com/koyeb/example-fixie&branch=main&env%5BFIXIE_SOCKS_HOST%5D=CHANGE_ME&ports=3000;http;/)

Clicking on this button brings you to the Koyeb App creation page with everything pre-set to launch this application.  Edit the value of the `FIXIE_SOCKS_HOST` environment variable to match the **Proxy URL** for your SOCKS proxy before deploying.

_To modify this application example, you will need to fork this repository. Checkout the [fork and deploy](#fork-and-deploy-to-koyeb) instructions._

## Fork and deploy to Koyeb

If you want to customize and enhance this application, you need to fork this repository.

If you used the **Deploy to Koyeb** button, you can simply link your service to your forked repository to be able to push changes.  Alternatively, you can manually create the application as described below.

On the [Koyeb Control Panel](https://app.koyeb.com/), on the **Overview** tab, click the **Create Web Service** button to begin.

1. Select **GitHub** as the deployment method.
2. In the repositories list, select the repository you just forked.
3. Select your preferred region and Instance type.
4. In the **Environment variables** section, add a variable named `FIXIE_SOCKS_HOST`.  Set its value to the **Proxy URL** you copied from your Fixie SOCKS proxy page.
5. Choose a name for your Service, i.e `fixie-on-koyeb`, and click **Deploy**.

You will be taken to the deployment page where you can follow the build of the Fixie proxy application. Once the build is completed, your application will be deployed and you will be able to access it via the Koyeb public URL.

## Contributing

If you have any questions, ideas or suggestions regarding this application sample, feel free to open an [issue](https://github.com/koyeb/example-fixie/issues) or fork this repository and open a [pull request](https://github.com/koyeb/example-fixie/pulls).

## Contact

[Koyeb](https://www.koyeb.com) - [@gokoyeb](https://twitter.com/gokoyeb) - [Slack](http://slack.koyeb.com/)
