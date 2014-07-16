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
    it("adding an 'it' counts as another test", function(){
      expect(Iterators.min([9,1])).to.equal(1);
    })

  } )


})