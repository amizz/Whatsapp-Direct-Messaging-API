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
> Directly open whatsapp to respective phone number as long as the phone number is registered on whatsapp.
> No message included.

```
http://<domain>/<phonenum>/<message>
```
> Directly open whatsapp to respective phone number. Message is automatically included.