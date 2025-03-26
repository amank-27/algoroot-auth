# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To install use 

## git clone url of the repo

and then you can run using:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# React Authentication Dashboard

This is a React-based web application that implements a login/signup system with email and password authentication. After logging in, users are presented with a dashboard featuring a table with mock data, as well as user session management. The dashboard allows for filtering, sorting, and pagination of the displayed data.

## Features

- **User Authentication**: 
  - Allows users to sign up and log in using email and password.
  - Error handling for invalid credentials.
  - User session management using `localStorage` to store user data.
  
- **Dashboard**:
  - A data table is displayed after successful login.
  - The data table supports sorting, searching, and pagination.
  - A sidebar is included, indicating the current page (`Details`).
  
- **Responsive Design**:
  - Fully responsive design for both desktop and mobile devices.

- **User Account Management**:
  - Option for users to log out, which clears the session data from `localStorage`.
  - Option for users to delete their account (removes user data from `localStorage`).