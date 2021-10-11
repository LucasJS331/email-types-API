import { Router } from "express";
import emailValidator from "../validator/email-validator";
import { EmailEntity } from "../entity/email";
import { config } from "../config/transporter-config";
const emailRouter = Router();

emailRouter.post('/send', async (req,res)=>{
    let {email, body,final_user, title} = req.body;
    
    let response = emailValidator.validateParts(email,body,final_user, title);

    if(!response.status) return res.status(400).send(response.errMsg);

    let email_obj = new EmailEntity(config);

    await email_obj.send(email, body, final_user,title);
    res.send(`email was successfully sent to ${final_user} <${email}>`);
  
})

export default emailRouter;