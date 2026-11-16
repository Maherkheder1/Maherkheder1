// --- Mobile Navigation Menu ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

if (hamMenuBtn) {
  hamMenuBtn.addEventListener('click', () => {
    smallMenu.classList.toggle('header__sm-menu--active');
    headerHamMenuBtn.classList.toggle('d-none');
    headerHamMenuCloseBtn.classList.toggle('d-none');
  });
}

headerSmallMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
});

// --- Logo Redirect ---
const headerLogoContainer = document.querySelector('.header__logo-container');
if (headerLogoContainer) {
  headerLogoContainer.addEventListener('click', () => {
    location.href = 'index.html';
  });
}

// --- Dark / Light Mode Toggle ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

function updateThemeIcon(theme) {
  if (!themeIcon) return;
  if (theme === 'light') {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  } else {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
}

// ضبط الأيقونة عند تحميل الصفحة بناءً على الوضع الحالي
const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
updateThemeIcon(currentTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}