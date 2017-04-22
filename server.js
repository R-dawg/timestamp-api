var express = require("express")
var app = express()
var moment = require("moment")

app.get('/:time', function (req, res) {
  var date = req.params.time
  var naturalTime = null
  var unixTime = null
  
  // if valid unix timestamp
  if(moment.unix(date).isValid()) {
    naturalTime = moment.unix(date).format("MMMM Do YYYY")
    unixTime = moment.unix(date).format("X")
  } 
  res.send(JSON.stringify({unix: unixTime, natural: naturalTime}))
})

app.listen(8080, function () {
  console.log('timestamp app listening on port 8080!')
})