# javascript-unix-tree
 Pure javascript unix tree code

```js
// our array example
let array = [
  1,
  2,
  [3, 4, 5],
  {
    name: "Qandil",
    links: [
      "https://www.freelancer.com/u/wadielnatrontv",
      "https://www.facebook.com/qandilabdel.fadilawyan/",
    ],
    ex: [1, 2, 3, { say: "hello" }],
  },
];
```


## Simple result
```js

new output(
  new unix(array).output
);
/**
Output:
├── 1
├── 2
├── Array
│   ├── 3
│   ├── 4
│   └── 5
├── Object
│   ├── Qandil
│   ├── Array
│   │   ├── https://www.freelancer.com/u/wadielnatrontv
│   │   └── https://www.facebook.com/qandilabdel.fadilawyan/
│   ├── Array
│   │   ├── 1
│   │   ├── 2
│   │   ├── 3
│   │   ├── Object
│   │   │   └── hello
*/
```

## Simple result and full Array() details
```js

new output(
   new unix(array, {
    show_array_index: true,
    show_object_keys: false,
  }).output
);
/**
Output:
├── Array: 0
│   └── 1
├── Array: 1
│   └── 2
├── Array
│   ├── Array: 0
│   │   └── 3
│   ├── Array: 1
│   │   └── 4
│   ├── Array: 2
│   │   └── 5
├── Object
│   ├── Qandil
│   ├── Array
│   │   ├── Array: 0
│   │   │   └── https://www.freelancer.com/u/wadielnatrontv
│   │   ├── Array: 1
│   │   │   └── https://www.facebook.com/qandilabdel.fadilawyan/
│   ├── Array
│   │   ├── Array: 0
│   │   │   └── 1
│   │   ├── Array: 1
│   │   │   └── 2
│   │   ├── Array: 2
│   │   │   └── 3
│   │   ├── Object
│   │   │   └── hello
*/
```

## Simple result and full Object details
```js
new output(
  new unix(array, {
    show_array_index: false,
    show_object_keys: true,
  }).output
);
/**
Output:
├── 1
├── 2
├── Array
│   ├── 3
│   ├── 4
│   └── 5
├── Object
│   ├── Object: name
│   │   └── Qandil
│   ├── Array
│   │   ├── https://www.freelancer.com/u/wadielnatrontv
│   │   └── https://www.facebook.com/qandilabdel.fadilawyan/
│   ├── Array
│   │   ├── 1
│   │   ├── 2
│   │   ├── 3
│   │   ├── Object
│   │   │   ├── Object: say
│   │   │   │   └── hello
*/
```

## Simple result, full Array() and Object details
```js
new output(
  new unix(array, {
    show_array_index: true,
    show_object_keys: true,
  }).output
);
/**
Output:
├── Array: 0
│   └── 1
├── Array: 1
│   └── 2
├── Array
│   ├── Array: 0
│   │   └── 3
│   ├── Array: 1
│   │   └── 4
│   ├── Array: 2
│   │   └── 5
├── Object
│   ├── Object: name
│   │   └── Qandil
│   ├── Array
│   │   ├── Array: 0
│   │   │   └── https://www.freelancer.com/u/wadielnatrontv
│   │   ├── Array: 1
│   │   │   └── https://www.facebook.com/qandilabdel.fadilawyan/
│   ├── Array
│   │   ├── Array: 0
│   │   │   └── 1
│   │   ├── Array: 1
│   │   │   └── 2
│   │   ├── Array: 2
│   │   │   └── 3
│   │   ├── Object
│   │   │   ├── Object: say
│   │   │   │   └── hello
*/
``` 
