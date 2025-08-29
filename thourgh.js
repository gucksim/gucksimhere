function toggleButton() {
    const checkbox = document.getElementById('agree');
    const button = document.getElementById('submitBtn');
    const button2 = document.getElementById('submitBtn2');
    
    if (checkbox.checked) {
    button.disabled = false;
    button.classList.add('enabled');
  } else {
    button.disabled = true;
    button.classList.remove('enabled');
  }

  if (checkbox.checked) {
    button2.disabled = false;
    button2.classList.add('enabled');
  } else {
    button2.disabled = true;
    button2.classList.remove('enabled');
  }
}

function discord() {
    alert(`My Discord: gucksimyt`);
}