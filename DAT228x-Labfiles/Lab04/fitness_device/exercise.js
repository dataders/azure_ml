var EventHubClient = require('azure-event-hubs').Client;

var connStr = '<EVENT_HUB_CONNECTION_STRING>';

var client = EventHubClient.fromConnectionString(connStr)
client.createSender()
    .then(function (tx) {
        setInterval(function(){
            usr = String(Math.floor((Math.random() * 10) + 1));
            hr = String(100 - (Math.random() * 5));
            bt = String(35 + Math.random());
            t = new Date().toISOString();
            console.log("User:" + usr + ", Heart: " + hr + ", Temp: " + bt);
            tx.send({eventtime: t, userid: usr, heartrate: hr, bodytemp: bt}); 
         }, 500);
    });
