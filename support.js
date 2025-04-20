function searchHelp() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    const categories = document.querySelectorAll('.category li');

    // Add loading animation
    const searchButton = document.querySelector('.search-container button');
    searchButton.innerHTML = 'Searching...';
    searchButton.style.opacity = '0.7';

    setTimeout(() => {
        // Search through FAQ items
        faqItems.forEach(item => {
            const question = item.querySelector('h3').textContent.toLowerCase();
            const answer = item.querySelector('p').textContent.toLowerCase();
            
            if (question.includes(searchInput) || answer.includes(searchInput)) {
                item.style.display = 'block';
                item.classList.add('active');
                // Add highlight animation
                item.style.animation = 'highlight 1s ease';
            } else {
                item.style.display = 'none';
            }
        });

        // Search through categories
        categories.forEach(category => {
            const text = category.textContent.toLowerCase();
            if (text.includes(searchInput)) {
                category.style.display = 'block';
                // Add highlight animation
                category.style.animation = 'highlight 1s ease';
            } else {
                category.style.display = 'none';
            }
        });

        // Reset button
        searchButton.innerHTML = 'Search';
        searchButton.style.opacity = '1';
    }, 500);
}

function toggleFaq(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQ items with animation
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('p').style.maxHeight = '0';
    });

    // Toggle the clicked item with animation
    if (!wasActive) {
        faqItem.classList.add('active');
        const content = faqItem.querySelector('p');
        content.style.display = 'block';
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

function submitForm(event) {
    event.preventDefault();
    
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Add loading state
    submitButton.innerHTML = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const issue = document.getElementById('issue').value;
        const message = document.getElementById('message').value;

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.cssText = `
            background-color: #4CAF50;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            text-align: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        successMessage.innerHTML = 'Thank you for contacting support. We will get back to you soon!';
        
        event.target.appendChild(successMessage);
        
        // Fade in the message
        setTimeout(() => successMessage.style.opacity = '1', 10);
        
        // Reset the form and button
        event.target.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Remove the message after 5 seconds
        setTimeout(() => {
            successMessage.style.opacity = '0';
            setTimeout(() => successMessage.remove(), 300);
        }, 5000);
    }, 1500);
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Toggle FAQ answers
function toggleFaq(element) {
    // Find the answer paragraph which is the next sibling of the clicked h3
    const answer = element.nextElementSibling;
    
    // Check if the answer is currently visible
    const isVisible = answer.style.display === 'block';
    
    // Toggle the display property
    if (isVisible) {
        answer.style.display = 'none';
        element.classList.remove('active');
    } else {
        answer.style.display = 'block';
        element.classList.add('active');
    }
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const issue = document.getElementById('issue').value;
    const message = document.getElementById('message').value;
    
    // Here you would normally send the data to your server
    // For now, let's just show a success message
    alert(`Thank you, ${name}! Your message has been sent. We will respond to ${email} shortly.`);
    
    // Reset the form
    document.getElementById('supportForm').reset();
}

// Search functionality
function searchHelp() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    alert(`Searching for: ${searchTerm}`);
    // Implement actual search functionality here
}

// Initialize - hide all FAQ answers initially
document.addEventListener('DOMContentLoaded', function() {
    const faqAnswers = document.querySelectorAll('.faq-item p');
    faqAnswers.forEach(answer => {
        answer.style.display = 'none';
    });
});