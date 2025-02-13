// Form Validation
document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    
    if (email && password) {
      alert('Signed In Successfully');
    } else {
      alert('Please fill in all fields');
    }
  });
  
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    
    if (name && email && password) {
      alert('Signed Up Successfully');
    } else {
      alert('Please fill in all fields');
    }
  });
  