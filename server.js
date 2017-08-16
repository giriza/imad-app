var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;
var config = {
    user:'girijaiyer1996',
    database:'girijaiyer1996',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
    
}

var app = express();
app.use(morgan('combined'));

var articles = {
    
    'articleOne': {
    title : 'About Me || GIRIZA',
    heading : 'Post One',
    date : 'Aug 5th,2017',
    content : 
    `    <p>
        After 4yrs of struggle with coding, i just realised this is the easiest thing ever!
     </p>
     <p>
        Thanks to IMAD! :D
     </p>`
    
},
    'articleTwo': {
    title : 'Life as an Engineer || GIRIZA',
    heading : 'Post Two',
    date : 'Aug 6th,2017',
    content : 
    `   <hr/>
            <h1>
                My Life as an Engineer
            </h1>
            
            <p>
                2013-2017
            </p>
     `
    },
    'articleThree': {
    title : 'Engineer ke Phases || GIRIZA',
    heading : 'Post Three',
    date : 'Aug 7th,2017',
    content : 
    `   <hr/>
            <h1>
                Phases of being an Engineer
            </h1>
            
            <p>
                My experience as a computer science engineer.
            </p>
     `    
        
    }
};


function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
        <html>
            <head>
                <title>
                ${title}
                </title>
            
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                        <div>
                             <a href="/">Home</a>
                        </div>
                        <hr/>
                        <h1>
                            ${heading}
                        </h1>
                        <div>
                            ${date}
                        </div>
                        <div>
                           ${content}
                        </div>
                </div>
            </body>
        </html>
            
    `;
    return htmlTemplate;
}

var pool = new Pool(config);
app.get('/test-db', function (req, res) {
    //make a select request
    //return the respone with the results
    pool.query('SELECT * FROM test',function(err,result){
       if(err)
       {
           res.status(500).send(err.toString());
       }
       else
       {
           res.send(JSON.stringify(result.rows));
       }
    });
});

app.get('/ui/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
   counter = counter + 1;
   res.send(counter.toString());
});

var names = [];
app.get('/submit-name' , function (req,res) { //URL: /submit-name?name=xxxxx
//get the current name
var name = req.query.name; //to do

names.push(name);
//JSON JavaScript Object Notation
res.send(JSON.stringify(names));
});

app.get('/articles/:articleName', function(req,res) {
    var articleName = req.params.articleName;
    pool.query("SELECT * FROM article WHERE title="+req.params.articleName,function(err,result){
       if(err)
       {
       res.status(500).send(err.toString());
       }
       else
       {
           if(result.rows.length===0)
           {
               res.status(404).send('Article not found');
           }
           else
           {
               var articleData = result.rows[0];
            res.send(createTemplate(articleData));
           }
       }
    });
   
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
  
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});






// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
