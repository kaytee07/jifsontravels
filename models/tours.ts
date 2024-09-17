import { Schema, models, model } from "mongoose";

const tourSchema = new Schema({
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

const Tours = models.Tours || model("Tours", tourSchema);
export default Tours;