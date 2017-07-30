import angular from 'angular';

var _this = null;

/**
 *
 */
class StarService {

    constructor($rootScope, $http) {
        this._http = $http;
        this._rootScope = $rootScope;
        
        _this = this;
        _this.baseUrl='http://swapi.co/api/';
    }

    
    user(username, cb) {
        _this._http.get(_this.baseUrl + 'people/?search=' + username).then(function onSuccess(response) {
            var data = response.data;
            if (response.status === 200 && data !== null) {
                cb(null, data);
            } 
        }).catch(function onError(response) { 
            cb('error', response.data);
        });
    }

    planet() {
        _this._http.get(_this.baseUrl + 'planets/').then(function onSuccess(response) {
            var data = response.data;
            if (response.status === 200 && data !== null && data.results.length > 0) {
                _this._rootScope.planetList = data.results;
                _this.planetDetail(data.next);
            }
        }).catch(function onError(response) { });
    }

    planetDetail(next) {
        _this._http.get(next).then(function onSuccess(response) {
            var data = response.data;
            if (response.status === 200 && data !== null && data.results.length > 0) {
                _this._rootScope.planetList  = angular.copy(_this._rootScope.planetList ).concat(data.results);
            }
            if(response.data.next != null){
                _this.planetDetail(response.data.next);
            }
        }).catch(function onError(response) { });
    }

    
}

StarService.$inject = ['$rootScope', '$http'];

export
    default
    angular
        .module('services.star-service', [])
        .service('StarService', StarService)
        .name;
