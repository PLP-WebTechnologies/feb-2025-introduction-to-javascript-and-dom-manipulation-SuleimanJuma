// Wait for DOM to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const textChangerBtn = document.getElementById('text-changer');
    const dynamicText = document.getElementById('dynamic-text');
    
    textChangerBtn.addEventListener('click', function() {
        const texts = [
            "The text has been changed!",
            "It changed again!",
            "Keep clicking to see more changes!",
            "JavaScript is fun!",
            "Back to the original message."
        ];
        
        // Get current text and find next one in array
        const currentText = dynamicText.textContent;
        const currentIndex = texts.indexOf(currentText);
        const nextIndex = (currentIndex + 1) % texts.length;
        
        dynamicText.textContent = texts[nextIndex];
    });

    // Task 2: Modify CSS styles via JavaScript
    const styleChangerBtn = document.getElementById('style-changer');
    const styleBox = document.getElementById('style-box');
    let styleChanged = false;
    
    styleChangerBtn.addEventListener('click', function() {
        if (styleChanged) {
            styleBox.style.backgroundColor = '#f0f0f0';
            styleBox.style.color = '#333';
            styleBox.style.border = '1px solid #ddd';
            styleBox.style.transform = 'scale(1)';
        } else {
            styleBox.style.backgroundColor = '#4CAF50';
            styleBox.style.color = 'white';
            styleBox.style.border = '2px dashed yellow';
            styleBox.style.transform = 'scale(1.05)';
        }
        styleChanged = !styleChanged;
    });

    // Task 3: Add or remove an element when a button is clicked
    const elementTogglerBtn = document.getElementById('element-toggler');
    const toggleContainer = document.getElementById('toggle-container');
    const toggledElement = document.getElementById('toggled-element');
    let elementExists = true;
    
    elementTogglerBtn.addEventListener('click', function() {
        if (elementExists) {
            toggledElement.remove();
            elementTogglerBtn.textContent = 'Add Element';
        } else {
            toggleContainer.appendChild(toggledElement);
            elementTogglerBtn.textContent = 'Remove Element';
        }
        elementExists = !elementExists;
    });
});