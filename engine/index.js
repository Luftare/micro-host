const port = 80;
const fs = require("fs");
const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
let routes = [];

function applyRoutes(rts) {
  rts.forEach(r => {
    app.use(`/${r}`, express.static(__dirname +`./../routes/${r}`))
  })
  routes = rts;
}

function getRoutes() {
  return new Promise(res => {
    fs.readdir('./../routes/', (err, files) => {
      if(err) throw err;
      res(files)
    })
  })
}

fs.watch('./../routes/', () => getRoutes().then(applyRoutes));

app.get('/', (req, res) => {
  fs.stat(`./../routes/index/index.html`, function(err, stat) {
    if(err) {
      res.send(`cannot find index/index.html`);
    } else {
      res.sendFile(path.resolve(`../routes/index/index.html`));
    }
  });
});

app.get('/routes', (req, res) => {
  res.send(routes);
});

http.listen(port, e => {
  console.log("listening: ", port);
  getRoutes().then(applyRoutes);
});
