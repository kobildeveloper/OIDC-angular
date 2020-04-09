# mIDentityOne - Implicit Flow using AngularJS

This repo contains AngularJS example app that demonstrate the various OpenId Connect's Implicit flow.

## Instructions
1. Initially clone this repository
2. RUN `npm install` and wait for the completion of installation on `node_modules`
3. Once `node_modules` are installed and RUN `npm run start` to start execution of `ng serve`. Because `ng serve` command builds your app and serves it locally
4. Once the app is compiled successfully, Go to browser and open `http://localhost:4200` you will be automatically redirected to `http://localhost:4200/auth`

**Note:** Before getting started to run angular app, Please make sure the port number `4200` is empty. Because `4200` is the default port for angular app

## Approach to work with the implicit flow
1. Click on "login" button
2. You will be redirected to "mIDentityOne" user authentication screen
3. Type username and password, then click "Continue to login"
4. Once user is authentication with proper credentials
5. You will receive a transaction in your mIDentityOne app
6. You can able to "Accept/Decline" the transaction request
7. By accepting the transaction from mobile app, you can able to authorize your login
8. Finally you will be redirected to `http://localhost:4200/auth` and there you will be able to see `Name` of the authenticated user

## What can I use these for
OpenId Connect is a great way to add user authentication to your application where you are depending on another party to manage the user identities.

In this case mIDentity One can manage the identity of your users making it faster to get up and running.

## Single Sign On (SSO)
By implementing OpenId Connect via mIDentity One you are creating a session which can be used to single sign on from your custom app into other apps that your users may have access to via the mIDentity One portal

## MFA
If MFA is enabled for a user in mIDentity One then they will be prompted to enter a token during the authentication. mIDentity One takes care of all of this for you, making strong authentication much easier to implement in your app.

## Requirements
In order to run any of the examples you will need to create an OpenId Connect app in mIDentity One Admin portal.

### Mobile App
1. [Android app](https://play.google.com/store/apps/details?id=com.kobil.mIdentity)
2. [iOS App](https://apps.apple.com/us/app/midentity/id1474814314)


If you don't have a mIDentity One account [you can sign up here](https://midentity.one/selfenrollment).