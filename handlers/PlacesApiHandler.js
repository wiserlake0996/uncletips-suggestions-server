'use strict'

var GooglePlaces = require('google-locations')
class PlacesApiHandler{

    constructor(){
        this.URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyAOaWvlJ8c5fuaDrsRE3s_fRKwHehYPbWE"
    }

    search(query, params, callback){
        var places = new GooglePlaces('AIzaSyDoZjpCCQtvuKH7GRv1dpW5BeCES987XKA')
        places.search({keyword: query, params}, function(err, response) {
            callback(err, response);
        })
    }

    textSearch(query, params, callback){
        var request = require('request');
        var url = this.URL+"&query="+encodeURIComponent(query)+"&"+this.jsonToUrl(params)
        console.log(url)

        request(url, function(error, response, body){

                callback(error, response, body)
        })

        request
    }

    jsonToUrl(jsonData){
        return Object.keys(jsonData).map(function(key){return encodeURIComponent(key) + '=' + encodeURIComponent(jsonData[key]);}).join('&');
    }

}

module.exports = PlacesApiHandler;