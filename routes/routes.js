module.exports.newData = "New Data"

 // var text = {foo:"bar", pluto:"ernesto"}



var text =  {
           title: "pag3", 
           content:"../contents/pag3.ejs",
           descr: "empty.....",
           nav: "",
           header: "",
           footer: "",
           params: []
          }
 

 
 module.exports.addJson = text
   

/*
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'
*/



/*
module.exports = {
        newData = "New Data"
}
/*


/*
var data = JSON.parse(pageData);  //parse the JSON
data.pag3.push({        //add the employee
    title: "pag3", 
    content:'../contents/pag3.ejs',
    descr: 'empty.....',
    nav: nav,
    header: header,
    footer: footer,
    params: []
});

pageData = JSON.stringify(data);  //reserialize to JSON

*/
