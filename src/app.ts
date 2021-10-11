import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import emailRouter  from './router/email-router';

const port = 3000;
const app = express();

//basic config
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.use('/email', emailRouter);

app.get('/', (req,res)=>{
    res.send("welcome to email_api");
})

app.listen(port, ()=>{
    console.log(`this application is running on port ${port}`);
})

