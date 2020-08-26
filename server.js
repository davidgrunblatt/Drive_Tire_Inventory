
// Basic setup
const express = require('express');
const app = express();
const bodyP = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is live on ${PORT}`));

// MongoDB Setup
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dpg1919:Claptoncocaine13@cluster0.qf6dh.mongodb.net/tireInventory?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true 
})
.then(() => console.log('Mongoose is running!'))
.catch(ex => console.log('The mongoose is dead :/', ex));

// Middleware
app.use(cors());
app.use(bodyP.json());
app.use(bodyP.urlencoded());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('public')); 
}


// ROUTES
const Tire = require('./model');
const cdn = require('./routes');

// retrieve tires
app.use('/api/retrieve_tires', cdn);

// retrieve by all
app.get('/api/retrieve_by_both', async (req, res) => {
    try {
        const find = await Tire.find({
            "Brand": req.query.brand,
            "width": req.query.width,
            "Aspect": req.query.aspect
        });
    
        res.send(find);
    }
    catch(ex) {
        res.status(404).send('Could not find any matches');
    }
});

// retrieve by size
app.get('/api/retrieve_by_size', async (req,res) => {
    try {
        const find = await Tire.find({
            "width": req.query.width,
            "Aspect": req.query.aspect
        });
        console.log(find);
        res.send(find);
    }
    catch(ex) {
        console.log(ex);
    }
}); 

// retrieve by Brand
app.get('/api/retrieve_by_brand', async (req,res) => {
    try {
        const find = await Tire.find({
            "Brand": req.query.brand
        });

        if(!find) {
            const message = {
                msg: 'Not matches found...'
            }
            res.send(message);
        }
        res.send(find);
    }
    catch(ex) {
        res.status(404).send('Could not match your request');
        console.log(ex);
    }
});


app.post('/api/create_tire', async (req, res) => {
    const new_tire = new Tire({
        tireID: 6,
        width: 120,
        Aspect: 20,
        Rim: 100,
        Brand: 'GoodYear',
        Model: 'AST',
        Speed: '120mph',
        Tread: 'durable',
        stockQty: 200,
        cost: 150,
        wholesale: 80,
        publicNotes: 'We got plenty',
        location: 'Omaha shop',
        privateNotes: 'Nothing to note',
        publicNotes: 'Buy now!',
        img: 'https://picsum.photos/200/200',
    });

    const save = await new_tire.save();
    res.send(save);
});

