const sentence = "hello there from lighthouse labs\n";
let delayMs = 0;
let delayMsIncrease = 50;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delayMs);
  delayMs += delayMsIncrease;
}