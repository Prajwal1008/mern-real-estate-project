import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to MongoDB!');
})
.catch((err) => {
    console.log(err);
});

const app = express();

const Port = 8000;

app.use(express.json());

app.listen(Port, () => {
    console.log('Server is running on port 8000!!');
    }
);