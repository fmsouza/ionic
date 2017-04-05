# Rio Bus hybrid android app

This is RioBus' geolocation app built with Ionic 2 + TypeScript + Karma

## Table of Contents
 - [Install Node.js](#install-nodejs)
 - [Getting Started](#getting-started)
 - [Run in browser](#run-in-browser)
 - [Run in Android](#run-in-android)
 - [Run in iOS](#run-in-ios)
 - [Run Unit Tests](#run-unit-tests)
 - [Contribute](#contribute)
 - [Acknowledges](#acknowledges)

## Install Node.js
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh | bash # Mac or linux, follow the instructions
nvm install stable
```

## Getting Started

* Clone this repository.
* Install the ionic CLI and Cordova CLI (`npm install -g ionic cordova`)
* Run `npm install` from the project root.
* Run `npm start` in a terminal from the project root.
* Profit.

**Note:** Is your build slow? Update `npm` to 3.x: `npm install -g npm`.

## Run in browser
```bash
npm start         # deploys the the browser
```

## Run in Android
```bash
# make sure the Android device is connected and available to ADB

npm run android   # deploys the app to an Android device or emulator
```

## Run in iOS
```bash
# make sure the iOS device is connected

npm run ios       # deploys the app to an iOS device or simulator
```

## Run Unit Tests
```bash
npm test          # run unit tests
```

## Contribute
Issues and PRs are welcome, see the [issues list](https://github.com/riobus/ionic/issues).

## Acknowledges

* This project started from [@fmosuza's ionic2 seed](https://github.com/fmsouza/ionic2-seed)
