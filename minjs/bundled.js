!function e(n,r,t){function o(s,a){if(!r[s]){if(!n[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=r[s]={exports:{}};n[s][0].call(d.exports,function(e){var r=n[s][1][e];return o(r?r:e)},d,d.exports,e,n,r,t)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<t.length;s++)o(t[s]);return o}({1:[function(e,n,r){"use strict";var t={WIDTH:window.innerWidth,HEIGHT:window.innerHeight,UNITSIZE:250};n.exports=t},{}],2:[function(e,n,r){"use strict";var t=e("./constants").WIDTH,o=e("./constants").HEIGHT,i=t/o,s=e("./constants").UNITSIZE,a=new THREE.Scene,c=new THREE.PerspectiveCamera(60,i,1,1e4);c.position.set(0,0,.2*s),a.add(c);var u=e("./renderer"),d=new THREE.PlaneBufferGeometry(30,30),E=new THREE.MeshBasicMaterial({color:13421772}),f=new THREE.Mesh(d,E);f.rotation.set(2,-Math.PI/2-1.7,2),f.position.set(0,-5,0),a.add(f),u.render(a,c);var H=document.createElement("div");document.body.appendChild(H),H.appendChild(u.domElement)},{"./constants":1,"./renderer":3}],3:[function(e,n,r){"use strict";var t=e("./constants").WIDTH,o=e("./constants").HEIGHT,i=new THREE.WebGLRenderer;i.setClearColor(15790320),i.setSize(t,o),n.exports=i},{"./constants":1}]},{},[2]);