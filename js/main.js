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

// --- Hero Hover Video Switcher ---
function initHeroVideoSwitcher() {
  const videoPlayer = document.getElementById("hero-video-player");
  const pills = document.querySelectorAll(".hero-pills-stack .pill-item");
  if (!videoPlayer || pills.length === 0) return;

  const defaultSrc = videoPlayer.getAttribute("data-default-src");

  pills.forEach((pill) => {
    pill.addEventListener("mouseenter", () => {
      const targetVideo = pill.getAttribute("data-video");
      if (targetVideo && targetVideo !== videoPlayer.src) {
        videoPlayer.src = targetVideo;
        videoPlayer.play().catch(() => {});
      }
    });

    pill.addEventListener("mouseleave", () => {
      if (defaultSrc && videoPlayer.src !== defaultSrc) {
        videoPlayer.src = defaultSrc;
        videoPlayer.play().catch(() => {});
      }
    });
  });
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
  initHeroVideoSwitcher();
  initWorkTable();
  initContactForm();
});
