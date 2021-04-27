# Screw the Review: Experience Something New
CSE 403: Software Engineering  
University of Washington  

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
More information about repository structure is forthcoming as we begin development in the coming weeks. 

**Mockups:** This directory offers mock-ups for our landing page, search feature, roulette fearure, about page, experience result page and account page.
**Reports:** This directory contains our team's weekly status reports for the course as well as a status report template. 
**screwthereview**: This folder contains the source code for the application. 
