import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Injectable()
export class DatabaseService {
    // Set data
    set() {
        firebase.database().ref('/refName/childRef2').set('value!');
    }

    // Update data
    update() {
        const updates = {};
        updates['/refName/childRef2'] = 'hi you';
        updates['/anotherRefName'] = 'another value';
        updates['/numbers'] = 5;
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
