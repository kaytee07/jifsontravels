import { Schema, models, model } from "mongoose";
import { date } from "zod";

const tourSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    numofpersons: {
        type: String,
        required: true
    },
    totalamt: {
        type: Number,
        required: true
    },
    packagetype: {
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Tours =  model("Toura", tourSchema);
export default Tours;