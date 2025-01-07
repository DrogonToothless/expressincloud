import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get('/getCurrentDate', (req, res) => {
    const date = new Date();
    res.json({'Current Date': date});
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});