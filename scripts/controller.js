(function (){
  'use strict';
  angular.module('app').controller('appController',[AppController]);
  
  function AppController () {
    var vm = this;
    vm.title="controller";
    vm.data = {name:'component'};

    vm.fields = [
      {
        type: "text",
        maxlength: 16,
        minlength: 5,
        name: "Name",
        pattern: '[aA-zZ]*',
        required: true
      },
      {
        type: "number",
        maxlength: 3,
        minlength: 1,
        name: "Age",
        pattern: '[1-9]{1}[0-9]*',
        required: true
      }
    ];
    
    function activate() {

    }
    
    activate();
  }
})();