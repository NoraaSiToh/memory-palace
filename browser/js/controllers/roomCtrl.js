module.exports = function ($scope, modalFactory, objectFactory, messageFactory, storingFactory, palacesFactory, constantsFactory) {

    $scope.welcomeModal = modalFactory.getWelcomeControls();
    $scope.numLoaded = percent(constantsFactory.getPalaceObjs().length, 19);
    function percent(a, total) {
      return Math.floor(a/total*100)
    }
    palacesFactory.on("load", (obj) => {
      $scope.numLoaded = percent(palacesFactory.palaceObjects.length, 19);
      $scope.$digest();
    });

    palacesFactory.on("sceneLoaded", () => {
      $scope.loaded = true;
      $scope.$digest();
    });

    $scope.signIn = function(){
      modalFactory.turnOffWelcome();
      modalFactory.toggleLogin();
    }
    $scope.objects = objectFactory.getObjects();
    $scope.showCarousel = modalFactory.getCarousel();
	  $scope.showModal = modalFactory.getMessageModal();
    $scope.sendMessage = function () {
      objectFactory.currentObject.message = $scope.message; 
      if (objectFactory.currentObject.message) {
       messageFactory.getObject().message = objectFactory.currentObject.message;
      }
      modalFactory.toggleMessageModal();
      storingFactory.storeMessage(messageFactory.getObject().position, $scope.message)
      $scope.message = null; 
    }

  	$scope.setCurrentObject = function (object) {
  	  objectFactory.setCurrentObject(object);
	  }

  	$scope.toggle = function () {
  		modalFactory.turnOffWelcome();	
  	}
  	$scope.getObjects = function () {
  		modalFactory.turnOffWelcome();
      modalFactory.toggleCarousel();
  		$scope.objects = objectFactory.getObjects();
  	}
}