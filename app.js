// Packages
const express           = require('express'); // servidor
const expHbs            = require('express-handlebars');  // gerador de html
const bodyParser        = require('body-parser'); // adiciona as requisicoes em req.body
const session           = require('express-session');
const mongoose          = require('mongoose');  // mapeia bd
const MongoStore        = require('connect-mongo')(session);
// const expressValidator  = require('express-validator');
// Controllers
const conta_controller  = require('./controllers/conta');
const mundo_controller  = require('./controllers/mundo');
const inicio_controller = require('./controllers/inicio');
// Configuracoes
const bd_config = require('./config/banco');
const autenticacao_config  = require('./config/autenticacao');
const passport = autenticacao_config.passport;
const estaAutenticado = autenticacao_config.estaAutenticado;

let app = express();

// Conecta ao banco
mongoose.connect(bd_config.url);
mongoose.connection.on('error', () => {
  console.error('Erro ao conectar-se ao MongoDB.');
});


// Adiciona pacotes ao servidor
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: bd_config.session_secret,
  store: new MongoStore({ url: bd_config.url, autoReconnect: true })
}));
app.use(passport.initialize());
app.use(passport.session());

// Define as views
app.engine('.hbs', expHbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Rotas GET
app.get('/', inicio_controller.getInicio);
app.get('/login', conta_controller.getLogin);
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
app.get('/cadastro', conta_controller.getCadastro);
app.get('/mundo/:mundo', estaAutenticado, mundo_controller.getMundo);
app.get('/naoachou', conta_controller.getNaoAchou);

// Rotas POST
app.post('/cadastro', conta_controller.postCadastro);
app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, usuario, info) => {
    if (err) {
      return next(err);
    }
    if (!usuario) {
      return res.redirect('/login');
    }
    req.logIn(usuario, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/mundo/' + usuario.mundo);
    });
  })(req, res, next);
});

// Trata páginas não encontradas
app.use(function(req, res, next){
  res.status(404);
  res.format({
    default: function () {
      res.redirect('/naoachou')
    }
  })
});

// Inicia servidor
const server = app.listen(3000, () => {
  let host = server.address().address;
  const port = server.address().port;
  if (host.length == 2) {
    host = "localhost";
  }
  console.log(`Listening at http://${host}:${port}`);
});
