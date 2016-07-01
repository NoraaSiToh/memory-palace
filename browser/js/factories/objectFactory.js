'use strict'

module.exports = function(){

function load (link, scale, name) {
    var loader = new THREE.ObjectLoader();
    return new Promise(function (res, rej) {
      loader.load(link, function(object){
        if(!scale) {
          a.getObjects().forEach(function(item){
            if(item.name === name) object.scale.set(item.scale,item.scale,item.scale);
          });
        }
        else object.scale.set(scale,scale,scale);
    
        var boundingBox = new THREE.BoundingBoxHelper(object);
        boundingBox.add(object);
        boundingBox.update();
      
        var cube = new THREE.Mesh(new THREE.BoxGeometry(boundingBox.box.max.x-boundingBox.box.min.x, boundingBox.box.max.y-boundingBox.box.min.y, boundingBox.box.max.z-boundingBox.box.min.z), 
        new THREE.MeshBasicMaterial({visible: false})); 
        cube.add(object); 
        res(cube);
      });
    });
  }
  var invisibleCube = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 50), 
        new THREE.MeshBasicMaterial({visible: false})); 

  var cache = {};

  var a = {
    getObjects : function(){
     return [{name: 'teapot', image: "./browser/images/teapot.png", scale: .3},
             {name: 'fox', image: "./browser/images/fox.png", scale: .3},
             {name: 'table', image: "./browser/images/table.png", scale: 10},
             {name: 'flower', image: "./browser/images/flower.png", scale: .2},
             {name: 'turtle', image: "./browser/images/turtle.png", scale: 12},
             {name: 'bed', image: "./browser/images/bed.png", scale: 15},
             {name: 'dress', image: "./browser/images/dress.png", scale: .5},
             {name: 'soccer-ball', image: "./browser/images/soccer-ball.jpg", scale: .07},
             {name: 'pink-bed', image: "./browser/images/pink-bed.png", scale: 15},
             {name: 'computer', image: "./browser/images/computer.png", scale: 5},
             {name: 'backgammon', image: "./browser/images/backgammon.png", scale: 3},
             {name: 'book', image: "./browser/images/book.png", scale: 1},
             {name: 'pokeball', image: "./browser/images/pokeball.jpg", scale: .03},
             {name: 'headphones', image: "./browser/images/headphones.jpg", scale: 2},
             {name: 'couch', image: "./browser/images/couch.png", scale: 20}];
    },
    invsibleObject: invisibleCube,
    currentObject: invisibleCube,
    setCurrentObject: function(object){
      var name = object.name;
      var scale = object.scale;
      (cache[name] || (cache[name] = load(`/browser/objects/${name}/${name}.json`, scale)))
        .then(function(obj){
          obj.name = name;
          obj.storageScale = scale;
          return obj;
        })
        .then(obj => {
        this.previousObject = this.currentObject;
        this.currentObject = obj;
      })
        
      //a[name].then(obj => this.currentObject = obj);
    },
    load: load
  };

  return a;
};