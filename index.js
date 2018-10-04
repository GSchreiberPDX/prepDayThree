var countTo = prompt('how high should we count even numbers?')

var sure = confirm('are ou sure you want to count to ' + countTo)

for(var i = 0; i < 100; i++) {
    var y = i % 2;
    if (y === 0) {
        console.log(i, 'is even');
    }
}

