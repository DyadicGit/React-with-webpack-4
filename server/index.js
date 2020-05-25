const express = require('express');
const app = express();

app.use('/app', express.static('../dist/app'));
app.use('/', express.static('../dist/login'));

app.listen(3000, () => console.log('Gator app listening on port 3000!'));
