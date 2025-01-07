import express from 'express';
const app = express();
const friends = [];
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get('/getCurrentDate', (req, res) => {
    const date = new Date();
    res.json({'Current Date': date});
});
app.post('/addFriend'), (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const phone = req.body.phone;
    const friend = {
        name: name, 
        age: age, 
        email: email, 
        phone: phone
    };
    friends.push(friend);
    res.json(friends);
};
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});