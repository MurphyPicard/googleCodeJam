


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
