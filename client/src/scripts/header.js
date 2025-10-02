// header.js
import { renderParks } from "./parks.js";

const header = document.querySelector("header");
if (!header) {
  console.error("<header> element not found on page.");
  // still continue — nothing to append to
}
// parks.js handles this at the bottom
// Render parks only when parks-section exists (so detail pages are unaffected)
// let parksRendered = false;
// window.addEventListener("DOMContentLoaded", async () => {
//   // Only render parks if the page actually has the parks section.
//   // This prevents trying to render the parks grid on detail pages (e.g. /parks/3).
//   const parksSection = document.getElementById("parks-section");
//   if (parksSection) {
//     try {
//       parksRendered = await renderParks();
//     } catch (err) {
//       console.error("Error rendering parks on load:", err);
//     }
//   }
// });

// Header container
const headerContainer = document.createElement("div");
headerContainer.className =
  "fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md text-white flex items-center justify-between px-6 py-4";

// LEFT: logo + title
const headerLeft = document.createElement("div");
headerLeft.className = "flex items-center gap-3";

const headerLogo = document.createElement("img");
headerLogo.src = "/logo.png";
headerLogo.alt = "National Parks Logo";
headerLogo.className = "h-12 w-12 rounded-full border border-gray-700";

const headerTitle = document.createElement("h1");
headerTitle.textContent = "Explore National Parks";
// headerTitle.className = "text-xl font-semibold tracking-tight";
headerTitle.className =
  "font-['Merriweather'] text-xl font-bold text-white tracking-wide";

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

// RIGHT: navigation buttons
const headerRight = document.createElement("div");
headerRight.className = "flex items-center gap-4";

function createNavButton(label, href) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = label;
  btn.setAttribute("aria-label", `Go to ${label} page`);

  btn.className = `
    min-w-[110px]
    px-3 py-2
    sm:px-4 sm:py-2.5
    md:px-5 md:py-3
    rounded-lg
    transition
    text-sm sm:text-base md:text-lg
    font-semibold
    bg-green-600 text-white
    border border-transparent
    hover:bg-green-700
    hover:border-white/70
    focus:outline-none cursor-pointer
  `;

  btn.addEventListener("click", async () => {
    if (label === "View All") {
      const parksSection = document.getElementById("parks-section");
      if (parksSection) {
        // already on homepage → scroll to cards
        parksSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // on detail page → go home and jump to cards
        window.location.href = "/index.html#parks-section";
      }
    } else if (label === "Home") {
      const isHome =
        window.location.pathname === "/" ||
        window.location.pathname.endsWith("index.html");

      if (isHome) {
        const hero = document.getElementById("hero-section");
        if (hero) {
          hero.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        window.location.href = "/";
      }
    } else {
      window.location.href = href;
    }
  });

  return btn;
}

// Home + View All buttons
const homeButton = createNavButton("Home", "/");
const parksButton = createNavButton("View All", "/parks");

headerRight.appendChild(homeButton);
headerRight.appendChild(parksButton);

// Assemble header
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);
header.appendChild(headerContainer);
