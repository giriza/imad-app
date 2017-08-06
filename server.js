var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
    'postOne': {
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
    'postTwo': {
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
    'postThree': {
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

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:postName', function(req,res) {
    var postName = req.params.postName;
    res.send(createTemplate(articles[postName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
  
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
