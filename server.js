var express = require("express")
var app = express()
var http = require("http")
var url = require("url")
var timestamp = require("unix-timestamp")
var moment = require("moment")

app.get('/:time', function (req, res) {
  var time = new Date(req.params.time)
  if(time) {
  var unixTime = timestamp.fromDate(time).toString()
  var naturalTime = moment(time).format("MMMM Do YYYY")
  }
  // } else if(timestamp.toDate(req.params.time) {
  //   var naturalTime = moment(time).format("MMMM Do YYYY")
  // }
  res.send(JSON.stringify({unix: unixTime, natural: naturalTime}))
})

app.listen(8080, function () {
  console.log('timestamp app listening on port 8080!')
})