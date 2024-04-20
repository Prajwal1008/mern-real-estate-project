import express from 'express';
const app = express();
const Port = 8000;
app.use(express.json());
app.listen(Port, () => {
    console.log('Server is running on port 8000!!');
    }
);