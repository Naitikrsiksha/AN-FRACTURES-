/**
 * ================================================================
 *  AN CLINIC — AI QUESTIONS & ANSWERS DATABASE (aiq.js)
 *  Extensive Q&A pairs for smarter AI responses
 * ================================================================
 * 
 * This file contains an extensive database of questions and answers
 * that the AI can use to provide intelligent responses to user queries.
 * 
 * Usage: Import this file before ai.html's main script
 */

const AIQ_DATABASE = {
  
  // ═══════════════════════════════════════════════════════════════
  // GREETINGS & GENERAL
  // ═══════════════════════════════════════════════════════════════
  greetings: {
    patterns: [
      'hi', 'hello', 'hey', 'namaste', 'namaskar', 'hii', 'helo', 
      'howdy', 'salaam', 'salam', 'jai hind', 'good morning', 
      'good afternoon', 'good evening', 'sup', 'whats up', 'yo'
    ],
    responses: [
      {
        text: `Namaste! 🙏 Main **AN Fractures & Physiotherapist** clinic ka AI Assistant hoon.\n\nMain aapki kaise madad kar sakta hoon?`,
        chips: ['📋 Doctor list', '⏰ Clinic timings', '📍 Address & Map', '💊 Medicine delivery', '📅 Appointment']
      },
      {
        text: `Hello! Welcome to **AN Clinic**. 🏥\n\nI'm your AI assistant. How may I help you today?`,
        chips: ['Our Services', 'Book Appointment', 'Contact Us', 'Medicine Order']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // THANKS & GOODBYE
  // ═══════════════════════════════════════════════════════════════
  thanks: {
    patterns: [
      'thank', 'shukriya', 'dhanyavad', 'thx', 'tysm', 'thanks a lot',
      'thank you very much', 'bahut shukriya', 'dhanyawaad', 'krupa hui'
    ],
    responses: [
      {
        text: `Aapka swaagat hai! 😊\n\nAur koi sawaal ho to bilkul puchein. AN Clinic hamesha aapki seva mein tayaar hai! 🏥`,
        chips: ['📋 Doctor list', '⏰ Timings', '📍 Address', '📅 Appointment']
      },
      {
        text: `You're most welcome! 🙏\n\nFeel free to ask if you have any other questions. We're here to help!`,
        chips: ['More Info', 'Contact', 'Services']
      }
    ]
  },

  goodbye: {
    patterns: [
      'bye', 'goodbye', 'alvida', 'phir milenge', 'see you', 'take care',
      'allah hafiz', 'ram ram', 'chalo bye', 'ok bye', 'tc'
    ],
    responses: [
      {
        text: `Alvida! 👋 Aapka din shubh ho.\n\nJab bhi jarurat ho, AN Clinic hamesha tayaar hai. Swasth rahein! 🏥`,
        chips: ['📞 Contact', '📅 Book Again']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // CLINIC INFO - ADDRESS & LOCATION
  // ═══════════════════════════════════════════════════════════════
  address: {
    patterns: [
      'address', 'kahan', 'location', 'jagah', 'where', 'map', 'direction',
      'rasta', 'pahunch', 'clinic kahan', 'where is', 'kidhar', 'pata',
      'clinic location', 'hospital address', 'center location', 'kahan hai'
    ],
    responses: [
      {
        text: `📍 **AN Clinic ka Address:**\n\n{address}\n\n⏰ Timings: {hours}\n📞 Phone: **+91 {phone}**`,
        showMap: true,
        actions: [
          { type: 'map', label: '🗺️ Maps mein Kholein' },
          { type: 'call', label: '📞 Call Karein' }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // TIMINGS & HOURS
  // ═══════════════════════════════════════════════════════════════
  timings: {
    patterns: [
      'time', 'timing', 'open', 'close', 'kab', 'baje', 'hour', 'schedule',
      'sunday', 'monday', 'saturday', 'din', 'raat', 'waqt', 'kitne baje',
      'opening time', 'closing time', 'kab khulta', 'kab band hota'
    ],
    responses: [
      {
        text: `⏰ **AN Clinic Timings:**\n\n📅 {hours}\n\n📍 Address: {address}\n📞 Phone: **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Call Karein' }]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // DOCTORS & STAFF
  // ═══════════════════════════════════════════════════════════════
  doctors: {
    patterns: [
      'doctor', 'surgeon', 'physio', 'dr', 'specialist', 'expert', 'kaun',
      'kis se milun', 'doctor list', 'hamare doctor', 'dr. ankit', 'dr. anurag',
      'dr. singh', 'physiotherapist', 'orthopaedic', 'bone doctor'
    ],
    responses: [
      {
        text: `👨‍⚕️ **Hamare Doctors:**\n\n1️⃣ **Dr. Ankit Singh** — Senior Orthopaedic Surgeon (20 yrs exp)\n   🎯 Fractures, Joint Replacement, Trauma\n\n2️⃣ **Dr. Anurag Yadav** — Senior Physiotherapist (12 yrs exp)\n   🎯 Sports Rehab, Electrotherapy, Manual Therapy\n\n3️⃣ **Dr. AN Singh** — Pediatric Orthopaedic Specialist (9 yrs exp)\n   🎯 Pediatric Ortho, Spine Care, Deformity\n\n📞 Call: **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Appointment Book Karein' }]
      }
    ]
  },

  doctor_ankit: {
    patterns: [
      'ankit singh', 'dr ankit', 'orthopaedic surgeon', 'bone specialist',
      'fracture doctor', 'joint replacement doctor', 'trauma specialist'
    ],
    responses: [
      {
        text: `👨‍⚕️ **Dr. Ankit Singh**\n📋 MBBS, MS (Ortho)\n🏥 Senior Orthopaedic Surgeon\n⏱️ Experience: 20 years\n🎯 Specialties: Fractures, Joint Replacement, Trauma\n\n📅 Appointment ke liye call karein: **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Appointment' }]
      }
    ]
  },

  doctor_anurag: {
    patterns: [
      'anurag yadav', 'dr anurag', 'physiotherapist', 'physio doctor',
      'rehab specialist', 'sports rehab', 'pain specialist'
    ],
    responses: [
      {
        text: `👨‍⚕️ **Dr. Anurag Yadav**\n📋 BPT, MPT\n🏥 Senior Physiotherapist\n⏱️ Experience: 12 years\n🎯 Specialties: Sports Rehab, Electrotherapy, Manual Therapy\n\n📅 Appointment ke liye call karein: **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Appointment' }]
      }
    ]
  },

  doctor_an_singh: {
    patterns: [
      'an singh', 'dr an singh', 'pediatric ortho', 'child specialist',
      'bachcha doctor', 'kids doctor', 'spine specialist'
    ],
    responses: [
      {
        text: `👨‍⚕️ **Dr. AN Singh**\n📋 MBBS, DNB (Ortho)\n🏥 Pediatric Orthopaedic Specialist\n⏱️ Experience: 9 years\n🎯 Specialties: Pediatric Ortho, Spine Care, Deformity\n\n📅 Appointment ke liye call karein: **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Appointment' }]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // SERVICES
  // ═══════════════════════════════════════════════════════════════
  services: {
    patterns: [
      'service', 'kya karte', 'ilaj', 'treat', 'suvidha', 'facility',
      'kya hai', 'kya milta', 'available', 'services list', 'treatment'
    ],
    responses: [
      {
        text: `🏥 **AN Clinic ki Services:**\n\n1. Fracture Treatment\n2. Physiotherapy\n3. Digital X-Ray\n4. Joint Replacement (Knee, Hip, Shoulder)\n5. Electrotherapy (TENS, Ultrasound, Laser)\n6. Pediatric Orthopaedics\n7. Sports Injury Treatment\n8. Home Visit (elderly/immobile)\n\n✅ Sab ek hi jagah — AN Fractures & Physiotherapist!\n📞 **+91 {phone}**`,
        chips: ['Fracture', 'Physiotherapy', 'Joint Replacement', 'Medicine Delivery']
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // FRACTURE TREATMENT
  // ═══════════════════════════════════════════════════════════════
  fracture: {
    patterns: [
      'fracture', 'haddi', 'toot', 'plaster', 'cast', 'bone', 'haddii',
      'broken', 'bone break', 'haddi tootna', 'plaster lagwana', 'cast lagwana'
    ],
    responses: [
      {
        text: `🦴 **Fracture Treatment at AN Clinic:**\n\n✅ Expert fracture diagnosis\n✅ In-house Digital X-Ray\n✅ Plaster & Casting\n✅ Surgery (if needed)\n✅ Post-fracture physiotherapy\n\n👨‍⚕️ **Dr. Ankit Singh** (MS Ortho · 20 yrs exp)\n\n📅 Appointment: **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Appointment Karein' }]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PHYSIOTHERAPY
  // ═══════════════════════════════════════════════════════════════
  physiotherapy: {
    patterns: [
      'physio', 'exercise', 'rehab', 'therapy', 'dard', 'pain', 'joint pain',
      'maalish', 'massage', 'spondylitis', 'back pain', 'kamar', 'neck pain',
      'shoulder pain', 'knee pain', 'ghutna dard', 'recovery'
    ],
    responses: [
      {
        text: `🏃 **Physiotherapy at AN Clinic:**\n\n✅ Advanced rehab exercises\n✅ Manual therapy\n✅ Electrotherapy (TENS, Ultrasound, Laser)\n✅ Sports injury rehab\n✅ Post-surgery recovery\n✅ Back/Neck pain treatment\n\n👨‍⚕️ **Dr. Anurag Yadav** (BPT, MPT · 12 yrs exp)\n\n📞 **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Session Book Karein' }]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // X-RAY
  // ═══════════════════════════════════════════════════════════════
  xray: {
    patterns: [
      'x ray', 'xray', 'x-ray', 'scan', 'imaging', 'radiology', 'xray karana',
      'x ray report', 'digital xray', 'x ray price', 'x ray facility'
    ],
    responses: [
      {
        text: `📡 **Digital X-Ray at AN Clinic:**\n\n✅ In-house digital radiography\n✅ Instant results\n✅ Accurate bone imaging\n✅ Multiple body parts available\n\n⏰ Timing: **{hours}**\n📞 **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Puchein / Book Karein' }]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // JOINT REPLACEMENT
  // ═══════════════════════════════════════════════════════════════
  joint_replacement: {
    patterns: [
      'joint', 'knee', 'hip', 'shoulder', 'replacement', 'arthroplasty',
      'ghutna', 'kandha', 'kulha', 'joint surgery', 'knee replacement',
      'hip replacement', 'shoulder replacement'
    ],
    responses: [
      {
        text: `🦿 **Joint Replacement at AN Clinic:**\n\n✅ Knee Replacement\n✅ Hip Replacement\n✅ Shoulder Joint Replacement\n✅ High success rate\n\n👨‍⚕️ **Dr. Ankit Singh** (Sr. Orthopaedic Surgeon)\n\n📅 Consultation: **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Consultation Book Karein' }]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // APPOINTMENT BOOKING
  // ═══════════════════════════════════════════════════════════════
  appointment: {
    patterns: [
      'appointment', 'book', 'schedule', 'milna', 'visit', 'aana', 'buking',
      'appoint', 'token', 'slot', 'booking', 'register', 'opd', 'opd booking'
    ],
    responses: [
      {
        text: `📅 **Appointment Kaise Book Karein:**\n\n1️⃣ **Website par:** Neeche scroll karein → "Book Appointment"\n2️⃣ **Call karein:** +91 {phone}\n3️⃣ **WhatsApp:** +91 {phone}\n\n⏰ Confirmation within **2 hours!**\n✅ Hum sahi doctor assign karenge aapki problem ke hisaab se.`,
        actions: [
          { type: 'appt', label: '📅 Website par Book Karein', href: '#appointment' },
          { type: 'call', label: '📞 Call Karein' },
          { type: 'wa', label: '💬 WhatsApp' }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // MEDICINE DELIVERY
  // ═══════════════════════════════════════════════════════════════
  medicine_delivery: {
    patterns: [
      'medicine', 'dawa', 'dawai', 'delivery', 'order', 'ghar', 'home deliver',
      'med order', 'dawai mangwana', 'medicine order', 'pharmacy', 'dawai delivery'
    ],
    responses: [
      {
        text: `💊 **Medicine Home Delivery:**\n\n📦 AN Clinic se ghar tak!\n\n💰 **Delivery Charge:** ₹{ratePerKm} per km\n💵 **Payment:** Cash on Delivery\n📦 **Order by:** {cutoff} for next-day\n\n**Order kaise karein:**\n1. Website pe "Medicine" section mein jaayein\n2. Form bharen (naam, phone, address, doori)\n3. Submit — hum confirm karenge!\n\n📞 **+91 {phone}**`,
        actions: [
          { type: 'appt', label: '💊 Order Karein', href: '#medicine' },
          { type: 'call', label: '📞 Call Karein' }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // DELIVERY CHARGES
  // ═══════════════════════════════════════════════════════════════
  delivery_charges: {
    patterns: [
      'charge', 'kitna', 'fee', 'cost', 'price', 'rate', 'paisa', 'rupee',
      '₹', 'delivery charge', 'dawai kitne ki', 'medicine cost', 'delivery cost'
    ],
    responses: [
      {
        text: `💰 **Medicine Delivery Charge:**\n\n₹{ratePerKm} per km se clinic\n\nExample:\n• 2 km → ₹{(2 * 4.34).toFixed(2)}\n• 5 km → ₹{(5 * 4.34).toFixed(2)}\n• 10 km → ₹{(10 * 4.34).toFixed(2)}\n\n💵 Payment: Cash on Delivery\n📞 **+91 {phone}**`
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // CONTACT & PHONE
  // ═══════════════════════════════════════════════════════════════
  contact: {
    patterns: [
      'phone', 'contact', 'number', 'call', 'ring', 'helpline', 'contact karein',
      'mobile', 'landline', 'phone number', 'kaise contact karein', 'number do'
    ],
    responses: [
      {
        text: `📞 **AN Clinic Contact:**\n\n☎️ Phone: **+91 {phone}**\n💬 WhatsApp: **+91 {phone}**\n\n⏰ Available: {hours}\n\n🚑 Emergency: **108** (Ambulance)`,
        actions: [
          { type: 'call', label: '📞 Call Karein' },
          { type: 'wa', label: '💬 WhatsApp' }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // WHATSAPP
  // ═══════════════════════════════════════════════════════════════
  whatsapp: {
    patterns: [
      'whatsapp', 'wa ', 'wa.me', 'chat karna', 'message karna', 'whats app',
      'watsapp', 'whatsup', 'msg karna', 'whatsapp pe'
    ],
    responses: [
      {
        text: `💬 **WhatsApp par Contact Karein:**\n\n+91 {phone}\n\n⏰ Available: {hours}`,
        actions: [{ type: 'wa', label: '💬 WhatsApp Kholein' }]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // SPORTS INJURY
  // ═══════════════════════════════════════════════════════════════
  sports_injury: {
    patterns: [
      'sport', 'athlete', 'cricket', 'football', 'injury', 'ligament',
      'sprain', 'khel', 'sports injury', 'game injury', 'player injury'
    ],
    responses: [
      {
        text: `⚽ **Sports Injury Treatment:**\n\n✅ Ligament injuries\n✅ Muscle strains & sprains\n✅ Stress fractures\n✅ Post-injury rehabilitation\n\n👨‍⚕️ **Dr. Anurag Yadav** (Sports Rehab Specialist)\n\n📞 **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Appointment' }]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // HOME VISIT
  // ═══════════════════════════════════════════════════════════════
  home_visit: {
    patterns: [
      'home visit', 'ghar pe', 'ghar aa', 'aana ghar', 'elderly', 'budhape',
      'budhe', 'immobile', 'bedridden', 'ghar bulana', 'doctor ghar pe'
    ],
    responses: [
      {
        text: `🏠 **Home Visit Service:**\n\nAN Clinic ke doctors aapke ghar aa sakte hain!\n\n✅ Specially for:\n• Elderly patients\n• Immobile/bedridden patients\n• Post-surgery cases\n\n📞 Request ke liye call karein: **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Home Visit Book Karein' }]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PEDIATRIC / CHILDREN
  // ═══════════════════════════════════════════════════════════════
  pediatric: {
    patterns: [
      'child', 'bachcha', 'pediatric', 'bacche', 'kids', 'infant', 'baby',
      'bache', 'child doctor', 'bachon ka doctor', 'child specialist'
    ],
    responses: [
      {
        text: `👶 **Pediatric Orthopaedics:**\n\n**Dr. AN Singh** (MBBS, DNB Ortho)\n🏥 Pediatric Orthopaedic Specialist\n⏱️ 9 years experience\n\n🎯 Specialties:\n• Pediatric Ortho\n• Spine Care\n• Deformity\n\n📞 Appointment: **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Appointment Karein' }]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // ABOUT CLINIC
  // ═══════════════════════════════════════════════════════════════
  about: {
    patterns: [
      'about', 'history', 'story', 'kaun', 'kab se', 'since', 'founded',
      'establish', 'clinic ke baare', 'puraana', 'clinic info', 'about us'
    ],
    responses: [
      {
        text: `🏥 **AN Fractures & Physiotherapist Clinic**\n\nEstablished: **{since}** ({years} experience)\n\n✅ NABH Registered\n✅ 24/7 Emergency\n✅ Cashless Insurance\n✅ Digital X-Ray\n✅ In-house Pharmacy\n\n📊 Our Stats:\n• {patients} patients treated\n• {recovery} recovery rate\n• 3 expert doctors\n\n📞 **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Contact Karein' }]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // INSURANCE
  // ═══════════════════════════════════════════════════════════════
  insurance: {
    patterns: [
      'insurance', 'cashless', 'bima', 'insure', 'health insurance',
      'medical insurance', 'insurance claim', 'cashless treatment'
    ],
    responses: [
      {
        text: `🏦 **Insurance at AN Clinic:**\n\n✅ Cashless insurance facility available\n✅ Most major health insurance accepted\n\nDetail ke liye:\n📞 **+91 {phone}**`,
        actions: [{ type: 'call', label: '📞 Insurance Query' }]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // EMERGENCY
  // ═══════════════════════════════════════════════════════════════
  emergency: {
    patterns: [
      'emergency', 'accident', 'urgent', 'help me', 'sos', '108',
      'ambulance', 'khoon', 'blood', 'critical', 'serious', 'emergency call'
    ],
    responses: [
      {
        text: `⚠️ **EMERGENCY!**\n\nTurant in mein se ek karein:\n• Ambulance: **108** (Free, 24×7)\n• AN Clinic: **+91 {phone}**\n\nAI sirf jaankari ke liye hai — emergency mein seedha call karein!`,
        actions: [
          { type: 'call', label: '📞 Emergency Call' },
          { type: 'call', label: '🚑 Ambulance 108', href: 'tel:108' }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PRICING / COSTS
  // ═══════════════════════════════════════════════════════════════
  pricing: {
    patterns: [
      'price', 'cost', 'kitna paisa', 'fees', 'consultation fee',
      'treatment cost', 'ilaj kitne ka', 'rate', 'charges'
    ],
    responses: [
      {
        text: `💰 **AN Clinic Charges ke baare mein:**\n\nSahi charges jaanne ke liye call karein:\n📞 **+91 {phone}**\n\nSamanya jaankari:\n• Consultation: Call karein\n• Digital X-Ray: Available\n• Physiotherapy: Sessions available\n• Medicine delivery: ₹{ratePerKm}/km`
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // ELECTROTHERAPY
  // ═══════════════════════════════════════════════════════════════
  electrotherapy: {
    patterns: [
      'electrotherapy', 'tens', 'ultrasound', 'laser therapy', 'electric therapy',
      'current therapy', 'physio machine', 'therapy machine'
    ],
    responses: [
      {
        text: `⚡ **Electrotherapy at AN Clinic:**\n\n✅ TENS (Transcutaneous Electrical Nerve Stimulation)\n✅ Ultrasound Therapy\n✅ Laser Therapy\n✅ For pain relief and tissue healing\n\n👨‍⚕️ **Dr. Anurag Yadav** (BPT, MPT)\n\n📞 **+91 {phone}**`
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // SPINE CARE
  // ═══════════════════════════════════════════════════════════════
  spine: {
    patterns: [
      'spine', 'backbone', 'vertebra', 'spinal', 'back problem',
      'spine surgery', 'spine care', 'spine doctor'
    ],
    responses: [
      {
        text: `🦴 **Spine Care at AN Clinic:**\n\n✅ Spine diagnosis & treatment\n✅ Back pain management\n✅ Postural correction\n✅ Non-surgical spine care\n\n👨‍⚕️ **Dr. AN Singh** (Spine Care Specialist)\n\n📞 **+91 {phone}**`
      }
    ]
  },

  //