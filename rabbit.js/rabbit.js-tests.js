/// <reference path="./rabbit.js.d.ts" />
var rabbit = require('rabbit.js');
var context = rabbit.createContext();
context.on('ready', function () {
    console.log('ready');
});
var pub = context.socket('PUB');
var sub = context.socket('SUB');
var push = context.socket('PUSH');
var pull = context.socket('PULL');
var req = context.socket('REQ');
var rep = context.socket('REP');
var task = context.socket('TASK');
var worker = context.socket('WORKER');
pub.connect('chat');
pub.write('hello', 'utf8');
pub.close();
sub.connect('chat');
sub.on('data', function (msg) {
    console.log(msg);
});
sub.close();
rep.setEncoding('utf8');
rep.on('data', function (msg) {
    rep.write('msg', 'utf8');
});
rep.connect('uppercase');
req.connect('uppercase', function () {
    req.pipe(process.stdout);
});
push.connect('items', function () {
    pull.pipe(push);
});
push.close();
pull.connect('items', function () {
});
pull.close();
