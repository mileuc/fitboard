require('dotenv').config();
const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors"); 
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);
const connection = mongoose.connection;
connection.once("open", function() {
    console.log("MongoDB database connection established successfully!");
})

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, function(){
    console.log(`Server started on port ${port}.`);
});