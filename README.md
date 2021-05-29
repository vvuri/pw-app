# Playwright for Angular with Material

## Documentation
    https://angular.io/
    https://material.angular.io/
    
- Install:
```sh
$ npm install -g @angular/cli   
  -> @angular/cli@12.0.0
```
- Create App Angular:
```sh
$ ng new pw-app
$ cd .\pw-app\
```
- Add Material to project
``` 
$ ng add @angular/material 
```

## Run Angular server and Tests
```sh
$ ng serve --open
  -> http://localhost:4200/
```

## Configure
- strictPropertyInitialization - false in tsconfig.json - TS2564 Property has no initializer 

// Playwright Tests 


Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng e2e` to execute the end-to-end tests via a platform of your choice.
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Git
```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/vvuri/pw-app.git
git push -u origin main
```