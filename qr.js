// Simplified QR Code Interactive Features
class QRPortal {
    constructor() {
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupInteractions();
    }

    setupAnimations() {
        // Simple entrance animation
        const qrContainer = document.querySelector('.qr-container');
        if (qrContainer) {
            qrContainer.style.opacity = '0';
            qrContainer.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                qrContainer.style.transition = 'all 0.8s ease-out';
                qrContainer.style.opacity = '1';
                qrContainer.style.transform = 'scale(1)';
            }, 100);
        }
    }

    setupInteractions() {
        this.setupQRInteractions();
        this.setupTouchInteractions();
    }

    setupQRInteractions() {
        const qrFrame = document.querySelector('.qr-frame');
        const qrCode = document.querySelector('.qr-code');
        const scanLine = document.querySelector('.scan-line');

        if (qrFrame && qrCode) {
            // Enhanced hover effect for desktop
            qrFrame.addEventListener('mouseenter', () => {
                qrCode.style.transform = 'scale(1.02)';
                scanLine.style.animationDuration = '1.5s';
            });

            qrFrame.addEventListener('mouseleave', () => {
                qrCode.style.transform = 'scale(1)';
                scanLine.style.animationDuration = '2.5s';
            });

            // Click/tap effect
            qrFrame.addEventListener('click', () => {
                this.triggerScanEffect();
            });
        }
    }

    triggerScanEffect() {
        const qrFrame = document.querySelector('.qr-frame');
        const corners = document.querySelectorAll('.corner');
        
        // Flash effect
        qrFrame.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.4)';
        
        // Animate corners
        corners.forEach(corner => {
            corner.style.borderColor = '#06b6d4';
            corner.style.transform = 'scale(1.1)';
        });

        // Show brief success feedback
        this.showScanFeedback();

        // Reset after animation
        setTimeout(() => {
            qrFrame.style.boxShadow = '';
            corners.forEach(corner => {
                corner.style.borderColor = '';
                corner.style.transform = '';
            });
        }, 1000);
    }

    showScanFeedback() {
        const feedback = document.createElement('div');
        feedback.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="9"/>
            </svg>
        `;
        
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%) scale(0);
            background: rgba(6, 182, 212, 0.9);
            color: white;
            padding: 0.75rem;
            border-radius: 50%;
            z-index: 1000;
            animation: popFeedback 0.6s ease-out forwards;
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        const style = document.createElement('style');
        style.textContent = `
            @keyframes popFeedback {
                0% { transform: translateX(-50%) scale(0); }
                50% { transform: translateX(-50%) scale(1.1); }
                100% { transform: translateX(-50%) scale(1); }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(feedback);

        setTimeout(() => {
            feedback.style.animation = 'popFeedback 0.3s ease-out reverse forwards';
            setTimeout(() => {
                feedback.remove();
                style.remove();
            }, 300);
        }, 1500);
    }

    setupTouchInteractions() {
        const qrFrame = document.querySelector('.qr-frame');
        
        if (qrFrame && 'ontouchstart' in window) {
            qrFrame.addEventListener('touchstart', (e) => {
                qrFrame.style.transform = 'scale(0.98)';
            });

            qrFrame.addEventListener('touchend', (e) => {
                qrFrame.style.transform = '';
                this.triggerScanEffect();
            });

            qrFrame.addEventListener('touchcancel', (e) => {
                qrFrame.style.transform = '';
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QRPortal();
});

// Handle orientation changes on mobile
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        // Recalculate sizes if needed
        const qrCode = document.querySelector('.qr-code');
        if (qrCode) {
            qrCode.style.transition = 'none';
            setTimeout(() => {
                qrCode.style.transition = '';
            }, 100);
        }
    }, 100);
});