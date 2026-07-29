// Copyright © 2015-2026 NeurX. 书文智能 All Rights Reserved.

// 获取当前语言
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// 设置语言
function setLanguage(lang) {
  localStorage.setItem('language', lang);
}

// 更新页面语言
function updatePageLanguage(lang) {
  setLanguage(lang);
  
  // 更新所有具有data-en和data-zh属性的元素
  const elements = document.querySelectorAll('[data-en][data-zh]');
  
  elements.forEach(el => {
    if (lang === 'zh') {
      el.textContent = el.getAttribute('data-zh');
    } else {
      el.textContent = el.getAttribute('data-en');
    }
  });

  // 更新页面标题
  if (lang === 'zh') {
    document.title = 'NeurX | S 语言 官网';
    document.documentElement.lang = 'zh-CN';
  } else {
    document.title = 'NeurX | S Language Official Website';
    document.documentElement.lang = 'en';
  }
}

// 切换语言
function toggleLanguage() {
  const currentLang = getCurrentLanguage();
  const newLang = currentLang === 'en' ? 'zh' : 'en';
  updatePageLanguage(newLang);
}

// 初始化语言
function initLanguage() {
  const currentLang = getCurrentLanguage();
  updatePageLanguage(currentLang);
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
  // 初始化语言
  initLanguage();

  // 绑定语言切换按钮
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
});

// 动画观察器 - 揭示效果
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
