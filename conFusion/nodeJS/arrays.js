var arr = [
    1,
    true,
    {
        name: 'Vicente',
        lastName: 'Villegas'
    },
    function(name) {
        console.log('Hello '+name);
    },
    'this is a string'
];

console.log(arr);
arr[3](arr[2].name);