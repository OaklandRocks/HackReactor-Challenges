// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var nodes = [];
  var recursiveSearch = function(element) {
    var target = element.className.split(' ');
    if(target.indexOf(className) !== -1) {
      nodes.push(element);
    }
    for(var i =0; i<element.children.length; i++) {
      recursiveSearch(element.children[i]);
    }
  };
  recursiveSearch(document.body);
  return nodes;

};