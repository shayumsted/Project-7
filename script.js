// U78784426
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedbackForm');
    const feedbackDisplay = document.getElementById('feedbackDisplay');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value;

        if (!name ==='' || !rating ==='' || !comments ==='') {
            alert('All fields are required!');
            return;
        }

        const feedback = document.createElement('div');
        feedback.classList.add('feedback');
        feedback.innerHTML = `<h3>${name}</h3>
            <p>Rating: ${rating}</p>
            <p>${comments}</p>`;

        feedbackDisplay.appendChild(feedback);
        form.reset();});
});