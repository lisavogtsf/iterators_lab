## current status:
* cloned to local repo
* group work with squad
* Phase-2, wrote test for min and implemented

# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working. 


### Phase-1

~~Research the following term and summarize your findings on it two to three sentences:~~

* `higher-order function` *A higher-order function is a function that operates on other functions.  This can be done by taking in a function as a parameter, creating a function or returning a function--all within a function.*

~~Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:~~


* `max` takes in an array as a parameter and returns the largest number from the array. If the input is an empty array, `max` returns -Infinity.  `var x = [3, 8, 2, 5].max();` `x = 2`
* `min` takes in an array as a parameter and returns the smallest number from the array. If the input is an empty array, `min` returns Infinity. `var x = [3, 8, 2, 5].min();` `x = 2`
* `each` takes in an array and a designated function as parameters. It applies the function to every item in the array. `each` returns an array of the result of running the function on each array item. `var x = each(list, action);` `x = [action(list[i]), action(list[i+1]), ... action(list[list.length - 1])]`
* `map` ...
* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) The `filter` function takes an array as input and returns an array of all items that successfully met the stated criteria. `var x = [3, 8, 2, 5, 12].filter(function(num){num % 4 === 0});` 
`x = [8, 12]`

* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) ...
* `reject`: [note](http://underscorejs.org/#reject) The `reject` function works like `filter` with reversed logic, so it takes in an array as a parameter and returns an array of only those items that did NOT meet the selection criteria stated. `var x = [3, 8, 2, 5, 12].reject(function(num){num % 4 === 0});` `x = [3, 2, 5]`

~~Use the notes provided to help guide you explanation.~~




### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```




