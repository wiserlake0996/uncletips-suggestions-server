'use strict'

class TextProcessingHandler{

    removeStopWords(text){
        var sw = require('stopword')
        return sw.removeStopwords(text.split(' ')).join(' ')
    }
}

module.exports = TextProcessingHandler;