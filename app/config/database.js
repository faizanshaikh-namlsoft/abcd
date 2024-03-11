const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://admin:admin@multi-tenant.fx39lnt.mongodb.net/admindb');

const connectDb = async (req, res) => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@multi-tenant.fx39lnt.mongodb.net/admindb');
        console.log('DataBase Connected')
    } catch (error) {
        console.log(error);
    }
}

mongoose.set('debug', true);

module.exports = connectDb;
