let express = require("express");
let app = express();
let pug = require("pug");
let bodyparser=require("body-parser");
let cookieparser=require("cookie-parser");
var session=require("express-session");
app.use(bodyparser.json());
let router =require("./routing/routing");
var errorlogger = require("./services/errorlogger");
app.use("/", router);
app.use(errorlogger);

app.set("view engine", "pug" );
app.set("views", "./views");



app.use(bodyparser.urlencoded({extended:true}))
app.use(session({
    name: "mu session",
    secret:"secure session",
    resave:false,
    cookie:{
        secure:true,
        httpOnly:true
    }
}))

app.get("/",(req,res)=>{
    // console.log(req.session);
    // res.send(`
    // <h1>welcome</h1>
    // <a href="/login">Login</a>
    // <a href="/register">Register</a>
    // <a href-"/home">Home</a>
    // <a href="/logout">Logout</a>
    // `)
    res.cookie('mycookie',"hello,")
    res.render('demo.pug')
})
app.get('/clear',(req,res)=>{
    console.log(res.cookies+"req cookie");
    res.clearCookie('mycookie');
    res.send('cookie cleared');
})


app.get('/login',(req,res)=>{
    res.send(`
    <form method="POST" action="/login">
    Username: <input type="text" name="username">
    Password:<input type="password" name="password">
    <input type="submit">submit
    </form>
    `)
})

app.get('/register',(req,res)=>{
    res.send("<h1>Registration page</h1>")
})

app.get('/home',(req,res)=>{
    res.send("<h1>home page</h1>")
})

app.get('/check',(req,res)=>{
    res.render("demo.pug");
})

app.post('/login',(req,res)=>{
    
    const {userId} = req.session;
    const requestbody=req.body;

    if(requestbody.username=="admin" && requestbody.password=="admin"){
        req.session.userId=1;
        res.redirect('/');
    }
    else{
        res.redirect('/home');
    }
})

app.listen(3000, ()=>{
    console.log("server is running in port 3000");

})
