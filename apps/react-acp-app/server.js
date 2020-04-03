const express = require('express');
const cors = require('cors');
const path = require('path');
const server = express();

server.use(cors());
const port = 3000;

server.use("/cartis", express.static(path.join(__dirname, 'build')));

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});