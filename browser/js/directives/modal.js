module.exports = function ($document, modalFactory) {
  return {
        restrict: 'E',
        templateUrl: '/browser/js/templates/modal.html',
        controller: 'roomCtrl'
      //   link: function (scope, elem, attrs) {

      //     var blocker = document.getElementById( 'blocker' );

      //     //Enter button closes modal
      //     scope.toggle = function(){
      //       modalFactory.turnOffWelcome()
      //       blocker.style.display = 'none';
      //     };

      //     //Esc button closes modal
      //     $document.on('keydown', function(e){
      //       console.log('click')
      //       if (e.keyCode === 27){ //esc
      //         blocker.style.display = 'none';
      //       } 
      //     });    
      // }
  };
};