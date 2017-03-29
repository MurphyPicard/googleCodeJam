This is where I will solve the problems for Google Code Jam, both current year and last year.  30 points need to qualify.

My script source is what I'll change each time to run the functions.


The sheep counting function works.  7 points in the bag.  The question is: a sheep is trying to fall asleep and starts counting sheep with a number written on their fur.  The second sheep has the number * 2 on his fur, the third has the number * 3 and so on.  At what number will the sheep have seen all the digits 0-9 at least once.

For example: input 2, output 90
(because on the 45th sheep he will finally have seen the digit 9)

```js
function counting(n){

  if (n===0) console.log('INSOMNIA');

  var seenTheDigitsArray = [],
      nSplit = n.toString().split(""),
      sheep = 0;

  while(seenTheDigitsArray.length < 10){
      sheep ++;
      nSplit = (n * sheep).toString().split("");
      for (var i = 0; i < nSplit.length; i++){
          if($.inArray(nSplit[i], seenTheDigitsArray) === -1){
              seenTheDigitsArray.push(nSplit[i]);
              console.log("this is the seenit array: " + seenTheDigitsArray);
          }//if
      }//for
  }//while

  return parseInt(nSplit.join(""));
}
```
