import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
    constructor() {
        firebase.initializeApp(environment.firebase);
    }

    registerByEmail(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userObj) => console.log(email, password, userObj))
            .catch((error) => console.log('error logging in', error));
    }

    isLogin(): boolean {
        return firebase.auth().currentUser ? true : false;
    }

    checkState() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // logged in
                console.log('logged in', user);
            } else {
                // logged out
                console.log('logged out!');
            }
        });
    }

    signOut() {
        firebase.auth().signOut()
            .then(() => {
                console.log('logged out....');
            })
            .catch((error) => {
                console.log('error:', error);
            });
    }

    loginWithFacebook() {
        const provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log(result);

            })
            .catch((error) => {
                console.log('error:', error);

            });
    }
}
