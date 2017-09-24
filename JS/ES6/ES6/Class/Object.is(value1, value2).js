// Сравнение +0 и -0
alert( Object.is(+0, -0)); // false
alert( +0 === -0 );        // true

// Сравнение с NaN
alert( Object.is(NaN, NaN) ); // true
alert( NaN === NaN );         // false