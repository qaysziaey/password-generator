
const generateBtn = document.getElementById("generate-btn");
const randomPassword = document.getElementById('textCopy');

// Generate Password
const chars = [
  "a", "b", "c", "d", "e",
  "A", "B", "C", "D", "E",
  "0", "1", "2", "3", "4",
  "!", "@", ".","-"
];

generateBtn.addEventListener("click", function(){
  randomPassword.textContent = getRandomPassword(12);
});

function getRandomPassword(length) {
  let password = '';
  for (var i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

// Copy to clipboard
const copyBtn = document.getElementById('copy-btn');
const area = document.querySelector('#textCopy')
const copiedText = document.getElementById('message');

copyBtn.addEventListener('click', function() {
  area.select();
  const copied = document.execCommand('copy');

  if (copied) {
    return copiedText.textContent = "Copied to clipboard";
  }
  else {
    return
  }
});


// Clear Password
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function() {
  randomPassword.textContent = " ";
})
const copied = document.execCommand('copy');




















////
