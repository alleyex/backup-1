import { Injectable, OnInit, AfterContentInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable, Subscription, Subject } from 'rxjs';

@Injectable()
export class AuthService {

    constructor() {
        this.changed();
    }

    getUser$ = new Subject<firebase.User>();

    changed() {
        firebase.auth().onAuthStateChanged((user) => { this.getUser$.next(user); });
    }

    registerByEmail(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    logged(): Promise<boolean> {
        const status = firebase.auth().currentUser ? true : false;
        return Promise.resolve(status);
    }

    getUser() {
        return firebase.auth().currentUser;
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

    loginWithEmail(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }



    loginWithFacebook() {
        const provider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    }

    loginWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    }

    sendVerification() {
        const user = firebase.auth().currentUser;
        if (!user.emailVerified) {
            return user.sendEmailVerification();
        }
    }

    resetPassword(email: string) {
        return firebase.auth().sendPasswordResetEmail(email);
    }
}
