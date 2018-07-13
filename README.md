# Intro
Mono repo with sub-packages for handling an express.js server, memcache service and isomorphic react application.

I've taken this approach to decouple the client from the server providing better maintanability going forward. All traffic outside of the api is piped through `react-router` to leverage server side rendering in react. Currently the approach to server rendering is primitive and is not bootstrapping reacts state or resolving any async requests on the server. Leveraging redux and redux-sagas would solve this nicely and improve page load performance significantly.

# Improvements
Due to time restrictions I've focussed on delivering an MVP to meet the brief but have detailed my recommendations for a real world scenario.

## State Management
Approach to take would be to implement a state management library such as redux and redux-saga

## Server-side Rendering
This is fairly primitive as it stands the rendering of components are syncronous and any api requests are not resolved on the server meaning react has to do additional rendering and ajax requests on the client.

## API
Currently I've setup an api directly in express which involves having multiple requests on uncached data `Client > Express.js API > Github API` with this sort of design the express api could work as an orchestration layer to handle logging, parameter mutation and caching of data. For now this is only using memcache to store the data and stop multiple requests, for better maintanability I would change this to use a cleaner structure on the keys, something like `github::org::nodejs` instead of the current approach where I'm storing data under the request url.

## Build process
Would have been nice to setup hot module reloading and nodemon for an optimal dev enviroment

## Coding Standards
Have included eslint in the project but inline commenting is missing, ideally I would follow the JSDOC syntax to document my modules inline and provide a more extensive README.md

## Logging
For now I've setup a basic error handling middleware to log errors directly to the console and return a server error to the user, with more time I would setup a logger library such as winston and include error logging inside the react application.

# Installation
```
brew install memcached
npm install --global lerna
lerna bootstrap
```

# Development
```
memcached -p 11211
lerna run dev --stream --concurrency --parallel
```

# Production
```
lerna run build
lerna run serve
```

# Tests
```
@TODO
```
