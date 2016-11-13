var request = require("request");

exports.index = function(req, res){
     var acct = 1000;
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
  url: "http://api.reimaginebanking.com/accounts/efa40096eb52f12ba55aaa5f84d4da67/withdrawals?key=efa40096eb52f12ba55aaa5f84d4da67",
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
        res.redirect('/home');
      }
      });
      
   
       
  };
