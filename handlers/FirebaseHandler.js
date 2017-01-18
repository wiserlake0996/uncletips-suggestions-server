'use strict'

let INSTANCE = null

class FirebaseHandler{

    constructor(){

        if(!INSTANCE){
            INSTANCE = this;
        }

        var config = {
            apiKey: "AIzaSyAegXbDRHNPjfZBHiff-pfCkgffmPRn3gE",
            authDomain: "project-498884550770949653.firebaseapp.com",
            databaseURL: "https://project-498884550770949653.firebaseio.com",
            storageBucket: "project-498884550770949653.appspot.com",
            messagingSenderId: "871695198910"
        };

        var firebase = require('firebase');

        this.firebaseapp = firebase.initializeApp(config);

        return INSTANCE

    }

    getDatabaseRef(){
        return this.firebaseapp.database()
    }

}

module.exports = FirebaseHandler;