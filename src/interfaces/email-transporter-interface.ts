import { Auth } from "./auth-interface";
export interface EmailTransporter {
    host: string | undefined,
    port: number,
    auth: Auth 
}