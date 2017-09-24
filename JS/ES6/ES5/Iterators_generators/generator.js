"use strict";

var _marked = [createIterator].map(regeneratorRuntime.mark);

function createIterator() {
  return regeneratorRuntime.wrap(function createIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          _context.next = 6;
          return 3;

        case 6:
          _context.next = 8;
          return 4;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
// generators are called like regular functions but return an iterator
var iterator = createIterator();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4