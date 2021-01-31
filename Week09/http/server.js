const http = require('http')
http.createServer((request, response) => {
  let body = [];
  request.on('data', chunk => {
    console.log(chunk)
    // Buffer.concat()的api的入参类型是list: Uint8Array[],而这里body里面是string，会报错
    // body.push(chunk.toString());
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('body:', body)
    response.writeHead('200', { 'Content-Type': 'text/html' });
    response.end(`<html lang="en">
<head>
  <style>
    body div {
      color: red;
      width: 100px;
      height: 100px;
    }
    div {
      color: red;
      width: 100px;
      height: 100px;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>`)
  }).on('error', err => {
    console.log(err)
  })
}).listen(8088);

console.log('server started')