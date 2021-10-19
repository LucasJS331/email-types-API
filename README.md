# <img align="center" alt="Lucas-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg">  email-types-API <img align="center" alt="Lucas-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"> 
An API made with typescript responsible for sending email.

## 📍 How to run this project

```
# Will build the image and run Container

~ docker-compose up --build


```
## 🚦 Endpoints
```
GET/ --> returns a welcome message

POST/email/send -->  Will send the email 

    params:
        *title   //title of email
        *final_user   //name of the person who will receive the email
        *body     //email body
        *email  //target email
```

## 💡 This project uses:

- Typescript
- Express
- Docker
- Nodemailer

