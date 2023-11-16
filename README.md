# Photolabs
This is my PhotoLabs project for the Lighthouse Labs Web Development Flex Program.  In this project, we explored building a full-stack web application using React and PostgreSQL, with a focus on front-end React integration. This created a simple one-page app that allows users to look at a gallery of images and open them in a modal to view a larger version and similar images. The app also allows users to favorite their enjoyed images by clicking the heart ❤️ icon, and choose choose between different photo topics in the navication bar. 

## Final Product
Main Gallery
!["Screenshot of PhotoLabs Gallery"](https://github.com/icornell/photolabs-starter/blob/main/docs/photolabs_main.png?raw=true)
Collate Favourites by clicking the heart ❤️ icon and see the notification that you have saved favorites in the navigation bar. 

!["Screenshot of PhotoLabs Gallery Favourites"](https://github.com/icornell/photolabs-starter/blob/main/docs/photolabs_favourites.png?raw=true)

Open a Modal and see a larger version of the image alongside similar images.
!["Screenshot of PhotoLabs Gallery Modal"](https://github.com/icornell/photolabs-starter/blob/main/docs/photolabs_modal.png?raw=true)

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Server

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
### Testing Note: 
You may need to install a very specific version of react-test-renderer to match the version of react and react-dom in the project. If you run into issues with testing, try running `npm install react-test-renderer@^18.2.0` in the frontend directory.


