(function (){
  'use strict';
  angular.module('app').controller('appController',[AppController]);
  
  function AppController () {
    var vm = this;
    vm.title="controller";
    vm.data = {};

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
        type: "text",
        maxlength: 32,
        minlength: 5,
        name: "Description",
        pattern: '[aA-zZ]*',
        required: false
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

    vm.formCompleate = function formCompleate(data){
      console.log(data);
    };
    
    function activate() {

    }
    
    activate();
  }
})();