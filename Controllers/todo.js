var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var data = [];

module.exports = function (app) {
    app.get('/todo', function (req, res) {
        res.render('todo', { todos: data });
    });

    app.post('/todo', urlencodedParser, function (req, res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function (req, res) {
        console.log(req.params.item);
        data = data.filter(function (todo) {
            return todo.item != req.params.item;
        });
        res.json(data)
    });

}