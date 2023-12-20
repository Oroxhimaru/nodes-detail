# NODE JS Details
1. what is backend deveeloper
A backend developer is the person who work or program server and database.
2. why backend?
to make website more usable and purposeful for the user e.g a front-end download button will not work without backend
3. what we need to learn backeend?
  nodejs , mongodb,  mongoose, expressjs.
4. install node js and download from here https://nodejs.org/en/download.
   installing means copying the files into our specify computer directory.
5. for exporting any file you need to use this code ' module.exports = whatever you exporting; ' module is object and exports is the property of module object. (this code is mention in export.js with 5 as a comment)
6. for importing any file form other script file you need to use require('exporting the file here ./') which is a function. (this code is mention in import.js with 6 as a comment)
7. for exporting two file ' module.exports = {first: , second:  }; ' (this code is mention in export.js with 7 as a comment)
8. node js is a runtime javascript enviroment, which is also use for backend. node js is a c++ code which is taken from chrome browser v8 engine code. and c++ code is wrap in JS code. which allows us  to write JS code and it accept that code and make server on the basis of c++. when we write js code in nodejs it give code to wrapper which share our js code into c++ code which will create a server by the help of v8 engine code.
9. for running the code on node js press ctrl + tilde (tilde = ~`` key) button of keyboard or go to ... then terminal then new terminal. for running the code either write node filename or install nodemon and write nodemon filename.
10. for further about import and export go to node 2 folder. or import export folder in this file
11.  npm node package manager which is like a store which have so many packages. packages is a code. now  npm have different fulll name coz they have so many language packages on their website. so  it is no longer node packge mangaer instead differnet name liike nahe pata mujhe. write npm -v in cmd it will show its version. npm i packageName will install it. run it by seeing code in npm website.
12. express is a framework for nodeJS. express is use for routing . routing means when we visit main website secondary page like www.wwe.com/batista /batista is routing. route is /url. routing type GET ,POST other are PUT, PATCH ,DELETE many more.  we use GET route when we don't care  if data is seen on url, and use POST route when we don't want to show data on url. (see code in express.js 12 comment)
13. npm i nodemon -g for one time installation and it will run file continously and update it time to time, for cancel the file press ctrl + c. for running the nodemon write nodemon filename , if you see error then write npx nodemon filename.
14. the process between the request and route is middleware. middleware is a function which run before route, means before route if you want to do something then use middleware which is app.use() (see code in middleware.js 14 comment) we can make as many middleware as we want.
15. we  make server with node's http method but it is difficult and long so therefore we use express which is a framework or package of node js which help us to create server in short code
16. when a user go the url wwe.com/undertaker that /undertaker is route and request  will come go through the process like middleware then match with the route in server and then will give the response of whatever the logic is define in it
17. the process of making routes known as routing
18. dynamic routing /profile/ when half is same and half is chaning again and again then we use dynamic routiing by putting : colon like /profile/:username / username is a parameter here params store in request so req.params.whatever
19. ejs : npm i ejs , for configuration app.set("view engine", "ejs"); , make folder 'views' , made ejs file in it , instead of send, render it.
20. template engine like ejs is a style of markup which give you html, can add dynamic value like that res.render('contact', {move: 'BANKAI'}); and in ejs file <h1><%=move %></h1>
21. static file setup: public folder under three more folder like images, stylesheets, javascripts. then configure it , understand the path.
22. error handling see the code in /* error handling */ in exp.js we have to through error in error handler and then error goes to handler get store in name error and then whereever we have to show that error we will name it error, like in ejs file <%= error %> find error handling detail on express error handling npm, "line 18,19,20,21,22 code mention in express-about folder.
23. revision folder revise thing for now.
24. with the help of express generator you can get a boiler plate of express js 
25. steps to use express generator, install one time globally, npm i express-generator -g, now for creating open cmd write express appname --view=ejs, then use commands cd appname and npm i  . for running the application write in terminal npx nodemon.  (go to express-generator folder for example)
26. mongodb is a database. database means a base where data are stored of applications. 
27.  mainly there are two types of data, relational like mySQL or SQL, no relational means noSQl like mongodb
28. in code side  when we do database setup that means we have build database formation in mongodb side , similarly in code side Model build collection in mongodb side, schema -> documents. see in mongodb-database folder.
29. every app data you can store in mongodb storage but you will store it seperatly each app in different container.
30. varaity of data is called collection made by code of model. Apps all data is database in that DB different set of data is collection, and in collection small  data is documents which is made with code of schema.
31. install the mongodb by visiting the website https://www.mongodb.com/try/download/community visit package download it. npm i mongoose for installing mongoose in terminal. code of mongoose = const mongoose = require("mongoose"); 
32. see code mongodb-database folder in user.js file. and in index.js contain creattion of data, finding of or selected finding of data plus deleting of specific data.
33. client is browser or frontend part and server is backend like node js both are working on your pc at the time of production, which is known as localhost.
34. client have cookie , server have session
35. cookie and session both save data, session save data in server and cookie in client.
36. you need a package to deal with session express-session, npm i express-session.
37.  see code of session in app.js, ignore other code just focus on session comments are written there.  first import express-session then setup the session with app.use() in app.js file, then create session in another file.
38. now cookies is already setup in app.js file by express generator. see in app.js comment 4  and comment 30.
39. see the code of cookie in databae folder index.js.
40. flash messages: they are more like good looking alerts, warning and descriptions. when we have top give info to some ejs pages that is flash mesaages.
41. after filling  the wrong info in Logiin form the req goes to backend server. and if the email pass is wrong then some error message are shown which is flash messages as response.
42. npm i connect-flash , you need express session for flash so npm i express-session. see comment 41 in flash messages folder flash- app.js.
43. we can use flash message error in other routes too. see in code index.js
44. mongodb intermediate go in that folder. npm i mongoose , import mongoose in user.js , setup the mongoose, make schema make model, import model in index.js, 
45. ^ means in RegExp start and $ means end. further detail see in above 44 point file.
46. Authorization and Authentication folder. install these packages: npm i passport passport-local passport-local-mongoose mongoose express-session.
47. app.js code first after view engine before logger. setup user.js properly. index.js try register first then other code.
48. 

