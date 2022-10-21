import { Injectable } from "@nestjs/common";
// import Mail = require('nodemailer/lib/mailer');
import Mail from 'nodemailer/lib/mailer';
import * as nodemailer from "nodemailer";

interface EmailOptions {
    to: string;
    subject: string;
    html: string;
}

@Injectable()
export class EmailService {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
    }


    async sendMemberJoinVerification(email: string, signupVerifyToken: string) {
        // console.log(process);
        const baseUrl = 'http://localhost:3001';
        console.log(signupVerifyToken);
        const url = `${baseUrl}/auth/email-verify?signupVerifyToken=${signupVerifyToken}`;

        const mailOptions: EmailOptions = {
            to: email,
            subject: '가입인증메일',
            html: `
            가입 확인 버튼을 누르면 가입 인증 완료<br/>
            <form action="${url}" method="POST">
                <button>가입확인</button>
            </form>
            `
        }
    }
}