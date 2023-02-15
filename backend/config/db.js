const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        let con = await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
        });
    } catch (err) {
        console.log(err, "connection Error")
    }
}

module.exports = connectDB