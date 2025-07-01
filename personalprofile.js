window.onload = function () {
      // Smooth scroll for nav links
      document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          const target = document.querySelector(link.getAttribute('href'));
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
      });

      // Auto year in footer
      document.getElementById("year").textContent = new Date().getFullYear();
    };