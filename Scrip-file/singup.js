const singUpBtn = document
  .getElementById('btn-singup')
  .addEventListener('click', () => {
    const singupUserName = document.getElementById('singupUserName').value;
    // console.log('Name', singupUserName);
    const singupUserPass = document.getElementById('singupUserPass').value;
    // console.log('Pass', singupUserPass);
    
    if (singupUserName == 'admin' && singupUserPass == 'admin123') {
      
      alert('Login Successful');
      window.location.assign('index.html');
    } else {
      return alert('Invalid username or password')
    }

  });
