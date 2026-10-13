// NovaFlow Landing Page Script

document.addEventListener('DOMContentLoaded', () => {
    // Header CTA
    const headerBtn = document.getElementById('ctaHeaderBtn');
    if (headerBtn) {
        headerBtn.addEventListener('click', () => {
            alert('Welcome to NovaFlow! Starting your 14-day free trial setup.');
        });
    }

    // Hero CTA
    const heroBtn = document.getElementById('heroTrialBtn');
    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            alert('Welcome to NovaFlow! Redirecting to setup...');
        });
    }

    // Bottom CTA
    const bottomBtn = document.getElementById('ctaBottomBtn');
    if (bottomBtn) {
        bottomBtn.addEventListener('click', () => {
            alert('Account created! Check your email for login credentials.');
        });
    }

    // Pricing plan buttons
    document.querySelectorAll('.plan-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const plan = e.target.getAttribute('data-plan') || 'Pro';
            alert(`Selected plan: ${plan}. Proceeding to checkout.`);
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
