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
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.writeHead(200);

  const getParams = parseGET(request.url);
  console.log(request.method, request.url);

  const endPoint = request.url.split('?')[0];
  const path = endPoint.split('/');
  const svc = path[1];
  let responseData = {};
  if(request.method==='GET') {
    if(svc) {

      if(svc==='auth') {
        if(path[2]==='me') {

          let errorResponse = {
            resultCode: 1,
            data: {},
            messages: ['You are not authorized'],
          };

          responseData = {
            resultCode: 0,
            messages: [],
            data: {
              userId: 1,
              email: 'user1mail@mail.ml',
              login: 'user1',
            }
          };

          return res.end(JSON.stringify(responseData));
        } 
        return res.end(JSON.stringify(responseData));
      }

      fs.readFile('data/'+svc+'.json', 'utf8', function (error,stringData) {
        if (error) {
          res.end(JSON.stringify({error}));
        } else {
          const data = JSON.parse(stringData);
          if(path[2]) {
            let item = data.items.filter(item=>item.id==path[2])[0]
            if(svc==='users') {
              responseData = {
                ... item,
                userId:  item.id,
                lookingForAJob:  false,
                lookingForAJobDescription:  'The Storage',
                contacts:{
                  github: 'github/hub/git',
                  youtube: 'you.tube',
                },
                photos:{
                  small: item.photoUrl,
                  large: item.photoUrl,
                },
              }
            }
          } else {
            responseData.count = data.items.length;
            let page = getParams.page?1*getParams.page:1;
            let count = getParams.count?1*getParams.count:10;
            if(data.items && data.items.length) {
              responseData.items = data.items.slice( ((page-1)*count), ((page)*count) );
            }
          }
          res.end(JSON.stringify(responseData));
          return;
        }
      });
    };
  } else if(request.method==='POST') {

    if(svc==='follow') {
      fs.readFile('data/users.json', 'utf8', function (error,stringData) {
        const data = JSON.parse(stringData);
        let item = data.items.filter(item=>item.id==path[2])[0];
        item.follow = true;
        responseData = {
          resultCode: 0,
          messages:[],
          data:{}
        }
        res.end(JSON.stringify(responseData));
        return;
      })
      return;
    }

    let jsonString = '';
    request.on('data', function (_data) {
      jsonString = _data;
      let data = JSON.parse(jsonString);
      res.end(JSON.stringify(responseData));
      return;
    });
  }

}
const server = http.createServer(requestListener);
server.listen(httpPort);
console.log('Http Server started on '+httpPort+' port');
