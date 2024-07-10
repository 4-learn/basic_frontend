function handleSubmit(event) {
    event.preventDefault();

    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var dropdown = document.getElementById('dropdown').value;
    var agree = document.getElementById('agree').checked;
    var comments = document.getElementById('comments').value.trim();

    if (username === "") {
        alert('Username cannot be empty!');
        return false;
    }

    if (password === "") {
        alert('Password cannot be empty!');
        return false;
    }

    if (dropdown === "") {
        alert('Please select an option!');
        return false;
    }

    if (!agree) {
        alert('You must agree to the terms and conditions!');
        return false;
    }

    if (comments === "") {
        alert('Comments cannot be empty!');
        return false;
    }

    console.log('Form submitted');
    document.getElementById('myForm').submit();
}

