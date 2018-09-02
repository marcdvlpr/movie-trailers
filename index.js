const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Form Event Listener
searchForm.addEventListener('submit', (e) => {
  // Get search term
  const searchTerm = searchInput.value;

  // Get sort
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;

  // Get limit
  const searchLimit = document.querySelector('input[name="limit"]:checked').value;

  // Check input
  if (searchTerm === '') {
    // Show message
    showMessage('Please add a search term', 'alert-danger');
  }

  e.preventDefault();
});
