# mvctemplate2
Very basic test of modules importing from controller to route to app.
- app.js imports a custom module from /routes/test.js
- in turn /routes/test imports another module from /controllers/test.js that contains the functions "test0" and "test1"
- /routes/test.js defines a "sub-route" for every function defined into the controller /test0 and /test1
- in app.js is created a "main-route" /test (derived from routes/test.js), that defines the final route for every function in the controller:  /test/test0 and test/test1

in conclusion:
1) controller functions are nested into route
2) route is nested into app

