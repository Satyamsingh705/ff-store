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
    name: 'Bhupinder Jogi',
    role: 'UP',
    content: 'Payment ke terms me bahot shi hai, 100% return milta hai, trust karo bina kisi tension ke.',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEgiOlcJ25T4Pq5PAqYqofOJITcfYIGaw8x1kfR6IkpV2rmVf2gFV-fsC4oZNPtZysTJ1-QM13fH-Cy83IyGcgSXCUV_iYgAp2icFJRZtvw8KWlwFEfUcGiI5iCZ4bWOVJ0y6N9qDMFW2hj6Vht4CC7fZNRthRgTtgclQOZoKbZUKwsUBv0OiVcIMjZfXTl2'
  },
  {
    name: 'Ramesh Yadav',
    role: 'Bengal',
    content: 'Hamne id kharida tha,pasand nhi aaya ,turant refund aa gya koi dikkat nhi hai',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEjRUFjdars2uxM9Lwlvg9J4eEOB82ndd79dywH59xrucDTQx2iX-fq7vCU5cPp0wyn3t0g8xmW5PeciDoXGnjJhBuuJY-NgduPcq_8x9gjkxWYOG7ugCbecStQ-aTn5pXB2pNiSH5NmFB0MA3e95t4OeFzBmHaG1R7CiPqZFwyHhTOUUbK3gr2fZiZVziYI'
  },
  {
    name: 'Shivanshu Singh',
    role: 'MP',
    content: 'I got 3 evo uncloked guns in just ₹499.Amazing deal!',
    image: 'https://blogger.googleusercontent.com/img/a/AVvXsEhwzhq2wV2eYZk98nGrY5TPnIouBE0_SfX3QpvKhhRvkEydHkoYXaLVggbNYHgk40oRXmEcJqlZdtzb92i92-Ljg60ps2xihWptbxj0p-Nb_ztQftTndgwc1j_a9phbhU4PiqnlJCtmD4uvNzMBfLlA65JdTt9KYVBA12dStxcxiwwpqA1hE2F-4N6C9IGF'
  },
  
];

// Update the testimonials rendering
testimonialsGrid.innerHTML = testimonials.map(testimonial => `
  <div class="testimonial-card">
    <div>
      <img src="${testimonial.image}" alt="${testimonial.name}">
      <div>
        <h4 class="font-semibold">${testimonial.name}</h4>
        <p class="text-gray-600">${testimonial.role}</p>
      </div>
    </div>
    <p class="text-gray-700">${testimonial.content}</p>
  </div>
`).join('');

// Update features rendering
featuresGrid.innerHTML = features.map(feature => `
  <div class="feature-card">
    <img src="${feature.icon}" alt="${feature.title}">
    <h3 class="text-lg font-semibold mb-2">${feature.title}</h3>
    <p class="text-gray-600">${feature.description}</p>
  </div>
`).join('');

// Update FAQ rendering
faqList.innerHTML = faqs.map(faq => `
  <div class="faq-item">
    <div class="faq-question">
      <h3>${faq.question}</h3>
      <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt="Expand">
    </div>
    <div class="faq-answer">${faq.answer}</div>
  </div>
`).join('');

// Update log entries
logEntries.innerHTML = securityLogs.map(log => `
  <div class="log-entry">
    <img 
      src="${log.status === 'success' 
        ? 'https://cdn-icons-png.flaticon.com/128/4315/4315445.png'
        : 'https://cdn-icons-png.flaticon.com/128/1828/1828843.png'}"
      alt="${log.status}"
      class="log-icon"
    >
    <span class="font-medium">${log.action}</span>
    <span class="text-gray-500 ml-auto">${log.time}</span>
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