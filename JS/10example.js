// Example 1: Display the current orientation of the device
function showOrientation() {
    const orientation = window.orientation;
    alert("Current orientation: " + orientation + " degrees.");
}

// Example 2: Detect if the device is in landscape or portrait mode
function detectOrientation() {
    if (window.orientation === 0 || window.orientation === 180) {
        alert("Portrait Mode");
    } else if (window.orientation === 90 || window.orientation === -90) {
        alert("Landscape Mode");
    } else {
        alert("Unknown Orientation");
    }
}

// Example 3: Detect orientation change
function detectOrientationChange() {
    window.addEventListener("orientationchange", function() {
        const orientation = window.orientation;
        alert("Orientation changed to: " + orientation + " degrees.");
    });
}

// Example 4: Rotate an element based on orientation
function rotateElement() {
    const element = document.querySelector("body");
    const orientation = window.orientation;
    if (orientation === 90) {
        element.style.transform = "rotate(90deg)";
    } else if (orientation === -90) {
        element.style.transform = "rotate(-90deg)";
    } else {
        element.style.transform = "rotate(0deg)";
    }
}

// Example 5: Toggle CSS class based on orientation
function toggleOrientationClass() {
    const element = document.querySelector("body");
    if (window.orientation === 90 || window.orientation === -90) {
        element.classList.add("landscape");
        element.classList.remove("portrait");
    } else {
        element.classList.add("portrait");
        element.classList.remove("landscape");
    }
}

// Example 6: Check if the device is in portrait mode
function isPortrait() {
    if (window.orientation === 0 || window.orientation === 180) {
        alert("The device is in portrait mode.");
    } else {
        alert("The device is not in portrait mode.");
    }
}

// Example 7: Check if the device is in landscape mode
function isLandscape() {
    if (window.orientation === 90 || window.orientation === -90) {
        alert("The device is in landscape mode.");
    } else {
        alert("The device is not in landscape mode.");
    }
}

// Example 8: Adjust content based on orientation
function adjustContentBasedOnOrientation() {
    const element = document.querySelector("h1");
    if (window.orientation === 90 || window.orientation === -90) {
        element.textContent = "Landscape Mode Detected!";
    } else {
        element.textContent = "Portrait Mode Detected!";
    }
}

// Example 9: Listen for orientation changes and log the angle
function logOrientationChange() {
    window.addEventListener("orientationchange", function() {
        const angle = window.orientation;
        console.log("Orientation angle changed to: " + angle);
    });
}

// Example 10: Rotate the page content based on orientation angle
function rotateContent() {
    const content = document.querySelector("body");
    window.addEventListener("orientationchange", function() {
        const angle = window.orientation;
        content.style.transform = "rotate(" + angle + "deg)";
    });
}
