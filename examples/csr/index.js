import _ from 'undertools';

console.log(_.map('hello world', x => x === 'l'));
console.log(_.map("hello world", x => x.charCodeAt(0)));
console.log(_.map([3, 5, 7, 9, 11], x => x * 2));
console.log(_.map([3, 5, 7, 9, 11]));

console.log(_.filter('hello world', x => x === 'o'));
console.log(_.filter([3, 5, 7, 9, 11], x => x > 5));
console.log(_.filter([3, 5, 7, 9, 11]));

_.forEach('hello world', x => console.log(x));
_.each('hello world', x => console.log(x));
_.each([3, 5, 7, 9, 11], x => console.log(x));

console.log(_.randArray([3, 5, 7, 9, 11]));

console.log(_.uniq('abracadabra'));
console.log(_.uniq([1, 2, 3, 1, 2, 3]));
console.log(_.join(_.uniq('abracadabra')));
console.log(_.join('abracadabra', ';'));
console.log(_.join([1, 2, 3], ';'));

console.log(_.inter("javascript", "internet", "text"));
console.log(_.inter([10, 5, 6, 9, 1], [1, 3, 5, 7, 9], [3, 10, 1, 5, 4]));
console.log(_.inter([1, 2, 1, 2, 1, 2]));

console.log(_.scale([3, 7, 12, 8, 1], 0, 20));
console.log(_.scale([3, 7, 12, 8, 1], 0, 20, false));

console.log(_.type(true));
console.log(_.type(3));
console.log(_.type(3.33));
console.log(_.type('string'));
console.log(_.type([1, 2, 3]));
console.log(_.type({ name: 'John' }));

console.log(_.rand(0, 10));
