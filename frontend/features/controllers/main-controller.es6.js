var _this = null;

/**
 *
 */
class MainController {

    /**
     *
     * @param $rootScope
     */
    constructor($scope, $rootScope, $window, $location, $state, StarService) {
        this._scope = $scope;
        this._rootScope = $rootScope;
        this._window = $window;
        this._location = $location;
        this._state = $state;
        this._StarService = StarService;
        _this = this;
        _this._scope.planetList = [];
        _this._rootScope.planetList = [];
        _this._scope.planetList = angular.copy(_this._rootScope.planetList);
        _this._rootScope.$watch('planetList' ,function(){
            _this._scope.planetList = angular.copy(_this._rootScope.planetList);
        },true);
        _this._scope.login = function(){
            var username = _this._scope.username;
            var password = _this._scope.password;
            StarService.user(username, function(err, data){
                if(!err && data){
                    if(data.results.length > 0){
                        var flag = false;
                        data.results.forEach(function(d){
                            if(d.birth_year == password){
                                 flag = true;
                            }
                        });
                        if(flag === true){
                             _this._location.path('/star');
                            _this._StarService.planet()
                        }else{
                            alert('Password is not correct, please enter again');
                        }

                    }else{
                        alert('Username is not correct, please enter again');
                    }
                }else{
                    alert('Some error is there');
                }
            });
           
        }
    }
}

MainController.$inject = ['$scope', '$rootScope', '$window', '$location', '$state', 'StarService'];

export default MainController;
