// var firebase = require("firebase");
const firebase = require("firebase/app");
require("firebase/database");
var { author } = require("../../package.json");

const app = firebase.initializeApp({
  apiKey: "AIzaSyC5_hJCWRETQTDgrF1o8SB6yz9Qwz7VTJs",
  authDomain: "codenation-twitter.firebaseapp.com",
  databaseURL: "https://codenation-twitter.firebaseio.com",
  projectId: "codenation-twitter",
  storageBucket: "codenation-twitter.appspot.com",
  messagingSenderId: "942926902617",
  appId: "1:942926902617:web:2d0673d14ca32a65a58848"
});

export const registerCard = () => {
  return new Promise((resolve, reject) => {
    if (author) {
      console.log(`Encontrado autor "${author}"`);
      console.log(`Registrando Card.`);

      try {
        const database = app.database();
        const key = btoa(btoa(global.location.origin));
        const usersRef = database.ref(`users/${key}`);
        usersRef.set({
          name: author,
          domain: global.location.origin
        });
        resolve();
        console.log(`Registrado com sucesso`);
      } catch (err) {
        console.error(`Não foi possivel registrar o autor "${author}"`);
        console.error(err);
        reject();
      }
    } else {
      console.error(
        'Autor não definido, acesse o arquivo package.json e preencha o parametro "Author" com o seu nome'
      );
      reject();
    }
  });
};

export const serverRealTimeValues = (onUpdated = () => {}) => {
  console.log(`Buscando servidor`);

  try {
    const database = app.database();
    const usersRef = database.ref(`server`);
    usersRef.on("value", records => {
      onUpdated(records.val());
    });
  } catch (err) {
    console.error("Não foi possivel encontrar o servidor");
    console.error(err);
  }
};
