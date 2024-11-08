document.addEventListener('DOMContentLoaded', () => {
    // Fade in elements on page load
    const elements = document.querySelectorAll('.photographer-intro, .bio, .achievements, .equipment');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Add hover effect to profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseover', () => {
            profileImage.style.transform = 'scale(1.02)';
        });
        
        profileImage.addEventListener('mouseout', () => {
            profileImage.style.transform = 'scale(1)';
        });
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });
});
