# User Directory

A responsive user directory built with **HTML5, CSS3, Bootstrap 5, and JavaScript**. This project fetches user data from the JSONPlaceholder API and displays it as interactive profile cards. Each card links to a dedicated profile page where additional user information is loaded dynamically using URL parameters.

> **Note:** This project uses the free JSONPlaceholder API . User images are stored locally and mapped to each user using their ID.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Project Files](#project-files)
- [How It Works](#how-it-works)
  - [Home Page](#home-page)
  - [Profile Page](#profile-page)
- [API Endpoint](#api-endpoint)
- [Error Handling](#error-handling)
- [Responsive Design](#responsive-design)
- [Resources](#resources)


## Live Demo

Click the preview image below to visit the live interactive demo:

[![User Directory Live Webpage Preview](./assets/user-directory-laptop-view.png)](https://hadiashah01.github.io/the-kitchen-garden/)


👉 **[Click here to view all device previews](preview-images.md)**

## Features

- Fetches user data using the Fetch API
- Displays users as responsive profile cards
- Individual profile page for every user
- Dynamic routing using URL query parameters
- Loading indicator while data is being fetched
- Error handling using `try...catch`
- Responsive layout for desktop and mobile devices
- Bootstrap components with custom CSS styling


## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6+)
- Fetch API
- JSONPlaceholder API


## Project Structure

```text
user-directory/
│
├── assets/
│   ├── profile-img-1.png
│   ├── profile-img-2.png
│   └── ...
│
├── index.html
├── script.js
├── style.css
│
├── profile.html
├── profile.script.js
├── profile.style.css
│
└── README.md
```

## Project Files

| File | Description |
|------|-------------|
| [`index.html`](https://github.com/hadiashah01/api-data-display/blob/main/index.html) | Home page displaying all user cards |
| [`style.css`](https://github.com/hadiashah01/api-data-display/blob/main/style.css) | Styles for the user directory page |
| [`script.js`](https://github.com/hadiashah01/api-data-display/blob/main/script.js) | Fetches user data and renders user cards |
| [`profile.html`](https://github.com/hadiashah01/api-data-display/blob/main/profile.html) | Individual user profile page |
| [`profile.style.css`](https://github.com/hadiashah01/api-data-display/blob/main/profile.style.css) | Styles for the profile page |
| [`profile.script.js`](https://github.com/hadiashah01/api-data-display/blob/main/profile.script.js) | Fetches and displays individual user details |

## How It Works

### Home Page

- Requests user data from the JSONPlaceholder API.
- Displays a loading message while fetching data.
- Generates user cards dynamically using JavaScript.
- Each card includes:
  - Profile image
  - Name
  - Email
  - City
  - Website
  - View Profile button

### Profile Page

- Reads the selected user's ID from the URL.
- Fetches only that user's data.
- Displays:
  - Profile image
  - Name
  - Company catchphrase
  - Username
  - Email
  - City
  - Zip Code
  - Phone
  - Website
  - Company name


## API Endpoint

```text
https://jsonplaceholder.typicode.com/users
```

User profile:

```text
https://jsonplaceholder.typicode.com/users/{id}
```


## Error Handling

The project uses `try...catch` blocks to handle API request failures. If the request fails, a user-friendly error message is displayed instead of breaking the interface.


## Responsive Design

The layout adapts to different screen sizes using:

- Flexbox
- Media Queries
- Bootstrap utility classes


## Resources

| Resource | Link |
|----------|------|
| JSONPlaceholder API | https://jsonplaceholder.typicode.com/ |
| Bootstrap 5 | https://getbootstrap.com/docs/5.3/ |
| Fetch API | https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API |
| URLSearchParams | https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams |
