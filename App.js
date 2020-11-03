const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const notifyServiceSid = process.env.TWILIO_NOTIFY_SERVICE_SID;
const numbers = ['+########'];
const client = require('twilio')(accountSid, authToken);
const opNumbers = numbers.map(number => {
    return JSON.stringify({ binding_type: 'sms', address: number });
 });
client.notify
  .services(notifyServiceSid)
  .notifications.create({toBinding:opNumbers, body:'Your message to send.'})
  .then(notification => console.log(notification.sid))
  .catch(error => console.log(error));
