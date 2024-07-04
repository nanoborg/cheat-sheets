# Const and Let

`const` and `let` are new keywords for declaring variables. 

Where as declaring before would of looked like  

    var x = 1;

With ES6, you can now declare:  

    const x = 1;

or:

    let x = 1;

## Const

`const` is short for constant

* It literally means, declaring a variable that is constant.
* It can not be re-assigned.

If you assign `const` to a primitive type such as a string, number or boolean, you can't change it's value at all.

    const hi = 'hello'

    hi = 'goodbye' // will throw errors

## Clarifying Const Reassignment

`const` does not mean that the value can't be changed. we **_can_** change the value of an array object.

    const car = {
        make: 'vw',
        color: 'white',
        engine: 'turbo'
    }

    car.color = 'blue'

It is possible to change the values but not the name assigned to the object.

## Let

`let` has the same assignment rules as `var`

The value and reference of a `let` variable can change, so this will run with no errors:


## Let vs Var
`let` is used for scoping. Variables in JavaScript are **scoped** either globally or within an entire function. This refers to where the values are tracked.

* Because `var` in JavaScript is scoped to the nearest parent function, it can be a bit unpredictable.


        function varTest() {
            var x = 1;
            if (true) {
                var x = 2;  // The same variable!
                console.log(x);  // Prints 2.
            }
            console.log(x);  // This is going to print 2.
        }

        varTest(); // Prints 2

ES6 introduced `let` to fix the scoping issue.

Using `let` is more predictable than `var`.

* `let` is a **block scoped** variable, so its value is scoped to the nearest curly braces, rather than to the whole function. 

* Within a **loop**, `let` will create a new instance for each iteration, instead of changing the original variable.

        function letTest() {
            let x = 1;
            if (true) {
                let x = 2;  // Curly braces = different variable.
                console.log(x);  // Prints 2.
            }
            console.log(x);  // Prints 1.
        }    

Another scoping example:

    for(var i = 0; i<5; i++) {

    }

    console.log(i) // i value is 5, which accessible outside of the loop.

One more example:

    var array = []; // each loop will update i in the array. Changing to `let` will keep the scope within the loop the function

    for(var i=0; i<5;) {
        array.push({onclick: function() { 
            console.log('array: ', i);
            }}
        );
        i++
    }

    array[0].onclick(); // print array: 5
    array[1].onclick(); // print array: 5

Changing `var` to `let` will keep the scope within the **_loop_** function.

    const array = []

    for(let i = 0; i<5; i++) {
        array.push({onclick: function () {
            console.log('array: ', i)
        }})
        
    }

    array[1].onclick()

## Imports and Modules

In ES6, you can import modules directly without declaring them as global variables. 

* This makes namespacing your app a non-issue.
* Before module imports, namespace was often a primary concern in JavaScript

## What is name spacing?

Name spacing is the act of wrapping variables, functions or objects under the one umbrella. 

* In this example, **_start_** & **_stop_** are namespaced under `car.start()` & `car.stop()`

This will not pollute the global object, but they are still accessible from the outside thanks to the `car` object reference.

    const car = {
        start: () => {
            console.log('start')
        },
        stop: () => {
            console.log('stop')
        }
    }

## Import Multiple Modules

To **_export_** more than one module:

    export const addTwo = num => num + 2;
    export const addThree = num => num + 3;

To **_import_** more than one

    import { addTwo, addThree } from './file.js';

