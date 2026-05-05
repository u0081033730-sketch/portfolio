// ÙØ¹Ø§Ù„ Ú©Ø±Ø¯Ù† Ø­Ø§Ù„Øª Ø¯Ø§Ø±Ú©/Ù„Ø§ÛŒØª
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Ú†Ú© Ú©Ø±Ø¯Ù† ØªÙ†Ø¸ÛŒÙ…Ø§Øª Ø°Ø®ÛŒØ±Ù‡ Ø´Ø¯Ù‡
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Ø¹Ù…Ù„Ú©Ø±Ø¯ Ø¯Ø§Ù†Ù„ÙˆØ¯ Ø±Ø²ÙˆÙ…Ù‡
function downloadCV() {
    // Ø§ÛŒØ¬Ø§Ø¯ ÛŒÚ© ÙØ§ÛŒÙ„ PDF Ù†Ù…ÙˆÙ†Ù‡ (Ø¯Ø± ÙˆØ§Ù‚Ø¹ÛŒØª Ø¨Ø§ÛŒØ¯ ÙØ§ÛŒÙ„ ÙˆØ§Ù‚Ø¹ÛŒ Ø±Ùˆ Ø¢Ù¾Ù„ÙˆØ¯ Ú©Ù†ÛŒØ¯)
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Ø±Ø²ÙˆÙ…Ù‡-Ø¬Ø§Ù‡Ø¯-Ø¨ÛŒØ§Øª.pdf';
    
    // Ø§ÛŒØ¬Ø§Ø¯ ÛŒÚ© PDF Ø³Ø§Ø¯Ù‡ Ø¨Ø§ jsPDF (Ø§Ú¯Ø± Ú©ØªØ§Ø¨Ø®Ø§Ù†Ù‡ Ù…ÙˆØ¬ÙˆØ¯ Ø¨Ø§Ø´Ø¯)
    try {
        // Ø§Ú¯Ø± jsPDF Ù…ÙˆØ¬ÙˆØ¯ Ø¨Ø§Ø´Ø¯ Ø§Ø² Ø¢Ù† Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…
        if (typeof jsPDF !== 'undefined') {
            const doc = new jsPDF();
            doc.text('Ø±Ø²ÙˆÙ…Ù‡ Ø¬Ø§Ù‡Ø¯ Ø¨ÛŒØ§Øª', 20, 20);
            doc.text('ØªÙˆØ³Ø¹Ù‡ Ø¯Ù‡Ù†Ø¯Ù‡ ÙÙˆÙ„ Ø§Ø³ØªÚ©', 20, 30);
            doc.text('ØªØ¬Ø±Ø¨Ù‡: Û² Ø³Ø§Ù„ Ø¯Ø± Ø´Ø±Ú©Øª ØªÙˆØ§Ù†Ø§ ØªÚ©Ù†Ø§Ù„ÙˆÚ˜ÛŒ', 20, 40);
            doc.text('ØªØ­ØµÛŒÙ„Ø§Øª: Ø¯Ø§Ù†Ø´Ø¬ÙˆÛŒ Ú©Ø§Ù…Ù¾ÛŒÙˆØªØ± Ø³Ø§ÛŒÙ†Ø³ - Ø¯Ø§Ù†Ø´Ú¯Ø§Ù‡ ØºØ±Ø¬Ø³ØªØ§Ù†', 20, 50);
            doc.save('Ø±Ø²ÙˆÙ…Ù‡-Ø¬Ø§Ù‡Ø¯-Ø¨ÛŒØ§Øª.pdf');
        } else {
            // Ø§Ú¯Ø± jsPDF Ù…ÙˆØ¬ÙˆØ¯ Ù†Ø¨ÙˆØ¯ØŒ ÛŒÚ© ÙØ§ÛŒÙ„ Ù…ØªÙ†ÛŒ Ø³Ø§Ø¯Ù‡ Ø§ÛŒØ¬Ø§Ø¯ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…
            const content = `
Ø±Ø²ÙˆÙ…Ù‡ Ø¬Ø§Ù‡Ø¯ Ø¨ÛŒØ§Øª
ØªÙˆØ³Ø¹Ù‡ Ø¯Ù‡Ù†Ø¯Ù‡ ÙÙˆÙ„ Ø§Ø³ØªÚ©

Ù…Ø´Ø®ØµØ§Øª ÙØ±Ø¯ÛŒ:
- Ù†Ø§Ù…: Ø¬Ø§Ù‡Ø¯ Ø¨ÛŒØ§Øª
- ØªØ¬Ø±Ø¨Ù‡: Û² Ø³Ø§Ù„ Ø¯Ø± Ø´Ø±Ú©Øª ØªÙˆØ§Ù†Ø§ ØªÚ©Ù†Ø§Ù„ÙˆÚ˜ÛŒ
- ØªØ­ØµÛŒÙ„Ø§Øª: Ø¯Ø§Ù†Ø´Ø¬ÙˆÛŒ Ú©Ø§Ù…Ù¾ÛŒÙˆØªØ± Ø³Ø§ÛŒÙ†Ø³ - Ø¯Ø§Ù†Ø´Ú¯Ø§Ù‡ ØºØ±Ø¬Ø³ØªØ§Ù†

Ù…Ù‡Ø§Ø±Øªâ€ŒÙ‡Ø§:
- Front-End: HTML5, CSS3, JavaScript, React
- Back-End: Node.js, Express, Python, PHP
- Database: MySQL, MongoDB, PostgreSQL
- DevOps: AWS, Docker, Git, Linux

Ù¾Ø±ÙˆÚ˜Ù‡â€ŒÙ‡Ø§:
- Ø³ÛŒØ³ØªÙ… Ù…Ø¯ÛŒØ±ÛŒØª Ù…Ø­ØªÙˆØ§
- Ø§Ù¾Ù„ÛŒÚ©ÛŒØ´Ù† Ù…ÙˆØ¨Ø§ÛŒÙ„
- Ù¾Ù„ØªÙØ±Ù… ØªØ¬Ø§Ø±Øª Ø§Ù„Ú©ØªØ±ÙˆÙ†ÛŒÚ©

ØªÙ…Ø§Ø³:
- Ø§ÛŒÙ…ÛŒÙ„: javed.bayat@email.com
- ØªÙ„ÙÙ†: +93 123 456 789
            `;
            
            const blob = new Blob([content], { type: 'text/plain' });
            link.href = URL.createObjectURL(blob);
            link.click();
            setTimeout(() => URL.revokeObjectURL(link.href), 100);
        }
    } catch (error) {
        // Ø§Ú¯Ø± Ø®Ø·Ø§ÛŒÛŒ Ø±Ø® Ø¯Ø§Ø¯ØŒ Ú©Ø§Ø±Ø¨Ø± Ø±Ø§ Ø¨Ù‡ ØµÙØ­Ù‡ Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ù…Ù† Ù‡Ø¯Ø§ÛŒØª Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…
        alert('Ù„Ø·ÙØ§ Ø±Ø²ÙˆÙ…Ù‡ Ø®ÙˆØ¯ Ø±Ø§ Ø¯Ø± ÙØ§ÛŒÙ„ images Ù‚Ø±Ø§Ø± Ø¯Ù‡ÛŒØ¯ Ùˆ Ù„ÛŒÙ†Ú© Ø±Ø§ Ø¨Ù‡ Ø±ÙˆØ² Ú©Ù†ÛŒØ¯');
        console.log('Ø¨Ø±Ø§ÛŒ Ø¯Ø§Ù†Ù„ÙˆØ¯ Ø±Ø²ÙˆÙ…Ù‡ØŒ ÙØ§ÛŒÙ„ PDF Ø®ÙˆØ¯ Ø±Ø§ Ø¯Ø± Ù¾ÙˆØ´Ù‡ images Ù‚Ø±Ø§Ø± Ø¯Ù‡ÛŒØ¯ Ùˆ Ù„ÛŒÙ†Ú© Ø±Ø§ Ø¨Ù‡ Ø±ÙˆØ² Ú©Ù†ÛŒØ¯');
    }
}

// Ø§Ø³Ú©Ø±ÙˆÙ„ Ù†Ø±Ù… Ø¨Ø±Ø§ÛŒ Ù„ÛŒÙ†Ú©â€ŒÙ‡Ø§
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

// Ø§Ù†ÛŒÙ…ÛŒØ´Ù† Ø¨Ø±Ø§ÛŒ Ø¹Ù†Ø§ØµØ± Ù‡Ù†Ú¯Ø§Ù… Ø§Ø³Ú©Ø±ÙˆÙ„
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Ù…Ø´Ø§Ù‡Ø¯Ù‡ Ø¨Ø®Ø´â€ŒÙ‡Ø§ Ø¨Ø±Ø§ÛŒ Ø§Ù†ÛŒÙ…ÛŒØ´Ù†
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Ù…Ø´Ø§Ù‡Ø¯Ù‡ Ú©Ø§Ø±Øªâ€ŒÙ‡Ø§ Ø¨Ø±Ø§ÛŒ Ø§Ù†ÛŒÙ…ÛŒØ´Ù†
document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ØªØºÛŒÛŒØ± Ø§Ø³ØªØ§ÛŒÙ„ Ù†ÙˆÛŒÚ¯ÛŒØ´Ù† Ù‡Ù†Ú¯Ø§Ù… Ø§Ø³Ú©Ø±ÙˆÙ„
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'var(--bg-card)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'blur(0px)';
    }
});

console.log('Ù¾ÙˆØ±ØªÙÙˆÙ„ÛŒÙˆ Ø¬Ø§Ù‡Ø¯ Ø¨ÛŒØ§Øª Ø¨Ø§ Ù…ÙˆÙÙ‚ÛŒØª Ø¨Ø§Ø±Ú¯Ø°Ø§Ø±ÛŒ Ø´Ø¯!');
