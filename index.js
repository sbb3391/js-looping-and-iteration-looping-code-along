// Code your solutions in this file

function writeCards(array, event) {
  let a = [];
  for(let i  = 0; i < array.length; i++) {
    a.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }

  return a;
}

function countDown(integer) {
  while(integer >= 0) {
    console.log(integer);
    integer -= 1;
  }
}