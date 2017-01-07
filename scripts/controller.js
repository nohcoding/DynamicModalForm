(function (){
  'use strict';
  angular.module('app').controller('appController',[AppController]);
  
  function AppController () {
    var vm = this;
    vm.title="controller";
    vm.data = {name:'component'};
    
    function activate() {

    }
    
    activate();
  }
})();