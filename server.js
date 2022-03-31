const express = require ( 'express' );
const rendertron = require('rendertron-middleware');
const app = express ();

const DIST_FOLDER = process . cwd () + '/dist' ;
const PORT = process . env . PORT || 8080 ;

const BOTS = rendertron.botUserAgents.concat('googlebot');
const BOT_UA_PATTERN = new RegExp(BOTS.join('|'), 'i');

app.set('view engine', 'html');


app.use(rendertron.makeMiddleware({
  proxyUrl: 'https://render.fueradelmolde.com/render',
  userAgentPattern: BOT_UA_PATTERN
}));

// Sirve recursos estáticos (imágenes, css, etc.)
app . get ( '*.*' , express . static ( DIST_FOLDER ));

// Dirige el resto de las URL a index.html en nuestra aplicación de página única
app . get ( '*' , ( req , res ) => {
res . sendFile ( DIST_FOLDER + '/index.html' );
});

// Inicia el servidor Express
app . listen ( PORT , () => {
console . log ( `Node Express server listening on http://localhost: ${ PORT } from ${ DIST_FOLDER } ` );

});