const submitButton = document.querySelector('input[type=image]');
const inputField = document.getElementById("submit-button");

submitButton.addEventListener('click', function() {
    // Create a new file with the current timestamp as the filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `user-input-${timestamp}.txt`;
  
    // Write user input to the file
    const file = new Blob([userInput.value], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
  });
  