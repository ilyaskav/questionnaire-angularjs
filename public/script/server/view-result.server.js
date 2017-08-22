var app = require('../../../app.js');
var fileIO = require('./file-io.server.js');
var moment = require('moment');


module.exports = (req, res, next) => {

    fileIO.readObj().then(
        function (data) {  // успех

            data.forEach(function (item, i, data) {
                item.date = moment(item.date).format('MMMM Do YYYY, h:mm:ss a');
            });

            res.json(data);
        },
        function (reason) { // отказ  
            next(reason);
        });
}
