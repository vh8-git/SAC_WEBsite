/* ══════════════════════════════════════════════
   Smile & Care – Site Configuration
   ══════════════════════════════════════════════ */

// Booking form URL — update this when the form app is deployed
const BOOKING_URL = 'https://smileandcare.agent-v.io/form';

// Apply booking URL to all CTA links on page load, open in new tab
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-booking-link]').forEach(a => {
    a.href = BOOKING_URL;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
});
