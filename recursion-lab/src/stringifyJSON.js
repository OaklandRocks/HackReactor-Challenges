// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'number') {
    return '' + obj;
  }
  if (typeof obj === 'boolean') {
    return '' + obj;
  }
  if(typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (obj === null) {
    return 'null';
  }
  if(Array.isArray(obj) && (obj.length === 0)){
      return '[]';
  } else {
    var results =[]
    for (var i=0; i<obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }
    return "[" + results.join(',') + "]" ;
  }
};