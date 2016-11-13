/**
 * GET /
 */
 var request = require('request');
exports.index = function(req, res) {
    request.get("http://api.reimaginebanking.com/customers?key=efa40096eb52f12ba55aaa5f84d4da67",function(err,data){
      return res.render('dashboard', {
        title: 'Home',
        data: JSON.parse(data.body)
    
      });
    });
};
