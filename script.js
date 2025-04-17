// Countdown Timer
function updateTimer() {
    const countdownElement = document.getElementById('countdown');
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
    reviews.forEach(review => {
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateTimer();
    displayReviews();
    initializeFAQ();
    initializeScrollAnimation();
    
    // Animate numbers with different targets and durations
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
    });
});