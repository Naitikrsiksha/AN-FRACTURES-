/**
 * ================================================================
 *  AN CLINIC — ANNOUNCEMENT MODULE
 *  Fetches announcements from Google Sheets via Apps Script
 * ================================================================
 * 
 * Google Sheet Structure (Announcements Sheet):
 * | Timestamp | Title | Message | ImageURL | Priority | Active | ExpiryDate |
 * 
 * Priority: high, normal, low
 * Active: yes/no
 * ExpiryDate: Date when announcement should stop showing (optional)
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    // Google Apps Script Web App URL for announcements
    // Replace with your actual deployed script URL
    ANNOUNCEMENT_URL: window.BACKEND_URL || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
    
    // Cache duration in milliseconds (5 minutes)
    CACHE_DURATION: 5 * 60 * 1000,
    
    // LocalStorage key
    STORAGE_KEY: 'anClinicAnnouncements',
    CACHE_TIME_KEY: 'anClinicAnnouncementsCacheTime',
    
    // Default announcements (fallback)
    DEFAULT_ANNOUNCEMENTS: []
  };

  /**
   * Initialize announcement module
   */
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadAnnouncements);
    } else {
      loadAnnouncements();
    }
  }

  /**
   * Load announcements from cache or fetch from server
   */
  async function loadAnnouncements() {
    const slot = document.getElementById('announcementSlot');
    const emptyMsg = document.getElementById('announcementEmpty');
    
    if (!slot) return;

    // Try to get cached announcements first
    const cached = getCachedAnnouncements();
    if (cached && cached.length > 0) {
      renderAnnouncements(cached);
    }

    // Fetch fresh announcements
    try {
      const announcements = await fetchAnnouncements();
      if (announcements && announcements.length > 0) {
        cacheAnnouncements(announcements);
        renderAnnouncements(announcements);
      } else if (!cached || cached.length === 0) {
        showEmptyState();
      }
    } catch (error) {
      console.log('Announcement fetch failed:', error);
      if (!cached || cached.length === 0) {
        showEmptyState();
      }
    }
  }

  /**
   * Fetch announcements from Google Apps Script
   */
  async function fetchAnnouncements() {
    try {
      const response = await fetch(`${CONFIG.ANNOUNCEMENT_URL}?action=getAnnouncements`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Filter active and non-expired announcements
      if (Array.isArray(data)) {
        return data.filter(isAnnouncementValid);
      }
      
      return [];
    } catch (error) {
      console.error('Error fetching announcements:', error);
      return [];
    }
  }

  /**
   * Check if announcement is valid (active and not expired)
   */
  function isAnnouncementValid(announcement) {
    // Check if active
    if (announcement.active && announcement.active.toLowerCase() !== 'yes') {
      return false;
    }

    // Check expiry date
    if (announcement.expiryDate) {
      const expiry = new Date(announcement.expiryDate);
      const now = new Date();
      if (expiry < now) {
        return false;
      }
    }

    // Must have at least title or message
    return !!(announcement.title || announcement.message);
  }

  /**
   * Get cached announcements from localStorage
   */
  function getCachedAnnouncements() {
    try {
      const cacheTime = localStorage.getItem(CONFIG.CACHE_TIME_KEY);
      if (!cacheTime) return null;

      const now = Date.now();
      if (now - parseInt(cacheTime) > CONFIG.CACHE_DURATION) {
        return null; // Cache expired
      }

      const cached = localStorage.getItem(CONFIG.STORAGE_KEY);
      return cached ? JSON.parse(cached) : null;
    } catch (e) {
      return null;
    }
  }

  /**
   * Cache announcements in localStorage
   */
  function cacheAnnouncements(announcements) {
    try {
      localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(announcements));
      localStorage.setItem(CONFIG.CACHE_TIME_KEY, Date.now().toString());
    } catch (e) {
      console.log('Could not cache announcements');
    }
  }

  /**
   * Render announcements to the page
   */
  function renderAnnouncements(announcements) {
    const slot = document.getElementById('announcementSlot');
    const emptyMsg = document.getElementById('announcementEmpty');
    
    if (!slot) return;

    // Sort by priority (high first) and then by timestamp (newest first)
    const sorted = announcements.sort((a, b) => {
      const priorityOrder = { high: 0, normal: 1, low: 2 };
      const priorityDiff = (priorityOrder[a.priority] || 1) - (priorityOrder[b.priority] || 1);
      if (priorityDiff !== 0) return priorityDiff;
      
      // Same priority - sort by timestamp (newest first)
      return new Date(b.timestamp || 0) - new Date(a.timestamp || 0);
    });

    // Clear existing announcements (except empty message)
    const existingCards = slot.querySelectorAll('.announcement-card');
    existingCards.forEach(card => card.remove());

    // Hide empty message
    if (emptyMsg) emptyMsg.style.display = 'none';

    // Render each announcement
    sorted.forEach((announcement, index) => {
      const card = createAnnouncementCard(announcement, index);
      slot.appendChild(card);
      
      // Show with animation delay
      setTimeout(() => {
        card.classList.add('show');
      }, index * 100);
    });
  }

  /**
   * Create announcement card element
   */
  function createAnnouncementCard(announcement, index) {
    const card = document.createElement('div');
    card.className = 'announcement-card';
    card.setAttribute('data-priority', announcement.priority || 'normal');
    card.setAttribute('data-index', index);

    // Get icon based on priority
    const icon = getPriorityIcon(announcement.priority);

    // Format date
    const dateStr = announcement.timestamp 
      ? formatDate(new Date(announcement.timestamp))
      : '';

    // Build card HTML
    let html = `
      <div class="announcement-icon">
        <i class="${icon}"></i>
      </div>
      <div class="announcement-content">
        <div class="announcement-head">
          <i class="fa-solid fa-bullhorn"></i>
          <span>Announcement</span>
        </div>
    `;

    if (announcement.title) {
      html += `<div class="announcement-title">${escapeHtml(announcement.title)}</div>`;
    }

    if (announcement.message) {
      html += `<div class="announcement-text">${escapeHtml(announcement.message)}</div>`;
    }

    if (announcement.imageUrl) {
      html += `<img class="announcement-img" src="${escapeHtml(announcement.imageUrl)}" alt="Announcement" loading="lazy">`;
    }

    if (dateStr) {
      html += `<div class="announcement-meta">Posted: ${dateStr}</div>`;
    }

    html += '</div>'; // Close announcement-content

    card.innerHTML = html;
    return card;
  }

  /**
   * Get icon class based on priority
   */
  function getPriorityIcon(priority) {
    switch ((priority || '').toLowerCase()) {
      case 'high':
        return 'fa-solid fa-circle-exclamation';
      case 'low':
        return 'fa-solid fa-info-circle';
      default:
        return 'fa-solid fa-bullhorn';
    }
  }

  /**
   * Show empty state when no announcements
   */
  function showEmptyState() {
    const emptyMsg = document.getElementById('announcementEmpty');
    if (emptyMsg) {
      emptyMsg.style.display = 'block';
      emptyMsg.textContent = window.LANG === 'hi' 
        ? 'अभी कोई घोषणा नहीं है।'
        : 'No active announcement right now.';
    }
  }

  /**
   * Format date for display
   */
  function formatDate(date) {
    if (isNaN(date.getTime())) return '';
    
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      timeZone: 'Asia/Kolkata'
    };
    
    return date.toLocaleDateString('en-IN', options);
  }

  /**
   * Escape HTML to prevent XSS
   */
  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Manually refresh announcements
   * Can be called from console or by a refresh button
   */
  window.refreshAnnouncements = async function() {
    // Clear cache
    try {
      localStorage.removeItem(CONFIG.STORAGE_KEY);
      localStorage.removeItem(CONFIG.CACHE_TIME_KEY);
    } catch (e) {}
    
    // Reload
    await loadAnnouncements();
  };

  // Initialize on load
  init();

})();
