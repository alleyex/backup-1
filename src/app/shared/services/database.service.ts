import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { environment } from 'src/environments/environment';

@Injectable()
export class DatabaseService {

    constructor() {
        firebase.initializeApp(environment.firebase);
    }

    // Set data
    set() {
        firebase.database().ref('/refName/childRef2').set('value!');
    }

    // Update data
    update(node: string, data: any) {
        const key = firebase.database().ref().child(node).push().key;
        const updates = {};
        updates[node + key] = data;
        firebase.database().ref().update(updates);
    }

    // Delete data
    delete() {
        firebase.database().ref('/numbers').remove();
    }

    // Fetch Data
    fetch(): string {
        firebase.database().ref('refName').child('childRef').once('value')
            .then((snapshot) => {
                const exists = (snapshot.val() !== null);

                if (exists) {
                    console.log('Single Value: ', snapshot.val());
                    return snapshot.val();
                }
            })
            .catch((error) => {
                console.log('error: ', error);
            });
        return 'no data';
    }

    // Fetch data on added
    added() {
        firebase.database().ref('refName').on('child_added', (snapshot) => {
            const exists = (snapshot.val() !== null);

            if (exists) {
                console.log('On child added: ', snapshot.val());
            }
        });
    }
}
