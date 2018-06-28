// Banco de dados
const bd_usuario = process.env.MONGODB_USER || 'admin';
const bd_senha = process.env.MONGODB_PASS || 'admin';
const bd_host = process.env.MONGODB_HOST || 'localhost';
const bd_porta = process.env.MONGODB_PORT || '27017';
const bd_nome = process.env.MONGODB_NAME || 'msc';
const session_secret = process.env.SESSION_SECRET || 'keyboard cat';

const urlLocal = 'mongodb://' + bd_usuario + ':' + bd_senha + '@' + bd_host + ':' + bd_porta + '/' + bd_nome;
const urlRemota = 'mongodb://admin:admin2018@ds221271.mlab.com:21271/msc';

module.exports = {
  // url: urlRemota,
  url : urlLocal,
  session_secret: session_secret
};
