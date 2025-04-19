function searchHelp() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    const categories = document.querySelectorAll('.category li');

    // Search through FAQ items
    faqItems.forEach(item => {
        const question = item.querySelector('h3').textContent.toLowerCase();
        const answer = item.querySelector('p').textContent.toLowerCase();
        
        if (question.includes(searchInput) || answer.includes(searchInput)) {
            item.style.display = 'block';
            item.classList.add('active');
        } else {
            item.style.display = 'none';
        }
    });

    // Search through categories
    categories.forEach(category => {
        const text = category.textContent.toLowerCase();
        category.style.display = text.includes(searchInput) ? 'block' : 'none';
    });
}

function toggleFaq(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Toggle the clicked item
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const issue = document.getElementById('issue').value;
    const message = document.getElementById('message').value;

    // Here you would typically send this data to your backend
    alert('Thank you for contacting support. We will get back to you soon!');
    
    // Clear the form
    event.target.reset();
}