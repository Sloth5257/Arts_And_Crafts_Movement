// Start a socket connection to the server
// Some day we would run this server somewhere else
let socket;
socket = io.connect('https://172.20.10.2:3040');
let isIos;