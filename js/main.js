// --- Studio Clock ---
function initClock() {
  const clockEl = document.getElementById("clock-time");
  if (!clockEl) return;

  function update() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString("en-US", {
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

        const selectedFilter = btn.getAttribute("data-filter");

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
          if (previewVideo) previewVideo.style.display = "none";
          floatingPreview.classList.add("visible");
        }
      });

      row.addEventListener("mouseleave", () => {
        floatingPreview.classList.remove("visible");
        if (previewVideo) previewVideo.pause();
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initClock();
  initMenu();
  initHeroVideoSwitcher();
  initWorkTable();
});
