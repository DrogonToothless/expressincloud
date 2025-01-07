import express from 'express';
const app = express();
const port = proccess.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});