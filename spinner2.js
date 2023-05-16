
const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

var delay = 100;  
for (const spinner of spinnerArray) {
  delay = delay + 200;
  setTimeout(() => {
    process.stdout.write(spinner);
  }, delay) 
}

