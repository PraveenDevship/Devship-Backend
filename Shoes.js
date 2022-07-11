const mongoose = require('mongoose');

const put = mongoose.Schema;

const huser = new put ({
    name : {
        type : String,
        required : true,
        trim : true
    },
    prize : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        require : true
    }
})

const Shoes = mongoose.model("shoes", huser);

module.exports = Shoes;