module.exports = function(app) {

  app.get('/users', function(req, res) {
    users.index(req, res);
  })
}
