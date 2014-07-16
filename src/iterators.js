
var Iterators = (function() {
  var api = {
    max: function(numList){
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] > max ) {
          max = numList[i];
        }
      };
      return max;
    },
    min: function(numList){
      var min = Infinity;
      for (var i = 0; i < numList.length; i++){
        if(numList[i] < min){
          min = numList[i];
        }
      }
      return min;
    }, 
    each: function(numList, action){
      var results = [];
      for (var i = 0; i < numList.length; i++){
        results[i] = action(numList[i], i);
      }
      return results;      
    }    

  };

  return api;
})();

module.exports = Iterators;