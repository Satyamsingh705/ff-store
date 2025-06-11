// Countdown Timer
function updateTimer() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    let [hours, minutes, seconds] = countdownElement.textContent.split(':').map(Number);
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 5; // Reset timer
                }
            }
        }
        countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Reviews System
const reviews = [
    { name: 'Arjun Mehta', time: '1:29 PM', rating: 5, text: 'April Mega Sale mein best bundles mile! Smooth delivery, loved it! 🎮' },
    { name: 'Ravi Sharma', time: '10:53 AM', rating: 5, text: 'First time purchase during April Mega Offer. Totally paisa vasool! 💯' },
    { name: 'Manoj Verma', time: '5:17 PM', rating: 5, text: 'April Sale में ID मिली, वो भी मैक्सिमम भी धमाकेदार 🔥' },
    { name: 'Sandeep Yadav', time: '11:07 AM', rating: 4, text: 'Rare items + Fast delivery = April Mega Deal 🔥🔥🔥' },
    { name: 'Vikas Choudhary', time: '2:27 PM', rating: 5, text: 'Superb collection during April offer. Ab main hamesha yahi se lunga! ⭐' },
    { name: 'Priya Singh', time: '3:45 PM', rating: 5, text: 'Best gaming deals I\'ve found! Super fast delivery and great support! 🌟' },
    { name: 'Rahul Kumar', time: '12:15 PM', rating: 5, text: 'Awesome bundle offers! Got more than expected. Highly recommended! 🎯' }
];

function displayReviews() {
    const container = document.getElementById('reviewContainer');
    if (!container) return;
    
    // First update all month references in the reviews
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const currentMonth = months[new Date().getMonth()];
    
    reviews.forEach(review => {
        // Replace any month name with the current month
        review.text = review.text.replace(/January|February|March|April|May|June|July|August|September|October|November|December/g, currentMonth);
        
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
            <div class="review-header">
                <span class="name">${review.name} ✓</span>
                <span class="time">Today | ${review.time}</span>
            </div>
            <div class="stars">${'⭐'.repeat(review.rating)}</div>
            <p>${review.text}</p>
        `;
        container.appendChild(reviewElement);
    });
}

// Animated Counter
function animateNumber(element, target, duration = 2000) {
    if (!element) return;
    
    const start = 0;
    const increment = (target - start) / (duration / 16);
    let current = start;

    const animate = () => {
        current += increment;
        if (current >= target) {
            current = target;
            element.textContent = Math.floor(current).toLocaleString();
            return;
        }
        element.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(animate);
    };

    animate();
}

// FAQ Interaction
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        if (!answer) return;
        
        answer.style.display = 'none';

        item.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            answer.style.display = isOpen ? 'none' : 'block';
            item.style.transform = isOpen ? 'translateX(0)' : 'translateX(10px)';
        });
    });
}

// Scroll Animation
function initializeScrollAnimation() {
    const elements = document.querySelectorAll('.product-card, .guarantee-card, .stat-card, .review');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
}

// Function to update date elements (both day and month)
function updateDateElements() {
    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", 
        "Thursday", "Friday", "Saturday"
    ];
    
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    
    // Get current date info
    const currentDate = new Date();
    const dayOfWeek = days[currentDate.getDay()];
    const currentMonth = months[currentDate.getMonth()];
    
    // Update the day of week in the banner
    const currentDayElement = document.getElementById('current-day');
    if (currentDayElement) {
        currentDayElement.textContent = dayOfWeek;
    }
    
    // Update the month in the header
    const currentMonthElement = document.getElementById('current-month');
    if (currentMonthElement) {
        currentMonthElement.textContent = currentMonth;
    }
    
    // Update month in title if needed
    if (document.title) {
        document.title = document.title.replace(
            /January|February|March|April|May|June|July|August|September|October|November|December/g, 
            currentMonth
        );
    }
}

// Initialize everything with a single event listener
document.addEventListener('DOMContentLoaded', () => {
    // Update dates first
    updateDateElements();
    
    // Initialize all components
    updateTimer();
    displayReviews();
    initializeFAQ();
    initializeScrollAnimation();
    
    // Animate counter numbers
    animateNumber(document.getElementById('productsSold'), 1574);
    animateNumber(document.getElementById('happyCustomers'), 942);
    animateNumber(document.getElementById('reviews'), 825);

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.buy-now, .featured-button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-3px)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0)';
        });
        
        // Add click handler for Buy Now buttons that aren't video buttons
        if (!button.classList.contains('buy-now') && !button.classList.contains('modal-buy-button')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'qr.html';
            });
        }
    });
});

// Check for date changes regularly
setInterval(updateDateElements, 60000); // Update every minute
// Video Modal Functionality
function setupVideoModal() {
    // Get modal elements with existence check
    const modal = document.getElementById('videoModal');
    if (!modal) {
        console.warn("Modal element not found. Add the modal HTML to your page.");
        return;
    }
    
    const modalVideoContainer = document.getElementById('modalVideoContainer');
    const closeBtn = document.querySelector('.close-modal');
    
    if (!modalVideoContainer || !closeBtn) {
        console.warn("Modal container or close button not found");
        return;
    }
    
    // Collection of video IDs with default fallback
    const videoIds = {
        '⚡ Level 71 Season1 Bundle ⚡': 'lSRkcjx7o_A',
        '⚡ Level 65 Elite Package ⚡': 'AhMiM9eZMH0',
        '⚡ Level 67 Evo Unlocked ⚡':'CtU6kujaZRM',
        '⚡ Level 80 All Evo Unlocked ⚡':'elZNDAyGX8o',
        '⚡ Level 75  💥⚡':'TMlP1kKkOvM',
        '🎯 Level 74 ✨': 'GMhugkhZYE8',
        //'default': '' // Default video if no match is found
    };
    
    // Add click handlers to all "WATCH COLLECTION | Buy Now" buttons
    const watchButtons = document.querySelectorAll('.buy-now');
    watchButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent direct WhatsApp redirect
            
            // Find the product title from the parent card
            const card = this.closest('.product-card');
            const productTitle = card ? card.querySelector('h3').textContent.trim() : '';
            
            // Get the appropriate video ID or use default
            const videoId = videoIds[productTitle] || videoIds['default'];
            
            // Create the iframe element with error handling
            modalVideoContainer.innerHTML = `
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                    title="Product Video" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <div id="videoError" style="display:none; color:white; text-align:center; padding:20px; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); background:rgba(0,0,0,0.7); border-radius:10px; width:80%;">
                    Video cannot be loaded. <a href="https://youtu.be/${videoId}" target="_blank" style="color:#f59e0b;">Watch on YouTube</a> instead.
                </div>
            `;
            
            // Show the modal
            modal.style.display = 'block';
        });
    });
    
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', function() {
        closeModal();
    });
    
    // Update the modal Buy Now button to go to qr.html
    const modalBuyButton = document.querySelector('.modal-buy-button');
    if (modalBuyButton) {
        modalBuyButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'qr.html';
        });
    }
    
    // Close modal when clicking outside of the content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
        modalVideoContainer.innerHTML = ''; // Remove the iframe
    }
}

// REMOVE THE DUPLICATE EVENT LISTENER (lines 192-216)
// Keep only one DOMContentLoaded event listener - this one:
document.addEventListener('DOMContentLoaded', () => {
    // Update dates first
    updateDateElements();
    
    // Initialize all components
    updateTimer();
    displayReviews();
    initializeFAQ();
    initializeScrollAnimation();
    setupVideoModal(); // This will now work correctly
    
    // Animate counter numbers
    animateNumber(document.getElementById('productsSold'), 1574);
    animateNumber(document.getElementById('happyCustomers'), 942);
    animateNumber(document.getElementById('reviews'), 825);

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.buy-now, .featured-button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-3px)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0)';
        });
        
        // Add click handler for Buy Now buttons that aren't video buttons
        if (!button.classList.contains('buy-now') && !button.classList.contains('modal-buy-button')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'qr.html';
            });
        }
    });
});