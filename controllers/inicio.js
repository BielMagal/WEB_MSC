/*
  GET /
*/
exports.getInicio =  function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect('/mundo/' + req.user.mundo);
  }
  res.render('index');
}
