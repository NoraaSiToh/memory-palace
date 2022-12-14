module.exports = function(constantsFactory) {
  return function() {
    this.container = new THREE.Object3D()

    var numShelves = 3;

    var stepHeight = 0;
    var stepDepth = 0;

    var width = 10;
    var height = 1;
    var length = 10;
    var geomShelf = new THREE.BoxGeometry(width, height, length);
    var matShelf = new THREE.MeshPhongMaterial({color: 0xff0000});

    for (var i = 0; i < numShelves; i++) {
      var shelf = new THREE.Mesh(geomShelf, matShelf);

      shelf.position.set(0, stepHeight, stepDepth);

      stepHeight += 8;
      stepDepth += 10;


      this.container.add(shelf);
      constantsFactory.setObjects([shelf]);
    }

    for (var i = 0; i < numShelves; i++) {
      var shelf = new THREE.Mesh(geomShelf, matShelf);

      shelf.position.set(0, stepHeight, stepDepth);

      stepHeight += 8;
      stepDepth += -10;

      this.container.add(shelf);
      constantsFactory.setObjects([shelf]);
    }

    for (var i = 0; i < numShelves; i++) {
      var shelf = new THREE.Mesh(geomShelf, matShelf);

      shelf.position.set(0, stepHeight, stepDepth);

      stepHeight += -8;
      stepDepth += -10;

      this.container.add(shelf);
      constantsFactory.setObjects([shelf]);
    }

    for (var i = 0; i < numShelves; i++) {

      var shelf = new THREE.Mesh(geomShelf, matShelf);

      shelf.position.set(0, stepHeight, stepDepth);

      stepHeight += -8;
      stepDepth += 10;

      this.container.add(shelf);
      constantsFactory.setObjects([shelf]);
    }
  }
}
