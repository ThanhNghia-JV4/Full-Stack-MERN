const express = require('express');
const app = express();
const mongoose = require("mongoose");
const authRouter = require('./routes/auth');


const connectDB = async () => {
	try {
		await mongoose.connect(`mongodb+srv://mern-learn:1234@mern-learn.dmjpofx.mongodb.net/mern-learn?retryWrites=true&w=majority`);
		console.log('MongoDB connected');
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
}

connectDB();

app.get('/', (req, res) => res.send('Hello '));
app.use('/api/auth', authRouter);
const PORT = 5000;

app.listen(PORT, () => console.log('server listening on port ' + PORT));