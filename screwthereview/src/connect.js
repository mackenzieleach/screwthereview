var Connection = require('tedious').Connection;  
    var config = {  
        server: 'screwthereview.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
          userName: 'leachm26', // update me
          password: 'S3attle206!' // update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'ScrewtheReview'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });
    
    connection.connect();