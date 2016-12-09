(function() {

  angular.module('myTeam')
    .factory('pokemonService', pokemonService);

  pokemonService.$inject = ['$http'];

  function pokemonService($http){
    return {
      get: get,

    };

    function get(name){
      return $http.get('https://pokeapi.co/api/v2/pokemon/' + name );
    };


  }


}());
