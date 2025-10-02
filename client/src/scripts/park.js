const renderPark = async () => {
  try {
    // 1. Parse the park ID from the URL
    const requestedID = parseInt(window.location.href.split("/").pop());

    // 2. Fetch all parks
    const response = await fetch("/parks");
    const data = await response.json();

    // 3. Get reference to the content container
    const parkContent = document.getElementById("park-content");

    // 4. Find the park with the matching ID
    let park;
    if (data) {
      park = data.find((p) => p.id === requestedID);
    }

    // 5. Conditional rendering
    if (park) {
      // Fill in park details
      document.getElementById("image").src = park.image || "/logo.png";
      document.getElementById("name").textContent = park.name || "Unknown Park";
      document.getElementById("state").textContent = park.state
        ? "📍 " + park.state
        : "📍 Unknown State";
      document.getElementById("description").textContent =
        park.description || "No description available.";

      // Update page title
      document.title = `Explore ${park.name} - National Parks`;
    } else {
      // If park not found, show a message
      const message = document.createElement("h2");
      message.textContent = "No Park Found 😞";
      message.className = "text-center text-xl text-gray-300 mt-10";
      parkContent.appendChild(message);
    }
  } catch (error) {
    console.error("Error loading park:", error);

    const parkContent = document.getElementById("park-content");
    const message = document.createElement("h2");
    message.textContent = "Error loading park 😞";
    message.className = "text-center text-xl text-red-400 mt-10";
    parkContent.appendChild(message);
  }
};

// 6. Call function when page loads
renderPark();
