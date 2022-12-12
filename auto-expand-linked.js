function autoExpandLinked() {
    // Get hash from URL
    const hash = window.location.hash;
    
    // CHeck if hash matches any id of an element
    if (hash && document.querySelector(hash)) {
        // Get element
        const element = document.querySelector(hash);
        
        // Get any details element that is an ancestor of the element
        const details = element.querySelector('details');

        if (!details) return;
        
        // Open the details to show the full event
        details.open = true;
    }
}

// Run autoExpandLinked when the page loads
autoExpandLinked();