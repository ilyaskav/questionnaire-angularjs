var mongoose = require('mongoose');
var moment = require('moment');
var Questionnaire = mongoose.model('Questionnaire');

exports.add = (req, res) => {
    req.checkBody('codeQuality', 'Invalid code quality value').notEmpty().isInt();
    req.checkBody('suggestions', 'Suggestions should not be empty').notEmpty();
    req.checkBody('lengthOfSprint', 'Invalid length Of Sprint value').notEmpty().isInt();
    req.checkBody('name', 'Name is required').notEmpty();

    req.getValidationResult().then(function(result) {
        if (!result.isEmpty()) {
            res.status(400).send('There have been validation errors: ' + util.inspect(result.array()));
            return;
        }

        Questionnaire(req.body).save((err) => {
            if (err) {
                res.status(400).send('Could not get data');
            }

            res.status(200).send();
        });
    });
};

exports.list = (req, res, next) => {
    Questionnaire.find({}).exec((err, result) => {
        if (err) {
            next(err);
        }

        res.json(result);
    });
};
