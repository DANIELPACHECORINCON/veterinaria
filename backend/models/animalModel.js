import mongoose from "mongoose";

const animalSchema = mongoose.Schema({
    name: String,
    race: String,
    sexo: String,
    weight: Number,
    height: Number,
    health: String,
    age: Number,
    registerDate: {type: Date, default: Date.now}

});

const animal = mongoose.model("animals", animalSchema);

export default animal;
