(function (){
  'use strict';
  var app = angular.module('dynamic-modal-form',[]);

  function DynamicModalFormController($timeout){
    var vm = this;    
    
    function activate(){
        $timeout(function (){
            console.log(vm);
        },1);
    }
    
    activate();
  }

  app.component('dynamicMform', {
    template: '<div>{{form.data.name}}</div>',
    controller: ['$timeout', DynamicModalFormController],
    controllerAs: 'form',
    bindings: {
      data: '='
    }
  }); 
  
  
})();