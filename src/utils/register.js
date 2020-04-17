var firebase = require("firebase");
var { author } = require("../../package.json");

const createApp = () => {
  return firebase.initializeApp({
    apiKey: "AIzaSyC5_hJCWRETQTDgrF1o8SB6yz9Qwz7VTJs",
    authDomain: "codenation-twitter.firebaseapp.com",
    databaseURL: "https://codenation-twitter.firebaseio.com",
    projectId: "codenation-twitter",
    storageBucket: "codenation-twitter.appspot.com",
    messagingSenderId: "942926902617",
    appId: "1:942926902617:web:2d0673d14ca32a65a58848"
  });
};

export default () => {
  if (author) {
    console.log(`Encontrado autor "${author}"`);
    console.log(`Registrando...`);

    try {
      const app = createApp();
      const database = app.database();
      const usersRef = database.ref(`users/${btoa(author)}`);
      usersRef.set({
        name: author,
        domain: global.location.href
      });
      usersRef.on("value", records => {
        console.log("Val", records.val());
      });
      console.log(`Registrado com sucesso`);
    } catch (err) {
      console.error(`Não foi possivel registrar o autor "${author}"`);
      console.error(err);
    }
    // process.exit();
  } else {
    console.error(
      'Autor não definido, acesse o arquivo package.json e preencha o parametro "Author" com o seu nome'
    );
  }
};
