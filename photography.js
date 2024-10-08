// photography.js
document.addEventListener('DOMContentLoaded', function () {
    // Get the subtext and menu pane elements
    const subtext = document.getElementById('subtext');
    const menuPane = document.getElementById('menuPane');
  
    // Set visibility of the subtext
    subtext.style.visibility = 'visible'; // Make sure it's visible
    subtext.style.opacity = 1; // Ensure full opacity
    subtext.innerHTML = "I will upload my photography here soon, bear with me.";
  
    // Show the menu pane immediately
    menuPane.style.display = 'flex'; // Or use 'block' if you prefer
    menuPane.style.opacity = 1; // Ensure full opacity for menu pane
    menuPane.style.visibility = 'visible'; // Make sure it's visible
  });
  