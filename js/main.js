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

  menuBtn.addEventListener("click", () => {
    const isOpen = menuDrawer.classList.toggle("open");
    menuBtn.innerHTML = isOpen ? '<span>Close</span> ✕' : '<span>Menu</span>';
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
      const targetVideo = targetId ? document.getElementById(targetId) : defaultVideo;
      if (!targetVideo || targetVideo === activeVideo) return;

      targetVideo.play().catch(() => {});
      targetVideo.classList.add("active");

      if (activeVideo && activeVideo !== targetVideo) {
        activeVideo.classList.remove("active");
      }

      activeVideo = targetVideo;
    });

    pill.addEventListener("mouseleave", () => {
      if (activeVideo === defaultVideo) return;

      defaultVideo.classList.add("active");
      defaultVideo.play().catch(() => {});

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
      cursorX += (mouseX - cursorX) * 0.32;
      cursorY += (mouseY - cursorY) * 0.32;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
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
    workRows.forEach((row) => {
      row.addEventListener("mouseenter", () => {
        const videoUrl = row.getAttribute("data-preview-video");
        const imgUrl = row.getAttribute("data-preview-img");

        if (videoUrl && previewVideo) {
          previewVideo.src = videoUrl;
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
      });

      row.addEventListener("mouseleave", () => {
        floatingPreview.classList.remove("visible");
        if (previewVideo) {
          previewVideo.pause();
        }
      });
    });
  }
}

// --- Contact Form Submission ---
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  // Obfuscated endpoint destination
  const endpoint = atob("aHR0cHM6Ly9mb3Jtc3VibWl0LmNvL2FqYXgvcmFnYXphYnJpYW5AZ21haWwuY29t");

  form.addEventListener("submit", async (e) => {
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
      submitBtn.textContent = "Sending Message...";
      submitBtn.style.opacity = "0.7";
    }

    if (statusEl) {
      statusEl.style.display = "block";
      statusEl.style.color = "#999999";
      statusEl.textContent = "Sending your message...";
    }

    const payload = {
      name: name,
      email: email,
      company: company,
      project_scope: scope,
      message: message,
      _subject: `${scope} — Response from ${name}`,
      _replyto: email,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        if (statusEl) {
          statusEl.style.color = "#10b981";
          statusEl.innerHTML = `✓ Thank you, ${name}! Your entry has been sent successfully. I have received your response and will get back to you shortly.`;
        }
        form.reset();
        if (submitBtn) {
          submitBtn.textContent = "Message Sent ✓";
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send Message →";
            submitBtn.style.opacity = "1";
          }, 4500);
        }
      } else {
        throw new Error("Service returned status: " + response.status);
      }
    } catch (err) {
      console.warn("Direct POST failed, falling back to mail client:", err);
      const mailtoSubject = encodeURIComponent(`${scope} (${name})`);
      const mailtoBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nProject Scope: ${scope}\n\nMessage / Bottleneck Screen:\n${message}`
      );
      const mailtoUrl = `mailto:${atob("cmFnYXphYnJpYW5AZ21haWwuY29t")}?subject=${mailtoSubject}&body=${mailtoBody}`;

      if (statusEl) {
        statusEl.style.color = "#f59e0b";
        statusEl.innerHTML = `Thank you! If you did not receive immediate confirmation, <a href="${mailtoUrl}" style="color: #fff; text-decoration: underline;">click here to finish sending your response</a>.`;
      }
      window.location.href = mailtoUrl;

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message →";
        submitBtn.style.opacity = "1";
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initClock();
  initMenu();
  initRotatingLogos();
  initCustomCursor();
  initHeroVideoSwitcher();
  initWorkTable();
  initContactForm();
});
