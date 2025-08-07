document.addEventListener("DOMContentLoaded", function () {
  const triggerBtn = document.querySelector(".group-6");

  const menuItems = [
    { label: "Thư viện đồ ăn", link: "#food" },
    { label: "Thành tích", link: "#achievement" },
    { label: "Bạn bè", link: "#friends" },
    { label: "Tài chính", link: "#finance" }
  ];

  // Overlay nền đen
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  document.body.appendChild(overlay);

  // Label mô tả (nằm trên text-12)
  const navLabel = document.createElement("div");
  navLabel.className = "nav-label";
  document.body.appendChild(navLabel);

  // Icon group (đưa ra body để định vị tuyệt đối)
  const iconGroup = document.createElement("div");
  iconGroup.className = "nav-icon-group";
  document.body.appendChild(iconGroup);

  // Tạo các icon
  const navIcons = menuItems.map((item, index) => {
    const btn = document.createElement("a");
    btn.href = item.link;
    btn.className = "nav-btn";
    btn.dataset.label = item.label; // Store label for touch events
    btn.textContent = index + 1; // Temporary number, replace with icons later
    iconGroup.appendChild(btn);
    return btn;
  });

  // Longpress timeout and state
  let longPressTimeout;
  let isLongPress = false;
  let touchStartX, touchStartY;
  const LONG_PRESS_DURATION = 500; // 500ms for longpress
  const CANCEL_DISTANCE = 150; // Distance in pixels to cancel navigation

  // Định vị icon group theo group-6
  function positionIcons(x, y) {
    iconGroup.style.left = (x || (triggerBtn.getBoundingClientRect().left + triggerBtn.getBoundingClientRect().width / 2 + window.scrollX)) + "px";
    iconGroup.style.top = (y || (triggerBtn.getBoundingClientRect().top + triggerBtn.getBoundingClientRect().height / 2 + window.scrollY)) + "px";
  }

  // Định vị label theo touch position or text-12
  function positionLabel(x, y) {
    if (x !== undefined && y !== undefined) {
      navLabel.style.left = x + window.scrollX + "px";
      navLabel.style.top = y + window.scrollY - 30 + "px"; // Adjust above touch
    } else {
      const labelTarget = document.querySelector(".text-12");
      if (!labelTarget) return;
      const rect = labelTarget.getBoundingClientRect();
      navLabel.style.left = rect.left + window.scrollX + "px";
      navLabel.style.top = rect.top + window.scrollY - 10 + "px";
    }
  }

  // Mở menu (desktop click or mobile longpress)
  function openMenu(x, y) {
    overlay.classList.add("open");
    iconGroup.classList.add("open");
    positionIcons(x, y);
    positionLabel(x, y);
  }

  // Đóng menu
  function closeMenu() {
    overlay.classList.remove("open");
    iconGroup.classList.remove("open");
    navLabel.classList.remove("show");
    isLongPress = false;
    clearTimeout(longPressTimeout);
  }

  // Xác định icon gần nhất dựa trên touch position
  function getNearestIcon(x, y) {
    const rects = navIcons.map(icon => icon.getBoundingClientRect());
    let minDistance = Infinity;
    let nearestIndex = -1;
    rects.forEach((rect, index) => {
      const dx = rect.left + rect.width / 2 - x;
      const dy = rect.top + rect.height / 2 - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = index;
      }
    });
    return nearestIndex;
  }

  // Xử lý touch events cho mobile
  triggerBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    longPressTimeout = setTimeout(() => {
      isLongPress = true;
      openMenu(touchStartX, touchStartY);
    }, LONG_PRESS_DURATION);
  });

  triggerBtn.addEventListener("touchmove", (e) => {
    if (!isLongPress) return;
    e.preventDefault();
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Hiển thị label dựa trên hướng touch
    const nearestIndex = getNearestIcon(touch.clientX, touch.clientY);
    if (nearestIndex !== -1) {
      navLabel.textContent = menuItems[nearestIndex].label;
      navLabel.classList.add("show");
      positionLabel(touch.clientX, touch.clientY);
    }

    // Kiểm tra khoảng cách để hủy
    if (distance > CANCEL_DISTANCE) {
      closeMenu();
    }
  });

  triggerBtn.addEventListener("touchend", (e) => {
    if (!isLongPress) return;
    e.preventDefault();
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= CANCEL_DISTANCE) {
      const nearestIndex = getNearestIcon(touch.clientX, touch.clientY);
      if (nearestIndex !== -1) {
        window.location.href = menuItems[nearestIndex].link;
      }
    }
    closeMenu();
  });

  // Sự kiện desktop
  triggerBtn.addEventListener("click", (e) => {
    if (isLongPress) return; // Ngăn chặn click khi đang longpress
    e.stopPropagation();
    if (overlay.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (overlay.classList.contains("open")) {
      positionIcons();
      positionLabel();
    }
  });

  window.addEventListener("scroll", () => {
    if (overlay.classList.contains("open")) {
      positionIcons();
      positionLabel();
    }
  });
});
