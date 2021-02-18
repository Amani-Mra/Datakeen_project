import * as mongoose from "mongoose"

const Datakeen = mongoose.model(
    "Datakeen",
    new mongoose.Schema({
        mot:{
            type: String,
            required: true,
        },
        startPosition:{
            type: Number,
            required: true,
        },
        endPosition:{
            type: Number,
            required: true,
        },
        important:{
            type: Boolean,
            required: false,
        },
    
    })
)
export{ Datakeen}
