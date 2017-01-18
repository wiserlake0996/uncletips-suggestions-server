'use strict'

var FirebaseHandler = require('./FirebaseHandler')
var TextProcessor = require('./TextProcessingHandler')
var PlacesApi = require('./PlacesApiHandler')

class SuggestionsHandler{

    listenForTodos(){
        var fire = new FirebaseHandler().getDatabaseRef();
        var listen = fire.ref('android/todo')
        var loca = fire.ref('android/locations')
        this.suggestionsRef = fire.ref('android/suggestions')


        listen.on('child_added', function(snap){

            this.generateSuggestion(snap.val())

        }.bind(this))

        listen.on('child_changed', function(snap){
            
            this.generateSuggestion(snap.val())

        }.bind(this))

        listen.on('child_removed', function(snap){
            this.removeSuggestion(snap.val())
        }.bind(this))
    }

    preprocessText(todo){
        return new TextProcessor().removeStopWords(todo.name)
    }


    addToSuggestions(todo, query){
        var updates = {}

        updates[todo.id + '/query'] = query
        this.suggestionsRef.update(updates)
        console.log("LOG: ", "added ", query)
    }

    removeSuggestion(todo){
        this.suggestionsRef.child(todo.id).remove();
    }

    generateSuggestion(snap){
        var processed = this.preprocessText(snap)
        this.addToSuggestions(snap, processed)
    }
}

module.exports = SuggestionsHandler;