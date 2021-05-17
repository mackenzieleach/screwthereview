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


## User and Developer Guides
Under the Wikis for this repository, we offer two important guides:
1. **[Developer Guide](https://github.com/mackenzieleach/screwthereview/wiki/Screw-the-Review:-Developer-Guide-(Client)):** The developer guide is intended for those who would like to contribute to the code base for this project. The guide contains information about the repository structure, how to obtain the source code, how to run, build and test the system and how to build a new release. 
2. **[User Guide](https://github.com/mackenzieleach/screwthereview/wiki/Screw-the-Review:-User-Guide):** The user guide is intended for those who would like to utilize the Screw the Review application. It describes more about Screw the Review, how to use the features on the website, how to report bugs and where to find the currently known bugs in the software

&nbsp; 
