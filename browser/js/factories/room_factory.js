module.exports = function() {
	return function () {
	  this.container = new THREE.Object3D()
	  this.objects = [];

	  var floorSize = 90
	  var wallSize = floorSize / 2

	  let floorGeometry = new THREE.PlaneBufferGeometry(floorSize, floorSize);
	  let floorMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
	  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	  
	  this.container.add(floor)
	  this.objects.push(floor);

	  let wallGeometry = new THREE.BoxGeometry(wallSize, floorSize, 1);
	  let wallMaterial1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
	  let wall1 = new THREE.Mesh(wallGeometry, wallMaterial1)
	  wall1.rotation.set(0, Math.PI / 2, 0)
	  wall1.position.set(-wallSize, 0, wallSize / 2)

	  let wallMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	  let wall2 = new THREE.Mesh(wallGeometry, wallMaterial2)
	  wall2.rotation.set(0, Math.PI / 2, Math.PI)
	  wall2.position.set(wallSize, 0, wallSize / 2)

	  let wallMaterial3 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
	  let wall3 = new THREE.Mesh(wallGeometry, wallMaterial3)
	  wall3.rotation.set(Math.PI / 2, 0, Math.PI / 2)
	  wall3.position.set(0, wallSize, wallSize / 2)

	  this.container.add(wall1);
	  this.container.add(wall2);
	  this.container.add(wall3);
	  this.objects.push(wall1);
	  this.container.rotation.set(-Math.PI/2, 0, 0);
	}
}

