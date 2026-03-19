// Glossary tooltip system — hover on desktop, tap on mobile

const glossaryData: Record<string, string> = {
  "algo brain": "The state of having your attention shaped by algorithmic feeds — scrolling without intent.",
  "arch linux": "An advanced Linux distribution. PewDiePie uses it on his laptop and Steam Deck.",
  "cli": "Command Line Interface. Text-based computer interaction. Looks like hacking in movies.",
  "de-google": "Systematically replacing Google services with privacy-respecting alternatives.",
  "desktop environment": "The graphical interface of Linux — taskbar, file manager, settings. Examples: GNOME, KDE, Cinnamon.",
  "distro": "A version of Linux packaged with specific software. Like flavors of ice cream.",
  "dns blocker": "Blocks ads and trackers at the network level. Pi-Hole is the most popular.",
  "docker": "Runs applications in isolated containers. Makes self-hosting much easier.",
  "dual-boot": "Running two operating systems on one computer.",
  "f-droid": "Open-source app store for Android. The privacy-focused Play Store alternative.",
  "friction": "Adding intentional delays to break automatic behavior — a core TechFencing pillar.",
  "filtering": "Removing noise from your digital life — through self-hosting, extensions, DNS blocking.",
  "grapheneos": "Privacy-focused mobile OS. Only works on Pixel phones. PewDiePie uses it.",
  "hyprland": "A tiling Wayland compositor. PewDiePie's window manager of choice.",
  "linux mint": "Beginner-friendly Linux. PewDiePie's recommendation for first-timers.",
  "local llm": "AI models running on your own hardware. Your data never leaves your machine.",
  "nextcloud": "Self-hosted cloud storage. Replaces Google Drive, Calendar, Contacts.",
  "ollama": "Makes running local AI models easy. The simplest entry point for local AI.",
  "package manager": "Installs, updates, and removes Linux programs. apt, pacman, dnf.",
  "pi-hole": "DNS-level ad blocker on a Raspberry Pi. Blocks ads for your whole network.",
  "raspberry pi": "Small, cheap computer for self-hosting. PewDiePie runs his server on one.",
  "ricing": "Customizing your Linux desktop appearance. Named after car modding culture.",
  "rofi": "Linux application launcher. Type, hit enter, app opens.",
  "rss": "Subscribe to websites without algorithms. The original 'feed.'",
  "self-hosting": "Running your own server instead of relying on companies.",
  "tech fencing": "Building barriers between yourself and exploitative technology. Coined by PewDiePie.",
  "tiling window manager": "Arranges windows like tiles. No overlapping. Keyboard-driven.",
  "unhook": "Browser extension that strips YouTube's homepage, recommendations, and Shorts.",
  "vaultwarden": "Self-hosted password manager. PewDiePie's took 2 days to set up.",
  "vps": "Virtual Private Server. Rented server, alternative to Raspberry Pi.",
  "waybar": "Customizable status bar for Linux. Part of the ricing toolkit.",
};

let tooltipEl: HTMLDivElement | null = null;

function createTooltip(): HTMLDivElement {
  const el = document.createElement('div');
  el.className = 'glossary-tooltip';
  el.setAttribute('role', 'tooltip');
  el.style.cssText = `
    position: fixed;
    z-index: 1400;
    max-width: 300px;
    padding: 12px 16px;
    background: #282c34;
    border: 1px solid rgba(212, 84, 94, 0.2);
    border-radius: 8px;
    color: #f0b8b8;
    font-size: 0.8rem;
    line-height: 1.5;
    pointer-events: none;
    opacity: 0;
    transition: opacity 150ms ease-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  `;
  document.body.appendChild(el);
  return el;
}

function showTooltip(term: string, rect: DOMRect) {
  if (!tooltipEl) tooltipEl = createTooltip();

  const definition = glossaryData[term];
  if (!definition) return;

  tooltipEl.innerHTML = `<strong style="color:#d4545e;font-family:'JetBrains Mono',monospace;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;">${term}</strong><br/>${definition}`;
  tooltipEl.style.opacity = '1';

  // Position: above the term, centered
  const tooltipRect = tooltipEl.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - 150;
  let top = rect.top - tooltipRect.height - 8;

  // Keep on screen
  if (left < 8) left = 8;
  if (left + 300 > window.innerWidth - 8) left = window.innerWidth - 308;
  if (top < 8) top = rect.bottom + 8; // flip below

  tooltipEl.style.left = `${left}px`;
  tooltipEl.style.top = `${top}px`;
}

function hideTooltip() {
  if (tooltipEl) tooltipEl.style.opacity = '0';
}

function init() {
  const terms = document.querySelectorAll('[data-glossary-term]');

  terms.forEach(el => {
    const term = (el as HTMLElement).dataset.glossaryTerm;
    if (!term) return;

    // Desktop: hover
    el.addEventListener('mouseenter', () => {
      showTooltip(term, el.getBoundingClientRect());
    });

    el.addEventListener('mouseleave', hideTooltip);

    // Mobile: tap
    el.addEventListener('click', (e) => {
      if (window.innerWidth < 1024) {
        e.preventDefault();
        const isVisible = tooltipEl?.style.opacity === '1';
        if (isVisible) {
          hideTooltip();
        } else {
          showTooltip(term, el.getBoundingClientRect());
        }
      }
    });
  });

  // Close tooltip on outside click (mobile)
  document.addEventListener('click', (e) => {
    if (!(e.target as HTMLElement).closest('[data-glossary-term]')) {
      hideTooltip();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
