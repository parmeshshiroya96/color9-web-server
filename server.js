const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req,res)=>{
   
    res.send({name:'what'})
});
app.get('/about', (req,res)=>{
    
    res.render('about.hbs',{pageTitle : 'what Page'});
});

app.listen(port);