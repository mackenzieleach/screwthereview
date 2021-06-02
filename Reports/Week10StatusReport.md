# Week 10 Status Report
**June 2, 2021**
&nbsp;  

## Team Report
### **Meeting Agenda**
1. Celebrate Final Release!
2. Work on Individual Retrospective

&nbsp;  

### **Previous Plans & Goals**
* **Goal 1:** Wrap up addressing open GitHub issues
* **Goal 2:** Address feedback from peer review 
* **Goal 3:** Finish implementation of account page & Google API

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Luke LeVasseur** | biz description scraping implemented | 5/30
  || final release! | 6/1
**Mackenzie Leach** | Team Status Report (with Luke) | 5/26 11:00 PM PDT
| | Complete Development of the Account Page (with LuLu) | 5/31 7:00 PM PDT
| | Address Feedback from Peer Review | 5/31 7:00 PM PDT
| | Support closing issues & bugs for team | 5/31 7:00 PM PDT   
**LuLu Pinczower** | Cleanup search bar UI on Roulette page | May 27, 11:59 PM PDT 
| | Finish skeleton build of Account page (did not accomplish last week) | May 27, 11:59 PM PDT 
| | implement search bar feature on search page | May 27, 11:59 PM PDT  
**Rachel Ye** | Address the git issue about the $$ filter | Sunday
|| Make yellow highlight only apply to selected button | Sunday


&nbsp;  

### **Progress & Issues**  
* **Tasks Completed:** This week was an incredibly busy final push in development for final release! Our team addressed several bugs and issues with documentation found in peer review, finished implementing scraping of business description and hours on the server side for the results page, and added the Google Maps API for static maps and directions on the result page. We also filmed our final release video Monday night.  <p>&nbsp;</p>
* **Successful Tactics:** We used a longer synchronous meeting this week that allowed us to work through some of the bugs as a team which definitely sped up the process a bit. The Slack channel also pushes notifications for pull requests to our phones, which has allowed us to stay on top of code reviews this week.  <p>&nbsp;</p>
* **Learning:** LuLu learned a lot about Enzyme testing for mocking states after the addition of a loading wheel to the results page. Luke focused on implementing an entire Bing scraper for business descriptions and hours, which was not an easy task. <p>&nbsp;</p>
* **Issues & Challenges:** This week, finding the time to make that final push was difficult for all of us with finals approaching, and we are definitely all feeling a bit of releif to be past final release! <p>&nbsp;</p>
* **Blockers:** None! <p>&nbsp;</p>

&nbsp;  

### **Upcoming Plans & Goals**  
Thank you for a great quarter Wilson!

&nbsp;  

<!-- ############################################################################################## -->
## Team Member Reports: Luke LeVasseur
**Previous Plans & Goals**
* **Goal 1:** Implement biz description scraping
* **Goal 2:** Killer final release deliverable!

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Luke LeVasseur** | biz description scraping implemented | 5/30
  || final release! | 6/1

&nbsp; 

**Progress & Issues**  
* **Tasks Completed:** Well folks, what a week. I did the biz description scraping thing (which was way tough), I implemented the loading wheel for the results page (me on frontend? Who woulda thought!) and wrote and presented half the final release slides. Crazy week if I ever had one...  <p>&nbsp;</p>
* **Successful Tactics:** Synchronous programming, dogged perseverance, and empathetic flexiblility <p>&nbsp;</p>
* **Learning:** the NPM package react-loader (think that's what it's called?) and bing-scraper. Also presentation skillz woo. <p>&nbsp;</p>
* **Issues & Challenges:** Time crucnch to the extreme, but it's over so were good! <p>&nbsp;</p>
* **Blockers:** None <p>&nbsp;</p>

&nbsp;  


<!-- ############################################################################################## -->
## Team Member Reports: Mackenzie Leach
**Previous Plans & Goals**
* **Goal 1:** Get a full implementation of the account page working (with LuLu)
* **Goal 2:** Support team members on open GitHub Issues to resolve bugs in preparation for final release. 

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Mackenzie Leach** | Team Status Report (with Luke) | 5/26 11:00 PM PDT
| | Complete Development of the Account Page (with LuLu) | 5/31 7:00 PM PDT
| | Address Feedback from Peer Review | 5/31 7:00 PM PDT
| | Support closing issues & bugs for team | 5/31 7:00 PM PDT 

&nbsp; 

**Progress & Issues**  
* **Tasks Completed:** This week, I went through all of our peer review and opened up GitHub issues for the items that we needed to address. I also cleaned up, added labeling and better comments to our existing open issues so bugs are well documented as we wrap up the project. I completed my portion of the slides for the final release and also edited our team's video as we filmed in a few takes to switch screen sharing control to demo. <p>&nbsp;</p>
* **Successful Tactics:** We utilized a much longer team meeting Monday night to work through some of the open GitHub issues and bugs, add a loading symbol to the result page since it is a bit slow now that we've implemented business description scraping. We took the rest of this meeting to work on our final presentation and get it filmed. <p>&nbsp;</p>
* **Learning:** For me, there wasn't much use of new tools or languages this week as I worked mainly on addressing currently open GitHub issues, bugs and updating documentation.  <p>&nbsp;</p>
* **Issues & Challenges:** LuLu and I discovered over the weekend that in order to implement the Auth0 functionality in the way we wanted it for the account page, we would need to build out an entire server endpoint to interact with the API. We made the decision that given time and the other bugs we needed to fix, we'd have to totally drop working on any form of the user model to round out that page. <p>&nbsp;</p>
* **Blockers:** None! <p>&nbsp;</p>

&nbsp;  

<!-- ############################################################################################## -->
## Team Member Reports: LuLu Pinczower
**Previous Plans & Goals**
* **Goal 1:** Squash all bugs assigned from peer review
* **Goal 2:** Finalize implementation of search bar feature

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**LuLu Pinczower** | Cleanup search bar UI on Roulette page | May 27, 11:59 PM PDT 
| | Finish skeleton build of Account page (did not accomplish last week) | May 27, 11:59 PM PDT 
| | implement search bar feature on search page | May 27, 11:59 PM PDT 

&nbsp; 

**Progress & Issues**  
* **Tasks Completed:** This week I completed a lot of tasks in preparation of final release. Firstly, I implemented the Google places API in 2 different places to accomodate static maps and directions on the result page. I also addressed some bugs that were not allowing the correct headers to be passed in when making calls to the server. Also, I was able to digest more data (such as details and hours) passed in by the server to be displayed on the Result page. On top of this, I had to implement a whole new testing schema to address a loading wheel that we implemented. <p>&nbsp;</p>
* **Successful Tactics:** All of the above mentioned tasks were accomplished in one "coding session," meaning I just sat down and basically coded all day. While this was tiresome, it really allowed me to direct all of my focus on the project which I think attributed to my successes. <p>&nbsp;</p>
* **Learning:** Technically speaking, I learned how to use the enzyme plugin with the Jest testing framework. I had to do this because it allows for mocking componen states which was necessary for the tests written for the Result page, following the implementation of the loading wheel. <p>&nbsp;</p>
* **Issues & Challenges:** My main issue this week was time. Because it is the end of the school year and my intersnhip is ending, I am finding myself having to tie up a lot of loose ends on projects. My demanding schedule accompanied with the burnout of a full year onlne definitely made this week more tiresome, but I am glad to have produced a final project that we are all very excited about!! <p>&nbsp;</p>
* **Blockers:** I currently have no blockers as we turned in our final assignment :) All I have left is my final reflection!! <p>&nbsp;</p>

&nbsp;  

<!-- ############################################################################################## -->
## Team Member Reports: Rachel Ye
**Previous Plans & Goals**
* **Goal 1:** Address the $$$$ bug that we got during the peer review.  
* **Goal 2:** Figure out how to make the yelow highlight only apply to the selected button on Search page.

&nbsp;  

**Team Member** | **Task** | **Due**
------------ | ------------------------|------------
**Rachel Ye** | Address the git issue about the $$ filter | Sunday
**Rachel Ye** | Make yellow highlight only apply to selected button | Sunday

&nbsp; 

**Progress & Issues**  
* **Tasks Completed:** <Description>  <p>&nbsp;</p>
* **Successful Tactics:** <Description> <p>&nbsp;</p>
* **Learning:** <Description> <p>&nbsp;</p>
* **Issues & Challenges:** <Description> <p>&nbsp;</p>
* **Blockers:** <Description> <p>&nbsp;</p>

&nbsp;  
