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

## Screw the Review: Overview
Screw the Review is a web application designed to provide the user with new experiences by randomly generating an activity based on their preferences and filters. We refer to the random generation as an “experience” throughout this document. The user may provide some information regarding the type of experience they are seeking in the form of filters and will be provided a random experience that fits those constraints. These constraints may include price, location and type of experience. The user will also have the ability to generate a completely random experience with no filters or have an experience tailored to them based on their previous experiences, interests and dislikes. Screw the Review will be offered as a web-application with support for both desktop and mobile phone users.

&nbsp;  

## Quick Start Guide
The following guide provides information on how to build, run and test Screw the Review from your local machine! After completing this guide, you be able to run all tests in the repository and deploy the website to http://localhost:3000/ from your computer. If you chose, you will also be able to spin up a local server <https://github.com/luuuk/screwthereview-server>, although this is not necessary to interact with the client code in this repository. 

&nbsp;

Please note that the user and developer guides referenced here are still under development and will be available on May 18, 2021. If you are interested in contributing to the code base, the developer guide contains information on how to get started with development, add tests, create pull requests and best practices for coding. 

&nbsp;

### Prerequisites
In order to complete the sections in this quick start guide, there are three prerequisites that must be completed. 

**Create a Github Account:** If you do not have a Github Account, you will need to create one to be able to clone the repository. Navigate to <https://github.com/> and create a repository. You will want to save your username and password as these will be needed later in cloning a repository. 

&nbsp;

**Clone the Repository:** You will need to clone the repository to your local machine. Open the command line and change to the directory you would like the repository code to be placed in. Once in the directory, run the command:

``` *.sh
git clone https://github.com/mackenzieleach/screwthereview.git
```
&nbsp;

If this is your first time cloning a repository from Github, you will be prompted to enter your username and password before proceeding. 

&nbsp;

**Install Yarn:** Yarn is the package manager used for the code in the application. Running the following command will install all dependencies listed in the package.json file that will be needed for development.

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


## Technical Approach
To successfully develop this application, it requires access to a large dataset containing experiences such as restaurants, bars, parks and more. The Yelp Fusion API contains recommedations for businesses to be used in the pseudo-random experience recommendation. The application will make calls to the Yelp Fusion API for each search that is performed in the generation of a random experience. For example, if a user requests their experience to be a restaurant with Chinese cuisine, we will call the Yelp Fusion API with these filters and randomly select from the results returned to present the user with an experience. We make the assumption that the data for experiences provided by the Yelp API is current and frequently updated.

&nbsp;  

These links provide more information about what the API offers for different types of requests made to the Yelp Fusion API. 
  * [Yelp Fusion API: Business Search Endpoint](https://www.yelp.com/developers/documentation/v3/business_search)
  * [Yelp Fusion API: Event Search Endpoint](https://www.yelp.com/developers/documentation/v3/event_search)
  * [Yelp Fusion API: Event Endpoint](https://www.yelp.com/developers/documentation/v3/event)

&nbsp;  

For the backend of this application, we will be supporting a user model that allows a user to view their experience history and is extensible to post-MVP features, like social networking. To support this, we will implement a MySQL relational database to store information about a user and their experiences. Additionally, the Yelp API provides libraries to interface with Node.js, which is the language the backend will be developed in. In terms of the frontend development, React provides modularity of sites with its component-driven model. This application would be hosted fully through Google Cloud, which also provides a free, publicly accessible URL for users. It is likely we will utilize a service such as TinyURL to provide a shorter and more descriptive URL to users at no cost. 

&nbsp;  

In the development of this application, we plan to utilize a user model. This will require an application user to provide their email address and a password to access their account and viewing history. The main risk this poses is security as it is crucial to keep this sensitive information private. To mitigate the security risks that come with a user model for this application, we will be using Auth0, which is a free authentication and authorization platform that can be used with any language or framework. All sensitive user data is hosted via their secure platform, providing security for sensitive user data like passwords. Additionally, it offers the ability to configure what rules and access to data users have after they have been authenticated, allowing us to better customize security for our application. 

&nbsp;  

## Repository Layout
This section provides more details about each component of our repository.   
  - **Images:** This directory contains images that will be used on the Screw the Review website. It currently includes our logo and custom headers for each page of the website on a transparent background for rendering.   
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

