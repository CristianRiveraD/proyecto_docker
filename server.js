const express = require('express');
const fs = require('fs');
const app = express();
const localhost = (b) => {
        app.get('/', (req, res) => {
                fs.readFile(`${__dirname}/${b}`, (err, data) => {
                        res.end(data);
                });
        })
}
localhost('index.html');
app.listen(3000, () => { 
  console.log('iniciado');
});