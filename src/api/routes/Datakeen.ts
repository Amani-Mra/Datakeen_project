import {Router} from "express"
import {Datakeen} from "../models/DatakeenModel"

const router = Router();
router.get("/",async (req,res)=>{
   const datakeens =  await Datakeen.find()
   res.send(datakeens)
})
router.post("/store",async (req,res)=>{
    //const datakeen = new Datakeen(req.body)
    //return await datakeen.save()
    console.log(req.body)
}

)
export {router}