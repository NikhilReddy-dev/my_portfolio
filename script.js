//about section
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Automatic age calculation
  const birthYear = 1995;
  const birthMonth = 5; // May
  const birthDay = 1;

  const today = new Date();
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  document.querySelector(".age-display").textContent = age;

  // Counter animation for stats
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // The lower the faster

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute("data-target"));
        let count = 0;
        const updateCount = () => {
          const increment = target / speed;
          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});
//about section end
//skills section
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all progress bars at 0%
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach((bar) => {
    const targetWidth = bar.style.width;
    bar.style.width = "0%";

    // Use setTimeout to allow the initial state to render first
    setTimeout(() => {
      // Animate to the target width
      bar.style.transition = "width 1s ease-in-out";
      bar.style.width = targetWidth;
    }, 200);
  });
});
//skills sections end
//resume section start
document.addEventListener("DOMContentLoaded", function () {
  // Select all timeline items
  const timelineItems = document.querySelectorAll(".card");

  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add animation class when element is in viewport
  function animateOnScroll() {
    timelineItems.forEach((item) => {
      if (isInViewport(item)) {
        item.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  }

  // Add initial animation classes
  timelineItems.forEach((item) => {
    item.style.opacity = "0";
  });

  // Run animation on load and scroll
  window.addEventListener("scroll", animateOnScroll);
  // Initial check
  setTimeout(animateOnScroll, 300);
});
//resume section end

//portfolio section start
document.addEventListener("DOMContentLoaded", function () {
  // Get all filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Add click event to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Get filter value
      const filterValue = this.getAttribute("data-filter");

      // Filter projects
      filterProjects(filterValue);
    });
  });

  // Filter projects function
  function filterProjects(filter) {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach((project) => {
      if (filter === "all") {
        project.style.display = "block";
      } else {
        const categories = project.getAttribute("data-category");
        if (categories.includes(filter)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      }
    });
  }
});
//portfolio section end
//services start
// Add animation on scroll for service cards
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");

  function checkIfInView() {
    serviceCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const isInView =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);

      if (isInView) {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }
    });
  }

  // Initial setup
  serviceCards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Check on load and scroll
  window.addEventListener("scroll", checkIfInView);
  window.addEventListener("resize", checkIfInView);
  // Initial check
  setTimeout(checkIfInView, 100);
});
//services end

//contact start
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation (can be expanded)
    if (name && email && message) {
      // Here you would normally send the data to a server
      alert("Thank you for your message! We will get back to you soon.");
      this.reset();
    } else {
      alert("Please fill in all fields");
    }
  });
//contact end

//sidebar start
$(document).ready(function () {
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Make menu items active on click
  $(".list-group-item").click(function () {
    $(".list-group-item").removeClass("active");
    $(this).addClass("active");
  });

  // Close sidebar on mobile when clicking outside
  $(document).click(function (e) {
    var container = $("#sidebar-wrapper, #menu-toggle");
    if (
      !container.is(e.target) &&
      container.has(e.target).length === 0 &&
      $(window).width() < 768 &&
      $("#sidebar-wrapper").hasClass("active")
    ) {
      $("#sidebar-wrapper").removeClass("active");
    }
  });
});
//sidebar end

// Typing effect for subtitle
const subtitle = "I'm Designer";
const subtitleElement = document.querySelector(".header-subtitle");
let i = 0;

document.addEventListener("DOMContentLoaded", function () {
  const subtitleElement = document.querySelector(".header-subtitle");
  const texts = [
    "Front-End Developer",
    "UI/UX Designer",
    "FullStack Developer",
  ]; // Texts to cycle through
  let currentTextIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[currentTextIndex];
    const displayedText = subtitleElement.textContent.replace("I'm a ", ""); // Remove prefix for comparison

    if (isDeleting) {
      // Remove one character at a time
      subtitleElement.textContent = "I'm a " + displayedText.slice(0, -1);
      if (displayedText.length === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
      }
    } else {
      // Add one character at a time
      subtitleElement.textContent =
        "I'm a " + currentText.slice(0, displayedText.length + 1);
      if (displayedText.length === currentText.length) {
        isDeleting = true; // Start deleting after the full text is displayed
        setTimeout(typeEffect, 1000); // Pause before deleting
        return;
      }
    }

    // Adjust typing speed
    const typingSpeed = isDeleting ? 150 : 200; // Slower typing and deleting
    setTimeout(typeEffect, typingSpeed);
  }

  // Start the typing effect
  typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
  // Start typing effect

  // Active menu item
  const sections = document.querySelectorAll("section, div[id]");
  const menuItems = document.querySelectorAll(".menu-item");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop - 200 &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    console.log("Current section:", current); // Debugging

    menuItems.forEach((item) => {
      item.classList.remove("active");

      // Add 'active' class to the corresponding menu item
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }

      // Special case: Highlight "Resume" for Skills or Education sections
      if (current === "skills" || current === "education") {
        document.querySelector('a[href="#resume"]').classList.add("active");
      }

      if (current === "portfolio") {
        document.querySelector('a[href="#portfolio"]').classList.add("active");
      }

      if (current === "services") {
        document.querySelector('a[href="#services"]').classList.add("active");
      }

      if (current === "contact") {
        document.querySelector('a[href="#contact"]').classList.add("active");
      }
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.querySelector(".mobile-toggle");
  const sidebar = document.querySelector(".sidebar");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", function () {
      sidebar.classList.toggle("show");
    });
  }

  // Back to top button
  const backToTop = document.querySelector(".back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

$(document).ready(function () {
  // Filter functionality
  $(".filter-btn").on("click", function () {
    // Update active button
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    // Get filter value
    const filter = $(this).data("filter");

    // Filter projects
    if (filter === "all") {
      $(".project-card").show();
    } else {
      $(".project-card").hide();
      $(".project-card").each(function () {
        const categories = $(this).data("category").split(" ");
        if (categories.includes(filter)) {
          $(this).show();
        }
      });
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Here you would typically send the data to a server
  console.log("Form submitted with the following data:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Reset the form
  this.reset();
  alert("Thank you for your message! I'll get back to you soon.");
});

//added code
// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animations
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Back to top button functionality
  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "flex";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Counter animation for stats section
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  // Portfolio filtering functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (
          filter === "all" ||
          card.getAttribute("data-category").includes(filter)
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Contact form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Form validation
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        // Here you would normally send the form data to a server
        alert("Thank you for your message! I will get back to you soon.");
        contactForm.reset();
      } else {
        alert("Please fill in all fields");
      }
    });
  }

  // Age calculation
  const calculateAge = () => {
    const birthDate = new Date("1998-04-01");
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const ageDisplay = document.querySelector(".age-display");
  if (ageDisplay) {
    ageDisplay.textContent = calculateAge().toString();
  }

  // Navigation menu active state

  // Mobile navigation - close offcanvas when link is clicked
  const mobileNavLinks = document.querySelectorAll(".offcanvas .menu-item");
  const bsOffcanvas = new bootstrap.Offcanvas(
    document.getElementById("sidebarMenu")
  );

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      bsOffcanvas.hide();

      // Ensure all sections are fully visible
      document.querySelectorAll("section").forEach((section) => {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
        section.style.transition = "none"; // Disable transitions temporarily
      });

      // Remove any dark overlay or hidden styles
      document.body.style.overflow = "auto";
      document.body.style.backgroundColor = "transparent";
    });
  });
});
