// Copyright © 2015-2026 NeurX. 书文智能 All Rights Reserved.

const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.18 }
);

for (const item of items) {
  observer.observe(item);
}
