# Recipe Search Application

This is a modern React-based recipe search application that provides a seamless user experience for finding and viewing recipes. The application features a typeahead/autocomplete search functionality that helps users quickly find recipes based on name or cuisine type. Users can view detailed information about each recipe, including ingredients, instructions, and images.

## Features

- Typeahead/autocomplete search functionality
- Detailed recipe view with images
- Responsive design for all devices
- Debounced search to prevent excessive API calls
- Redux state management
- Lazy loading of components
- Unit tests with >80% coverage

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

First, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/astrodestroyergithub/recipe-app-ui.git
cd recipe-app-ui
```

Then install all dependencies:

```bash
npm install
```

### Core Dependencies

The project uses the following core dependencies:

- `react` (v19.2.0) - Core React library
- `react-dom` (v19.2.0) - React DOM manipulation
- `@reduxjs/toolkit` (v2.9.2) - Redux state management
- `react-redux` (v9.2.0) - React bindings for Redux
- `react-router-dom` (v6.11.2) - Routing
- `axios` (v1.13.1) - HTTP client
- `debounce` (v3.0.0) - Function debouncing
- `sass` (v1.93.3) - SCSS support
- `react-scripts` (v5.0.1) - Create React App scripts
- `web-vitals` (v2.1.4) - Web Vitals measurement
- `@testing-library/dom` (v10.4.1) - DOM testing utilities

You can install any of these dependencies individually using:

```bash
npm install @reduxjs/toolkit
npm install react-redux
npm install react-router-dom
npm install axios
npm install debounce
npm install sass
npm install react-scripts
npm install web-vitals
npm install @testing-library/dom
```

### Development Dependencies

The project uses these development dependencies for testing and development:

- `@testing-library/react` (v16.3.0) - React testing utilities
- `@testing-library/jest-dom` (v6.9.1) - Jest DOM testing utilities
- `@testing-library/user-event` (v14.6.1) - User event simulation
- `jest` (v27.5.1) - Testing framework
- `jest-environment-jsdom` (v30.2.0) - JSDOM environment for Jest
- `redux-mock-store` (v1.5.4) - Mock Redux store for testing
- `redux-thunk` (v3.1.0) - Redux Thunk middleware for async actions

You can install the development dependencies using:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install --save-dev jest jest-environment-jsdom
npm install --save-dev redux-mock-store
npm install --save-dev redux-thunk
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
