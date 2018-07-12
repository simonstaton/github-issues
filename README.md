#@TODO
- Implement client side caching of data via localStorage
- Implement issue details page
- Implement redux + sagas to handle server side async requests
- Winston logs
- Unit + E2E Tests
- JSDOC

#Installation
```
brew install memcached
npm install --global lerna
lerna bootstrap
```

#Development
```
memcached -p 11211
lerna run dev --stream --concurrency --parallel
```

#Production
```
lerna run build
lerna run serve
```

#Tests
```
@TODO
```
