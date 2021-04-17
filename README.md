# Screw the Review: Taste Something New
CSE 403: Software Engineering  
University of Washington  

&nbsp;  

**Team Members & Roles**
1. Luke LeVasseur (Backend Developer, Documentation Co-Lead)
2. Mackenzie Leach (Frontend Developer, Documentation Co-Lead)
3. Josh Sherbrooke (Developer)
4. LuLu Pinczower (Full-Stack Developer, 3rd Party Data Lead)
5. Rachel Ye (Full-Stack Developer) 

&nbsp;  

## Screw the Review: Overview
Screw the Review seeks to provide the user with new experiences by randomly generating a location or activity based on their designated preferences and filters. We refer to the random generation as an “experience” throughout this document. The user will provide some information regarding the type of activity or experience they are seeking in the form of filters and will be provided a random experience that fits those constraints. These constraints may include price, location and type of experience. The user will also have the ability to generate a completely random experience with no filters or have an experience tailored to them based on their previous experiences, interests and dislikes. Screw the Review will be offered as a web-application with support for both desktop and mobile phone users.

&nbsp;  

## Technical Approach
To successfully develop this application, it requires access to a large dataset containing experiences such as restaurants, bars, parks and more. The Yelp Fusion API contains information about businesses to be used in the pseudo-random experience recommendation. As is best practice, the application will make calls to the Yelp Fusion API for each search that is performed in the generation of a random experience. For example, if a user requests their experience to be a restaurant with Chinese cuisine, we will call the Yelp Fusion API with these filters and randomly select from the results returned to present the user with an experience. We make the assumption that the data for experiences provided by the Yelp API is current and frequently updated. Postman is a free application that provides the ability to explore the YelpAPI and track HTTP requests during development. 

&nbsp;  

These links provide more information about what the API offers for different types of requests made to the Yelp Fusion API. 
  * [Yelp Fusion API: Business Search Endpoint](https://www.yelp.com/developers/documentation/v3/business_search)
  * [Yelp Fusion API: Event Search Endpoint](https://www.yelp.com/developers/documentation/v3/event_search)
  * [Yelp Fusion API: Event Endpoint](https://www.yelp.com/developers/documentation/v3/event)

&nbsp;  

For the backend of this application, we will be supporting a user model that allows a user to view their experience history. To support this, we will implement a MySQL relational database to store information about a user and their experiences. Additionally, the Yelp API provides libraries to interface with Node.js, which is the language the backend will be developed in. In terms of the frontend development, React provides modularity of sites with its component-driven model. This application would be hosted fully through Google Cloud, which also provides a free, publicly accessible URL for users. It is likely we will utilize a service such as TinyURL to provide a shorter and more descriptive URL to users at no cost. 

&nbsp;  

## Repository Layout
