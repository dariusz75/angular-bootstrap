app = angular.module('contactsMgr', ['ngRoute', 'ngAnimate'])

/* ##### Routs ##### */
/*
Trasy są tworzone za pośrednictwem metody config modułu aplikacji:

config(function($routeProvider){
})

ktory laczymy z modulem za pomoca metody chain, czyli poprzez dodanie kropki:

angular.module('contactsMgr', ['ngRoute'])
.config(function($routeProvider){
})

Metoda ta przyjmuje anonimową funkcję, do której wstrzykujemy niezbędną usługę
$routeProvider. Usługa ta oferuje tylko dwie metody: when oraz otherwise. Do tworzenia tras
służy metoda when, która przyjmuje dwa argumenty: ścieżkę w postaci łańcucha znaków oraz
opcje trasy w postaci obiektu:

angular.module('contactsMgr', ['ngRoute'])
.config(function($routeProvider){
$routeProvider.when('/', {
controller: 'homeCtrl',
templateUrl: 'assets/partials/home.html'
});


*/

app.config(function($routeProvider, $locationProvider){

    $routeProvider.when('/', {
        controller: 'homeCtrl',
        templateUrl: 'assets/partials/home.html'
    })
    .when('/add-contact', {
        controller: 'addCtrl',
        templateUrl: 'assets/partials/add.html',
        animation: 'first'
    })
    .when('/contact/:id', {
        controller: 'contactCtrl',
        templateUrl: 'assets/partials/contact.html'
    })
    .otherwise({
        redirectTo: '/'
    });

    // optional - usuwa # z adresu url
    $locationProvider.html5Mode(true);

})



.filter('truncate', function(){
    return function(input, limit){
        return (input.length > limit) ? input.substr(0, limit)+'…' : input;
    };
})

.factory('contacts', function(){

  contacts = [
              {
                name: 'Stefan Autorski',
                phone: '01234543210',
                email: 'steve228uk@gmail.com',
                address: 'al. Inna 12\nKrzyżówkowo\n11-111',
                website: 'gazeta.pl',
                notes: ''
              },
              {
                name: 'Roman Roamnow',
                phone: '01239998888',
                email: 'roman@gmail.com',
                address: 'al. Mostowa 12\nKrzyżówkowo\n11-111',
                website: 'onet.pl',
                notes: ''
              },
              {
                name: 'Stefan Stefanow',
                phone: '01238946372',
                email: 'stefan@gmail.com',
                address: 'al. Dluga 12\nKrzyżówkowo\n11-111',
                website: 'dziennik.pl',
                notes: ''
              }
              ];
  return {
          get: function(){
              return contacts;
          },
          find: function(index){
              return contacts[index];
          } 
        };
})


/*-----------------------------------
| home controller 
------------------------------------*/

.controller('homeCtrl', function($scope){

  $scope.pageClass = 'page-home';

})

/*-----------------------------------
| add controller 
------------------------------------*/

.controller('addCtrl', function($scope){

  $scope.pageClass = 'page-add';

})

/*-----------------------------------
| contact controller 
------------------------------------*/

.controller('contactCtrl', function($scope, $routeParams, contacts){

  $scope.pageClass = 'page-contact';
  $scope.contact = contacts.find($routeParams.id);

})

/*-----------------------------------
| index controller 
------------------------------------*/

.controller('indexCtrl', function($scope, contacts){

  $scope.contacts = contacts.get();

});


