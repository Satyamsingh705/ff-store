const testimonials = [
  {
    name: "Alex Chen",
    rating: 5,
    text: "Been using this service for over a year. Always reliable and secure transactions. The customer support team is incredibly responsive!",
    date: "2 weeks ago",
    verified: true,
    purchaseCount: 12
  },
  {
    name: "Sarah Miller",
    rating: 5,
    text: "Best Free Fire service provider I've found. Their customer support is amazing and the delivery is instant!",
    date: "1 month ago",
    verified: true,
    purchaseCount: 8
  },
  {
    name: "Mike Rodriguez",
    rating: 5,
    text: "Fast delivery and great prices. The verification process made me feel secure about my purchase. Highly recommended!",
    date: "3 weeks ago",
    verified: true,
    purchaseCount: 15
  },
  {
    name: "Emma Thompson",
    rating: 5,
    text: "Absolutely reliable service! The security measures they have in place are impressive. Will definitely use again!",
    date: "1 week ago",
    verified: true,
    purchaseCount: 6
  }
];

const securityCertifications = [
  { name: "SSL Secure", icon: "fas fa-lock" },
  { name: "Anti-Fraud Protection", icon: "fas fa-shield-alt" },
  { name: "Money-Back Guarantee", icon: "fas fa-undo" },
  { name: "Verified Business", icon: "fas fa-building" },
  { name: "Secure Payments", icon: "fas fa-credit-card" }
];

const stats = [
  { icon: "fas fa-users", number: "50K+", label: "Satisfied Customers" },
  { icon: "fas fa-shield-alt", number: "100%", label: "Secure Transactions" },
  { icon: "fas fa-headset", number: "24/7", label: "Customer Support" },
  { icon: "fas fa-clock", number: "2 Years", label: "Market Experience" }
];

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="header">
      <div class="trust-banner">
        <i class="fas fa-shield-check"></i>
        Official Partner & Authorized Seller
      </div>
      <h1>Free Fire Trusted Partner</h1>
      <div class="verification-badges">
        <div class="badge">
          <i class="fas fa-check-circle"></i>
          Verified Seller
        </div>
        <div class="badge">
          <i class="fas fa-medal"></i>
          Top Rated
        </div>
        <div class="badge">
          <i class="fas fa-certificate"></i>
          Licensed Partner
        </div>
        <div class="badge">
          <i class="fas fa-star"></i>
          Premium Service
        </div>
      </div>
      <p class="trust-message">Trusted by over 5000 players All Over India</p>
    </header>

    <div class="security-bar">
      ${securityCertifications.map(cert => `
        <div class="security-item">
          <i class="${cert.icon}"></i>
          <span>${cert.name}</span>
        </div>
      `).join('')}
    </div>

    <div class="stats">
      ${stats.map(stat => `
        <div class="stat-item">
          <i class="${stat.icon} stat-icon"></i>
          <div class="stat-number">${stat.number}</div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `).join('')}
    </div>

    <div class="verification-process">
      <h2>Our Verification Process</h2>
      <div class="process-steps">
        <div class="process-step">
          <i class="fas fa-id-card"></i>
          <h3>Identity Verification</h3>
          <p>Government-issued ID verification for seller authentication</p>
        </div>
        <div class="process-step">
          <i class="fas fa-business-time"></i>
          <h3>Business Validation</h3>
          <p>Official partnership verification with game publishers</p>
        </div>
        <div class="process-step">
          <i class="fas fa-user-check"></i>
          <h3>Customer Reviews</h3>
          <p>Verified purchase reviews from real customers</p>
        </div>
        <div class="process-step">
          <i class="fas fa-shield-alt"></i>
          <h3>Security Checks</h3>
          <p>Regular security audits and compliance checks</p>
        </div>
      </div>
    </div>

    <div class="trust-features">
      <div class="feature-card">
        <i class="fas fa-lock feature-icon"></i>
        <h3>Secure Transactions</h3>
        <p>Bank-level encryption for all payments</p>
        <ul class="feature-list">
          <li><i class="fas fa-check"></i> SSL Protected</li>
          <li><i class="fas fa-check"></i> Encrypted Payments</li>
          <li><i class="fas fa-check"></i> Secure Data Storage</li>
        </ul>
      </div>
      <div class="feature-card">
        <i class="fas fa-history feature-icon"></i>
        <h3>Instant Delivery</h3>
        <p>Automated delivery within minutes</p>
        <ul class="feature-list">
          <li><i class="fas fa-check"></i> 24/7 Automated System</li>
          <li><i class="fas fa-check"></i> Real-time Tracking</li>
          <li><i class="fas fa-check"></i> Delivery Guarantee</li>
        </ul>
      </div>
      <div class="feature-card">
        <i class="fas fa-user-shield feature-icon"></i>
        <h3>Account Safety</h3>
        <p>Advanced security protocols</p>
        <ul class="feature-list">
          <li><i class="fas fa-check"></i> Anti-fraud Protection</li>
          <li><i class="fas fa-check"></i> Secure Login System</li>
          <li><i class="fas fa-check"></i> 2FA Authentication</li>
        </ul>
      </div>
    </div>

    <div class="guarantee-section">
      <div class="guarantee-badge">
        <i class="fas fa-award"></i>
        <h3>100% Money Back Guarantee</h3>
        <p>If you're not satisfied, we'll refund your purchase - no questions asked!</p>
      </div>
    </div>

    <div class="testimonials">
      <h2>Verified Customer Reviews</h2>
      <div class="testimonials-grid">
        ${testimonials.map(testimonial => `
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-rating">
                ${'★'.repeat(testimonial.rating)}
              </div>
              ${testimonial.verified ? '<div class="verified-tag"><i class="fas fa-check-circle"></i> Verified Purchase</div>' : ''}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
              <i class="fas fa-user-circle"></i>
              <div>
                <div class="author-name">${testimonial.name}</div>
                <div class="purchase-info">
                  <span class="purchase-count">${testimonial.purchaseCount} purchases</span>
                  <span class="testimonial-date">${testimonial.date}</span>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="contact-section">
      <h2>24/7 Support Available</h2>
      <p class="support-text">Our verified support team is ready to assist you anytime</p>
      <div class="contact-methods">
        <div class="contact-method">
          <i class="fab fa-whatsapp"></i>
          <p>WhatsApp Support</p>
          <span>Response time: 5 mins</span>
          <div class="availability-badge">Online Now</div>
        </div>
        <div class="contact-method">
          <i class="fab fa-telegram"></i>
          <p>Telegram Channel</p>
          <span>Daily updates & offers</span>
          <div class="members-count">5K+ Members</div>
        </div>
        <div class="contact-method">
          <i class="fas fa-envelope"></i>
          <p>Email Support</p>
          <span>24/7 available</span>
          <div class="response-time">1 hour response</div>
        </div>
      </div>
    </div>

    <footer class="trust-footer">
      <div class="payment-methods">
        <h3>Secure Payment Methods</h3>
        <div class="payment-icons">
          <i class="fab fa-cc-visa"></i>
          <i class="fab fa-cc-mastercard"></i>
          <i class="fab fa-cc-paypal"></i>
          <i class="fab fa-google-pay"></i>
          <i class="fab fa-apple-pay"></i>
        </div>
      </div>
    </footer>
  </div>
`;

// Enhanced animation observer with options
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.stat-item, .feature-card, .testimonial-card, .process-step').forEach(element => {
  observer.observe(element);
});

// Add hover animations to interactive elements
document.querySelectorAll('.badge, .security-item, .feature-card, .contact-method').forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'translateY(-5px)';
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'translateY(0)';
  });
});