 
 document.addEventListener("DOMContentLoaded", function () {
  const icon = document.getElementById("dropdownIcon");
  const dropdown = document.querySelector(".dropdown-list");
  const userDropdownWrapper = document.querySelector(".user-dropdown");
  const userIcon = userDropdownWrapper?.querySelector(".user-icon");
  const userDropdown = userDropdownWrapper?.querySelector(".dropdown-uyelik-list");

  function isMobile() {
    return window.innerWidth <= 768;
  }

  // Galaksiler mobil dropdown
  if (icon && dropdown) {
    icon.addEventListener("click", function (e) {
      if (isMobile()) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle("show-dropdown");
        icon.classList.toggle("rotate-up");
      }
    });

    document.addEventListener("click", function (e) {
      if (isMobile() && !dropdown.contains(e.target) && !icon.contains(e.target)) {
        dropdown.classList.remove("show-dropdown");
        icon.classList.remove("rotate-up");
      }
    });
  }

  // User ikonu mobil dropdown
  if (userIcon && userDropdown) {
    userIcon.addEventListener("click", function (e) {
      if (isMobile()) {
        e.preventDefault();
        e.stopPropagation();
        userDropdown.classList.toggle("show-dropdown");
      }
    });

    document.addEventListener("click", function (e) {
      if (isMobile() && !userDropdown.contains(e.target) && !userIcon.contains(e.target)) {
        userDropdown.classList.remove("show-dropdown");
      }
    });
  }

  // Pencere yeniden boyutlandığında mobil dışıysa dropdownları kapat
  window.addEventListener("resize", function () {
    if (!isMobile()) {
      dropdown?.classList.remove("show-dropdown");
      icon?.classList.remove("rotate-up");
      userDropdown?.classList.remove("show-dropdown");
    }
  });
 });
