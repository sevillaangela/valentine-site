// ========================================
// SURPRISE MESSAGE FUNCTION
// ========================================
function showLoveMessage() {
    const messages = [
        "You bring light to my ordinary days ✨",
        "Your smile is my favorite notification 💕",
        "You're the kind of person poems are written about 🌹",
        "Every conversation with you feels like a gift 💝",
        "You make 'special' feel like an understatement 💖",
        "I'm glad the universe led me to you ⭐",
        "You're not just cute you're extraordinary 🦋"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create animated message element
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
        color: white;
        padding: 40px 50px;
        border-radius: 30px;
        font-size: clamp(1.3rem, 4vw, 2rem);
        font-family: 'Playfair Display', serif;
        text-align: center;
        z-index: 1000;
        box-shadow: 0 20px 60px rgba(255, 107, 157, 0.4);
        animation: popIn 0.5s ease-out forwards;
        max-width: 90%;
    `;
    messageDiv.textContent = randomMessage;
    
    // Add pop-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes popIn {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.1);
            }
            100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(messageDiv);
    
    // Create exploding hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 100);
    }
    
    // Remove message after 3.5 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'popIn 0.3s ease-in reverse';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3500);
}

// ========================================
// FLOATING HEART CREATION
// ========================================
function createFloatingHeart() {
    const heartEmojis = ['💕', '💖', '💗', '💓', '💝', '💞', '❤️', '🌹'];
    const heart = document.createElement('div');
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    
    const startX = Math.random() * 100;
    const endX = startX + (Math.random() - 0.5) * 30;
    const rotation = Math.random() * 360;
    const duration = 3 + Math.random() * 2;
    
    heart.style.cssText = `
        position: fixed;
        left: ${startX}vw;
        top: 100vh;
        font-size: ${20 + Math.random() * 30}px;
        z-index: 999;
        pointer-events: none;
        animation: floatUp ${duration}s ease-out forwards;
    `;
    
    const styleFloat = document.createElement('style');
    styleFloat.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${endX - startX}vw) rotate(${rotation}deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleFloat);
    
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
        styleFloat.remove();
    }, duration * 1000);
}

// ========================================
// SCROLL ANIMATION OBSERVER
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reason-card, .photo-card').forEach(el => {
        observer.observe(el);
    });
});

// ========================================
// PHOTO CARD CLICK HANDLER (Optional)
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const photoCards = document.querySelectorAll('.photo-card');
    
    photoCards.forEach(card => {
        card.addEventListener('click', () => {
            // Create a gentle pulse effect
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'gentlePulse 0.5s ease';
            }, 10);
        });
    });
    
    // Add gentle pulse animation
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes gentlePulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
        }
    `;
    document.head.appendChild(pulseStyle);
});

// ========================================
// EASTER EGG: DOUBLE CLICK ON TITLE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    
    title.addEventListener('dblclick', () => {
        // Create heart explosion from title
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 50);
        }
        
        // Show special message
        const specialMsg = document.createElement('div');
        specialMsg.textContent = "You found the secret! 💕✨";
        specialMsg.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            font-family: 'Playfair Display', serif;
            font-size: 1.2rem;
            z-index: 1001;
            box-shadow: 0 10px 30px rgba(255, 107, 157, 0.4);
            animation: slideDown 0.5s ease-out;
        `;
        
        const slideStyle = document.createElement('style');
        slideStyle.textContent = `
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
        `;
        document.head.appendChild(slideStyle);
        
        document.body.appendChild(specialMsg);
        
        setTimeout(() => {
            specialMsg.style.animation = 'slideDown 0.3s ease-in reverse';
            setTimeout(() => {
                specialMsg.remove();
                slideStyle.remove();
            }, 300);
        }, 2500);
    });
});

// ========================================
// SMOOTH SCROLL ENHANCEMENT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all links (if any are added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ========================================
// RANDOM HEARTS ON PAGE LOAD
// ========================================
window.addEventListener('load', () => {
    // Create a few hearts when the page loads
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 300);
        }
    }, 1000);
});