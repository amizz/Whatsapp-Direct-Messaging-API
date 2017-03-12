# Whatsapp Direct Messaging API

## How to use

**Local**
```bash
$ git clone https://github.com/amizz/Whatsapp-Direct-Messaging-API.git
$ yarn install
$ yarn start
```
> Use NPM if Yarn is not available on your system. Replace yarn to npm when executing the command.

**Heroku**

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

##API

```
http://<domain>/<phonenum>
```
> Directly open whatsapp app to respective phone number as long as the phone number is registered on whatsapp.
> No message included.

```
http://<domain>/<phonenum>/<message>
```
> Directly open whatsapp app app to respective phone number. Message is automatically included.

##Note
> Phone number must include country code without '+' symbol.

**Example**
```
https://localhost:5000/60123456789
https://localhost:5000/60123456789/Hello!
```

##Compatibility
| OS            | Browser       | Status  |
| ------------- | ------------- | ------- |
| Windows 10    | Google Chrome | Success |
| Android 4.4.4 | Google Chrome | Success |

##License
MIT