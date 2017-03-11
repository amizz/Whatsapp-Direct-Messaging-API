/**
 * Whatsapp Direct Messaging API
 * Author: Amirul Zharfan Zalid
 * Web: amirulzharfan.com
 */

/***************************************/
/*******       Dependencies      *******/
/***************************************/
var express = require('express');
var app = express();
var useragent = require('express-useragent');
const port = process.env.PORT || 5000;

/***************************************/
/*******         Router          *******/
/***************************************/

/*
 * http://<domain>
 * Desciption: Main page
 */
app.get('/', (req, res) => {
    res.status(200).send('Hello to whatsapp direct message api. Developed by Amirul Zharfan Zalid - Github@amizz');
})

/*
 * http://<domain>/:phonenum
 * Desciption: Redirect url to respective whatsapp api interface without message text
 */
app.get('/:phonenum', (req, res) => {
    var source = req.header('user-agent');
    var ua = useragent.parse(source);

    if (ua.isDesktop) {
        res.status(308).redirect(`https://web.whatsapp.com/send?phone=+${req.params.phonenum}`);
    } else if (ua.isMobile) {
        res.status(308).redirect(`whatsapp://send?phone=+${req.params.phonenum}`);
    } else {
        res.status(400).json('Error');
    }
})

/*
 * http://<domain>/:phonenum/:message
 * Desciption: Redirect url to respective whatsapp api interface with message text
 */
app.get('/:phonenum/:message', (req, res) => {
    var source = req.header('user-agent');
    var ua = useragent.parse(source);

    if (ua.isDesktop) {
        res.status(308).redirect(`https://web.whatsapp.com/send?phone=+${req.params.phonenum}&text=${req.params.message}`);
    } else if (ua.isMobile) {
        res.status(308).redirect(`whatsapp://send?phone=+${req.params.phonenum}&text=${req.params.message}`);
    } else {
        res.status(400).json('Error');
    }
})

// Start server at <port>
app.listen(port, (err) => {
    console.log(`Available at http://localhost:${port}`);
    if (err) {
        console.log(err);
    }
})