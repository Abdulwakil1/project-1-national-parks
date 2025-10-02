export const renderParks = async () => {
  const parksSection = document.getElementById("parks-section");
  if (!parksSection) {
    console.error("parks-section not found!");
    return;
  }

  parksSection.innerHTML = "";
  const loading = document.createElement("p");
  loading.textContent = "Loading parks...";
  loading.className = "text-center text-gray-400 italic mt-8";
  parksSection.appendChild(loading);

  try {
    const response = await fetch("/parks");

    if (response.status === 404) {
      // backend says not found → redirect to custom 404
      window.location.href = "/404.html";
      return;
    }
    if (!response.ok) throw new Error(`Server returned ${response.status}`);

    const data = await response.json();
    parksSection.innerHTML = "";

    if (!data || data.length === 0) {
      const message = document.createElement("h2");
      message.textContent = "No Parks Available 😞";
      message.className = "text-center text-xl text-gray-300 mt-10";
      parksSection.appendChild(message);
      return;
    }

    // render cards (same as original)
    const grid = document.createElement("div");
    grid.className =
      "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-10";

    data.forEach((park) => {
      const card = document.createElement("div");
      card.className =
        "bg-gray-800/60 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transform transition hover:scale-[1.02] border-[0.5px] border-transparent hover:border-gray-500/60";

      const topContainer = document.createElement("div");
      topContainer.className = "h-48 w-full relative overflow-hidden";
      const imageUrl = park.image || "/logo.png";
      topContainer.style.backgroundImage = `url(${imageUrl})`;
      topContainer.style.backgroundSize = "cover";
      topContainer.style.backgroundPosition = "center";
      // hidden <img> for SEO
      const hiddenImg = document.createElement("img");
      hiddenImg.src = imageUrl;
      hiddenImg.alt = park.name
        ? `${park.name} – ${park.state || "National Park"}`
        : "National Park image";
      hiddenImg.loading = "lazy";
      hiddenImg.decoding = "async";
      hiddenImg.className = "sr-only";
      topContainer.appendChild(hiddenImg);
      // bottom text container
      const bottomContainer = document.createElement("div");
      bottomContainer.className = "p-4 flex flex-col gap-2";

      const name = document.createElement("h3");
      name.textContent = park.name || "Unknown Park";
      name.className = "text-lg font-semibold text-white tracking-tight";
      bottomContainer.appendChild(name);

      if (park.state) {
        const state = document.createElement("p");
        state.textContent = `📍 ${park.state}`;
        state.className = "text-sm text-gray-400";
        bottomContainer.appendChild(state);
      }

      if (park.description) {
        const desc = document.createElement("p");
        desc.textContent = park.description;
        desc.className = "text-sm text-gray-300 line-clamp-3";
        bottomContainer.appendChild(desc);
      }

      const button = document.createElement("a");
      button.textContent = "Explore →";
      button.href = `/parks/${park.id}`;
      button.setAttribute("role", "button");
      button.className = `
        mt-3 inline-block
        min-w-[110px]
        px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3
        rounded-lg
        bg-green-600 text-white font-semibold
        shadow
        border border-transparent
        hover:bg-green-700 hover:border-white/70
        transition
      `;
      bottomContainer.appendChild(button);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
      grid.appendChild(card);
    });

    parksSection.appendChild(grid);

    if (window.location.hash === "#parks-section") {
      parksSection.scrollIntoView({ behavior: "smooth" });
    }

    return true;
  } catch (err) {
    parksSection.innerHTML = "";
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Failed to load parks. Check console for details.";
    errorMsg.className = "text-center text-red-400 mt-6";
    parksSection.appendChild(errorMsg);
    console.error("Error fetching parks:", err);
    return false;
  }
};

// ── Simple route guard / startup logic/behavior ──
if (typeof window !== "undefined") {
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  const first = pathSegments[0] || "";

  // Helper: run renderParks() when we should (home or /parks)
  function maybeRenderParks() {
    // If renderParks is exported and available, call it on DOMContentLoaded
    if (typeof renderParks === "function") {
      window.addEventListener("DOMContentLoaded", () => {
        renderParks().catch((e) => console.error("renderParks error:", e));
      });
    }
  }

  // Allowed routes:
  //  - / (home)                      -> render parks (homepage)
  //  - /index.html                   -> render parks (some dev setups)
  //  - /parks                        -> render parks (list)
  //  - /parks/:id (single numeric id) -> DO NOTHING here (park detail page's park.js handles it)
  // Anything else -> redirect to 404.html
  if (pathSegments.length === 0 || first === "index.html") {
    maybeRenderParks();
  } else if (first === "parks") {
    if (pathSegments.length === 1) {
      // /parks -> show list (works for "View All" from details)
      maybeRenderParks();
    } else if (pathSegments.length === 2) {
      // /parks/:id -> let park.js handle it (do nothing)
      // optional: validate ID is numeric-ish; if not numeric -> redirect to 404
      const id = pathSegments[1];
      if (!/^\d+$/.test(id)) {
        window.location.href = "/404.html";
      }
    } else {
      // too deep -> invalid
      window.location.href = "/404.html";
    }
  } else {
    // unknown top-level path -> show 404
    // In dev (Vite) this will redirect to /404.html which Vite will serve from client/public/404.html
    window.location.href = "/404.html";
  }
}
