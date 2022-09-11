# Learn with WebX DAO 🦄

Here you will learn how to become one of the Dapp Developers and collaborate with other people inside of WebXDAO. We gather content about Blockchain developers. You don't need to see all the resources, but choose what content is best for you.

For more information, you can directly ask in our [Discord](https://discord.gg/TSRwqx4K2v) community.

## Work on the documentation:

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and pushing to the `gh-pages` branch.
