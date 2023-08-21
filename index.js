import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import bodyparser from "body-parser";
import fs from 'fs';
import { createHash } from 'node:crypto'
// import os from "node:os";


const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.post("/", (req, res) => {
  // console.log(req.body.string);
  var string = toString(req.body.string);
  var md5 = createHash('md5').update(string).digest('hex');
  var sh256 = createHash('sha256').update(string).digest('hex');
  res.send(`Your MD5 hash is ${md5} and your SHA256 hash is ${sh256}`)
});


