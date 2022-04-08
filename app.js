require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: "http://localhost:3002"
}

app.use(cors(corsOptions));
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));





require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.get('/', (req, res)=> {
  console.log(req.body);
    res.json({message: "Welcome to my page"});
});






app.listen(process.env.PORT || 5001, () => {
    console.log("Server is up and running on port 5001");
});