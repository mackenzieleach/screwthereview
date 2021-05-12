# Screw the Review: Experience Something New
CSE 403: Software Engineering  
University of Washington  

&nbsp;  

**Screw the Review:** [https://screwthereview.netlify.app/](https://screwthereview.netlify.app/)

&nbsp; 

**Team Members & Roles**
1. Luke LeVasseur (Backend Developer, Documentation Co-Lead)
2. Mackenzie Leach (Frontend Developer, Documentation Co-Lead)
4. LuLu Pinczower (Full-Stack Developer, 3rd Party Data Lead)
5. Rachel Ye (Full-Stack Developer) 

&nbsp;  

## Screw the Review: Overview & Technical Approach
Screw the Review is a web application designed to provide the user with new experiences by generating an experience based on filters. In the Roulette feature, a user spins for a category that is used with location to provide an experience. In the search feature, users can select a keyword, location, price and search radius and an experience is returned matching those filters. The web application is also designed to be mobile-friendly, so users can take the application on-the-go.

&nbsp;  

**Frontend Client:** This application was developed in React. This was selected given its modularity of sites with a component driven model. All testing for the frontend client is written with the standard Jest framework. The web application is hosted through Netlify, a free service for URL deployment. Screw the Review uses the [Yelp Fusion API](https://www.yelp.com/fusion) to access a large dataset containing experiences such as restaurants, bars, parks and more. This application relies on the [Business Search Endpoint](https://www.yelp.com/developers/documentation/v3/business_search) during API calls. We make the assumption that the data for experiences provided by the Yelp API is current and frequently updated. Additionally, users can log in and log out of the website through Auth0, which provides a high level of security. 

&nbsp;  

**Backend Server:** This application uses a server with the repository code located at <https://github.com/luuuk/screwthereview-server/blob/main/src/server.js>. This server allows the Roulette & Search features transmit information to be proccessed by the server. The server returns parsable information that is then rendered to the user in the form of an experience result. 

&nbsp;  

**Stretch Goals & Database:** Before the final release of this application, we will support a user-model. A user will be able to view and edit their account as well as see any experiences they have been presented with in their viewing history. The ability to view and edit a user profile will be managed through Auth0 to ensure security. The data for viewing history will be stored in a relational MySQL database hosted on Microsoft Azure, mapping a user to their experiences. 

&nbsp;  

For more information about this application and technical details, please visit [Screw the Review: Requirements & Team Policies](https://docs.google.com/document/d/1AdpmiG6Gi3a_kvq9dlz2P9KB4OZ5nPvZS9F1-CJdxzk/edit?usp=sharing). 
&nbsp;


## Quick Start Guide
The following guide provides information on how to build, run and test Screw the Review from your local machine! After completing this guide, you be able to run all tests in the repository and deploy the website to http://localhost:3000/ from your computer. If you chose, you will also be able to spin up a local server <https://github.com/luuuk/screwthereview-server>, although this is not necessary to interact with the client code in this repository. 

&nbsp;

Please note that the user and developer guides referenced here are still under development and will be available on May 18, 2021. If you are interested in contributing to the code base, the developer guide contains information on how to get started with development, add tests, create pull requests and best practices for coding. 

&nbsp;

### Prerequisites
In order to complete the sections in this quick start guide, there are a few prerequisites that must be completed. 

**Create a Github Account:** If you do not have a Github Account, you will need to create one to be able to clone the repository. Navigate to <https://github.com/> and create a repository. You will want to save your username and password as these will be needed later in cloning a repository. 

&nbsp;

**Clone the Repository:** You will need to clone the repository to your local machine. Open the command line and change to the directory you would like the repository code to be placed in. Once in the directory, run the command:

``` *.sh
git clone https://github.com/mackenzieleach/screwthereview.git
```
&nbsp;

If this is your first time cloning a repository from Github, you will be prompted to enter your username and password before proceeding. 

&nbsp;

**Install Node.js:** In order to use this application, you will need to have Node installed. You can do this by navigating to <https://nodejs.org/en/download/> and selecting the appropriate installer for your operating system. 

**Install Yarn via NPM:** Running the command `npm install yarn` will add the yarn package manager that is used in this project to install all dependencies.

**Install Dependencies:** Running the following command will install all dependencies listed in the package.json file that will be needed for development.

``` *.sh
yarn install
```

&nbsp; 

For information about yarn's command line interface, visit their documentation: <https://classic.yarnpkg.com/en/docs/cli/>.

&nbsp;

### Server 
Screw the Review has a server with repository code hosted at <https://github.com/luuuk/screwthereview-server>. There are two options
- **Option 1**: You can follow the Quick Start Guide hosted at <https://github.com/luuuk/screwthereview-server> to spin up the server. This is recommended for developers who would like to make changes to the code in the server repository. 
- **Option 2**: You can continue through this guide without creating a local server. The Heroku server runs continually and supports both the official website and development environments with local host. This option is best if you are soley interested in exploring the client code and user interface.

&nbsp;

### Build the System
Building the system can be done directly from the command line using Yarn. Building the project builds production for the app to the `build` folder and optimizes the build. Execute the following command:

``` *.sh
yarn build
```

&nbsp; 

### Test the System
Yarn offers the ability to run Jest via the yarn command line interface. The most common commands to run tests are listed below:  
- Run All Tests: `yarn test`
- Run Specific Test: `yarn test __tests__/my-test.js`

&nbsp;  

There are many options that you can run these tests with. The most common include
- `--debug`: prints debugging information about the Jest configuration.
- `--collectCoverage`: Test coverage information should be collected and reported in the output.
- `--help`: Shows help information about Jest and options
- `--verbose`: Displays individual tests results in the test suite.

For a full list of options and their descriptions, visit <https://jestjs.io/docs/cli#running-from-the-command-line>.

&nbsp; 

### Run the System
At this point, you are ready to deploy the applcation to a web browser using `localhost`. First, you will need to change to the `src` directory of the repository. From this directory run the following:

``` *.sh
yarn start
```
&nbsp;  

The command line will print out any errors or warnings during compliation. If successful, your default web browser will open `http://localhost:3000/` and you will be able to navigate all aspects of the website. If you would prefer to run on another port, you can use the command `PORT=XXXX yarn start` and specify the port number. The application supports being run on ports 3000, 3001 and 3002 in order for Auth0 log in and log out functionality to be supported. This application will automatically compile saved changes and render them on `http://localhost:3000/`.

For more information about how to navigate Screw the Review and its features, please visit the Screw the Review User Guide.

&nbsp; 

### Bug Reporting
If you encounter a bug, you may create a **Github Issue** to report the bug. You issue should include a descriptive title, the exact steps you took to encounter the bug, what operating system and browser you are using, and any applicable screenshots of the bug. 

&nbsp; 

This repository also welcomes pull requests for bug fixes. If you encounter and resolve a bug, you may create a **pull request** with your code. It must include a descriptive title and a description of the specific changes you made and how it resolved the bug. The pull request will be reviewed by a repository maintainer and changes may be requested if needed.


&nbsp; 

## Repository Layout
This section provides more details about each component of our repository. This repository holds the client code for Screw the Review. For more information about the sever repository, please visit <https://github.com/luuuk/screwthereview-server>   
  - **Mockups:** This directory contains our team's official UI Mockups for each page that we will be building for the application. It includes the landing page, search, category wheel, about, account and experience result pages.   
  - **Reports:** This directory contains our team's weekly status reports for the course as well as a status report template.   
  - **__mocks__:** This directory contains files that allow the testing CI to properly handle CSS and JSX formatting.
  - **__tests__:** This directly contains all of the testing files for this application written with the Jest testing framework.    
  - **node_modules:** These provide our build system with vital information about dependencies. These are automatically generated.    
  - **public:** This folder contains the index.html file that allows the React application to be rendered during deployment. It also holds our static category data used in the category wheel features.    
  - **src**: This folder contains all of the backend and frontend UI code. Under the React framework, each feature has its own Node.js class where both backend and frontend code are written. It also currently contains a sample test file, which will likely change and we implement a CI testing framework. 
  - **.babelrc:** This file sets the Babel configurations to allow the testing CI to read files with JSX formatting.
  - **netlify.toml::** This file contains one command that disables deployment on push to limit deployment via webhook only when all tests successfully pass.  
  - **package.json**: This file specifies all of the dependencies that are required and allows them to be automatically built when the website is deployed without manual installation scripts. 
  - **setupJest.js:** This file acts as a configuration for tests that require mocking in Jest. 
  - **yarn.lock:** This file is auto-generated as dependencies are added and should not be edited.

