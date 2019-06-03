var http = require('http');
var url=require('url');
var dt=require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("the current time is "+dt.mydate());
  res.write("the additon is "+dt.myadd());
  
  var q=url.parse(req.url,true).query;
  var txt=q.year+" "+q.month;	
  res.write(req.url);
  res.end(txt);
}).listen(8080);

//http://localhost:8080/?year=2017&month=July