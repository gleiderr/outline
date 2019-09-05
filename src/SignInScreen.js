import React, { useState, useEffect } from "react";
import firebase from "firebase";
import firebase_init from "./firebase-local";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

try {
  firebase.app();
} catch(err) {
  firebase_init();
}

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",

  // We will display Google and Facebook as auth providers.
  signInOptions: [
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    //firebase.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false
  }
};

const db = firebase.firestore();

export function SignInChat(props) {
  const [uid, setId] = useState(undefined);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => props.setLogin(!!user));
  }, []);

  if (!props.logged) {
    return (
      <>
        <div>Faça seu login com um dos métodos abaixo:</div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </>
    );
  }

  return (
    <>
      <div>Olá {firebase.auth().currentUser.displayName}! Tudo bem?</div>
      <div>
        Você está conectado! 
        <button onClick={() => firebase.auth().signOut()}>Sair</button>
      </div>
      
      
    </>
  );
}