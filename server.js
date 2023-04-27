//dependendencies
const express= require('express');
const exphbs= require('express-handlebars');
const path= require('path');
const hbs =exphbs.create({});

//Sets up express app
const app=express();
const PORT= process.env.PORT || 3001;

app.engine('handlebars', hbs.engine); // telling express to use a templating engine and the engine we are telling it to use is handlebars
app.set('view engine','handlebars'); // setting our view engine to be handlebars

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'))

app.listen(PORT, ()=>{
   console.log('server listening on: http://localhost:' +PORT);
})
