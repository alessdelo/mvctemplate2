
// Import variable from heroku
const varFromHeroku = process.env.VAR_FROM_HEROKU

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
