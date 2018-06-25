// Banco de dados
const bd_usuario = process.env.MONGODB_USER || 'admin';
const bd_senha = process.env.MONGODB_PASS || 'admin';
const bd_host = process.env.MONGODB_HOST || 'localhost';
const bd_porta = process.env.MONGODB_PORT || '27017';
const bd_nome = process.env.MONGODB_NAME || 'msc';

module.exports = {bd : 'mongodb://' + bd_usuario + ':' + bd_senha + '@' + bd_host + ':' + bd_porta + '/' + bd_nome};
