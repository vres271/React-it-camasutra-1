const http = require('http');
const fs = require('fs');

const httpPort = 8006;

const parseGET = url=>{
  let tmp = url.split('?');
  if(tmp[1]) {
    let getParams = {}; 
    tmp[1].split('&').forEach(part=>{
      let arr = part.split('='); 
      getParams[arr[0]] =  arr[1];
    })
    return getParams;
  }
  return undefined;
}

const requestListener = function (request, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200);

  const getParams = parseGET(request.url);
  console.log(request.method, request.url);
  let responseData = '';

  if(request.method==='GET') {
    if(request.url === '/users') {
      fs.readFile('data'+request.url+'.json', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        res.end(data);
      });
    };
  } else if(request.method==='POST') {
    let jsonString = '';
    request.on('data', function (_data) {
      jsonString = _data;
      let data = JSON.parse(jsonString);
    });
  }
  

}
const server = http.createServer(requestListener);
server.listen(httpPort);
console.log('Http Server started on '+httpPort+' port');
