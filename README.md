### Project Description
This project uses React, Redux, and React Router to build a web page that displays search results from [OMDB](http://omdbapi.com/). The web page sends the search term to the backend express server, which then determines whether it has already made that search within the last week, and then either sends back cached data or makes a request to the OMDB api.

Currently the cache is just an in memory object on the server, but it wouldn't be too much extra work to use mongodb or something instead.

This project was made as my last assignment before the final group project at [@SanDiegoCodeSchool](https://github.com/SanDiegoCodeSchool)

#### Setup:
You can download this project with `git clone https://github.com/Z4rkal/react200-movie-finder`.
Then you need to enter the project folder and download the dependencies with `npm install`.

The express server needs an OMDB api key to function, so you'll need to add it to your environment variables or export it from a config.js file in the server folder

Once everything is set up you can use `npm start` to launch the app.

The server listens on port 3000, so you can access the web page it serves at `localhost:3000`.