const typeWriter = function(i, num) {
  setTimeout(() => {
    process.stdout.write(sent[i]);
  }, num);
};

  
const sentence = function(sent) {
  for (let i = 0; i < sent.length; i++) {
    let num = 50 * i;
    typeWriter(i, num);
  }
};

const sent = "hello there from lighthouse labs";
sentence(sent);




//const sent = "hello there from lighthouse labs";
/*entence();
const delay = function(i) {
  setTimeout(() => {
    console.log(array[i]);
  }, (1000 * i * 2));
};
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  delay(i);
}*/