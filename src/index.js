let express = require('express')
let app = express();
//let mongo = require('./models/customer_model')
let bodyparser = require('body-parser')
let customerRoute = require('./routes/customer')
let personRoute = require('./routes/person')

app.use(bodyparser.json())
app.use(customerRoute)
app.use(personRoute); 
app.use(express.static("public"));
app.use((req, res, next) => {
    res.status(404).send("You might have the location wrong.");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));