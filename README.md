# Zoom integration with React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a basic project which is focused on the integration of zoom's API and SDK. The main purpose of this project is to show how to use zoom SDK and the services you need from it's API to complement each other.

You can get the backend repo [here](https://github.com/gianmaster/zoom-api-integration-nodejs)

## What you will be able to do?

You will be able to create `fake users`, `meetings` as well as join to `meetings`.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Caveats

If you make any change please take into account you need to have the same version of React.js that zoom SDK has on your project to avoid conflicts with the SDK

### How to test meetings

You can open two browser tabs, one of them as incognito. Then you can go to `join meeting page` then fill in the fields to make it. You can also try joining a meeting from the zoom mobile app to verify that this works.
![image](https://user-images.githubusercontent.com/8931070/109753041-7f4a4880-7baf-11eb-9a9a-977fcfafb38e.png)

### Note

Bear in mind that you will be able use all the modules of this project if you have set the `apiKey` and `apiSecret` of your paid account. Otherwise, you will only be able to create meetings for your zoom user. For more details take a look at the back-end repo.
