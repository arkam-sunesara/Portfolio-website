const animatedItems = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
});

animatedItems.forEach(item => {
  observer.observe(item);
});
