function updateConverterVisibility() {
    const converterDiv = document.getElementById('converter');
    const storageKey = 'convertHEXTORGBA?-extensionColorPickerChromeExtension';

    // Check if the local storage key exists
    if (localStorage.getItem(storageKey) === 'yes') {
        converterDiv.style.display = 'block'; // Show the div
    } else {
        converterDiv.style.display = 'none'; // Hide the div
    }
}

// Call the function to initially set the visibility
updateConverterVisibility();