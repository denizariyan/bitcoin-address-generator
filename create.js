var bitcoin = require('bitcoinjs-lib')
var wif = require('wif')
var db = require('diskdb');
var fs = require("fs");
var jsonfile = require('jsonfile')


db.connect('./database', ['keys']);

var maxnum = 10 //Put the number of addresses you want to generate to here

for (var i = 0; i < maxnum; i++) {
console.log("Current number of generated addresses:" + Number(i+1));
var keyPair = bitcoin.ECPair.makeRandom();
var address = keyPair.getAddress();
var publickey = keyPair.getPublicKeyBuffer().toString('hex');
var wifkey = keyPair.toWIF();
var privkey = wif.decode(wifkey);
var privatekey = Object.entries(privkey)[1][1].toString('hex');

var data = {
    address : address,
    public_key : publickey,
    wif_key : wifkey,
    private_key: privatekey
}

db.keys.save(data);
}
