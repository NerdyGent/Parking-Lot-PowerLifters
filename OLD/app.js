// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Booking Modal
let currentPackage = '';
let currentPrice = 0;

function openBooking(packageName, price) {
    currentPackage = packageName;
    currentPrice = price;
    
    document.getElementById('bookingPackage').textContent = packageName;
    document.getElementById('bookingPrice').textContent = '$' + price;
    document.getElementById('bookingModal').classList.add('active');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeBooking() {
    document.getElementById('bookingModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset form
    document.getElementById('bookingForm').reset();
}

// Close modal when clicking outside
document.getElementById('bookingModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeBooking();
    }
});

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const terms = document.getElementById('terms').checked;
    
    if (!terms) {
        alert('Please agree to the terms and conditions');
        return;
    }
    
    // Here you would normally send the data to your server
    console.log('Booking submitted:', {
        package: currentPackage,
        price: currentPrice,
        name: name,
        email: email,
        phone: phone
    });
    
    alert('Booking submitted! We will contact you shortly.');
    closeBooking();
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeBooking();
    }
});

// Animate progress bar on scroll
function animateProgressBar() {
    const progressBar = document.querySelector('.progress-fill');
    if (!progressBar) return;
    
    const rect = progressBar.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible && !progressBar.classList.contains('animated')) {
        progressBar.classList.add('animated');
        // The animation is handled by CSS
    }
}

// Check progress bar visibility on scroll
window.addEventListener('scroll', animateProgressBar);
window.addEventListener('load', animateProgressBar);