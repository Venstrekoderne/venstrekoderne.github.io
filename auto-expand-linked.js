function autoExpandLinked() {
    // Get hash from URL
    const hash = window.location.hash;
    
    // Check if hash matches any id of an element (ids like
    // "/2024/12/17/teknologi-og-krig" aren't valid selectors, so look them up by id)
    const element = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (element) {
        
        // Get any details element that is an ancestor of the element
        const details = element.querySelector('details');

        if (!details) return;
        
        // Open the details to show the full event
        details.open = true;
    }
}

// Run autoExpandLinked when the page loads
autoExpandLinked();