var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');

describe('Iterators', function(){
  describe('#max', function(){
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67, 34];
    });
    it('should return the maximum in an array', function(){
      expect(Iterators.max(myArr)).to.equal(67);
    })    
    it('should return -Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    })
  })

  describe('#min', function(){
    it("should find the smallest", function(){
      expect(Iterators.min([4, 6, 2, 6])).to.equal(2);
    })
    it("testing an empty array, should return Infinity", function(){
      expect(Iterators.min([])).to.equal(Infinity);
    })
  })

  describe('#each', function(){
    // it("should give small increase", function(){
    //   var myArr = [1, 2, 3];
    //   var addOneToMe = function(num, index){
    //     return num + 1;
    //   };

    //   expect(Iterators.each(myArr, addOneToMe).to.equal([2, 3, 4]));
    // })
    // it("test the test"), function(){
    //   expect(true).to.equal(true);
    // }

    var myArr = [1,2,3,4];
    var x = 0;

    it('should call a function on each item in an array and return original array', function() {
      Iterators.each(myArr, function(currItem, index) { 
        x += currItem;
      });
      expect(x).to.equal(10);
    });

  }) 


})