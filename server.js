
// Basic setup
const express = require('express');
const app = express();
const bodyP = require('body-parser');
const cors = require('cors');
const port = process.env.port || 3001;
app.listen(port, () => console.log(`Server is live on ${port}`));

// Middleware
app.use(cors());
app.use(bodyP.json());
app.use(bodyP.urlencoded());

// MongoDB Setup
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dpg1919:Claptoncocaine13@cluster0.qf6dh.mongodb.net/tireInventory?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true 
})
.then(() => console.log('Mongoose is running!'))
.catch(ex => console.log('The mongoose is dead :/', ex));

// ROUTES
app.use(express.static('public'));

// import tire model
const Tire = require('./model');

app.post('/api/create_tire', async (req, res) => {
    const new_tire = new Tire({
        tireID: 1,
        width: 100,
        Aspect: 20,
        Rim: 100,
        Brand: 'Michelin',
        Model: 'AST',
        Speed: '120mph',
        Tread: 'durable',
        stockQty: 500,
        cost: 50,
        wholesale: 35,
        publicNotes: 'We got plenty',
        location: 'Omaha shop',
        privateNotes: 'Nothing to note',
        publicNotes: 'Buy now!',
        img: 'https://picsum.photos/200/200',
    });

    const save = await new_tire.save();
    res.send(save);
});

app.get('/api/retrieve_tires', async (req, res) => {
    const t = await Tire.find({});
    
    res.send(t);
});