/**
 * ================================================================
 *  AN CLINIC — LANGUAGE FILE
 *  Supported: English (en) | Hindi (hi)
 *  Usage: window.LANG = 'hi'; applyLang();
 * ================================================================
 */

const TRANSLATIONS = {

  /* ── NAV ── */
  nav_home:        { en: 'Home',          hi: 'होम' },
  nav_gallery:     { en: 'Gallery',       hi: 'गैलरी' },
  nav_services:    { en: 'Services',      hi: 'सेवाएं' },
  nav_experts:     { en: 'Experts',       hi: 'विशेषज्ञ' },
  nav_appointment: { en: 'Appointment',   hi: 'अपॉइंटमेंट' },
  nav_medicine:    { en: 'Medicine',      hi: 'दवाई' },
  nav_dashboard:   { en: 'Dashboard',     hi: 'डैशबोर्ड' },
  nav_records:     { en: 'Records',       hi: 'रिकॉर्ड' },
  nav_feedback:    { en: 'Reviews',       hi: 'समीक्षा' },
  nav_about:       { en: 'About',         hi: 'हमारे बारे में' },
  nav_contact:     { en: 'Contact',       hi: 'संपर्क' },

  /* ── HERO ── */
  hero_badge:      { en: 'Trusted Healthcare Since 2010', hi: '2010 से विश्वसनीय स्वास्थ्य सेवा' },
  hero_title1:     { en: 'Healing Hands,',                hi: 'उपचार के हाथ,' },
  hero_title2:     { en: 'Stronger Futures',              hi: 'स्वस्थ भविष्य' },
  hero_sub:        { en: 'Expert Fracture Care & Advanced Physiotherapy — Your Recovery, Our Mission.',
                     hi: 'विशेषज्ञ फ्रैक्चर देखभाल और उन्नत फिजियोथेरेपी — आपका स्वास्थ्य, हमारा लक्ष्य।' },
  btn_appointment: { en: 'Book Appointment',              hi: 'अपॉइंटमेंट बुक करें' },
  btn_medicine:    { en: 'Order Medicine',                hi: 'दवाई मंगाएं' },
  stat_patients:   { en: 'Patients Treated',              hi: 'इलाज किए मरीज़' },
  stat_years:      { en: 'Years Experience',              hi: 'वर्षों का अनुभव' },
  stat_doctors:    { en: 'Expert Doctors',                hi: 'विशेषज्ञ डॉक्टर' },
  stat_recovery:   { en: 'Recovery Rate',                 hi: 'स्वस्थ होने की दर' },

  /* ── GALLERY ── */
  gallery_title:   { en: 'Clinic Gallery',                hi: 'क्लिनिक गैलरी' },
  gallery_sub:     { en: 'A glimpse of our world-class facility', hi: 'हमारी विश्वस्तरीय सुविधा की एक झलक' },
  gallery_hover:   { en: 'Click arrows to browse',        hi: 'ब्राउज़ करने के लिए तीर क्लिक करें' },
  card_reception:  { en: 'Reception',                     hi: 'स्वागत कक्ष' },
  card_xray:       { en: 'X-Ray Room',                    hi: 'एक्स-रे कक्ष' },
  card_physio:     { en: 'Physio Hall',                   hi: 'फिजियो हॉल' },
  card_treatment:  { en: 'Treatment Room',                hi: 'उपचार कक्ष' },
  card_rehab:      { en: 'Rehab Area',                    hi: 'पुनर्वास क्षेत्र' },
  card_consult:    { en: 'Consultation',                  hi: 'परामर्श' },
  card_pharmacy:   { en: 'Pharmacy',                      hi: 'फार्मेसी' },
  card_lab:        { en: 'Lab',                           hi: 'प्रयोगशाला' },
  card_front:      { en: 'Clinic Front',                  hi: 'क्लिनिक का प्रवेश' },

  /* ── SERVICES ── */
  services_title:  { en: 'Our Services',                  hi: 'हमारी सेवाएं' },
  services_sub:    { en: 'Comprehensive care under one roof', hi: 'एक छत के नीचे संपूर्ण देखभाल' },
  svc1_title:      { en: 'Fracture Treatment',            hi: 'फ्रैक्चर उपचार' },
  svc1_desc:       { en: 'Expert bone fracture diagnosis, casting & surgical intervention for all age groups.',
                     hi: 'सभी आयु वर्गों के लिए विशेषज्ञ हड्डी फ्रैक्चर निदान, प्लास्टर और शल्य चिकित्सा।' },
  svc2_title:      { en: 'Physiotherapy',                 hi: 'फिजियोथेरेपी' },
  svc2_desc:       { en: 'Advanced rehab exercises and manual therapy for faster mobility recovery.',
                     hi: 'तेज़ गतिशीलता पुनर्प्राप्ति के लिए उन्नत पुनर्वास व्यायाम और मैनुअल थेरेपी।' },
  svc3_title:      { en: 'Digital X-Ray',                 hi: 'डिजिटल एक्स-रे' },
  svc3_desc:       { en: 'In-house digital radiography for instant, accurate bone imaging.',
                     hi: 'तत्काल, सटीक हड्डी इमेजिंग के लिए इन-हाउस डिजिटल रेडियोग्राफी।' },
  svc4_title:      { en: 'Joint Replacement',             hi: 'जोड़ प्रतिस्थापन' },
  svc4_desc:       { en: 'Knee, hip and shoulder joint replacement surgeries with high success rates.',
                     hi: 'उच्च सफलता दर के साथ घुटने, कूल्हे और कंधे के जोड़ प्रतिस्थापन।' },
  svc5_title:      { en: 'Electrotherapy',                hi: 'इलेक्ट्रोथेरेपी' },
  svc5_desc:       { en: 'TENS, ultrasound and laser therapy for pain relief and tissue healing.',
                     hi: 'दर्द निवारण और ऊतक उपचार के लिए TENS, अल्ट्रासाउंड और लेजर थेरेपी।' },
  svc6_title:      { en: 'Pediatric Ortho',               hi: 'बाल अस्थि रोग' },
  svc6_desc:       { en: 'Specialized care for children\'s bone & muscle development disorders.',
                     hi: 'बच्चों की हड्डी और मांसपेशियों के विकास विकारों की विशेष देखभाल।' },
  svc7_title:      { en: 'Sports Injury',                 hi: 'खेल चोट' },
  svc7_desc:       { en: 'Diagnosis and treatment of sports-related injuries for athletes.',
                     hi: 'एथलीटों के लिए खेल संबंधित चोटों का निदान और उपचार।' },
  svc8_title:      { en: 'Home Visit',                    hi: 'घर पर विजिट' },
  svc8_desc:       { en: 'Doctor home-visit facility for elderly and immobile patients on request.',
                     hi: 'अनुरोध पर बुजुर्ग और अचल मरीजों के लिए डॉक्टर घर विजिट सुविधा।' },

  /* ── EXPERTS ── */
  experts_title:   { en: 'Our Experts',                   hi: 'हमारे विशेषज्ञ' },
  experts_sub:     { en: 'Experienced hands, compassionate hearts', hi: 'अनुभवी हाथ, करुणामय दिल' },

  /* ── APPOINTMENT ── */
  appt_title:      { en: 'Book Appointment',              hi: 'अपॉइंटमेंट बुक करें' },
  appt_sub:        { en: 'Fill in below — we\'ll confirm within 2 hours', hi: 'नीचे भरें — हम 2 घंटे में पुष्टि करेंगे' },
  appt_name:       { en: 'Full Name *',                   hi: 'पूरा नाम *' },
  appt_mobile:     { en: 'Mobile Number *',               hi: 'मोबाइल नंबर *' },
  appt_age:        { en: 'Age',                           hi: 'उम्र' },
  appt_doctor:     { en: 'Preferred Doctor',              hi: 'पसंदीदा डॉक्टर' },
  appt_date:       { en: 'Preferred Date *',              hi: 'पसंदीदा तारीख *' },
  appt_time:       { en: 'Preferred Time',                hi: 'पसंदीदा समय' },
  appt_problem:    { en: 'Problem / Complaint',           hi: 'समस्या / शिकायत' },
  appt_btn:        { en: 'Confirm Appointment',           hi: 'अपॉइंटमेंट पक्का करें' },
  appt_ok:         { en: 'Appointment booked! We\'ll call you soon.', hi: 'अपॉइंटमेंट बुक हुआ! हम जल्द कॉल करेंगे।' },
  appt_err:        { en: 'Please fill Name, Mobile and Date.', hi: 'कृपया नाम, मोबाइल और तारीख भरें।' },
  appt_net_err:    { en: 'Error. Please call us directly.', hi: 'त्रुटि। कृपया हमें सीधे कॉल करें।' },

  /* ── MEDICINE ── */
  med_title:       { en: 'Medicine Delivery',             hi: 'दवाई डिलीवरी' },
  med_sub:         { en: 'Doorstep delivery — ₹700 extra charge applies', hi: 'घर पर डिलीवरी — ₹700 अतिरिक्त शुल्क' },
  med_banner_h:    { en: 'Home Delivery Available — +₹700 delivery charge', hi: 'घर डिलीवरी उपलब्ध — +₹700 डिलीवरी शुल्क' },
  med_banner_p:    { en: 'Available within delivery radius · Order by 6 PM for next-day delivery',
                     hi: 'डिलीवरी क्षेत्र के भीतर उपलब्ध · अगले दिन डिलीवरी के लिए शाम 6 बजे तक ऑर्डर करें' },
  med_notice:      { en: '₹700 delivery charge is fixed regardless of distance (within serviceable area).',
                     hi: '₹700 डिलीवरी शुल्क दूरी की परवाह किए बिना निश्चित है (सेवा योग्य क्षेत्र के भीतर)।' },
  med_name:        { en: 'Patient Name *',                hi: 'मरीज़ का नाम *' },
  med_phone:       { en: 'Phone Number *',                hi: 'फ़ोन नंबर *' },
  med_address:     { en: 'Full Delivery Address *',       hi: 'पूरा डिलीवरी पता *' },
  med_distance:    { en: 'Distance from Clinic (approx)', hi: 'क्लिनिक से दूरी (लगभग)' },
  med_details:     { en: 'Medicine / Prescription Details', hi: 'दवाई / पर्ची विवरण' },
  med_payment:     { en: 'Payment Method',                hi: 'भुगतान विधि' },
  med_upi:         { en: 'Online (UPI)',                  hi: 'ऑनलाइन (UPI)' },
  med_cash:        { en: 'Cash on Delivery',              hi: 'डिलीवरी पर नकद' },
  med_utr:         { en: 'UTR / Transaction ID',          hi: 'UTR / लेनदेन आईडी' },
  med_btn:         { en: 'Place Order',                   hi: 'ऑर्डर करें' },
  med_ok:          { en: 'Order placed! Delivery within 24 hours.', hi: 'ऑर्डर हुआ! 24 घंटे में डिलीवरी।' },
  med_err:         { en: 'Name, Phone and Address required.', hi: 'नाम, फोन और पता आवश्यक है।' },
  med_pay_err:     { en: 'Please select payment method.',  hi: 'कृपया भुगतान विधि चुनें।' },

  /* ── DASHBOARD ── */
  dash_title:      { en: 'Dashboard',                     hi: 'डैशबोर्ड' },
  dash_sub:        { en: 'Live clinic statistics',         hi: 'लाइव क्लिनिक आंकड़े' },
  dash_appt:       { en: "Today's Appointments",          hi: 'आज के अपॉइंटमेंट' },
  dash_orders:     { en: 'Pending Orders',                 hi: 'लंबित ऑर्डर' },
  dash_patients:   { en: 'Total Patients',                 hi: 'कुल मरीज़' },
  dash_rating:     { en: 'Avg. Rating',                   hi: 'औसत रेटिंग' },

  /* ── RECORDS ── */
  rec_title:       { en: 'Patient Records',               hi: 'मरीज़ रिकॉर्ड' },
  rec_sub:         { en: 'Your saved appointment history (this device only)', hi: 'आपका सहेजा हुआ अपॉइंटमेंट इतिहास (केवल इस डिवाइस पर)' },
  rec_no:          { en: 'No records yet. Book an appointment first.', hi: 'अभी कोई रिकॉर्ड नहीं। पहले अपॉइंटमेंट बुक करें।' },
  rec_th_name:     { en: 'Name',                          hi: 'नाम' },
  rec_th_date:     { en: 'Date',                          hi: 'तारीख' },
  rec_th_doctor:   { en: 'Doctor',                        hi: 'डॉक्टर' },
  rec_th_problem:  { en: 'Problem',                       hi: 'समस्या' },
  rec_th_status:   { en: 'Status',                        hi: 'स्थिति' },

  /* ── FEEDBACK ── */
  fb_title:        { en: 'Patient Reviews',               hi: 'मरीज़ों की समीक्षा' },
  fb_sub:          { en: 'Live feedback — updated from our database', hi: 'लाइव फ़ीडबैक — हमारे डेटाबेस से अपडेट' },
  fb_loading:      { en: 'Loading reviews...',            hi: 'समीक्षाएं लोड हो रही हैं...' },

  /* ── ABOUT ── */
  about_title:     { en: 'About Us',                      hi: 'हमारे बारे में' },
  about_sub:       { en: 'Our Story',                     hi: 'हमारी कहानी' },
  about_p1:        { en: 'AN Fractures & Physiotherapist Clinic has been serving patients since 2010 with a commitment to providing world-class orthopaedic and physiotherapy care at affordable prices.',
                     hi: 'AN फ्रैक्चर और फिजियोथेरेपिस्ट क्लिनिक 2010 से सस्ती कीमतों पर विश्वस्तरीय हड्डी रोग और फिजियोथेरेपी देखभाल प्रदान करने की प्रतिबद्धता के साथ मरीजों की सेवा कर रहा है।' },
  about_p2:        { en: 'Our state-of-the-art facility is equipped with digital X-ray, advanced physiotherapy equipment, and an in-house pharmacy — all under one roof for your convenience.',
                     hi: 'हमारी अत्याधुनिक सुविधा डिजिटल एक्स-रे, उन्नत फिजियोथेरेपी उपकरण और इन-हाउस फार्मेसी से सुसज्जित है — आपकी सुविधा के लिए सब एक छत के नीचे।' },
  about_p3:        { en: 'We believe in holistic healing — treating not just the injury, but the whole person.',
                     hi: 'हम समग्र उपचार में विश्वास करते हैं — केवल चोट का नहीं, बल्कि पूरे व्यक्ति का इलाज।' },

  /* ── CONTACT ── */
  contact_title:   { en: 'Contact Us',                    hi: 'संपर्क करें' },
  contact_sub:     { en: 'We\'re here to help — reach out anytime', hi: 'हम मदद के लिए यहां हैं — कभी भी संपर्क करें' },
  contact_phone:   { en: 'Phone',                         hi: 'फ़ोन' },
  contact_wa:      { en: 'WhatsApp',                      hi: 'व्हाट्सएप' },
  contact_email:   { en: 'Email',                         hi: 'ईमेल' },
  contact_hours:   { en: 'Hours',                         hi: 'समय' },
  contact_addr:    { en: 'Address',                       hi: 'पता' },
  contact_hours_v: { en: 'Mon–Sat: 9 AM – 7 PM  |  Sun: 9 AM – 1 PM',
                     hi: 'सोम–शनि: सुबह 9 – शाम 7  |  रवि: सुबह 9 – दोपहर 1' },
  contact_wa_text: { en: 'Open WhatsApp',                 hi: 'व्हाट्सएप खोलें' },

  /* ── FOOTER ── */
  footer_copy:     { en: 'All rights reserved.',          hi: 'सर्वाधिकार सुरक्षित।' },
  footer_designed: { en: 'Designed with care for patient experience.', hi: 'मरीज़ों के अनुभव के लिए ध्यान से डिज़ाइन किया गया।' },

  /* ── SIDE MENU ── */
  menu_title:      { en: 'AN Clinic — Sections',          hi: 'AN क्लिनिक — विभाग' },
  menu_theme:      { en: 'Toggle Theme',                  hi: 'थीम बदलें' },
  menu_lang:       { en: 'Language',                      hi: 'भाषा' },

  /* ── MISC ── */
  loading:         { en: 'Loading...',                    hi: 'लोड हो रहा है...' },
  submitting:      { en: 'Submitting...',                 hi: 'सबमिट हो रहा है...' },
  get_directions:  { en: 'Get Directions',                hi: 'रास्ता पाएं' },
  hover_pause:     { en: 'Hover to pause',                hi: 'रोकने के लिए होवर करें' },
};

/* ================================================================
   Apply language to all [data-t="key"] elements
================================================================ */
window.LANG = 'en';

function t(key) {
  const entry = TRANSLATIONS[key];
  if (!entry) return key;
  return entry[window.LANG] || entry['en'] || key;
}

function applyLang() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const attr = el.getAttribute('data-t-attr');
    if (attr) {
      el.setAttribute(attr, t(key));
    } else {
      el.textContent = t(key);
    }
  });
  // Update html lang attribute
  document.documentElement.setAttribute('lang', window.LANG === 'hi' ? 'hi' : 'en');
}

function setLang(lang) {
  window.LANG = lang;
  applyLang();
  // Persist choice
  try { localStorage.setItem('clinicLang', lang); } catch(e) {}
  // Update active state on buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
}

// Auto-restore saved language
(function() {
  try {
    const saved = localStorage.getItem('clinicLang');
    if (saved) window.LANG = saved;
  } catch(e) {}
})();
