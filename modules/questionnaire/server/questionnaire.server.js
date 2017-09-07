var mongoose = require('mongoose');
var Questionnaire = mongoose.model('Questionnaire');

exports.add = (req, res) => {
    var post = Questionnaire(req.body).save((err) => {
        if (err){
            res.status(400).send('There have been validation errors: ');
        }
        
        res.status(200).send();
    });
};
