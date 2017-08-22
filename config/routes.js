var express = require('express');
var engine = require('ejs-locals');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../public/script/server');
var logger = require(lib + '/logger.js');
var exHandler = require(lib + '/exception-handler.js');
var submitForm = require(lib + '/submit-form.server.js');
var viewResult = require(lib + '/view-result.server.js');


module.exports = function(app) {
    app.set('views', path.join(__dirname, '../public/views'));
    app.engine('ejs', engine);
    app.set('view engine', 'ejs');
    // middleware
    app.use(bodyParser.json());
    app.use(expressValidator()); // this line must be immediately after any of the bodyParser middlewares! 
    app.use(express.static('public'));
    app.use(logger);


    // app.get('/', function(request, response) {
    //     response.render('index', { title: 'Brandply questionnaire' });
    // });

    // app.get('/form', function(request, response) {
    //     response.render('form', { title: 'Brandply questionnaire: answer the questions' });
    // });

    app.route('/api/submitForm').post(submitForm);

    app.get('/api/results', viewResult);

    // app.get('/api/tests', function(req, res) {
    //     response.render('index', { title: 'Brandply questionnaire' });
    // });

    // app.use(function(req, res, next) {
    //     res.render('err/404', { title: 'Page was not found' });
    // });
    app.use(express.static('modules'));

    app.route('/*').get((req, res) =>{
        res.render('index', { title: 'Brandply questionnaire' });
    });

    app.use(exHandler);
};