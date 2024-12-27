function searchFood() {
  const searchInput = document.getElementById('searchInput');
  const searchQuery = searchInput.value.trim().toLowerCase(); // Trim to remove spaces
  const restaurantCards = document.querySelectorAll('.restaurant-card');

  // Remove any previous highlights
  restaurantCards.forEach(card => card.classList.remove('highlight'));

  // Check if the input is empty
  if (!searchQuery) {
      alert('Please enter a food name to search.');
      return; // Do nothing if input is empty
  }

  let found = false; // Flag to check if a match is found
  restaurantCards.forEach(card => {
      const cardText = card.innerText.toLowerCase();
      if (cardText.includes(searchQuery)) {
          found = true;
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('highlight'); // Highlight the matched card
      }
  });

  if (!found) {
      alert('No matching food found!');
  }
}
