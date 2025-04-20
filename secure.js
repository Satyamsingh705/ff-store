// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Secure button functionality
const secureButton = document.getElementById('secureButton');

secureButton.addEventListener('mouseenter', () => {
  secureButton.style.transform = 'scale(1.05)';
});

secureButton.addEventListener('mouseleave', () => {
  secureButton.style.transform = 'scale(1)';
});

secureButton.addEventListener('click', () => {
  secureButton.style.transform = 'scale(0.95)';
  secureButton.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/128/4315/4315445.png" alt="Check" class="button-icon">
    <span>Verified Secure!</span>
  `;
  
  setTimeout(() => {
    secureButton.style.transform = 'scale(1)';
    secureButton.innerHTML = `
      <img src="https://cdn-icons-png.flaticon.com/128/2278/2278992.png" alt="Lock" class="button-icon">
      <span>Proceed with 100% Secure Payment</span>
    `;
  }, 2000);
});

// Security log functionality
const logEntries = document.getElementById('logEntries');
const securityLogs = [
  { time: '2 seconds ago', action: 'Encryption verified', status: 'success' },
  { time: '34 seconds ago', action: 'Payment gateway secured', status: 'success' },
  { time: '1 minute ago', action: 'Suspicious activity blocked', status: 'warning' },
  { time: '3 minutes ago', action: 'SSL certificate validated', status: 'success' }
];

function updateSecurityLogs() {
  logEntries.innerHTML = securityLogs.map(log => `
    <div class="log-entry">
      <img 
        src="${log.status === 'success' 
          ? 'https://cdn-icons-png.flaticon.com/128/4315/4315445.png'
          : 'https://cdn-icons-png.flaticon.com/128/1828/1828843.png'}"
        alt="${log.status}"
        class="log-icon"
        style="width: 16px; height: 16px;"
      >
      <span class="font-medium">${log.action}</span>
      <span class="text-gray-500 ml-auto">${log.time}</span>
    </div>
  `).join('');
}

updateSecurityLogs();

// Features section
const featuresGrid = document.querySelector('.features-grid');
const features = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/2278/2278992.png',
    title: 'Fraud Protection',
    description: 'Advanced algorithms detect and prevent fraudulent transactions before they occur.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/2278/2278992.png',
    title: 'End-to-End Encryption',
    description: 'All data is encrypted using military-grade 256-bit encryption from end to end.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/2278/2278992.png',
    title: 'PCI DSS Compliant',
    description: 'We maintain the highest level of PCI DSS compliance to protect your data.'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/2278/2278992.png',
    title: 'Secure Card Storage',
    description: 'Card details are tokenized and stored in isolated, secure environments.'
  }
];

featuresGrid.innerHTML = features.map(feature => `
  <div class="feature-card">
    <img src="${feature.icon}" alt="${feature.title}" style="width: 48px; height: 48px; margin-bottom: 1rem;">
    <h3 class="text-lg font-semibold mb-2">${feature.title}</h3>
    <p class="text-gray-600">${feature.description}</p>
  </div>
`).join('');

// Testimonials section
const testimonialsGrid = document.querySelector('.testimonials-grid');
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Online Retailer',
    content: 'The 100% Secure Payment feature has completely transformed how my customers feel about purchasing from my store.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Michael Rodriguez',
    role: 'E-commerce Director',
    content: 'Our chargebacks have decreased by 35% since implementing this secure payment solution.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Emma Thompson',
    role: 'Small Business Owner',
    content: 'This secure payment system has given my customers the confidence to complete their purchases.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

testimonialsGrid.innerHTML = testimonials.map(testimonial => `
  <div class="testimonial-card">
    <div class="flex items-center mb-4">
      <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
      <div class="ml-4">
        <h4 class="font-semibold">${testimonial.name}</h4>
        <p class="text-gray-600">${testimonial.role}</p>
      </div>
    </div>
    <p class="text-gray-700">${testimonial.content}</p>
  </div>
`).join('');

// FAQ section
const faqList = document.querySelector('.faq-list');
const faqs = [
  {
    question: 'How does the 100% Secure Payment system work?',
    answer: 'Our secure payment system uses multiple layers of protection including end-to-end encryption, tokenization, and advanced fraud monitoring.'
  },
  {
    question: 'What security certifications does your payment system have?',
    answer: 'Our payment system is PCI DSS Level 1 compliant, the highest level of certification available in the payments industry.'
  },
  {
    question: 'How do you handle customer payment data?',
    answer: 'We never store sensitive card details on our servers. Instead, we use tokenization to replace card numbers with unique identifiers.'
  }
];

faqList.innerHTML = faqs.map(faq => `
  <div class="faq-item">
    <div class="faq-question">
      <h3>${faq.question}</h3>
      <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt="Expand" style="width: 20px; height: 20px;">
    </div>
    <div class="faq-answer">${faq.answer}</div>
  </div>
`).join('');

// FAQ toggle functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('img');
    
    answer.classList.toggle('active');
    icon.src = answer.classList.contains('active')
      ? 'https://cdn-icons-png.flaticon.com/128/2985/2985150.png'
      : 'https://cdn-icons-png.flaticon.com/128/2985/2985150.png';
  });
});