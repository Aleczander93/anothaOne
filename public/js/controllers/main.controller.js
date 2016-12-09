(function() {
  angular.module('myTeam')
    .controller('MainController', MainController)

  MainController.$inject = ['$scope', 'pokemonService'];

  function MainController($scope, pokemonService){
    $scope.getPokemon = getPokemon;


    // $scope.pokemon = PokemonSummaryService.get();
    // $scope.searchPokemon = searchPokemon;

    function getPokemon(name){
      pokemonService.get(name)
      .then(function(response){
        $scope.pokemon = response.data;
      })
      // $scope.pokemon = '';
    }

  }

}());
