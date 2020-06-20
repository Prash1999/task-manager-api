const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
        sgMail.send({
            to: email,
            from: "gosaviprashantr19@gmail.com",
            subject: "Thanks for joining in!",
            text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,


        })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "gosaviprashantr19@gmail.com",
        subject: "Good Bye!",
        text: `Thanks for using our service, ${name}. Let us know if their is anything we can do for you` 
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}