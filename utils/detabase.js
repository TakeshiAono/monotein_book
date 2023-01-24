const mongoose = require("mongoose");

const connectDB = async () => {
  try{
    await mongoose.connect("mongodb+srv://aono:aonodai3347@cluster0.vdsh6ht.mongodb.net/?retryWrites=true&w=majority");
    console.log("success: connected to MongoDB");
  }catch(err){
    console.log("Failure: Unconnected to MongoDB");
    throw new Error()
  }
};

module.exports = connectDB