
# mern-api-server

This repo is taken from the MERN starter kit and written in a way that separates the server side rendering from the api handling on the server side. The Api server is created as a separate repo. 

The purpose of separating the code this way is that the api server does not have to switch out of api handling to render pages for the client. This would help improve overall performance on the server side. 

All credit for the original MERN codebase goes to the Hashnode team for writing it. 

I have just separated out the code from the original MERN kit to provide an example of how it can be done.

If you are interested to LERN ( learn ;) about MERN, it's an awesome 
scaffolding tool which makes it easy to build isomorphic apps using Mongo, Express, React and NodeJS.
It minimizes the setup time and gets you up to speed using proven technologies.

For more reference on it, please read the following


- [Website](http://mern.io)
- [Documentation](http://mern.io/documentation.html)
- [Discussions](https://hashnode.com/n/mern)

## Quickstart

```
  npm install 
  npm start
```

**Note : In order to make this fully work you will need to have your MongoDB running, 
followed by running this mern-api-server.
Please make sure your MongoDB is running and cross-env is installed globally before running `npm start`.

** For MongoDB installation guide see [this](https://docs.mongodb.org/v3.0/installation/).

** The client repo is available at [mern-without-api-server](https://github.com/sudhamab/mern-without-api-server) which you can run once you have the api server
running.

