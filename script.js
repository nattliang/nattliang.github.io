function greetUser() {
    const name = document.getElementById('name').value;
    if (name) {
        document.getElementById('message').innerText = `Hello, ${name}! Welcome to my local webpage.`;
    } else {
        document.getElementById('message').innerText = 'Please enter your name.';
    }
}