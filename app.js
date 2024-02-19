
const express = require('express');
const app = express();  
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/product')
const reviewRoutes = require('./routes/review')
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');


let configSesion = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  };


mongoose.connect('mongodb://127.0.0.1:27017/BigProject')
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log("error is:", err)})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))    // Static files

app.use(express.urlencoded({extended:true}))  // form data ke liye body parser
app.use(methodOverride('_method'))


// expess-session middleware -
app.use(session(configSesion));
app.use(flash());   // ese hamesha session ke bad hi likhte h


app.use( (req,res,next)=>{
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

// seedDB()   // Bar bar store ho jata h, if not commented


app.use(productRoutes);
app.use(reviewRoutes);

let PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server is connected at port: ${PORT}`);
})
















