# Week 7 Status Report
**May 12, 2021**
&nbsp;  

## Team Report
### **Meeting Agenda**
1. Quick standup
2. Synchronous work time
3. Beta release practice
4. Beta release recording

&nbsp;  

### **Previous Plans & Goals**
* **Goal 1:** Configure Server to send data based on endpoint requests from client
* **Goal 2:** Have dynamically-sized frontend components within next week
* **Goal 3:** Film our product for Beta Release!

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Luke LeVasseur** | Set up server endpoints w ability to receive request and send temp response | 5/6
|| Scrape biz descriptions successfully | 5/11
**Mackenzie Leach** | Team Status Report W6 | 5/5, 11:00 PM PDT
|| Complete Development & Testing of Landing Page | 5/9, 11:59 PM PDT
|| Complete Development & Testing of Experience Results UI with LuLu | 5/9, 11:59 PM
|| Write Quick Start Guide with Luke | 5/10, 7:00 PM PDT
|| Code Review: Search Feature | 5/10, 7:00 PM PDT
**LuLu Pinczower** | Finalize category list for roulette | 5/6, 11:59 PM PDT
| | finish frontend development of roulette wheel | 5/6, 11:59 PM PDT
| | integrate roulette page with results page (API handling) | 5/8, 11:59 PM PDT
**Rachel Ye** | Finish filters, banner, and fake picture placeholders by Sunday | Sunday 5/9

&nbsp;  

### **Progress & Issues**  
* **Tasks Completed:** Whew, what a week. As a team, we went from a few disparate components to a functional, well-tested, dynamically-resizable webapp in just about a week. We made massive progress with both front and backend functionality (It's all enumerated in individual reports, so read on there if you want the full list), and recorded an awesome beta release video on top of all that. We also pulled together a quick-start guide for developing.  <p>&nbsp;</p>
* **Successful Tactics:** Communication (synchronously and async) was hugely important this week. Knowing we had a big deliverable coming up, we added 3 hours of synchronous meeting time to our regular weekly agenda, which was immensely helpful in getting all the kinks worked out. We also communicated proactively in our text and slack groupchats. <p>&nbsp;</p>
* **Learning:** Again, so much to say! Bootstrapped react components, Express middleware, Jest best practices, Herokj, making API calls from front end, etc. <p>&nbsp;</p>
* **Issues & Challenges:** We're quickly realizing that we need to tie the Google Places API into our app asap, both for the map and directions functionality on the results page and the autocompleting location field on the search page. We also hit a few snags with resizing our app, as we all have different sized screens/monitors and use dif browsers, which led to different errors on eachother's machines. <p>&nbsp;</p>
* **Blockers:** Not too much atm - all the frameworks we need are in place and we now just need to keep our momentum over the final few weeks! <p>&nbsp;</p>

&nbsp;  

### **Upcoming Plans & Goals**  
* **Goal 1:** Return business descriptions from the server
* **Goal 2:** Plug into Google maps/places API for location elements
* **Goal 3:** Write quality user and developer documentation

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Luke LeVasseur** | Scrape biz descriptions from Yelp | 5/18
|| Team status report w Kenzie | 5/12
**Mackenzie Leach** | Team Status Report | May 12, 11:00 PM PDT 
| | Update Team Timeline & Tasks | May 12, 11:59 PM PDT 
| | Outline User & Developer Guides | May 12, 11:59 PM PDT 
| | Draft User & Developer Guides | May 17, 11:59 PM PDT 
| | User & Developer Guides Deliverable | May 18, 11:59 PM PDT 
**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**LuLu Pinczower** | Allow user to personalize location | May 15, 11:59 PM PDT
| | Digest Yelp category JSON values | May 17, 11:59 PM PDT 
| | Fix small result bugs (slowed rendering of image) | May 15, 11:59 PM PDT 
| | Integrate Luke's scraper data | May 17, 11:59 PM PDT 
**Rachel Ye** | Auto fill the options for the location filter | May 16 11:59PM PDT
| |  Toggle active status for the Price and Distance buttons directly in the code | May 16 11:59pm PDT

&nbsp;  

<!-- ############################################################################################## -->
## Team Member Reports: Luke LeVasseur
**Previous Plans & Goals**
* **Goal 1:** Configure server endpoints for scrape requests
* **Goal 2:** Figure out how to scrape biz descriptions
* **Goal 3:** Return descriptions to front-end

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Luke LeVasseur** | Set up server endpoints w ability to receive request and send temp response | 5/6
**Luke LeVasseur** | Scrape biz descriptions successfully | 5/11

&nbsp; 

**Progress & Issues**  
* **Tasks Completed:** This week's Beta deployment was a huge understaking for our whole team, myself included. I configured our new server repo to deploy w Heroku, added more request headers to our server endpoint, worked out some server testing kinks, configured eslint to enforce our style guidelines, recorded the beta presentation w the team, and implemented the Express middleware package on our server code.  <p>&nbsp;</p>
* **Successful Tactics:** Prioritization, priorization, prioritization! <p>&nbsp;</p>
* **Learning:** Heroku deployment, Express package, testing a server w jest. <p>&nbsp;</p>
* **Issues & Challenges:** I wasn't able to get to scraping the biz description yet, despite committing to it last week. I had too much other work on my plate to get ready for beta release. <p>&nbsp;</p>
* **Blockers:** None <p>&nbsp;</p>

&nbsp;  

**Upcoming Plans & Goals**  
* **Goal 1:**
* **Goal 2:**

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Luke LeVasseur** | Scrape biz descriptions from Yelp | 5/18
|| Team status report w Kenzie | 5/12

&nbsp;  

<!-- ############################################################################################## -->
## Team Member Reports: Mackenzie Leach
**Previous Plans & Goals**
* **Goal 1:** Get started early on writing the user and developer guides for the documentation deliverable
* **Goal 2:** After writing Quick Start Guide, borrow a friend's computer to verify the steps

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Mackenzie Leach** | Team Status Report W6 | 5/5, 11:00 PM PDT
|| Photoshop Roulette Title & Spinner for LuLu | 5/5, 11:59 PM PDT
|| Complete Development & Testing of Landing Page | 5/9, 11:59 PM PDT
|| Complete Development & Testing of Experience Results UI with LuLu | 5/9, 11:59 PM
|| Write Quick Start Guide with Luke | 5/10, 7:00 PM PDT
|| Code Review: Search Feature | 5/10, 7:00 PM PDT


&nbsp; 

**Progress & Issues**  
* **Tasks Completed:** I finished both the landing page and about page along with full UI test suites for both. I also helped out with finishing the Bootstrapping for the Search class and hardcoded some values for our location filter until we have the opportunity to use the Google Places API for geographic autocomplete. I wrapped up the Quick Start Guide in this repository and worked with Luke to updated the quick start guide in the server repository. <p>&nbsp;</p>
* **Successful Tactics:** We've definitely spent a lot of time communicating on Slack and texting each other this week which has been incredibly helpful. We set aside an additoinal two synchronous meetings this week to touch base and work together to resolve bugs as we encountered them. <p>&nbsp;</p>
* **Learning:** Testing in Jest is a lot more complex than I expected and it was really time consuming to learn how to test UI components. The documentation for Jest is also a bit lacking, so I'd like to learn about utilizing mocking to test out things like link functionality as opposed to just their presence on the page. <p>&nbsp;</p>
* **Issues & Challenges:** I think time management has been my biggest challenge. I've put a lot off in my other classes to work on this application in the past week and will need to pivot and take a couple of days to catch back up before continuing to grind on this! <p>&nbsp;</p>
* **Blockers:** None! <p>&nbsp;</p>

&nbsp;  

**Upcoming Plans & Goals**  
* **Goal 1:** Outline & draft the user and developer guides by May 17. 
* **Goal 2:** Verify the quick start guide for both repositories by testing it.

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Mackenzie Leach** | Team Status Report | May 12, 11:00 PM PDT 
| | Update Team Timeline & Tasks | May 12, 11:59 PM PDT 
| | Outline User & Developer Guides | May 12, 11:59 PM PDT 
| | Draft User & Developer Guides | May 17, 11:59 PM PDT 
| | User & Developer Guides Deliverable | May 18, 11:59 PM PDT 

&nbsp;  

<!-- ############################################################################################## -->
## Team Member Reports: LuLu Pinczower
**Previous Plans & Goals**
* **Goal 1:** Continue reading up on JSON data injestion in Node.js applications
* **Goal 2:** Continue fine tuning front end of roulette page, and start working on results

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**LuLu Pinczower** | Finalize category list for roulette | 5/6, 11:59 PM PDT
| | finish frontend development of roulette wheel | 5/6, 11:59 PM PDT
| | integrate roulette page with results page (API handling) | 5/8, 11:59 PM PDT

&nbsp; 

**Progress & Issues**  
* **Tasks Completed:** This week I completed 2 main tasks and fine tuned some of my previous UI work. Firstly, I successfully integrated the server and frontend. Both the search and roulette page can succesfully ping the server with a set of headers to receive a random experience result. I also wrote tests for both the roulette and result pages. On top of this, I had some additional bootstrapping that needed to be done to add site-wide consistency.  <p>&nbsp;</p>
* **Successful Tactics:** Communication was definitely key this week. Whenever I hit an obstacle that I knew a group member had experience in, I made sure to reach out and set up a meeting. For example, Kenzie helped me out with some of the Jest testing semantics, and Luke walked me through the basics of the server that he set up. <p>&nbsp;</p>
* **Learning:** I have never made calls to a server via a React app, so I definitely needed to do a lot of research on that topic. Similarly, I have never written tests using Jest before. This week was definitely full of technical learning. I also learned how to parse a JSON string into an object that is more usable in our React application <p>&nbsp;</p>
* **Issues & Challenges:** My main issue encountered this week was integrating the frontend with the server. This definitely took a lot of trial and error that Luke helped out with a lot. In the end, we were able to succesfully instantiate GET requests, retrieving the desired result with limited headers. <p>&nbsp;</p>
* **Blockers:** My main blocker right now is the limiting offering of location preferences on the roulette and search page. Ideally the user would have much more control over their location, but we will need to tap into more APIs to build this out. <p>&nbsp;</p>

&nbsp;  

**Upcoming Plans & Goals**  
* **Goal 1:** Integrate more flexible user input for location
* **Goal 2:**

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**LuLu Pinczower** | Allow user to personalize location | May 15, 11:59 PM PDT
| | Digest Yelp category JSON values | May 17, 11:59 PM PDT 
| | Fix small result bugs (slowed rendering of image) | May 15, 11:59 PM PDT 
| | Integrate Luke's scraper data | May 17, 11:59 PM PDT 

&nbsp;  

<!-- ############################################################################################## -->
## Team Member Reports: Rachel Ye
**Previous Plans & Goals**
* **Goal 1: Get filters, banner image, and fake picture placeholders done by the weekend **
* **Goal 2: Polish the search feature pages **

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Rachel Ye** | Finish filters, banner, and fake picture placeholders by Sunday | Sunday 5/9
&nbsp; 

**Progress & Issues**  
* **Tasks Completed:** This week, I got the bulk of the implementation done for the Search feature. I implemented the price, distance, keyword, and location components for the Search page. I also wrote a test suite for the Search feature that ensured all of the UI components and text exist on the page. I also learned and used Bootstrapping to modify the formatting of the various buttons and UI elements to be consistent with our CSS classes. We also got together to film our beta release video on Monday night. <p>&nbsp;</p>
* **Successful Tactics:** This week was the heaviest in terms of coding. For me, researching documentation, using tutorials, and learning from my teammate's code was helpful. I also found it helpful to communicate with Lulu and Kenzie when I was stuck or feeling blocked. Lulu helped me set up the React states and props for the Search feature, and Kenzie helped me fix some of the boostrap padding for the photo cards and buttons. I also found it most productive to set aside large hours of time to dedicate to coding and learning. <p>&nbsp;</p>
* **Learning:** I learned a lot of technical concepts this week regarding React states and prop, Bootstrapping, writing tests, and advice from my teammates. I learned how to save state for my location, price, distance, and keyword filters to a Result component that Lulu developed. <p>&nbsp;</p>
* **Issues & Challenges:** One of the challenges was figuring out how to auto fill the location filter with cities and states. In the end, I decided to hardcode the values for the beta release. I will have to do more digging to find an API that takes care of it for you. <p>&nbsp;</p>
* **Blockers:** My main blocker is probably refactoring the searchTest to follow better style/conventions, toggle the button active status in Search code directly, and auto fill the location options. <p>&nbsp;</p>

&nbsp;  

**Upcoming Plans & Goals**  
* **Goal 1:** Auto fill the options for the location filter
* **Goal 2:** Toggle active status for the Price and Distance buttons directly in the code 

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Rachel Ye** | Auto fill the options for the location filter | May 16 11:59PM PDT
| |  Toggle active status for the Price and Distance buttons directly in the code | May 16 11:59pm PDT
