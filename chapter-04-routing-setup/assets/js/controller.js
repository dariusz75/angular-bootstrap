angular.module('contactsMgr', ['ngRoute'])

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
opcje trasy w postaci właściwości obiektu:

angular.module('contactsMgr', ['ngRoute'])
.config(function($routeProvider){
$routeProvider.when('/', {
controller: 'indexCtrl',
templateUrl: 'assets/partials/index.html'
});


*/

.config(function($routeProvider, $locationProvider){

    $routeProvider.when('/', {
        controller: 'indexCtrl',
        templateUrl: 'assets/partials/index.html'
    })

    .when('/add-contact', {
        controller: 'addCtrl',
        templateUrl: 'assets/partials/add.html'
    })

    .when('/contact/:id', {
        controller: 'contactCtrl',
        templateUrl: 'assets/partials/contact.html'
    })

    .otherwise({
        redirectTo: '/'
    });

    // Opcjonalnie
    $locationProvider.html5Mode(true);

})

/*-----------------------------------
| Filter truncate
------------------------------------*/

.filter('truncate', function(){
    return function(input, limit){
        return (input.length > limit) ? input.substr(0, limit)+'…' : input;
    };
})

/*-----------------------------------
| controller index
------------------------------------*/

.controller('indexCtrl', function($scope){

})

/*-----------------------------------
| controller add
------------------------------------*/

.controller('addCtrl', function($scope){

})

/*-----------------------------------
| controller contact
------------------------------------*/

.controller('contactCtrl', function($scope, $routeParams){

    console.log($routeParams);

});
