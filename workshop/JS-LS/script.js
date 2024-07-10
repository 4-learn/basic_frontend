document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var gender = document.getElementById('gender').value;
    var terms = document.getElementById('terms').checked;

    if (username === "" || password === "" || email === "" || phone === "" || gender === "" || !terms) {
        alert('所有欄位必須填寫，並且同意條款和條件');
        return;
    }

    var formData = {
        username: username,
        password: password,
        email: email,
        phone: phone,
        gender: gender,
        terms: terms
    };

    localStorage.setItem('registerFormData', JSON.stringify(formData));
    console.log('Data saved to localStorage:', formData);

    document.getElementById('registerForm').submit();
});