const express = require('express');
const cors = require('cors');
const path = require('path');
const server = express();

server.use(cors());
const port = 80;

server.use("/surveillance", express.static(path.join(__dirname, 'dist', 'child-app')));

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});