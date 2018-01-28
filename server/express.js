// This is module is for development purposes (E2E integration)

 (function() {
	var express = require('express');
    var app = express();
    var morgan = require('morgan');
    var bodyParser = require('body-parser'); 
    var methodOverride = require('method-override'); 
    var serveStatic = require('serve-static');
    var serveFavicon = require('serve-favicon');
    var fs = require('fs');
    var path = require('path');

    app.set('showStackError', true);

    app.locals.pretty = true;

    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    app.use(methodOverride());
    app.use(serveStatic('app'));
    // app.use(serveFavicon('/../app/favicon.ico'));

    app.enable('jsonp callback');
    app.enable('trust proxy');

    app.get('/api/validateUser/:username/:password', function(request, response) {
        try {
            var usersData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'usersData.json'), 'UTF8'));
            for(var i = 0, length = usersData.users.length; i < length; i++) {
                if(usersData.users[i].username === request.params.username) {
                    if(usersData.users[i].password === request.params.password) {
                        response.status(200).send('User found');
                    } else {
                        response.status(404).send('Wrong password');
                    }
                } else {
                    response.status(404).send('No user data found');
                }
            } 
        } catch(error) {
           response.status(404).send('No user data found');
        }  
    });

    var server = app.listen(8080, function() {	
    	console.log('App is started to run');
    });

    module.exports = server;
})();