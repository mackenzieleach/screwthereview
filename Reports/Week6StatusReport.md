# Week 6 Status Report
**May 5, 2021**
&nbsp;  

# Week 6 Status Report
**May 5, 2021**
&nbsp;  

## Team Report
### **Meeting Agenda**
1. Standup
2. Review Remaining Architecture & Design Feedback & Implement Changes
3. Review Testing & CI Deliverable
4. Pull Requests & Action Items

&nbsp;  

### **Previous Plans & Goals**
* **Goal 1:** Develop MVP features for Beta released by May 6, 11:59 PM to allow for testing 
* **Goal 2:** Practice clear communication and support teammates through development.

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Luke LeVasseur** | Team Status Report (with Kenzie) | 4/28, 11:00 PM PDT
**Luke LeVasseur** | Write & Proof Testing & CI Deliverable | 5/4, 11:59 PM
**Luke LeVasseur** | Develop Landing Page Components | 5/4, 11:59 PM
**Mackenzie Leach** | Team Status Report | 4/28, 11:00 PM PDT
**Mackenzie Leach** | Develop Footer & Nav Bar Design | 4/28, 11:59 PM PDT
**Mackenzie Leach** | Write & Proof Testing & CI Deliverable | 5/4, 11:59 PM
**Mackenzie Leach**| Develop Experience Result Component | 5/6, 11:59 PM
**Mackenzie Leach**| Azure YML Script for Auto-Build on Commit | 5/10, 7:00 PM PDT 
**LuLu Pinczower** | Connect API credentials to skeleton Node app | 4/29 11:59 PM PDT
**LuLu Pinczower** | Begin frontend development of roulette wheel | 4/29, 11:59 PM PDT
**LuLu Pinczower** | Link front and back end of roulette wheel | 5/3, 11:59 PM PDT
**LuLu Pinczower** | Load Yelp categories into databse | 4/29, 11:59 PM PDT
**Rachel Ye** | Start the Search feature and make an API call | <Due>  

&nbsp;  

### **Progress & Issues**  
* **Tasks Completed:** This week has been our biggest development week yet! We've developed basic versions of all the pages on our website, and begun o pull together a API-based server to interact w the front end. We've also set up our testing framework (Jest), CI framework (Netlify), and utilized bootstrap to make our pages size dynamically. <p>&nbsp;</p>
* **Successful Tactics:** Trial and error, proactive communication, and minimizing context-switching have helped our team through this week of asynchronous development and synchronous meetings! <p>&nbsp;</p>
* **Learning:** Jest and Netlify were both brand-new frameworks to us - we learned all about the benefits of those packages and how to integrate them into our deployment pipeline. We also learned a lot about Bootstrap, endpoint-based client-server interactions, and Cconfiguring a DB with Azure. <p>&nbsp;</p>
* **Issues & Challenges:** Just finding the time to develop! We're cruising right along, but are definitely feeling the time crunch... <p>&nbsp;</p>
* **Blockers:** None ATM. <p>&nbsp;</p>

&nbsp;  

### **Upcoming Plans & Goals**  
* **Goal 1:** Configure Server to send data based on endpoint requests from client
* **Goal 2:** Have dynamically-sized frontend components within next week
* **Goal 3:** Film our product for Beta Release!

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Luke LeVasseur** | Set up server endpoints w ability to receive request and send temp response | 5/6
|| Scrape biz descriptions successfully | 5/11
**Mackenzie Leach** | Team Status Report W6 | 5/5, 11:00 PM PDT
|| Photoshop Roulette Title & Spinner for LuLu | 5/5, 11:59 PM PDT
|| Complete Development & Testing of Landing Page | 5/9, 11:59 PM PDT
|| Complete Development & Testing of Experience Results UI with LuLu | 5/9, 11:59 PM
|| Write Quick Start Guide with Luke | 5/10, 7:00 PM PDT
|| Code Review: Search Feature | 5/10, 7:00 PM PDT
**LuLu Pinczower** | Finalize category list for roulette | 5/6, 11:59 PM PDT
| | finish frontend development of roulette wheel | 5/6, 11:59 PM PDT
| | integrate roulette page with results page (API handling) | 5/8, 11:59 PM PDT

&nbsp;  

<!-- ############################################################################################## -->
## Team Member Reports: Luke LeVasseur
**Previous Plans & Goals**
* **Goal 1:** Develop some cool code! (Landing page specifically)
* **Goal 2:** Start integration Auth0 into our app
* **Goal 3:** Connect w Savio to see if he has any pointers

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Luke LeVasseur** | Team Status Report (with Kenzie) | 4/28, 11:00 PM PDT
|| Write & Proof Testing & CI Deliverable | 5/4, 11:59 PM
|| Develop landing page components | 5/4, 11:59 PM

&nbsp; 

**Progress & Issues**  
* **Tasks Completed:** This week, I got down to business building out the backend server of our app. I defined the API requests and promises that our backedn will take, and am in the process of implementing the API Calls + Scraping logic that will return biz info to the frontend. I also wrote our testing plan and implemented the skeleton for writing Jest tests!  <p>&nbsp;</p>
* **Successful Tactics:** Communication and openness about my own skillset led to me pivoting from front-end development (landing page) to backend (server) work, something I'm much better at. <p>&nbsp;</p>
* **Learning:** All about React testing frameworks! And scraping webpages using jQuery! <p>&nbsp;</p>
* **Issues & Challenges:** The Yelp business page html is really challenging to parse, so I'm still thinking about how best to extract the description of our businesses <p>&nbsp;</p>
* **Blockers:** None <p>&nbsp;</p>

&nbsp;  

**Upcoming Plans & Goals**  
* **Goal 1:** Configure server endpoints for scrape requests
* **Goal 2:** Figure out how to scrape biz descriptions
* **Goal 3:** Return descriptions to front-end

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Luke LeVasseur** | Set up server endpoints w ability to receive request and send temp response | 5/6
**Luke LeVasseur** | Scrape biz descriptions successfully | 5/11

&nbsp;  

<!-- ############################################################################################## -->
## Team Member Reports: Mackenzie Leach
**Previous Plans & Goals**
* **Goal 1:** Create "Resource" document for all team members to utilize during development
* **Goal 2:** Learn about React Bootstrap and design plan for integration into application
* **Goal 3:** Set up Trello Board for clearer communication about tasks & due dates

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Mackenzie Leach** | Team Status Report | 4/28, 11:00 PM PDT
|| Develop Footer & Nav Bar Design | 4/28, 11:59 PM PDT
|| Write & Proof Testing & CI Deliverable | 5/4, 11:59 PM
|| Develop Experience Result Component | 5/6, 11:59 PM
|| Azure YML Script for Auto-Build on Commit | 5/10, 7:00 PM PDT

&nbsp; 

**Progress & Issues**  
* **Tasks Completed:** This past week, I finalized our CD launch for Netlify, wrote the CI portion of the Testing & Ci Deliverable and set up the scripting for CI Testing in Github, updated the header and footer to be dynamically responsive and added CSS styling, and am currently working on developing the landing page.   <p>&nbsp;</p>
* **Successful Tactics:** Similar to other weeks, using a meeting agenda to block in time for standups has been really helpful in keeping synchronous meetings on track and productive. I personally have found the Trello Board to be helpful in organizing my development tasks with due dates for progress. I've also worked on sending out communication when members need to pull changes like the addition of a testing CI to their branches. <p>&nbsp;</p>
* **Learning:** I've watched a lot of Youtube tutorials to refamiliarize myself with Boostrap and CSS again, especially in the context of React. Additionally, configuring the Github Actions with Netlify and Jest was a lot of learning about Babel configurations to support JSX syntax and a Netlify workaround to only deploy the website when tests successfully pass. I actually made a copy of our repo and uploaded it privatly to Github so I could safely make changes and set up the testing CI before porting the relevant test files back over to our main repository. <p>&nbsp;</p>
* **Issues & Challenges:** After setting up the URL launch, there was some confusion about how to pull changes from main to branches and a merge undid our launch. I had backed up the code locally since this was our first attempt as a team managing branches, and we ended up needing to start from that code and manually add in the few classes that had changed. Since that was a bit time consuming, the main branch now requires pull requests with one reviewer before changes can be merged and the build and deployment runs on all pull requests to ensure tests are passing. <p>&nbsp;</p>
* **Blockers:** LuLu and I will be working on the user interface for the experience results page on Saturday. We will need Luke's implementation of the Yelp Scraper completed prior so we can parse through the JSON file returned by the scraper to render.  <p>&nbsp;</p>

&nbsp;  

**Upcoming Plans & Goals**  
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

<!-- ############################################################################################## -->
## Team Member Reports: LuLu Pinczower
**Previous Plans & Goals**
* **Goal 1:** Start integrating API calls into our skeletal applicatin
* **Goal 2:** Begin building out backend / database infrasturcture

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**LuLu Pinczower** | Connect API credentials to skeleton Node app | 4/29 11:59 PM PDT
| | Begin frontend development of roulette wheel | 4/29, 11:59 PM PDT
| | Link front and back end of roulette wheel | 5/3, 11:59 PM PDT
| | Load Yelp categories into databse | 4/29, 11:59 PM PDT

&nbsp; 

**Progress & Issues**  
* **Tasks Completed:** This week I made a lot of progres on the roulette page. I succesfully implemented the randomly populating wheel with a very basic set of categories. I also implementing resizing capabilities via the bootstrap package. <p>&nbsp;</p>
* **Successful Tactics:** All of my success this week came from trial and error. I needed to reacquaint myself withe some of the technologies / packages. I found that I was most successful when I sat down for a long period of time, completely dedicating myself to the app instead of short bursts of work. <p>&nbsp;</p>
* **Learning:** Although I had some experience using bootstrap, I definitely needed to reacquant myself with a lot of its properties. I also spent a long time research file handling with Node.js because our ultimate goal is to read a JSON file to parse out categories. <p>&nbsp;</p>
* **Issues & Challenges:** Unfortunately I was unable to read the JSON file of categories using the filehandle package for Node.js. It seems as though this is a rather tough thing to do. For now, I have resorted to a premade map object of categories, but I hope to change this for the future. <p>&nbsp;</p>
* **Blockers:** While not being able to read a JSON file is a current blocker, it isn't necessarily halting all progress. I successfully found a route around the obstacle. But I would like to implement this capability in the future. <p>&nbsp;</p>

&nbsp;  

**Upcoming Plans & Goals**  
* **Goal 1:** Continue reading up on JSON data injestion in Node.js applications
* **Goal 2:** Continue fine tuning front end of roulette page, and start working on results

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**LuLu Pinczower** | Finalize category list for roulette | 5/6, 11:59 PM PDT
| | finish frontend development of roulette wheel | 5/6, 11:59 PM PDT
| | integrate roulette page with results page (API handling) | 5/8, 11:59 PM PDT

&nbsp;  

<!-- ############################################################################################## -->
## Team Member Reports: Rachel Ye
**Previous Plans & Goals**
* **Goal 1:** Finish reading react tutorials and work on the search component page.
* **Goal 2:** Read the React documentation for getting started on building a webpage. Create the keyword, location filter, price filter, and distance filter.

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Rachel Ye** | Start the page for the Search component | 5/1
**Rachel Ye** | Create keyword, location, price, distance filter and star banner image | 5/1

&nbsp; 

**Progress & Issues**  
* **Tasks Completed:** I've started the keyword box and I've been working through getting the other filters ready and setup on the search page. <p>&nbsp;</p>
* **Successful Tactics:** It has been helpful seeing the tasks on trello board! It helps to visualize the different tasks I need to complete for my feature. <p>&nbsp;</p>
* **Learning:** I am learning more about getting React components set up and reading the documentation for React bootstrap. <p>&nbsp;</p>
* **Issues & Challenges:** It has been a difficult couple of weeks for me due to being behind in all three of my classes and my part time internship right now. I have been trying to catch up for CSE403 because I recognize I have been not finding enough time to code compared to my teammates. I didn't anticipate learning how to do frontend React would be this challenging. <p>&nbsp;</p>
* **Blockers:** My biggest blocker is being better at communicating how I am feeling with my teammates and catching up with my search feature page. <p>&nbsp;</p>

&nbsp;  

**Upcoming Plans & Goals**  
* **Goal 1: Get filters, banner image, and fake picture placeholders done by the weekend **
* **Goal 2: Polish the search feature pages **

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Rachel Ye** | Finish filters, banner, and fake picture placeholders by Sunday | Sunday 5/9