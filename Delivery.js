// Instant Delivery JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const verificationForm = document.getElementById('verificationForm');
    
    if (verificationForm) {
      verificationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const gameId = document.getElementById('gameId').value;
        const server = document.getElementById('server').value;
        const nickname = document.getElementById('nickname').value;
        
        // Simulate verification process
        verifyGameId(gameId, server, nickname);
      });
    }
    
    function verifyGameId(gameId, server, nickname) {
      const btn = document.querySelector('.btn-verify');
      const originalText = btn.innerHTML;
      
      // Show loading state
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
      btn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        // Simulate successful verification
        showVerificationResult(true);
        
        // Reset button
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 2000);
    }
    
    function showVerificationResult(success) {
      // Remove any existing toast
      const existingToast = document.querySelector('.toast');
      if (existingToast) {
        existingToast.remove();
      }
      
      // Create new toast
      const toast = document.createElement('div');
      toast.className = `toast ${success ? 'success' : 'error'}`;
      toast.innerHTML = `
        <i class="fas ${success ? 'fa-check-circle' : 'fa-times-circle'}"></i>
        <span>${success ? 'Game ID verified successfully!' : 'Verification failed. Please try again.'}</span>
      `;
      
      // Style the toast
      Object.assign(toast.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: success ? '#00d97e' : '#ff3b30',
        color: '#ffffff',
        padding: '16px 24px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '1000',
        animation: 'slideIn 0.3s ease forwards'
      });
      
      // Add animation keyframes
      const style = document.createElement('style');
      style.textContent = `
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
      
      // Add to document
      document.body.appendChild(toast);
      
      // Remove after 3 seconds
      setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }
    
    // Add floating animation to process cards
    const processCards = document.querySelectorAll('.process-card');
    processCards.forEach((card, index) => {
      card.style.animation = `float 3s ease-in-out infinite ${index * 0.2}s`;
    });
    
    // Add hover effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.3s ease';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  });