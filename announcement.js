/* announcement.js
   Clinic announcement loader
   Requires:
   - window.BACKEND_URL set in index page
   - optional target container with id="announcementSlot"
   - optional trapezium board with id="trapeziumBoard"
*/

(function () {
  'use strict';

  const DEFAULT_TITLE = 'Announcement';
  const SLOT_ID = 'announcementSlot';
  const BOARD_ID = 'trapeziumBoard';

  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatIST(input) {
    if (!input) return '';
    try {
      const d = new Date(input);
      if (isNaN(d.getTime())) return String(input);
      return new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).format(d) + ' IST';
    } catch (e) {
      return String(input);
    }
  }

  function getBackendUrl() {
    try {
      if (window.BACKEND_URL && String(window.BACKEND_URL).trim()) {
        return String(window.BACKEND_URL).trim();
      }
    } catch (e) {}
    return '';
  }

  function ensureSlot() {
    let slot = document.getElementById(SLOT_ID);
    if (slot) return slot;

    const board = document.getElementById(BOARD_ID);
    slot = document.createElement('section');
    slot.id = SLOT_ID;
    slot.className = 'announcement-slot';

    if (board && board.parentNode) {
      board.insertAdjacentElement('afterend', slot);
    } else {
      const main =
        document.querySelector('main') ||
        document.querySelector('.main') ||
        document.body;
      main.insertBefore(slot, main.firstChild);
    }

    return slot;
  }

  function setEmptyState(slot) {
    slot.innerHTML = '';
    slot.style.display = 'none';
  }

  function renderAnnouncement(data) {
    const slot = ensureSlot();

    if (!data || data.active === false) {
      setEmptyState(slot);
      return;
    }

    const title = data.title ? escapeHtml(data.title) : DEFAULT_TITLE;
    const message = data.message ? escapeHtml(data.message) : '';
    const imageUrl = data.imageUrl ? String(data.imageUrl).trim() : '';
    const updatedAt = data.updatedAt ? formatIST(data.updatedAt) : '';

    slot.innerHTML = `
      <div class="announcement-card">
        <div class="announcement-head">
          <span class="announcement-badge">●</span>
          <span class="announcement-label">${title}</span>
        </div>
        ${message ? `<div class="announcement-text">${message}</div>` : ''}
        ${imageUrl ? `<img class="announcement-img" src="${escapeHtml(imageUrl)}" alt="Announcement">` : ''}
        ${updatedAt ? `<div class="announcement-meta">Updated: ${escapeHtml(updatedAt)}</div>` : ''}
      </div>
    `;
    slot.style.display = 'block';
  }

  async function fetchAnnouncement() {
    const url = getBackendUrl();

    if (!url) {
      const fallback = window.CLINIC_ANNOUNCEMENT || null;
      renderAnnouncement(fallback);
      return;
    }

    try {
      const res = await fetch(url + '?action=getAnnouncement', {
        cache: 'no-store'
      });

      if (!res.ok) {
        throw new Error('Announcement fetch failed');
      }

      const data = await res.json();
      renderAnnouncement(data);
    } catch (err) {
      const fallback = window.CLINIC_ANNOUNCEMENT || null;
      renderAnnouncement(fallback);
    }
  }

  function injectBaseStyles() {
    if (document.getElementById('announcementStyles')) return;

    const style = document.createElement('style');
    style.id = 'announcementStyles';
    style.textContent = `
      .announcement-slot{
        width:100%;
        padding: 10px 6%;
        box-sizing:border-box;
      }
      .announcement-card{
        max-width:1100px;
        margin: 0 auto;
        padding: 14px 16px;
        border-radius: 16px;
        border: 1px solid rgba(201,168,76,.22);
        background: linear-gradient(135deg, rgba(201,168,76,.10), rgba(59,110,248,.06));
        box-shadow: 0 10px 28px rgba(0,0,0,.18);
      }
      .announcement-head{
        display:flex;
        align-items:center;
        gap:8px;
        margin-bottom:8px;
      }
      .announcement-badge{
        color:#c9a84c;
        font-size:14px;
        line-height:1;
      }
      .announcement-label{
        font-weight:700;
        color: var(--text, #e8e8f4);
        letter-spacing:.3px;
        font-size:.92rem;
      }
      .announcement-text{
        color: var(--text2, #7878a0);
        font-size:.84rem;
        line-height:1.6;
        white-space:pre-wrap;
        word-break:break-word;
      }
      .announcement-img{
        display:block;
        width:100%;
        max-height:220px;
        object-fit:cover;
        border-radius: 12px;
        margin-top: 10px;
        border: 1px solid rgba(201,168,76,.14);
      }
      .announcement-meta{
        margin-top:8px;
        font-size:.68rem;
        opacity:.8;
        color: var(--text2, #7878a0);
      }
      [data-theme="light"] .announcement-card{
        background: linear-gradient(135deg, rgba(201,168,76,.08), rgba(59,110,248,.04));
      }
    `;
    document.head.appendChild(style);
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectBaseStyles();
    ensureSlot();
    fetchAnnouncement();
  });

  window.reloadAnnouncement = fetchAnnouncement;
  window.renderClinicAnnouncement = renderAnnouncement;
})();
