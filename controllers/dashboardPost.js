/**
 * GET /
 */
 

exports.index = function(req, res) {
var request = require("request");
 if(!req.body.ID)
 {
  var user = {
  "first_name": req.body.first,
  "last_name": req.body.Last,
  "address": {
    "street_number": req.body.stNum,
    "street_name": req.body.stName,
    "city": req.body.city,
    "state": req.body.State,
    "zip": req.body.Zip
  }
};
var opts = {
  method: "POST",
  url: "http://api.reimaginebanking.com/customers?key=efa40096eb52f12ba55aaa5f84d4da67",
  json: true,
  headers: {
      "cache-control" : "no-cache",
      "content-type": "application/json",
  },
  body: user
};
  request(opts,function(err,data){
      if(err)
      {
          console.log(err);
      }
      else{
          var acct = 1000;
          var id = data._id;
          var user = {
  "type": "Credit Card",
  "nickname": "",
  "rewards": 0,
  "balance": 0,
  "account_number": acct.toString()
}
acct++;
         var opts = {
  method: "POST",
  url: "http://api.reimaginebanking.com/customers/5826f968360f81f10454780e/accounts?key=efa40096eb52f12ba55aaa5f84d4da67",
  json: true,
  headers: {
      "cache-control" : "no-cache",
      "content-type": "application/json",
  },
  id:id,
  body: user
};
request(opts,function(err,data){
      if(err)
      {
          console.log(err);
      }
      else{
          console.log(data);
        res.redirect('/home');
      }
      });
      
   
       
  }});
 }
 else
{
   var user = {
  "first_name": req.body.first,
  "last_name": req.body.Last,
  "address": {
    "street_number": req.body.stNum,
    "street_name": req.body.stName,
    "city": req.body.city,
    "state": req.body.State,
    "zip": req.body.Zip
  }
};
var opts = {
  method: "PUT",
  url: "http://api.reimaginebanking.com/customers?key=efa40096eb52f12ba55aaa5f84d4da67",
  json: true,
  headers: {
      "cache-control" : "no-cache",
      "content-type": "application/json",
  },
  id: req.body.ID,
  body: user
};
   request(opts,function(err,data){
      if(err)
      {
          console.log(err);
          
          return;
      }
      console.log(data.body);
      
    res.redirect('/home');
   });
}
};

