var express = require('express')

var app = express()

var TextProcessor = require('./handlers/TextProcessingHandler')
var PlacesApi = require('./handlers/PlacesApiHandler')
var FirebaseHandler = require('./handlers/FirebaseHandler')
var SuggestionsHandler = require('./handlers/SuggestionsHandler');

var params = {
    location:'40.803054,-73.991911',
    radius:500
}

app.listen(3450, function(){
    new SuggestionsHandler().listenForTodos();
})