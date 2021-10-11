import {EmailTransporter} from '../interfaces/email-transporter-interface'

export let config: EmailTransporter = {
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT ?? 587),
    auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS
    }
}
