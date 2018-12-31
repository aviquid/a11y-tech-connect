const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname, '../build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.listen(port, () => {
    console.log('now listening for requests on port 8080');
});