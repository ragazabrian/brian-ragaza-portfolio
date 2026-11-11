
// --- Theme Toggle (Dark / Light Mode with Hugeicons) ---
// Applies only on pages that contain the theme toggle button (work.html & about.html)
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn") || document.getElementById("theme-toggle");
  
  // If not on an allowed theme page, enforce default dark mode
  if (!toggleBtn) {
    document.documentElement.removeAttribute("data-theme");
    return;
  }

  const sunIcon = window.HUGEICONS && window.HUGEICONS["sun-01"] 
    ? window.HUGEICONS["sun-01"] 
    : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  const moonIcon = window.HUGEICONS && window.HUGEICONS["moon-02"] 
    ? window.HUGEICONS["moon-02"] 
    : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21.5 14.078A8.557 8.557 0 0 1 9.922 2.5C5.668 3.497 2.5 7.315 2.5 11.873a9.627 9.627 0 0 0 9.627 9.627c4.558 0 8.376-3.168 9.373-7.422"/></svg>`;

  function updateIcon(theme) {
    if (!toggleBtn) return;
    if (theme === "light") {
      toggleBtn.innerHTML = moonIcon;
      toggleBtn.setAttribute("aria-label", "Switch to dark mode");
      toggleBtn.setAttribute("title", "Switch to dark mode");
    } else {
      toggleBtn.innerHTML = sunIcon;
      toggleBtn.setAttribute("aria-label", "Switch to light mode");
      toggleBtn.setAttribute("title", "Switch to light mode");
    }
  }

  let currentTheme = localStorage.getItem("portfolio-theme") || "dark";
  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  updateIcon(currentTheme);

  toggleBtn.addEventListener("click", () => {
    currentTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    if (currentTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("portfolio-theme", currentTheme);
    updateIcon(currentTheme);
  });
}

// --- Studio Clock (Manila Time) ---
function initClock() {
  const clockEl = document.getElementById("clock-time");
  if (!clockEl) return;

  function update() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString("en-US", {
      timeZone: "Asia/Manila",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }
  update();
  setInterval(update, 1000);
}

// --- Menu Drawer ---
function initMenu() {
  const menuBtn = document.getElementById("menu-toggle-btn");
  const menuDrawer = document.getElementById("menu-drawer");
  if (!menuBtn || !menuDrawer) return;

  function setMenuState(open) {
    menuDrawer.classList.toggle("open", open);
    menuBtn.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", open ? "Close navigation menu" : "Open main navigation menu");
  }

  menuBtn.addEventListener("click", () => {
    const nextState = !menuDrawer.classList.contains("open");
    setMenuState(nextState);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuDrawer.classList.contains("open")) {
      setMenuState(false);
    }
  });

  const menuLinks = menuDrawer.querySelectorAll(".menu-nav-links a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });
}

// --- Rotating Client Badge in Menu (Google, Accenture, OpenAI) ---
function initRotatingLogos() {
  const badges = document.querySelectorAll(".rotating-logo-badge");
  if (!badges || badges.length === 0) return;

  badges.forEach((badge) => {
    const items = badge.querySelectorAll(".rotating-logo-item");
    if (items.length <= 1) return;

    let currentIndex = 0;
    setInterval(() => {
      items[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].classList.add("active");
    }, 2400);
  });
}

// --- Fast Hero Hover Video Switcher (Preloaded 0ms Layer Crossfading) ---
function initHeroVideoSwitcher() {
  const pills = document.querySelectorAll(".hero-pills-stack .pill-item");
  const defaultVideo = document.getElementById("hero-vid-default");
  if (pills.length === 0 || !defaultVideo) return;

  let activeVideo = defaultVideo;

  pills.forEach((pill) => {
    pill.addEventListener("mouseenter", () => {
      const targetId = pill.getAttribute("data-target");
      const targetMedia = targetId ? document.getElementById(targetId) : defaultVideo;
      if (!targetMedia || targetMedia === activeVideo) return;

      if (typeof targetMedia.play === "function") {
        targetMedia.play().catch(() => {});
      }
      targetMedia.classList.add("active");

      if (activeVideo && activeVideo !== targetMedia) {
        activeVideo.classList.remove("active");
      }

      activeVideo = targetMedia;
    });

    pill.addEventListener("mouseleave", () => {
      if (activeVideo === defaultVideo) return;

      defaultVideo.classList.add("active");
      if (typeof defaultVideo.play === "function") {
        defaultVideo.play().catch(() => {});
      }

      if (activeVideo && activeVideo !== defaultVideo) {
        activeVideo.classList.remove("active");
      }

      activeVideo = defaultVideo;
    });
  });
}

// --- Interactive Custom Mouse Cursor (Smooth follower dot) ---
function initCustomCursor() {
  const cursor = document.getElementById("custom-cursor");
  if (!cursor || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  if (!cursor.querySelector(".cursor-dot")) {
    cursor.innerHTML = `
      <span class="cursor-dot"></span>
      <span class="cursor-badge">YOU</span>
    `;
  }

  window.addEventListener("mousedown", () => cursor.classList.add("clicking"));
  window.addEventListener("mouseup", () => cursor.classList.remove("clicking"));

  let mouseX = -100, mouseY = -100;
  let cursorX = -100, cursorY = -100;
  let isMoving = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      cursorX = mouseX;
      cursorY = mouseY;
      isMoving = true;
    }
  }, { passive: true });

  function render() {
    if (isMoving) {
      cursorX += (mouseX - cursorX) * 0.35;
      cursorY += (mouseY - cursorY) * 0.35;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  function attachHover() {
    const targets = document.querySelectorAll(
      "a, button, .pill-item, .news-card, .work-row, .channel-link, input, select, textarea"
    );
    targets.forEach((t) => {
      t.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
      t.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
    });
  }

  attachHover();

  const menuBtn = document.getElementById("menu-toggle-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => setTimeout(attachHover, 100));
  }
}

// --- Work Page Filters & Floating Previews ---
function initWorkTable() {
  const filterPills = document.querySelectorAll(".filter-pill");
  const workRows = document.querySelectorAll(".work-row");
  const floatingPreview = document.getElementById("floating-preview");
  const previewVideo = document.getElementById("preview-video");
  const previewImg = document.getElementById("preview-img");

  if (filterPills.length > 0 && workRows.length > 0) {
    filterPills.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterPills.forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");

        const selectedFilter = (btn.getAttribute("data-filter") || "").toLowerCase();

        workRows.forEach((row) => {
          if (!selectedFilter || selectedFilter === "all") {
            row.style.display = "grid";
          } else {
            const categories = (row.getAttribute("data-category") || "").toLowerCase();
            const tags = (row.getAttribute("data-tags") || "").toLowerCase();
            if (categories.includes(selectedFilter) || tags.includes(selectedFilter)) {
              row.style.display = "grid";
            } else {
              row.style.display = "none";
            }
          }
        });
      });
    });
  }

  if (floatingPreview && workRows.length > 0) {
    const previewWidth = 400;
    const previewHeight = 250;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;
    let rafId = null;

    const calculatePosition = (clientX, clientY) => {
      let posX = clientX + 30;
      let posY = clientY - previewHeight / 2;

      // Flip to left if it would overflow right viewport
      if (posX + previewWidth > window.innerWidth - 24) {
        posX = clientX - previewWidth - 30;
      }
      // Keep within left viewport
      if (posX < 24) posX = 24;

      // Keep within vertical viewport
      if (posY + previewHeight > window.innerHeight - 24) {
        posY = window.innerHeight - previewHeight - 24;
      }
      if (posY < 24) posY = 24;

      return { x: posX, y: posY };
    };

    const animate = () => {
      if (!isHovering) return;
      currentX += (targetX - currentX) * 0.28;
      currentY += (targetY - currentY) * 0.28;

      floatingPreview.style.transform = `translate3d(${Math.round(currentX)}px, ${Math.round(currentY)}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    workRows.forEach((row) => {
      row.addEventListener("mouseenter", (e) => {
        if (window.innerWidth <= 768) return;

        const videoUrl = row.getAttribute("data-preview-video");
        const imgUrl = row.getAttribute("data-preview-img");

        const pos = calculatePosition(e.clientX, e.clientY);
        currentX = pos.x;
        currentY = pos.y;
        targetX = pos.x;
        targetY = pos.y;
        floatingPreview.style.transform = `translate3d(${Math.round(currentX)}px, ${Math.round(currentY)}px, 0)`;

        if (videoUrl && previewVideo) {
          if (previewVideo.src !== videoUrl) {
            previewVideo.src = videoUrl;
            previewVideo.load();
          }
          previewVideo.style.display = "block";
          if (previewImg) previewImg.style.display = "none";
          previewVideo.play().catch(() => {});
          floatingPreview.classList.add("visible");
        } else if (imgUrl && previewImg) {
          previewImg.src = imgUrl;
          previewImg.style.display = "block";
          if (previewVideo) {
            previewVideo.style.display = "none";
            previewVideo.pause();
          }
          floatingPreview.classList.add("visible");
        }

        isHovering = true;
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(animate);
      });

      row.addEventListener("mousemove", (e) => {
        if (window.innerWidth <= 768) return;
        const pos = calculatePosition(e.clientX, e.clientY);
        targetX = pos.x;
        targetY = pos.y;
      });

      row.addEventListener("mouseleave", () => {
        isHovering = false;
        cancelAnimationFrame(rafId);
        floatingPreview.classList.remove("visible");
        if (previewVideo) {
          previewVideo.pause();
        }
      });
    });
  }
}

// --- Contact Form Submission (Direct to Email) ---
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const recipient = atob("cmFnYXphYnJpYW5AZ21haWwuY29t");

  // Wire any direct email trigger buttons
  const directEmailBtns = document.querySelectorAll(".direct-email-trigger");
  directEmailBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent("Product Design Inquiry")}`;
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById("submit-btn");
    const statusEl = document.getElementById("form-status");

    const name = document.getElementById("contact-name")?.value.trim() || "";
    const email = document.getElementById("contact-email")?.value.trim() || "";
    const company = document.getElementById("contact-company")?.value.trim() || "Not specified";
    const scope = document.getElementById("contact-scope")?.value || "Project Scope Inquiry";
    const message = document.getElementById("contact-message")?.value.trim() || "";

    if (!name || !email || !message) {
      if (statusEl) {
        statusEl.style.display = "block";
        statusEl.style.color = "#ef4444";
        statusEl.textContent = "Please fill in all required fields.";
      }
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Opening Email Client...";
      submitBtn.style.opacity = "0.7";
    }

    const subject = encodeURIComponent(`${scope}: Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Brian,\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nProject Scope: ${scope}\n\nMessage / Problem Screen:\n${message}\n`
    );
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    if (statusEl) {
      statusEl.style.display = "block";
      statusEl.style.color = "#10b981";
      statusEl.innerHTML = `✓ Opening your email client to send your message... If your mail app did not open automatically, <a href="${mailtoUrl}" style="color: inherit; text-decoration: underline; font-weight: 600;">click here to finish sending your note</a>.`;
    }

    // Direct to user default email client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Another Message →";
        submitBtn.style.opacity = "1";
      }
    }, 3000);
  });
}

// --- Header Backdrop on Scroll ---
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initThemeToggle();
  initClock();
  initMenu();
  initRotatingLogos();
  initCustomCursor();
  initHeroVideoSwitcher();
  initWorkTable();
  initContactForm();
});
