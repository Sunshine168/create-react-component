# create-react-component

a cli to create react component simply

## feature 
  zero config
  
  includes 
  
  * webpack4 to dev/build package
  * React 16.2
  * babel 
  * eslint 
  * flow for static type check
  * Enzyme and ava for test
 
## usage

```shell
npm install @168496714/create-react-component -g 
```

```shell
create-react-component <project-name>
cd <project-name> 
yarn // or npm install
```

### dev

``` npm run build ```
   
   // default run in 3000 

### build
    
  ```npm run build```
  
  //default entry build/main.js


## structure

├── package.json
├── public            
│   ├── app.js
│   └── index.html
├── server
│   └── index.js
├── src
│   └── index.js     // entry of your component 
├── test
│   ├── helpers
│   └── test.js
├── webpack
│   ├── webpack.dev.js
│   └── webpack.prod.js 


## TODO

* [ ]  configurable, such as eslint , prop-types or flow 

* [ ] smart , such as  dev port tip, npm/yarn  
* [ ] conversion into script
* [ ] more ,waiting you to point me out 
 


