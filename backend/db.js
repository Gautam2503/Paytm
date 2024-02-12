const mongoose = require("mongoose");

const mongoDB = "mongodb://gautamnaggn357:Gautamcr735@ac-ntgkvga-shard-00-00.p3ybjep.mongodb.net:27017,ac-ntgkvga-shard-00-01.p3ybjep.mongodb.net:27017,ac-ntgkvga-shard-00-02.p3ybjep.mongodb.net:27017/?replicaSet=atlas-13x2iq-shard-0&ssl=true&authSource=admin"

mongoose.connect(mongoDB).then(() => console.log("connected to MongoDb successfully")).catch((err) => console.log(err));

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        maxLength: 30,
        trim: true 
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required : true
    },
    balance: {
        type: Number,
        required : true
    }
})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
    User, Account
};