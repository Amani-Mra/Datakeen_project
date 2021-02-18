import * as express from "express";
import * as mongoose from "mongoose"
import {config} from "dotenv"
import {Datakeen} from "./models/DatakeenModel"
import {router as datakeen} from "./routes/Datakeen"

config()
console.log(process.env.DATAKEEN_MONGO_URI)
mongoose.connect(process.env.DATAKEEN_MONGO_URI as string).then(()=>{
    console.log("Connected")
})
const router = express.Router();
router.use(express.json())
router.use("/datakeen",datakeen)
export {router}
