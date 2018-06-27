// Packages
const express       = require('express'); // servidor
const exp_hbs       = require('express-handlebars');  // gerador de html
const body_parser   = require('body-parser'); // adiciona as requisicoes em req.body
const session       = require('express-session');
const mongoose      = require('mongoose');  // mapeia bd
const MongoStore    = require('connect-mongo')(session);
// Controllers
const login_controller      = require('./controllers/login');
const cadastro_controller   = require('./controllers/cadastro');
const mundo_controller      = require('./controllers/mundo');
const inicio_controller     = require('./controllers/inicio');
// Banco
const bd_config = require('./config/banco');


// Conecta ao banco
// console.log(bd_config.bd);
mongoose.connect(bd_config.url);
mongoose.connection.on('error', () => {
  console.error('Erro ao conectar-se ao MongoDB.');
});

const app = express();

// Adiciona pacotes ao servidor
app.use(express.static(`${__dirname}/public`));
app.use(body_parser.urlencoded({
  extended: true
}));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: bd_config.session_secret,
  store: new MongoStore({ url: bd_config.url, autoReconnect: true })
}));

// Define as views
app.engine('.hbs', exp_hbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Rotas
app.get('/', inicio_controller.getInicio);
app.get('/login', login_controller.getLogin);
app.get('/cadastro', cadastro_controller.getCadastro);
app.post('/cadastro', cadastro_controller.postCadastro);
app.get('/mundo', mundo_controller.getMundo);

// Inicia servidor
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Listening at http://${host}:${port}`);
});
