// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

$ionicConfigProvider.tabs.position('top'); //bottom

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  // Newsfeed
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.dash-detail', {
    url: '/dash/:menuId',
    views: {
      'tab-dash': {
        templateUrl: 'templates/dash-detail.html',
        controller: 'DashDetailCtrl'
      }
    }
  })

  // Menu
  .state('tab.menus', {
    url: '/menus',
    views: {
      'tab-menus': {
        templateUrl: 'templates/tab-menus.html',
        controller: 'MenusCtrl'
      }
    }
  })
  .state('tab.chickfila', {
    url: '/menus/:menuId',
    views: {
      'tab-menus': {
        templateUrl: 'templates/chickfila.html',
        controller: 'ChickfilACtrl'
      }
    }
  })
  .state('tab.chipotle', {
    url: '/menus/:menuId',
    views: {
      'tab-menus': {
        templateUrl: 'templates/chipotle.html',
        controller: 'ChipotleCtrl'
      }
    }
  })
  .state('tab.shakeshack', {
    url: '/menus/:menuId',
    views: {
      'tab-menus': {
        templateUrl: 'templates/shakeshack.html',
        controller: 'ShakeShackCtrl'
      }
    }
  })
  .state('tab.starbucks', {
    url: '/menus/:menuId',
    views: {
      'tab-menus': {
        templateUrl: 'templates/starbucks.html',
        controller: 'StarbucksCtrl'
      }
    }
  })
  .state('tab.menus-detail', {
    url: '/menus/:menuId',
    views: {
      'tab-menus': {
        templateUrl: 'templates/menus-detail.html',
        controller: 'MenusDetailCtrl'
      }
    }
  })
  
  // Feedback
  .state('tab.feedback', {
      url: '/feedback',
      views: {
        'tab-feedback': {
            templateUrl: 'templates/tab-feedback.html',
            controller: 'FeedbackCtrl'
        }
      }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});