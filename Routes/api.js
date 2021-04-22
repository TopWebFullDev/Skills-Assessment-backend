let express = require('express')
let Route = express()
let redis = require('../Controllers/RedisController')
let common = require('../Controllers/CommonController')

Route.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// return instructions
Route.get('/', (req, res, next) => {
  res.send('Node-Redis CRUD Application | check Readme for instructions')
})

// get all experience
Route.get('/experience', redis.get_all_experiences)

// get all education
Route.get('/education', redis.get_all_educations)

// add a new experience
Route.post('/experience', redis.add_experience)

// add a new education
Route.post('/education', redis.add_education)

// delete
Route.delete('/education/:id', redis.delete_data)
Route.delete('/experience/:id', redis.delete_data)

// get random number
Route.get('/randomNumber', common.get_random_number)

module.exports = Route
