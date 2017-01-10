(function (){
  'use strict';
  var app = angular.module('dynamic-modal-form',[]);

  function DynamicModalFormController($timeout){
    var vm = this;    
    vm.currentIndex = 0;
    vm.itemsLength;
    vm.data = {};

    vm.next = function next(){
      vm.currentIndex += 1;
    };

    vm.finish = function finish(){
      console.log(vm.data);
    };

    function createData(fields) {
      var result = {};
      fields.forEach(function(field){
        result[field.name] = null;
      });
      return result;
    }

    function activate(){
        $timeout(function (){
            vm.data = createData(vm.fields);
            vm.itemsLength = vm.field.length;
        },1);
    }
    
    activate();
  }

  app.component('dynamicMform', {
    templateUrl: './component/dynamicModalForm.html',
    controller: ['$timeout', DynamicModalFormController],
    controllerAs: 'form',
    bindings: {
      fields: '='
    }
  }); 
  
  
})();