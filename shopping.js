/* shopping.js - Google Sheets + Cloudinary powered medicine shop */
(() => {
  const API = window.BACKEND_URL || '';
  const CLOUDINARY_CLOUD_NAME = window.CLOUDINARY_CLOUD_NAME || 'YOUR_CLOUDINARY_CLOUD_NAME';
  const CLOUDINARY_UPLOAD_PRESET = window.CLOUDINARY_UPLOAD_PRESET || 'YOUR_UNSIGNED_UPLOAD_PRESET';
  const RATE_PER_KM = Number(window.RATE_PER_KM || 4.34);

  const DEFAULT_MEDICINES = [
    { name:'Paracetamol 500mg', description:'For fever and mild pain relief', category:'fever', imageUrl:'', available:true, price:'' },
    { name:'Ibuprofen 400mg', description:'Anti-inflammatory pain relief', category:'pain', imageUrl:'', available:true, price:'' },
    { name:'Pantoprazole', description:'Acidity and stomach protection', category:'stomach', imageUrl:'', available:true, price:'' },
    { name:'Cetirizine 10mg', description:'Allergy and cold relief', category:'fever', imageUrl:'', available:true, price:'' },
    { name:'Vitamin D3 1000IU', description:'Bone health and immunity', category:'vitamins', imageUrl:'', available:true, price:'' },
    { name:'ORS Sachet', description:'Oral rehydration for dehydration', category:'stomach', imageUrl:'', available:true, price:'' },
    { name:'Bandage Roll', description:'Sterile cotton bandage roll', category:'firstaid', imageUrl:'', available:true, price:'' },
    { name:'Dolo 650', description:'Paracetamol for high fever', category:'fever', imageUrl:'', available:true, price:'' },
    { name:'Calcium + D3', description:'Bone strength supplement', category:'vitamins', imageUrl:'', available:true, price:'' },
    { name:'Antacid Syrup', description:'For acidity and gas relief', category:'stomach', imageUrl:'', available:true, price:'' },
    { name:'Doctor Prescribed', description:'Upload your prescription for doctor-prescribed medicine', category:'prescribed', imageUrl:'', available:true, price:'' },
    { name:'Crepe Bandage', description:'For joint support and sprains', category:'firstaid', imageUrl:'', available:true, price:'' }
  ];

  const ICONS = {
    pain: 'fa-hand-holding-medical',
    fever: 'fa-temperature-half',
    stomach: 'fa-stethoscope',
    firstaid: 'fa-kit-medical',
    vitamins: 'fa-capsules',
    prescribed: 'fa-file-prescription',
    general: 'fa-pills'
  };

  let medicines = [];
  let filteredCategory = 'all';
  let selectedMedicines = [];
  let payMethod = 'cod';
  let rxUrl = '';
  let payUrl = '';
  let theme = 'dark';

  const $ = (id) => document.getElementById(id);

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function showToast(message) {
    const toast = $('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function getCategoryLabel(cat) {
    const map = {
      pain: 'Pain Relief',
      fever: 'Fever & Cold',
      stomach: 'Stomach Care',
      firstaid: 'First Aid',
      vitamins: 'Vitamins',
      prescribed: 'Prescribed',
      general: 'General'
    };
    return map[cat] || cat || 'General';
  }

  async function loadMedicines() {
    const grid = $('medGrid');
    if (!grid) return;
    grid.innerHTML = '<div class="med-note" style="grid-column:1/-1;">Loading medicines from Google Sheets…</div>';

    try {
      const res = await fetch(`${API}?action=getMedicines`, { cache: 'no-store' });
      const data = await res.json();
      medicines = Array.isArray(data.medicines) && data.medicines.length ? data.medicines : DEFAULT_MEDICINES;
    } catch (err) {
      medicines = DEFAULT_MEDICINES;
    }

    renderMedicines();
  }

  function renderMedicines() {
    const grid = $('medGrid');
    if (!grid) return;

    const filtered = filteredCategory === 'all'
      ? medicines
      : medicines.filter(m => String(m.category || 'general').toLowerCase() === filteredCategory);

    if (!filtered.length) {
      grid.innerHTML = '<div class="med-note" style="grid-column:1/-1;">No medicines found in this category.</div>';
      return;
    }

    grid.style.display = 'grid';
    grid.innerHTML = filtered.map((med) => {
      const name = med.name || 'Unnamed medicine';
      const category = String(med.category || 'general').toLowerCase();
      const imageHtml = med.imageUrl
        ? `<img src="${escapeHtml(med.imageUrl)}" alt="${escapeHtml(name)}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
        : `<i class="fa-solid ${ICONS[category] || ICONS.general}"></i>`;
      const selected = selectedMedicines.some(item => item.name === name);
      return `
        <div class="med-card" style="display:flex;flex-direction:column;height:100%;">
          <div class="med-img">${imageHtml}</div>
          <div class="med-body" style="display:flex;flex-direction:column;flex:1;">
            <div class="med-cat">${escapeHtml(getCategoryLabel(category))}</div>
            <div class="med-name">${escapeHtml(name)}</div>
            <div class="med-desc">${escapeHtml(med.description || '')}</div>
            ${med.price ? `<div class="med-avail avail-yes"><i class="fa-solid fa-indian-rupee-sign"></i> ${escapeHtml(med.price)}</div>` : ''}
            <div class="med-avail ${(med.available === false || String(med.available).toLowerCase() === 'no') ? 'avail-no' : 'avail-yes'}">
              <i class="fa-solid ${(med.available === false || String(med.available).toLowerCase() === 'no') ? 'fa-circle-xmark' : 'fa-circle-check'}"></i>
              ${(med.available === false || String(med.available).toLowerCase() === 'no') ? 'Out of Stock' : 'Available'}
            </div>
            <button class="med-btn ${selected ? 'added' : ''}" data-name="${escapeHtml(name)}" data-image="${escapeHtml(med.imageUrl || '')}" onclick="toggleMed(this)">
              ${selected ? 'Added ✓' : 'Add to Request'}
            </button>
          </div>
        </div>`;
    }).join('');
  }

  window.toggleMed = function toggleMed(btn) {
    const name = btn?.dataset?.name || '';
    const imageUrl = btn?.dataset?.image || '';
    if (!name) return;

    const idx = selectedMedicines.findIndex(item => item.name === name);
    if (idx === -1) {
      selectedMedicines.push({ name, imageUrl });
      btn.textContent = 'Added ✓';
      btn.classList.add('added');
    } else {
      selectedMedicines.splice(idx, 1);
      btn.textContent = 'Add to Request';
      btn.classList.remove('added');
    }

    const medField = $('fMed');
    if (medField && !medField.value.trim()) {
      medField.value = selectedMedicines.map(item => item.name).join(', ');
    }
    updateSummary();
  };

  window.filterMeds = function filterMeds(cat) {
    filteredCategory = String(cat || 'all').toLowerCase();
    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
    const chips = Array.from(document.querySelectorAll('.cat-chip'));
    const active = chips.find(chip => (chip.getAttribute('onclick') || '').includes(`'${cat}'`));
    if (active) active.classList.add('active');
    renderMedicines();
  };

  window.toggleDrawer = function toggleDrawer() {
    $('hamburger')?.classList.toggle('open');
    $('drawer')?.classList.toggle('open');
    $('drawerOverlay')?.classList.toggle('open');
  };

  window.setTheme = function setTheme(nextTheme) {
    theme = nextTheme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark');
    $('darkBtn')?.classList.toggle('active', theme === 'dark');
    $('lightBtn')?.classList.toggle('active', theme === 'light');
    try { localStorage.setItem('clinicTheme', theme); } catch (_) {}
  };

  window.setLang = function setLang(lang) {
    try { localStorage.setItem('clinicLang', lang); } catch (_) {}
    showToast(lang === 'hi' ? 'Language set to Hindi' : 'Language set to English');
  };

  async function uploadToCloudinary(file) {
    if (!file) return '';
    if (CLOUDINARY_CLOUD_NAME.startsWith('YOUR_') || CLOUDINARY_UPLOAD_PRESET.startsWith('YOUR_')) {
      throw new Error('Configure Cloudinary first.');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`, {
      method: 'POST',
      body: formData
    });

    if (!res.ok) throw new Error('Cloudinary upload failed.');
    const data = await res.json();
    return data.secure_url || '';
  }

  window.handleDragOver = function handleDragOver(event) {
    event.preventDefault();
    $('uploadZone')?.classList.add('dragover');
  };

  window.handleDragLeave = function handleDragLeave() {
    $('uploadZone')?.classList.remove('dragover');
  };

  window.handleDrop = function handleDrop(event) {
    event.preventDefault();
    $('uploadZone')?.classList.remove('dragover');
    const file = event.dataTransfer?.files?.[0];
    if (file) handleRxUpload({ files: [file] });
  };

  window.handleRxUpload = async function handleRxUpload(input) {
    const file = input?.files?.[0];
    if (!file) return;
    const st = $('rxStatus');
    try {
      st.textContent = 'Uploading prescription…';
      st.style.color = 'var(--gold)';
      const url = await uploadToCloudinary(file);
      rxUrl = url;
      $('rxPreviewImg').src = url;
      $('rxPreview').style.display = 'block';
      st.textContent = 'Prescription uploaded successfully.';
      st.style.color = '#22c55e';
      updateSummary();
    } catch (err) {
      st.textContent = err.message || 'Prescription upload failed.';
      st.style.color = '#e74c3c';
      showToast('Prescription upload failed');
    }
  };

  window.handlePayUpload = async function handlePayUpload(input) {
    const file = input?.files?.[0];
    if (!file) return;
    const st = $('payStatus');
    try {
      st.textContent = 'Uploading payment screenshot…';
      st.style.color = 'var(--gold)';
      const url = await uploadToCloudinary(file);
      payUrl = url;
      $('payPreviewImg').src = url;
      $('payPreview').style.display = 'block';
      st.textContent = 'Payment screenshot uploaded successfully.';
      st.style.color = '#22c55e';
      updateSummary();
    } catch (err) {
      st.textContent = err.message || 'Payment screenshot upload failed.';
      st.style.color = '#e74c3c';
      showToast('Payment screenshot upload failed');
    }
  };

  window.onTreatChange = function onTreatChange(radio) {
    document.querySelectorAll('.treatment-opt').forEach(o => o.classList.remove('selected'));
    radio.closest('.treatment-opt')?.classList.add('selected');
    document.querySelectorAll('.treatment-msg').forEach(m => m.classList.remove('show'));
    updateSummary();
  };

  window.setPayMethod = function setPayMethod(method) {
    payMethod = method === 'upi' ? 'upi' : 'cod';
    $('tabCOD')?.classList.toggle('active', payMethod === 'cod');
    $('tabUPI')?.classList.toggle('active', payMethod === 'upi');
    $('payCOD')?.classList.toggle('show', payMethod === 'cod');
    $('payUPI')?.classList.toggle('show', payMethod === 'upi');
    updateSummary();
  };

  window.calcDelCharge = function calcDelCharge() {
    const km = parseFloat($('fDist')?.value || '0') || 0;
    const result = $('delResult');
    const amount = $('delAmount');
    if (km > 0) {
      const charge = (km * RATE_PER_KM).toFixed(2);
      if (amount) amount.textContent = `₹${charge}`;
      result?.classList.add('show');
    } else {
      result?.classList.remove('show');
      if (amount) amount.textContent = '—';
    }
    updateSummary();
  };

  function getSelectedTreatSource() {
    const radio = document.querySelector('input[name="treatSrc"]:checked');
    return radio ? radio.value : '—';
  }

  function updateSummary() {
    const medVal = $('fMed')?.value.trim() || selectedMedicines.map(item => item.name).join(', ') || '—';
    const qty = $('fQty')?.value.trim() || '—';
    const pay = payMethod === 'cod' ? 'Cash on Delivery' : 'UPI / Online';
    const rx = rxUrl ? 'Uploaded' : 'Not uploaded';
    const km = parseFloat($('fDist')?.value || '0') || 0;
    const del = km > 0 ? `₹${(km * RATE_PER_KM).toFixed(2)} (est.)` : '—';
    if ($('sumMed')) $('sumMed').textContent = medVal.length > 42 ? `${medVal.slice(0, 42)}...` : medVal;
    if ($('sumQty')) $('sumQty').textContent = qty;
    if ($('sumTreat')) $('sumTreat').textContent = getSelectedTreatSource();
    if ($('sumPay')) $('sumPay').textContent = pay;
    if ($('sumRx')) $('sumRx').textContent = rx;
    if ($('sumDel')) $('sumDel').textContent = del;
    updateWALinks();
  }

  function updateWALinks() {
    const phone = window.CLINIC_PHONE || '7766953200';
    const waUrl = `https://wa.me/91${phone}?text=${encodeURIComponent('Hello, I want to order medicine. Please contact me.')}`;
    ['waFloat', 'conWA', 'docWABtn', 'hdrWA'].forEach(id => { if ($(id)) $(id).href = waUrl; });
    const waOrderBtn = $('waOrderBtn');
    if (waOrderBtn) {
      const msg = [
        'Hello AN Clinic,',
        'I want to order medicine.',
        `Name: ${$('fName')?.value || '—'}`,
        `Medicine: ${$('fMed')?.value || selectedMedicines.map(item => item.name).join(', ') || '—'}`,
        `Payment: ${payMethod === 'cod' ? 'COD' : 'UPI'}`,
        'Please contact me.'
      ].join('\n');
      waOrderBtn.href = `https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`;
    }
  }

  window.submitOrder = async function submitOrder() {
    const name = $('fName')?.value.trim();
    const phone = $('fPhone')?.value.trim();
    const addr = $('fAddr')?.value.trim();
    const city = $('fCity')?.value.trim();
    const pin = $('fPin')?.value.trim();
    const med = $('fMed')?.value.trim() || selectedMedicines.map(item => item.name).join(', ');
    const dist = $('fDist')?.value.trim();
    const st = $('submitStatus');
    const btn = $('submitBtn');

    if (!name) { st.innerHTML = '<span class="status-err">Please enter your name.</span>'; return; }
    if (!phone || phone.length < 10) { st.innerHTML = '<span class="status-err">Valid 10-digit phone number required.</span>'; return; }
    if (!addr) { st.innerHTML = '<span class="status-err">Please enter your address.</span>'; return; }
    if (!city) { st.innerHTML = '<span class="status-err">Please enter your city.</span>'; return; }
    if (!pin || pin.length < 6) { st.innerHTML = '<span class="status-err">Valid 6-digit PIN code required.</span>'; return; }
    if (!med) { st.innerHTML = '<span class="status-err">Please enter medicine name.</span>'; return; }
    if (!dist) { st.innerHTML = '<span class="status-err">Please enter distance from clinic.</span>'; return; }
    if (!$('agreeCancel')?.checked) { st.innerHTML = '<span class="status-err">Please agree to the cancellation policy.</span>'; return; }
    if (!$('agreeReturn')?.checked) { st.innerHTML = '<span class="status-err">Please accept the return policy.</span>'; return; }
    if (!$('agreeInfo')?.checked) { st.innerHTML = '<span class="status-err">Please confirm your information is correct.</span>'; return; }
    if (payMethod === 'upi' && !$('fUTR')?.value.trim()) { st.innerHTML = '<span class="status-err">Please enter UTR/Transaction ID for UPI payment.</span>'; return; }

    btn && (btn.disabled = true);
    st.innerHTML = '<span class="status-load"><i class="fa-solid fa-spinner fa-spin"></i> Submitting order...</span>';

    const km = parseFloat(dist) || 0;
    const delCharge = km > 0 ? `₹${(km * RATE_PER_KM).toFixed(2)}` : 'To be calculated';
    const payload = {
      action: 'shoppingOrder',
      name,
      phone,
      altPhone: $('fAlt')?.value.trim() || '',
      address: addr,
      landmark: $('fLand')?.value.trim() || '',
      city,
      pinCode: pin,
      medicine: med,
      medicineImages: JSON.stringify(selectedMedicines.map(item => item.imageUrl).filter(Boolean)),
      quantity: $('fQty')?.value.trim() || '',
      notes: $('fNotes')?.value.trim() || '',
      distanceKm: dist,
      treatmentSource: getSelectedTreatSource(),
      payMethod: payMethod === 'cod' ? 'Cash on Delivery' : 'UPI',
      utr: $('fUTR')?.value.trim() || '',
      prescriptionImg: rxUrl || '',
      paymentImg: payUrl || '',
      deliveryCharge: delCharge,
      ts: new Date().toISOString()
    };

    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (data && data.success === false) throw new Error(data.message || 'Order submission failed');
      st.innerHTML = '<span class="status-ok"><i class="fa-solid fa-circle-check"></i> Order submitted successfully.</span>';
      $('successOverlay')?.classList.add('show');
      showToast('Order submitted successfully');
      resetForm();
    } catch (err) {
      st.innerHTML = '<span class="status-err"><i class="fa-solid fa-triangle-exclamation"></i> Error. Please try WhatsApp order.</span>';
    } finally {
      btn && (btn.disabled = false);
    }
  };

  function resetForm() {
    ['fName','fPhone','fAlt','fAddr','fLand','fCity','fPin','fMed','fQty','fDist','fNotes','fUTR'].forEach(id => { if ($(id)) $(id).value = ''; });
    ['agreeCancel','agreeReturn','agreeInfo'].forEach(id => { if ($(id)) $(id).checked = false; });
    if ($('rxPreview')) $('rxPreview').style.display = 'none';
    if ($('payPreview')) $('payPreview').style.display = 'none';
    if ($('rxStatus')) $('rxStatus').textContent = '';
    if ($('payStatus')) $('payStatus').textContent = '';
    if ($('delResult')) $('delResult').classList.remove('show');
    selectedMedicines = [];
    rxUrl = '';
    payUrl = '';
    document.querySelectorAll('input[name="treatSrc"]').forEach(r => r.checked = false);
    document.querySelectorAll('.treatment-opt').forEach(o => o.classList.remove('selected'));
    setPayMethod('cod');
    renderMedicines();
    updateSummary();
  }

  window.updateSummary = updateSummary;
  window.updateWALinks = updateWALinks;
  window.showToast = showToast;

  function init() {
    try {
      const savedTheme = localStorage.getItem('clinicTheme');
      setTheme(savedTheme === 'light' ? 'light' : 'dark');
    } catch (_) {
      setTheme('dark');
    }

    const savedLang = (() => { try { return localStorage.getItem('clinicLang') || 'en'; } catch (_) { return 'en'; } })();
    window.LANG = savedLang;

    loadMedicines();
    updateSummary();
    updateWALinks();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
