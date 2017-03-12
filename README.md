# Whatsapp Direct Messaging API
This API allows user to create a link to their whatsapp account without the needs to save the phone number. Using it on the desktop will start a conversation using Whatsapp Web while on mobile Whatsapp will automatically open and start a conversation.

It's more like 'Click to Whatsapp' thingy or maybe 'Surf to Whatsapp'. Have fun!

## Installation

###Local
```bash
$ git clone https://github.com/amizz/Whatsapp-Direct-Messaging-API.git
$ yarn install
$ yarn start
```
> Use NPM if Yarn is not available on your system. Replace yarn to npm when executing the command.

###Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

##API

```
http://<domain>/<phonenum>
```
> Directly open whatsapp to respective phone number as long as the phone number is registered on whatsapp.
> No message included.

```
http://<domain>/<phonenum>/<message>
```
> Directly open whatsapp to respective phone number. Message is automatically included.

##Note
> Phone number must include the country code without '+' symbol.

**Example**
```
http://localhost:5000/60123456789
http://localhost:5000/60123456789/Hello!
```

##Compatibility
| OS               | Browser          | Status     |
| ---------------- | ---------------- | ---------- |
| Windows 10       | Google Chrome    | Success    |
| Android 4.4.4    | Google Chrome    | Success    |

##License
Whatsapp Direct Messaging API is licensed under The MIT License. Please refer to the license file for more information.