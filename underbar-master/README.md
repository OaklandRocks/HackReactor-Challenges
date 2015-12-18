#Underbar Lab

You're going to recreate some of the functionality of the popular JS library Underscore.js.  Write all of the following methods inside of an `_` object. Run `jasmine` to see the tests fail and write the code necessary to make the tests pass.

**Fork this repo, push your code to your fork**

* average - returns the average value in a given array

```
_.average([4,6,1,1])
=> 3
```

* contains - returns true is a given value is present in an array

```
_.contains([7,55,99], 99);
=> true
```

* first - returns the first element in an array

```
_.first([5, 4, 3, 2, 1]);
=> 5
```

* last - returns the last element in an array

```
_.last([5, 4, 3, 2, 1]);
=> 1
```


* uniq - returns a new array with only uniq values

```
var numbers = [1, 1, 2, 2, 1000];
_.uniq(numbers);
=> [1,2,1000]
```

* max - returns the maximum value in an array


```
var numbers = [10, 5, 100, 2, 1000];
_.max(numbers);
=> 1000
```

* min - returns the minimum value in an array

```
var numbers = [10, 5, 100, 2, 1000];
_.min(numbers);
=> 2
```

* difference - returns the values from array that are not present in the other array.

```
_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
=> [1, 3, 4]
```

* indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.

```
_.indexOf([1, 2, 3], 2);
=> 1
```


* pluck - extracts a list of property values and returns them in an array.

```
  var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
=> ["moe", "larry", "curly"]
```


* compact - returns a new array with all provided undefined values removed

```
_.compact([1, "hello", undefined, 3, undefined]);
=> [1, "hello", 3]
```

* filter - Looks through each value in the list, returning an array of all the values that pass a truth test

```
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [2, 4, 6]
```

# Bonus (and super bonus)

* shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.  Don't worry about implementing that exact shuffle alogrithm.  Start by creating your own simple shuffle.

```
_.shuffle([1, 2, 3, 4, 5, 6]);
=> [4, 1, 6, 3, 5, 2]
```

* flatten - Turns a multidimensional array into a single array

```
flatten([1,2,[3,4,[5,6]]])
=> [1,2,3,4,5,6]
```