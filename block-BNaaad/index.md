writeCode

- open REPL(in terminal)
- execute some javascript code, for example...`(2+2)`
- write a function to square a number

```javascript
function square(x) => x*x;
```

- Create a file named index.js with console.log('Welcome to Node.js') as script and run it using script processor mode (`node index.js`)

```powershell
node index.js
```

- add a for loop to sum integers from 1 to 10 in index.js and rerun the script.

```javascript
let sum = () => {
  for (var i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum;
};

console.log(sum);
```
