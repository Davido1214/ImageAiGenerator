const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');
const mime = require('mime');
const filePath = path.join(__dirname,'images1')
require('dotenv').config()


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html', ));
});

app.get('/stylesheet.css', (req, res) => {
  const filePath = path.join(__dirname, 'stylesheet.css');
  const mimeType = mime.getType(filePath);
  res.setHeader('Content-Type', mimeType);
  res.setHeader('Permissions-Policy', 'interest-cohort=()');
  res.sendFile(filePath);
});

app.get('/search.js', (req, res) => {
  const filePath = path.join(__dirname, 'search.js');
  const mimeType = mime.getType(filePath);
  res.setHeader('Content-Type', mimeType);
  res.sendFile(filePath);
});

app.get('/images1/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'images1', req.params.filename);
  const mimeType = mime.getType(filePath);
  res.setHeader('Content-Type', mimeType);
  res.setHeader('Permissions-Policy', 'interest-cohort=()');
  res.sendFile(filePath);
});

app.get('/search.js', (req, res) => {
  const filePath = path.join(__dirname, 'search.js');
  const mimeType = mime.getType(filePath);
  res.setHeader('Content-Type', mimeType);
  res.setHeader('Permissions-Policy', 'interest-cohort=()');
  res.sendFile(filePath);
});

app.use(express.static(path.join(__dirname, 'basicProject')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});