const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else {
        alert('Message sent successfully!');
        form.reset();
    }
});
