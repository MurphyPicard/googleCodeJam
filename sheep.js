process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}


function main(n){

  if (n===0) console.log('INSOMNIA');

  var seenTheDigitsArray = [],
      nSplit = (""+n).split(""),
      sheep = 0;

  while(seenTheDigitsArray.length < 10){
      sheep ++;
      nSplit = (""+(n * sheep)).split("");
      for (var i = 0; i < nSplit.length; i++){
          if($.inArray(nSplit[i], seenTheDigitsArray) === -1){
              seenTheDigitsArray.push(nSplit[i]);
              console.log("this is the seenit array: " + seenTheDigitsArray);
          }//if
      }//for
  }//while

  return parseInt(nSplit.join(""));
}
