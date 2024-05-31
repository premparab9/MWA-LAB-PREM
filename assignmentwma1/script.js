



// Function to fetch event data (replace with your data fetching logic)
function getEvents() {
    // Simulate fetching data from a server or XML file
    const events = [
      {
        title: "Guest Lecture on Machine Learning",
        date: "2024-06-10",
        description: "This lecture will explore...",
        image: "machine_learning.jpg",
        url: "event-details.html" // Replace with actual event details page URL
      },
      // Add more event objects here
    ];
    return events;
  }
  
  const eventList = document.querySelector(".event-list");
  
  function displayEvents(events) {
    eventList.innerHTML = ""; // Clear existing event list
    events.forEach(event => {
      const listItem = document.createElement("li");
      const eventLink = document.createElement("a");
      eventLink.href = event.url;
      eventLink.textContent = event.title;
      listItem.appendChild(eventLink);
      eventList.appendChild(listItem);
    });
  }
  
  const filterCategory = document.getElementById("filter-category");
  const searchInput = document.getElementById("search-events");
  
  filterCategory.addEventListener("change", () => {
    const selectedCategory = filterCategory.value;
    const events = getEvents();
    let filteredEvents = events;
    if (selectedCategory !== "all") {
      filteredEvents = events.filter(event => event.category === selectedCategory);
    }
    displayEvents(filteredEvents);
  });
  
  searchInput.addEventListener("keyup", () => {
    
  