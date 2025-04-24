//your JS code here. If required.
function manipulateArrayWithPromises() {
  // Step 1: Initial Promise (resolves after 3 seconds with the array)
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
  // Step 2: Filter even numbers (after 1 second)
  .then((array) => {
    return new Promise((resolve) => {
      const evenNumbers = array.filter(num => num % 2 === 0);
      setTimeout(() => {
        document.getElementById('output').textContent = evenNumbers.toString();
        resolve(evenNumbers);
      }, 1000);
    });
  })
  // Step 3: Multiply even numbers by 2 (after 2 more seconds)
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      const multiplied = evenNumbers.map(num => num * 2);
      setTimeout(() => {
        document.getElementById('output').textContent = multiplied.toString();
        resolve(multiplied);
      }, 2000);
    });
  });
}

// Call the function on page load
window.onload = manipulateArrayWithPromises;
