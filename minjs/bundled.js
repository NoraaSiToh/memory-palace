!function e(t,n,r){function o(a,i){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!i&&c)return c(a,!0);if(s)return s(a,!0);var E=new Error("Cannot find module '"+a+"'");throw E.code="MODULE_NOT_FOUND",E}var d=n[a]={exports:{}};t[a][0].call(d.exports,function(e){var n=t[a][1][e];return o(n?n:e)},d,d.exports,e,t,n,r)}return n[a].exports}for(var s="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";var r={WIDTH:window.innerWidth,HEIGHT:window.innerHeight,UNITSIZE:250};t.exports=r},{}],2:[function(e,t,n){"use strict";function r(){this.mesh=new THREE.Object3D;var e=new THREE.PlaneBufferGeometry(30,30),t=new THREE.MeshBasicMaterial({color:13421772}),n=new THREE.Mesh(e,t);this.mesh.add(n);var r=new THREE.PlaneBufferGeometry(15,30),o=new THREE.MeshBasicMaterial({color:16711680}),s=new THREE.Mesh(r,o);s.rotation.set(0,Math.PI/2,0),s.position.set(-15,0,7.5);var a=new THREE.MeshBasicMaterial({color:65280}),i=new THREE.Mesh(r,a);i.rotation.set(0,Math.PI/2,0),i.position.set(15,0,7.5);var c=new THREE.MeshBasicMaterial({color:255}),E=new THREE.Mesh(r,c);E.rotation.set(Math.PI/2,0,Math.PI/2),E.position.set(0,15,7.5),this.mesh.add(s),this.mesh.add(i),this.mesh.add(E)}var o=e("./constants").WIDTH,s=e("./constants").HEIGHT,a=o/s,i=(e("./constants").UNITSIZE,new THREE.Scene),c=new THREE.PerspectiveCamera(60,a,1,1e4);c.position.set(0,0,80),console.log(c.rotation),i.add(c);var E=e("./renderer"),d=2,h=-Math.PI/2-1.7,u=2,l=new r;l.mesh.rotation.set(d,h,u),i.add(l.mesh),console.log(l),E.render(i,c);var H=document.createElement("div");document.body.appendChild(H),H.appendChild(E.domElement)},{"./constants":1,"./renderer":3}],3:[function(e,t,n){"use strict";var r=e("./constants").WIDTH,o=e("./constants").HEIGHT,s=new THREE.WebGLRenderer;s.setClearColor(15790320),s.setSize(r,o),t.exports=s},{"./constants":1}]},{},[2]);