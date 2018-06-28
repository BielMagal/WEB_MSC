// Packages
const express           = require('express'); // servidor
const expHbs            = require('express-handlebars');  // gerador de html
const bodyParser        = require('body-parser'); // adiciona as requisicoes em req.body
const session           = require('express-session');
const mongoose          = require('mongoose');  // mapeia bd
const MongoStore        = require('connect-mongo')(session);
// const passport          = require('passport');
// const expressValidator  = require('express-validator');
// Controllers
const conta_controller  = require('./controllers/conta');
const mundo_controller  = require('./controllers/mundo');
const inicio_controller = require('./controllers/inicio');
// Configuracoes
const bd_config = require('./config/banco');
// const passport  = require('./config/autenticacao').passport;

let app = express();

// Conecta ao banco
mongoose.connect(bd_config.url);
mongoose.connection.on('error', () => {
  console.error('Erro ao conectar-se ao MongoDB.');
});


//-----------
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const FacebookStrategy  = require('passport-facebook').Strategy;
// const GoogleStrategy    = require('passport-google-oauth20').Strategy;
const Usuario = require('./models/usuario');

passport.serializeUser(function(usuario, done) {
  done(null, usuario._id);
});

passport.deserializeUser(function(id, done) {
  Usuario.findById(id, function(err, usuario) {
    done(err, usuario);
  });
});

// Login com email e senha
passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'senha'
	},function(email, senha, next) {
    Usuario.findOne({ email: email }, function(err, usuario) {
      if (err) {
        throw err;
      }
      if (!usuario) {
        return next(null, false);
      }
      usuario.comparaSenha(senha, function (err, igual) {
        if (err) {
          throw err;
        }
        if (igual) {
          return next(null, usuario);
        }
        return next(null, false);
      });
    });
}));
//-----------


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
app.get('/cadastro', conta_controller.getCadastro);
// app.get('/mundo/:mundo', mundo_controller.getMundo(req, res, mundo));
app.get('/mundo', mundo_controller.getMundo);

// Rotas POST
app.post('/login', (req, res) => passport.authenticate(
  'local', { failureRedirect: '/login', })(req, res), conta_controller.postLogin);
// app.post('/login',
// estaAutenticado,
 // passport.authenticate('local', { failureRedirect: '/login' }),
  // conta_controller.postLogin);


app.post('/cadastro', conta_controller.postCadastro);

// Inicia servidor
const server = app.listen(3000, () => {
  let host = server.address().address;
  const port = server.address().port;
  if (host.length == 2) {
    host = "localhost";
  }
  console.log(`Listening at http://${host}:${port}`);
});
