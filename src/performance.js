// Performance optimizations and utility functions

// Intersection Observer for lazy loading and animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.style.opacity = '1';
      observer.unobserve(img);
    }
  });
}, observerOptions);

// Apply lazy loading to all images
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
});

// Enhanced navbar active state handler with smooth transitions
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  let current = '';
  const scrollOffset = 120; // Adjust for navbar height
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - scrollOffset;
    const sectionHeight = section.offsetHeight;
    
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  // Remove active class from all links with smooth transition
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      // Add a small delay to create smooth transition effect
      setTimeout(() => {
        link.classList.add('active');
      }, 50);
    }
  });
}

// Throttle function for performance
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply throttled scroll listener
window.addEventListener('scroll', throttle(updateActiveNavLink, 100));

// Preload critical resources
function preloadResources() {
  const criticalImages = [
    'assets/portrait.png',
    'assets/logo2.png'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// Error handling for images
function handleImageError(img) {
  img.style.display = 'none';
  console.warn('Failed to load image:', img.src);
}

// Add error handlers to all images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', () => handleImageError(img));
  });
});

// Service Worker registration for caching (if needed)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment if you want to add service worker
    // navigator.serviceWorker.register('/sw.js')
    //   .then(registration => console.log('SW registered'))
    //   .catch(registrationError => console.log('SW registration failed'));
  });
}

// Analytics and performance monitoring
function logPerformanceMetrics() {
  if (window.performance) {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
  }
}

window.addEventListener('load', logPerformanceMetrics);

// Initialize performance optimizations
preloadResources();

// Enhanced navbar performance optimizations
(function() {
    'use strict';
    
    // Throttle scroll events for better performance
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Optimized scroll handler
    const optimizedScrollHandler = throttle(function() {
        const navbar = document.getElementById('mainNavbar');
        if (!navbar) return;
        
        const scrollTop = window.pageYOffset;
        
        // Use CSS custom properties for smooth transitions
        if (scrollTop > 50) {
            navbar.style.setProperty('--navbar-blur', '25px');
            navbar.style.setProperty('--navbar-opacity', '0.98');
        } else {
            navbar.style.setProperty('--navbar-blur', '20px');
            navbar.style.setProperty('--navbar-opacity', '0.95');
        }
    }, 16); // 60fps
    
    // Apply optimized scroll listener
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    
    // Preload navbar assets
    const navbarAssets = [
        'assets/logo2.png'
    ];
    
    navbarAssets.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // Initialize CSS custom properties
    document.documentElement.style.setProperty('--navbar-blur', '20px');
    document.documentElement.style.setProperty('--navbar-opacity', '0.95');
    
})();

// Simple navbar scroll effect
(function() {
    'use strict';
    
    const navbar = document.getElementById('mainNavbar');
    
    function handleScroll() {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
    }
    
    window.addEventListener('scroll', throttle(handleScroll, 50), { passive: true });
    
})();

// Enhanced navbar scroll effect with hide/show functionality
(function() {
    'use strict';
    
    const navbar = document.getElementById('mainNavbar');
    let lastScrollTop = 0;
    let scrollTimeout;
    
    const optimizedScrollHandler = throttle(function() {
        if (!navbar) return;
        
        const scrollTop = window.pageYOffset;
        const scrollingDown = scrollTop > lastScrollTop;
        const scrollThreshold = 100;
        
        // Add/remove scrolled class
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll (optional - uncomment to enable)
        /*
        if (scrollTop > scrollThreshold) {
            if (scrollingDown && scrollTop > lastScrollTop + 10) {
                navbar.classList.add('navbar-hidden');
                navbar.classList.remove('navbar-visible');
            } else if (!scrollingDown && lastScrollTop > scrollTop + 10) {
                navbar.classList.add('navbar-visible');
                navbar.classList.remove('navbar-hidden');
            }
        } else {
            navbar.classList.add('navbar-visible');
            navbar.classList.remove('navbar-hidden');
        }
        */
        
        // Update active navigation links
        updateActiveNavLink();
        
        lastScrollTop = scrollTop;
        
        // Clear any existing timeout
        clearTimeout(scrollTimeout);
        
        // Add a small delay to smooth out rapid scroll events
        scrollTimeout = setTimeout(() => {
            updateActiveNavLink();
        }, 100);
        
    }, 16); // 60fps
    
    // Apply optimized scroll listener with passive option for better performance
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    
    // Initialize navbar state on page load
    document.addEventListener('DOMContentLoaded', () => {
        updateActiveNavLink();
        navbar.classList.add('navbar-visible');
    });
    
})();
