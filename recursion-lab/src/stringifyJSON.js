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
  if(Array.isArray(obj)) {
    var results =[]
    for (var i=0; i<obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }
    return "[" + results.join(',') + "]" ;
  }
  // non array objects
  if(typeof obj === "object") {
     var results = [];
     for (var prop in obj) {
      var key = stringifyJSON(prop);
      var value = stringifyJSON(obj[prop]);
       if(typeof value !== "undefined"){
         results.push(key + ":" + value);
       }
     }
     return "{" + results.join(",") + "}";
   }
   if (typeof obj === undefined || typeof obj === "function") {
        return undefined;
   }
};
