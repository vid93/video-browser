# Video Browser

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Description

Video Browser is the application that holds a collection of several videos and retrieves a list of those that match the search terms. It allows playing those videos on it's video player as well.
Videos in this application are retrieved from Youtube, so the YouTube API is needed to search videos.
It can be obtained from [console.developers.google.com](https://console.developers.google.com/).

## Project Components

- App - Contains the main logic of the application, holds all states, retrieves videos, stores search terms and currently  selected videos

- Search Bar - Contains form with text field for inputing the search term. Once the "Enter" is pressed search term is set to what user has inserted, also triggers form submit and sends search term to App to do API request

- Video List - Renders the list of videos

- Video Item - Component that shows particular video, first video from the list after load or search and shows video from the list user has clicked on. Shows thumbnail and title of the video

- Video Detail - Shows video player that can play YouTube videos, also shows title and description of video

## Built With

- React
- Semantic UI
- Axios

## Get a local copy

### git clone
Use https://github.com/vid93/video-browser.git

### npm install
Install NPM packages

### npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.