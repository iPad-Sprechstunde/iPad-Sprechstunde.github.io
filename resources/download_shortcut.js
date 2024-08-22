document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = '/resources/shortcuts/releases.json';
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const releaseUrl = data.release.URL; // Accessing the URL property inside the release object
            window.open(releaseUrl, '_blank'); // Opens the fetched URL in a new tab
        })
        .catch(error => console.error('Error fetching data:', error));
});