### EXERCISES

#### A)

1) Create a function named `forEach` that will accept two parameters `(array, function)`. The function should accept an array as its first argument, execute the `function` passed as the 2nd argument on each array element and push the result in a new array. Finally, return the new array.

```js
function forEach( array, function ){
    let newArray = [];
    // Your code here...
    return newArray;
}
```

Example:

```js
function doubleNumber( val ){
    return val + val;
}
const input = [ 1, 2, 3 ];
const output = forEach( input, doubleNumber );
// Output should be: [ 2, 4, 6 ]
```

2) Pass the `stock_prices` array into the `forEach` function you've just created along with a modifier function as the 2nd argument that will give back to us an array filled with the stock prices as Numbers. The output array should be named `stock_prices_num` and should look like this:

```js
[ 395.15, 336.32, 211.44, ..., 395.09 ]
```

3) Create a function that will accept the `stock_prices_num` array as input and return the [mean value](https://www.mathsisfun.com/mean.html).

---

The `stock_prices` array:

```js
const stock_prices = [
    { stock_price: "$395.15" 
    },{ stock_price: "$336.32"
    },{ stock_price: "$211.44"
    },{ stock_price: "$288.97"
    },{ stock_price: "$466.56"
    },{ stock_price: "$404.85"
    },{ stock_price: "$304.08"
    },{ stock_price: "$483.08"
    },{ stock_price: "$241.51"
    },{ stock_price: "$217.86"
    },{ stock_price: "$434.82"
    },{ stock_price: "$294.19"
    },{ stock_price: "$429.15"
    },{ stock_price: "$221.52"
    },{ stock_price: "$276.21"
    },{ stock_price: "$285.93"
    },{ stock_price: "$303.67"
    },{ stock_price: "$304.79"
    },{ stock_price: "$379.76"
    },{ stock_price: "$198.80"
    },{ stock_price: "$234.66"
    },{ stock_price: "$242.39"
    },{ stock_price: "$442.32"
    },{ stock_price: "$343.48"
    },{ stock_price: "$407.46"
    },{ stock_price: "$327.80"
    },{ stock_price: "$234.48"
    },{ stock_price: "$269.35"
    },{ stock_price: "$213.13"
    },{ stock_price: "$395.09"
    }
  ];
```

#### B)

1) Display a chart with all the stock prices.

2) Highlight the lowest and highest values with a red-ish and green-ish color respectively.

3) Can you animate each price bar in the chart with `CSS transitions`? You can use the `setTimeout` JS function for that.