/*
  GET /mundo
*/
exports.getMundo =  function (req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  };
  let contexto = {};
  let isOwner = true;
  let mundo = req.params.mundo;
  // Verifica se este é o mundo do usuário atual
  if (mundo != req.user.mundo) {
    isOwner = false;
  }
  contexto.isOwner = isOwner;
  // Carrega os elementos da página ao contexto
  if (isOwner) {

  } else {

  }
  res.render('mundo', contexto);
}
