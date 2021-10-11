import nodemailer from 'nodemailer'
import { EmailTransporter } from '../interfaces/email-transporter-interface';


export class EmailEntity {
    
    constructor(private emailTransporter: EmailTransporter){

    }

    transporter(){
        const transporter = nodemailer.createTransport({
            host: this.emailTransporter.host,
            port: this.emailTransporter.port,
            auth: {
                user: this.emailTransporter.auth.user,
                pass: this.emailTransporter.auth.pass
            }
    
        });
        return transporter;
    }

    async send(email: string, body: string, final_user: string, title: string): Promise<object>{
        let transp = this.transporter();
        let response ={
            status: false
        }

        try {
            await transp.sendMail({
                from: final_user,
                to: email,
                subject: title,
                text: body
            })

            response.status = true;

            return response;
        } catch (error) {
            console.log(error);
            return response;
        }
    }


}