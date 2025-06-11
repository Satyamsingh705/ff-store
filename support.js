function searchHelp() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const faqItems = document.querySelectorAll('.faq-item');
    const categories = document.querySelectorAll('.category li');
    let resultsFound = false;
    
    // Skip search processing if term is empty
    if (searchTerm === '') return;
    
    // Clear previous highlighting
    document.querySelectorAll('.highlight-text').forEach(el => {
        el.outerHTML = el.textContent;
    });
    
    // Search through FAQ items
    faqItems.forEach(item => {
        const question = item.querySelector('h3').textContent.toLowerCase();
        const answer = item.querySelector('p').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = 'block';
            item.classList.add('active');
            // Show the answer
            const answerElement = item.querySelector('p');
            answerElement.style.display = 'block';
            // Add highlight animation
            item.style.animation = 'highlight 1s ease';
            
            // Highlight matching text
            highlightText(item, searchTerm);
            
            resultsFound = true;
        } else {
            item.style.display = 'none';
            item.classList.remove('active');
        }
    });
    
    // Search through categories
    categories.forEach(category => {
        const text = category.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            category.style.display = 'block';
            category.parentElement.style.display = 'block';
            // Add highlight animation
            category.style.animation = 'highlight 1s ease';
            
            // Highlight matching text
            highlightText(category, searchTerm);
            
            resultsFound = true;
        } else {
            category.style.display = 'none';
        }
    });
    
    // Show a message if no results were found
    const noResultsMsg = document.getElementById('noResultsMessage');
    if (!resultsFound && searchTerm.length > 0) {
        if (!noResultsMsg) {
            const msg = document.createElement('div');
            msg.id = 'noResultsMessage';
            msg.innerHTML = `No results found for "${searchTerm}". Please try another search term.`;
            msg.style.cssText = `
                text-align: center;
                padding: 20px;
                margin: 20px auto;
                background: rgba(255,255,255,0.1);
                border-radius: 8px;
                max-width: 600px;
            `;
            
            const searchContainer = document.querySelector('.search-container');
            searchContainer.parentNode.insertBefore(msg, searchContainer.nextSibling);
        } else {
            noResultsMsg.style.display = 'block';
            noResultsMsg.innerHTML = `No results found for "${searchTerm}". Please try another search term.`;
        }
    } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
}

// Helper function to highlight matching text
function highlightText(element, searchTerm) {
    if (!searchTerm) return;
    
    const walkText = (node) => {
        if (node.nodeType === 3) { // Text node
            const text = node.nodeValue;
            const lowercaseText = text.toLowerCase();
            const index = lowercaseText.indexOf(searchTerm);
            
            if (index >= 0) {
                const before = text.substring(0, index);
                const match = text.substring(index, index + searchTerm.length);
                const after = text.substring(index + searchTerm.length);
                
                const span = document.createElement('span');
                span.className = 'highlight-text';
                span.style.backgroundColor = 'rgba(255, 215, 0, 0.3)';
                span.style.padding = '0 2px';
                span.style.borderRadius = '3px';
                span.textContent = match;
                
                const fragment = document.createDocumentFragment();
                fragment.appendChild(document.createTextNode(before));
                fragment.appendChild(span);
                fragment.appendChild(document.createTextNode(after));
                
                node.parentNode.replaceChild(fragment, node);
            }
        } else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
            // Skip highlight-text nodes to prevent infinite recursion
            if (node.className !== 'highlight-text') {
                Array.from(node.childNodes).forEach(walkText);
            }
        }
    };
    
    // Clone to avoid modifying during traversal
    walkText(element.cloneNode(true));
}

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

// Implement live search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        // Add input event listener to detect typing and deleting
        searchInput.addEventListener('input', function() {
            // Call the search function whenever the input changes
            searchHelp();
        });
        
        // Add a small delay to prevent excessive searches during fast typing
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(function() {
                searchHelp();
            }, 300); // 300ms delay
        });
        
        // Clear search when the input is empty
        searchInput.addEventListener('input', function() {
            if (this.value.trim() === '') {
                // Reset all display when search is cleared
                const faqItems = document.querySelectorAll('.faq-item');
                faqItems.forEach(item => {
                    item.style.display = 'block';
                    item.classList.remove('active');
                    item.querySelector('p').style.display = 'none';
                });
                
                const categories = document.querySelectorAll('.category li');
                categories.forEach(category => {
                    category.style.display = 'block';
                    category.parentElement.style.display = 'block';
                });
                
                // Hide no results message if it exists
                const noResultsMsg = document.getElementById('noResultsMessage');
                if (noResultsMsg) {
                    noResultsMsg.style.display = 'none';
                }
            }
        });
    }
    
    // Initialize FAQ items (hide all answers)
    const faqAnswers = document.querySelectorAll('.faq-item p');
    faqAnswers.forEach(answer => {
        answer.style.display = 'none';
    });
});