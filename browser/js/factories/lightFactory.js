'use strict'

module.exports = function() {
	return {
		ambientLight: function () {
			return new THREE.AmbientLight( 0x606060 );
		},
		directionalLight: function () {
			let directionalLight = new THREE.DirectionalLight( 0xaabbff );
			directionalLight.position.set( 1, 0.75, 0.5 ).normalize();
			return directionalLight;
		}
	}
}