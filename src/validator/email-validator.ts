import validator from "validator"
import {EmailResponse} from '../interfaces/email-response'

class EmailValidator{
    validateParts(email: string, body: string, final_user: string, title: string):EmailResponse{
        let response: EmailResponse = {status: true, errMsg: []}


        if(!validator.isEmail(email)){
            response.errMsg.push('email is invalid');
            response.status = false;
        }

        if(body.trim() == ""){
            response.errMsg.push('body is empty');
            response.status = false;
        }

        if(final_user.trim() == ""){
            response.errMsg.push('final_user is empty');
            response.status = false;
        }

        if(title.trim() == ""){
            response.errMsg.push('title is empty');
            response.status = false;
        }
        return response;
    }
}

export default new EmailValidator();