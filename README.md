# NET JS
NET JS is a web framework base on Express Js in MVC Pattern with Typescript

**1. Setup Enviroment**

+ Install Typescript and Typescript Node on your machine

   ``` 
   
      npm install -g typescript ts-node 
      
   ```
   
+ Init project and install **typescript definitions for express**(@types/express), **express** and **body parsing middleware**(body-parser)

  ```
  
    cd ../your-project-dir
    npm init
    npm install -s @types/express express body-parser
    
  ```
  
+ Install nodemon for monitoring any changes in your application(auto restart the server when any code changes). **This step is optional**

  ```
  
    npm install -s nodemon
    
  ```
  
+ Configure the Typescript configuration file

  ```
  
    {
        "compilerOptions": {
            "module": "commonjs",
            "moduleResolution": "node",
            "pretty": true,
            "sourceMap": true,
            "target": "es6",
            "outDir": "./dist",
            "baseUrl": "./lib"
        },
        "include": [
            "lib/**/*.ts"
        ],
        "exclude": [
            "node_modules"
        ]
    }
    
  ```
  
+ Edit running scripts in package.json

  ```
  
    "scripts": {
        "build": "tsc",
        "dev": "ts-node ./lib/server.ts",        
        "start": "nodemon ./dist/server.js",
        "prod": "npm run build && npm run start"
    }
    
  ```
  
    + Run Server for Dev
    
  ```
    npm run dev
  ```
  
    + Run Server for Production

    ```
      npm run prod
    ```
