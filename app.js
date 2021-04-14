const express = require('express');
const router = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!");
})

router.get('/', (req,res) => {
	res.status(200).send('App Not Working')
});

router.get('/*', (req,res) => {
	res.status(404).send('Page Not Found')
})

app.use("/", router);

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
})