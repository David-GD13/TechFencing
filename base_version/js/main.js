/**
 * TechFencing Main JS
 * 
 * Handles the "Disgusting Browser Blocker" to honor PewDiePie's 
 * philosophy of owning your data and stopping algorithmic harvesting.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Browser Detection
    // Simple user-agent checks for Opera and Chrome
    const userAgent = navigator.userAgent;
    
    // Note: Many browsers include "Chrome" in their user agent (like Edge, Brave, etc.)
    // We need to be specific.
    // Opera usually has "OPR" or "Opera"
    const isOpera = userAgent.includes("OPR/") || userAgent.indexOf("Opera") !== -1;
    
    // Chrome is tricky because Brave, Edge, etc. use it.
    // We look for "Chrome" but NOT "Edg" (Edge), "OPR" (Opera), "Brave" (Brave hides it, but still)
    // Often "Chromium" based browsers are hard to distinguish perfectly without advanced fingerprinting,
    // but for the sake of the joke/philosophy, we'll try a basic heuristic.
    const isEdge = userAgent.includes("Edg/");
    const isChrome = userAgent.includes("Chrome/") && !isEdge && !isOpera;

    // Check if it's Brave (Brave has a specific navigator.brave property)
    const isBrave = (navigator.brave && navigator.brave.isBrave && navigator.brave.isBrave.name === 'isBrave');

    // If it's Chrome (and not proven to be Brave) or Opera, we block.
    // We will assume if it's Chrome and navigator.brave is undefined, it's vanilla Chrome.
    
    let isDisgustingBrowser = false;
    
    if (isOpera) {
        isDisgustingBrowser = true;
    } else if (isChrome) {
        // If navigator.brave exists, it's Brave, so it's fine.
        // Otherwise, flag as disgusting.
        if (navigator.brave === undefined) {
             isDisgustingBrowser = true;
        }
    }

    // 2. Apply Blocker
    if (isDisgustingBrowser) {
        const blocker = document.getElementById("browser-blocker");
        const mainApp = document.getElementById("main-app");
        
        if (blocker && mainApp) {
            // Show blocker
            blocker.classList.remove("hidden");
            // Hide main content completely so they can't inspect element easily to read it
            mainApp.style.display = "none";
        }
    }

    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
