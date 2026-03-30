// Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
          navMenu.classList.toggle('active');
      });

      // Close menu when clicking a link
      document.querySelectorAll('.nav-menu a').forEach(link => {
          link.addEventListener('click', () => {
              navMenu.classList.remove('active');
          });
      });
  }

  // Smooth Scrolling
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

  // Image Comparison Sliders
  document.querySelectorAll('.comparison-slider').forEach(slider => {
      const container = slider.closest('.comparison-container');
      const overlay = container.querySelector('.comparison-overlay');

      slider.addEventListener('input', (e) => {
          const value = e.target.value;
          const width = value + '%';
          overlay.style.clipPath = `inset(0 ${width} 0 0)`;
          slider.style.left = width;
      });

      // Initialize position
      const initialValue = slider.value;
      overlay.style.clipPath = `inset(0 ${initialValue}% 0 0)`;
      slider.style.left = initialValue + '%';
  });

  // Navbar scroll effect
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
          navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      } else {
          navbar.style.boxShadow = 'none';
      }

      lastScroll = currentScroll;
  });

  // Form submission (since no backend, show alert)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();

          // Get form data
          const formData = new FormData(contactForm);
          const data = {};
          formData.forEach((value, key) => data[key] = value);

          // You can:
          // 1. Show success message
          alert(`Thanks ${data.name}! We've received your message about
  ${data.brand}. We'll reply to ${data.email} within 24 hours.`);

          // 2. Reset form
          contactForm.reset();

          // 3. Optionally send to email using a service
          // For free, you could use:
          // - Formspree (formspree.io) - free 50 submissions/month
          // - Getform (getform.io) - free tier
          // Or just capture in localStorage for now
          console.log('Form submitted:', data);
      });
  }

  // Add animation on scroll
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

  document.querySelectorAll('.project, .service-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
  });

  // Console Easter Egg
  console.log('%c Zenvy Co. ', 'background: #000; color: #fff; font-size:
  24px; font-weight: bold; padding: 10px;');
  console.log('%c Making fashion brands look expensive since 2024 ', 'color:
   #6B7280; font-size: 12px;');
  console.log('%c Interested in working with us? hello@zenvyco.com ',
  'color: #3B82F6; font-size: 14px;');