CIAB
=====================
An Cordova / Ionic / AngularJS / Browserify Mobile App boilerplate for creating hybrid mobile apps

## Requirements
- [cordova](https://cordova.apache.org/)

## Dependencies
- [ionic](http://ionicframework.com)
- [lodash](http://lodash.com)
- [angular](http://angularjs.org)

### Install Cordova
```bash
npm i -g cordova
```

### Clone the repo
```bash
git clone https://github.com/dragosh/cordova-mobile-bp.git my-app
cd my-app
npm i
```

### Creating platform and plugins
default platforms iOS & Android
- com.ionic.keyboard
- console
- device
- dialogs
- inappbrowser
- network-information
- splashscreen
- statusbar
- vibration
- camera

```bash
npm run create
```

### Starting the app
```bash
npm start
```

### Testing the app
```bash
npm test
```

### Run iOS simulator
```bash
npm run ios
```

### Run android
```bash
npm run android
```

### Versioning
bumping
```bash
npm run bump
npm run bump -- --minor
npm run bump -- --major
```

tagging
```bash
npm run tag
```

### Writing markdown files
```bash
npm run md
```

### Clean platforms/plugins
```bash
npm run clean
```

## TODO
- add BDD tests with protractor and cucumber
- add vesioning support for config.xml
- create android release script
- ....
