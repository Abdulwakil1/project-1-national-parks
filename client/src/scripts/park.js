const renderPark = async () => {
  try {
    // Parse the park ID from the URL
    const parkId = window.location.pathname.split("/").pop();

    // Fetch only this park's data
    const response = await fetch(`/parks/${parkId}/data`);
    const park = await response.json();

    // Handle case where not found
    if (!park || park.error) {
      document.getElementById("park-content").innerHTML = `
        <h2 class="text-center text-xl text-gray-300 mt-10">No Park Found 😞</h2>`;
      return;
    }

    // Populate content
    document.getElementById("image").src = park.image || "/logo.png";
    document.getElementById("name").textContent = park.name || "Unknown Park";
    document.getElementById("state").textContent = park.state
      ? "📍 " + park.state
      : "📍 Unknown State";
    document.getElementById("description").textContent =
      park.description || "No description available.";
    document.title = `Explore ${park.name} - National Parks`;
  } catch (error) {
    console.error("Error loading park:", error);
    document.getElementById("park-content").innerHTML = `
      <h2 class="text-center text-xl text-red-400 mt-10">Error loading park 😞</h2>`;
  }
};

renderPark();
