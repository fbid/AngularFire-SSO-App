import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase';
import { firebase } from '@firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
      //Sets the user Observable
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          //Gets the current Firebase auth state, if present retrieves user data from the Firebase db
          if(user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          }
          else {
            return of(null); //... otherwise returns an Observable of null
          }
        })
      )
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  signOut(){
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']); //redirect to homepage
    })
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then(credential => {
        this.updateUserData(credential.user);
        this.router.navigate(['dashboard']);
      })
  }

  // Sets user data to firestore after succesful login
  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data);
  }


}
