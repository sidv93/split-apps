const express = require('express');
const cors = require('cors');
const path = require('path');
const server = express();

server.use(cors());
const port = 80;

server.use("/acp-live", express.static(path.join(__dirname, 'dist', 'acp-live')));

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});