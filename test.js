let text = "";
let i;
for (i = 1; i <= 100; i++) {
//    text += "The number is " + i + "\n";
    if (i % 3 === 0 && i % 5 === 0 ) {
        console.log("FizzBuzz " + i);
    } else {
        if( i % 3 == 0 ) {
            console.log("Fizz " +i );
        }
        if(i % 5 == 0) {
            console.log("Buzz "+ i);
        }

    } 
} 

