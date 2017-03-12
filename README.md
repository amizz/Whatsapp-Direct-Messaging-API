# Whatsapp Direct Messaging API
This API allows user to create a link to their whatsapp account without the needs to save the phone number. Using it on the desktop will start a conversation using Whatsapp Web while on mobile Whatsapp will automatically open and start a conversation.

It's more like 'Click to Whatsapp' thingy or maybe 'Surf to Whatsapp'. Have fun!

> You can also use the official one below.

## Features
1. You can use your own domain.
2. No more saving phone number just to start a conversation.
3. Directly open whatsapp application using web for desktop and app for mobile (the official api doesn't do this, will ask the user to click send button).

## Installation

###Local
```bash
$ git clone https://github.com/amizz/Whatsapp-Direct-Messaging-API.git
$ yarn install
$ yarn start
```
> Use NPM if Yarn is not available on your system. Replace yarn to npm when executing the command.

### Heroku

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


```
http://<domain>/whatsapp
```
> Directly open whatsapp and start conversation using predefined phone number. Go to app.js line 72 to change the phone number.


**Example**
```
http://localhost:5000/60123456789
http://localhost:5000/60123456789/Hello!
```

> Phone number must include the country code without '+' symbol.

## Compatibility
| OS               | Browser          | Status     |
| ---------------- | ---------------- | ---------- |
| Windows 10       | Google Chrome    | Success    |
| Android 4.4.4    | Google Chrome    | Success    |

## Specification
- Node.js - v4.8.0+
- Express - v4.15.2 

> This project was tested using Node.js v6.10.0

## Official Whatsapp 'Click to Chat' API
```
api.whatsapp.com/send?phone=<phonenum>text=<text>
```
This official API does't open Whatsapp automatically.

## License
Whatsapp Direct Messaging API is licensed under The MIT License. Please refer to the license file for more information.