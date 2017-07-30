function config($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('main', {
        url: "",
        "abstract": !0,
        template: require('./main.page.html'),
        module: 'public'
    })


    .state('login', {
      url: '/',
      parent: "main",
      template: require('./features/views/login.html'),
      controller: 'MainController'

    })

    .state('star', {
      url: '/star',
      template: require('./features/views/star.html'),
      controller: 'MainController'
    })
}

export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', config];