/**
 * Valdene Buchori Tio - Portfolio Web Application Engine
 * Features: Theme Switcher, Bilingual (ID/EN) Toggle, Project Modal, Skill Filter, Copy Toast & WhatsApp Handler
 */

// --- Bilingual Translation Dictionary ---
const translations = {
  id: {
    navAbout: "Tentang",
    navEducation: "Pendidikan",
    navExperience: "Pengalaman",
    navSkills: "Keahlian",
    navProjects: "Portofolio",
    navContact: "Kontak",
    btnDownloadCV: "Unduh CV",
    statusAvailable: "Tersedia untuk Magang & IT Support / Digital Operations",
    heroGreeting: "Halo, saya",
    heroRole1: "Mahasiswa Sistem Informasi Universitas Gunadarma",
    heroRole2: "IT Support & Network Operations Enthusiast",
    heroRole3: "Eks Database Administration Intern Samsat Ciledug",
    heroBio: "Mahasiswa Sistem Informasi yang berpengalaman magang dalam administrasi basis data di Samsat Ciledug. Berorientasi pada detail, cepat beradaptasi, dan menguasai dasar-dasar jaringan komputer, Microsoft Office, serta visualisasi data Tableau. Siap berkontribusi optimal sebagai Digital Store Support & IT Support.",
    chipLocation: "Tangerang, Banten",
    chipNationality: "WNI (Indonesia)",
    chipGpa: "IPK 3.91",
    btnContactHero: "Hubungi Saya",
    btnProjectsHero: "Lihat Portofolio",
    badgeGpaTitle: "IPK 3.91 / 4.00",
    badgeGpaSub: "Universitas Gunadarma",
    badgeNetworkTitle: "TKJ Graduate",
    badgeNetworkSub: "SMK Pustek Serpong",

    // Metrics
    metric1Val: "3.91",
    metric1Label: "IPK Akademik",
    metric1Sub: "Fakultas Ilmu Komputer & TI",
    metric2Val: "100%",
    metric2Label: "Akurasi Entri Data",
    metric2Sub: "Integritas Basis Data Samsat",
    metric3Val: "3+ Thn",
    metric3Label: "Fondasi Jaringan & Hardware",
    metric3Sub: "TKJ Pustek Serpong",
    metric4Val: "Aktif",
    metric4Label: "Siap Berkontribusi",
    metric4Sub: "Digital Store & IT Operations",

    // About
    aboutTag: "Mengenal Saya",
    aboutTitle: "Profil & Komitmen Profesional",
    aboutHeading: "Dedikasi Tinggi untuk Efisiensi TI & Manajemen Data",
    aboutP1: "Saya adalah mahasiswa aktif program studi <strong>Sistem Informasi di Universitas Gunadarma</strong> dengan latar belakang pendidikan vokasi di bidang <strong>Teknik Komputer dan Jaringan (TKJ)</strong> dari SMK Pustek Serpong.",
    aboutP2: "Dengan kombinasi pemahaman teknis perangkat keras, topologi jaringan, serta keterampilan praktis dalam <strong>administrasi basis data yang teruji saat magang di Samsat Ciledug</strong>, saya memiliki kemampuan analitis dan ketelitian tinggi dalam menangani operasional digital harian.",
    targetRoleTitle: "Karier Target: Digital Store Support Intern & IT Support",
    targetRoleDesc: "Termotivasi untuk mengimplementasikan keahlian troubleshooting jaringan, pemeliharaan hardware, dan pengolahan data untuk mendukung kelancaran operasional gerai ritel modern (seperti Indomaret) dan ekosistem bisnis digital.",
    personalInfoTitle: "Data Pribadi",
    lblBirth: "Tempat, Tanggal Lahir",
    valBirth: "Tangerang, 4 Mei 2006",
    lblNat: "Kewarganegaraan",
    valNat: "Indonesia",
    lblAddress: "Domisili",
    valAddress: "Tangerang, Banten",
    lblLang: "Bahasa",
    valLangId: "Bahasa Indonesia (Fasih)",
    valLangEn: "Bahasa Inggris (Menengah)",

    // Education & Experience
    eduExpTag: "Rekam Jejak",
    eduExpTitle: "Pendidikan & Pengalaman",
    eduColTitle: "Riwayat Pendidikan",
    expColTitle: "Pengalaman Kerja / Magang",
    univRole: "S1 - Sistem Informasi",
    univName: "Universitas Gunadarma",
    univDesc: "Fakultas Ilmu Komputer dan Teknologi Informasi. Fokus pada perancangan sistem informasi bisnis, rekayasa perangkat lunak, dan manajemen basis data relasional.",
    smkRole: "Teknik Komputer dan Jaringan (TKJ)",
    smkName: "SMK Pustek Serpong",
    smkDesc: "Mempelajari instalasi jaringan lokal (LAN/WLAN), perakitan & perawatan perangkat keras komputer, konfigurasi router/switch, dan protokol komunikasi data.",
    samsatRole: "Database Administration Intern",
    samsatCompany: "Samsat Ciledug",
    samsatBullet1: "Mendukung entri, pembaruan, dan validasi data registrasi kendaraan bermotor pada sistem basis data perpajakan daerah.",
    samsatBullet2: "Mengelola dan mengarsipkan dokumen digital serta fisik dengan tingkat presisi dan akurasi tinggi.",
    samsatBullet3: "Bekerja sama secara aktif dengan tim front desk dan administrasi untuk verifikasi berkas wajib pajak.",

    // Skills
    skillsTag: "Kompetensi",
    skillsTitle: "Keahlian & Penguasaan Alat",
    filterAll: "Semua",
    filterTech: "Teknikal & Jaringan",
    filterData: "Basis Data & Analisis",
    filterOps: "Operasional & Layanan",

    skillNetTitle: "Troubleshooting Jaringan",
    skillNetSub: "Network Maintenance",
    skillNetDesc: "Mendiagnosis kendala koneksi LAN/WLAN, konfigurasi IP addressing, pengkabelan crimping RJ-45, serta pengujian router dan switch dasar.",

    skillHwTitle: "IT Support & Hardware Setup",
    skillHwSub: "Hardware & Peripheral",
    skillHwDesc: "Perakitan komputer PC, instalasi sistem operasi Windows & software esensial, penanganan periferal kantor (printer, scanner, barcode reader).",

    skillDbTitle: "Administrasi Basis Data",
    skillDbSub: "Data Entry & Updating",
    skillDbDesc: "Pembaruan record data, verifikasi integritas data, pengarsipan catatan transaksi, dan eliminasi data ganda dengan teliti.",

    skillOfficeTitle: "Microsoft Office Suite",
    skillOfficeSub: "Word, Excel, PowerPoint",
    skillOfficeDesc: "Pengolahan spreadsheet formula lanjutan (VLOOKUP, IF, PivotTable) di Excel, penyusunan laporan resmi di Word, dan slide presentasi di PowerPoint.",

    skillTableauTitle: "Visualisasi Data Tableau",
    skillTableauSub: "Business Analytics",
    skillTableauDesc: "Membangun dashboard visual analitis yang interaktif untuk memonitor indikator kinerja (KPI), volume transaksi, dan tren data.",

    skillServiceTitle: "Front Desk & Customer Service",
    skillServiceSub: "Pelayanan Publik & Komunikasi",
    skillServiceDesc: "Melayani wajib pajak dan pengunjung dengan ramah, mengarahkan prosedur pengurusan dokumen, serta menjaga etika pelayanan prima.",

    skillDocTitle: "Dokumentasi Digital",
    skillDocSub: "Filing & SOP Compliance",
    skillDocDesc: "Penyusunan arsip elektronik yang terstruktur, katalog dokumen administrasi, dan kepatuhan penuh terhadap standar prosedur operasional.",

    // Projects
    projectsTag: "Studi Kasus & Portofolio",
    projectsTitle: "Proyek & Simulasi Praktik",
    proj1Cat: "Database & Administrasi",
    proj1Title: "Sistem Administrasi & Validasi Basis Data Samsat",
    proj1Desc: "Simulasi alur entri dan validasi data kepemilikan kendaraan bermotor dengan jaminan akurasi data 100% pada arsip kepolisian daerah.",
    proj2Cat: "Infrastruktur & Jaringan",
    proj2Title: "Implementasi Jaringan Komputer & Workstation Gerai",
    proj2Desc: "Perancangan tata letak kabel UTP, instalasi switch rack, konfigurasi DHCP/Static IP, dan penyusunan POS terminal gerai ritel modern.",
    proj3Cat: "Business Intelligence",
    proj3Title: "Dashboard Analitik Kinerja Toko & Inventaris",
    proj3Desc: "Visualisasi data transaksi harian, monitoring ketersediaan stok produk, dan analisis penjualan multi-kategori menggunakan Tableau & Excel.",
    btnViewDetail: "Lihat Detail Studi Kasus",

    // Value
    valueTag: "Nilai Tambah",
    valueTitle: "Keunggulan untuk Tim IT & Operasional",
    val1Title: "Latar Belakang Vokasi & Akademik Kuat",
    val1Desc: "Perpaduan keahlian hardware dari SMK TKJ dan wawasan sistem informasi dari universitas terkemuka.",
    val2Title: "Pengalaman Kerja Riil",
    val2Desc: "Terbiasa dengan ritme kerja instansi pemerintah (Samsat) yang mengutamakan ketelitian dan integritas data.",
    val3Title: "IPK Unggul (3.91)",
    val3Desc: "Bukti nyata disiplin belajar, kecepatan menyerap teknologi baru, dan komitmen mencapai standar tertinggi.",
    val4Title: "Kesiapan Dukungan Gerai",
    val4Desc: "Siap sedia menangani tantangan hardware kasir, konektivitas POS, dan pencatatan digital operasional toko.",

    // Contact
    contactTag: "Hubungi Saya",
    contactTitle: "Mari Terhubung & Berdiskusi",
    contactSub: "Terbuka untuk peluang magang, proyek IT support, dan posisi kerja digital operations.",
    copyBtn: "Salin",
    formHeading: "Kirim Pesan Langsung",
    formSub: "Formulir ini dapat langsung dihubungkan ke WhatsApp atau Email Anda.",
    formName: "Nama Lengkap Anda",
    formEmail: "Alamat Email",
    formSubject: "Tujuan / Topik",
    optIntern: "Tawaran Magang (Internship)",
    optJob: "Peluang Karier IT Support / Digital Operations",
    optGeneral: "Pertanyaan / Diskusi Umum",
    formMessage: "Tuliskan Pesan Anda",
    btnSendWa: "Kirim via WhatsApp",
    btnSendMail: "Kirim via Email",

    // Footer
    footerBio: "Valdene Buchori Tio — Mahasiswa Sistem Informasi Universitas Gunadarma yang berdedikasi untuk solusi IT support, jaringan komputer, dan administrasi basis data.",
    footerNavTitle: "Navigasi Cepat",
    footerContactTitle: "Kontak Resmi",
    footerCopy: "Hak Cipta © 2026 Valdene Buchori Tio. Dibuat dengan dedikasi tinggi.",
    backToTop: "Kembali ke Atas"
  },

  en: {
    navAbout: "About",
    navEducation: "Education",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Portfolio",
    navContact: "Contact",
    btnDownloadCV: "Download CV",
    statusAvailable: "Available for Internship & IT Support / Digital Operations",
    heroGreeting: "Hello, I am",
    heroRole1: "Information Systems Student at Gunadarma University",
    heroRole2: "IT Support & Network Operations Enthusiast",
    heroRole3: "Former Database Administration Intern at Samsat Ciledug",
    heroBio: "Information Systems student with internship experience in database administration at Samsat Ciledug. Detail-oriented, quick to learn, and proficient in computer networking basics, Microsoft Office suite, and Tableau data visualization. Eager to contribute effectively to IT support and digital store operations.",
    chipLocation: "Tangerang, Banten, ID",
    chipNationality: "Indonesian",
    chipGpa: "GPA 3.91",
    btnContactHero: "Get in Touch",
    btnProjectsHero: "Explore Portfolio",
    badgeGpaTitle: "GPA 3.91 / 4.00",
    badgeGpaSub: "Gunadarma University",
    badgeNetworkTitle: "Network Eng. Graduate",
    badgeNetworkSub: "SMK Pustek Serpong",

    // Metrics
    metric1Val: "3.91",
    metric1Label: "Academic GPA",
    metric1Sub: "Faculty of Comp. Sci & IT",
    metric2Val: "100%",
    metric2Label: "Data Entry Accuracy",
    metric2Sub: "Samsat Database Integrity",
    metric3Val: "3+ Yrs",
    metric3Label: "Network & Hardware Foundation",
    metric3Sub: "SMK Pustek Serpong",
    metric4Val: "Active",
    metric4Label: "Ready to Contribute",
    metric4Sub: "Digital Store & IT Ops",

    // About
    aboutTag: "Get To Know Me",
    aboutTitle: "Professional Profile & Background",
    aboutHeading: "High Dedication to IT Efficiency & Data Administration",
    aboutP1: "I am an undergraduate student majoring in <strong>Information Systems at Gunadarma University</strong>, built on a solid vocational background in <strong>Computer and Network Engineering (TKJ)</strong> from SMK Pustek Serpong.",
    aboutP2: "Combining hardware diagnosis, network topology fundamentals, and practical hands-on experience in <strong>database administration at Samsat Ciledug</strong>, I offer strong analytical precision and adaptability for day-to-day digital operations.",
    targetRoleTitle: "Target Role: Digital Store Support Intern & IT Support Specialist",
    targetRoleDesc: "Motivated to deploy network troubleshooting, hardware maintenance, and data processing skills to optimize store IT infrastructure and retail digital ecosystems.",
    personalInfoTitle: "Personal Information",
    lblBirth: "Place & Date of Birth",
    valBirth: "Tangerang, May 4, 2006",
    lblNat: "Nationality",
    valNat: "Indonesian",
    lblAddress: "Location",
    valAddress: "Tangerang, Banten, Indonesia",
    lblLang: "Languages",
    valLangId: "Indonesian (Fluent / Native)",
    valLangEn: "English (Intermediate)",

    // Education & Experience
    eduExpTag: "Milestones",
    eduExpTitle: "Education & Experience",
    eduColTitle: "Academic Education",
    expColTitle: "Professional Experience",
    univRole: "Bachelor in Information Systems",
    univName: "Gunadarma University",
    univDesc: "Faculty of Computer Science and Information Technology. Focus on enterprise information systems, software engineering, and relational database management.",
    smkRole: "Computer and Network Engineering",
    smkName: "Pustek Serpong Vocational High School",
    smkDesc: "Hands-on training in local area networks (LAN/WLAN), PC assembly, computer hardware maintenance, router/switch configuration, and network protocols.",
    samsatRole: "Database Administration Intern",
    samsatCompany: "Samsat Ciledug",
    samsatBullet1: "Supported vehicle registration record entry, system updates, and database integrity maintenance.",
    samsatBullet2: "Processed and archived physical and digital tax records with strict attention to data precision.",
    samsatBullet3: "Collaborated seamlessly with the front desk customer service and administrative team for taxpayer document validation.",

    // Skills
    skillsTag: "Competencies",
    skillsTitle: "Core Skills & Tools",
    filterAll: "All Skills",
    filterTech: "Tech & Networking",
    filterData: "Database & Analytics",
    filterOps: "Operations & Service",

    skillNetTitle: "Network Troubleshooting",
    skillNetSub: "Network Maintenance",
    skillNetDesc: "Diagnosing LAN/WLAN connectivity issues, IP configuration, RJ-45 crimping, cable testing, and basic router/switch management.",

    skillHwTitle: "IT Support & Hardware Setup",
    skillHwSub: "Hardware & Peripherals",
    skillHwDesc: "PC assembly, Windows OS installation, driver configuration, and troubleshooting office peripherals like printers and barcode scanners.",

    skillDbTitle: "Database Administration",
    skillDbSub: "Data Entry & Updating",
    skillDbDesc: "Maintaining accurate database records, ensuring high data integrity, transactional record filing, and duplicate data cleaning.",

    skillOfficeTitle: "Microsoft Office Suite",
    skillOfficeSub: "Word, Excel, PowerPoint",
    skillOfficeDesc: "Spreadsheet data processing with advanced Excel formulas (VLOOKUP, IF, PivotTable), official documentation in Word, and PowerPoint decks.",

    skillTableauTitle: "Tableau Visualization",
    skillTableauSub: "Business Analytics",
    skillTableauDesc: "Developing interactive visual dashboards to track retail key performance indicators (KPIs), transaction volume, and operational trends.",

    skillServiceTitle: "Front Desk & Customer Service",
    skillServiceSub: "Public Service & Communication",
    skillServiceDesc: "Interacting courteously with public visitors, explaining document workflows clearly, and maintaining professional customer satisfaction.",

    skillDocTitle: "Digital Documentation",
    skillDocSub: "Filing & SOP Compliance",
    skillDocDesc: "Maintaining organized electronic filing archives, cataloging administrative paperwork, and adhering strictly to institutional SOPs.",

    // Projects
    projectsTag: "Case Studies & Work",
    projectsTitle: "Showcase & Practical Projects",
    proj1Cat: "Database & Admin",
    proj1Title: "Vehicle Registration Record & Database Archival System",
    proj1Desc: "Simulated workflow for government vehicle tax records verification and database reconciliation with zero-error accuracy.",
    proj2Cat: "Infrastructure & Network",
    proj2Title: "Workstation & Retail LAN Infrastructure Deployment",
    proj2Desc: "Structured UTP cabling, network rack patch panel organization, switch configuration, and POS workstation connectivity setup.",
    proj3Cat: "Business Intelligence",
    proj3Title: "Retail Store Performance & Inventory Analytics Dashboard",
    proj3Desc: "Comprehensive visual dashboard monitoring daily sales trends, stock replenishment alerts, and multi-category retail performance.",
    btnViewDetail: "View Case Study Details",

    // Value
    valueTag: "Value Proposition",
    valueTitle: "Key Advantages for IT & Operations Teams",
    val1Title: "Dual Vocational & Academic Edge",
    val1Desc: "Combines hands-on technical skills from vocational high school with strategic system analysis from university education.",
    val2Title: "Proven Real-World Experience",
    val2Desc: "Accustomed to the strict precision and accountability demanded by government public service administration (Samsat).",
    val3Title: "High Academic Standing (GPA 3.91)",
    val3Desc: "A solid indicator of discipline, quick learning capability, and commitment to superior performance standards.",
    val4Title: "Retail & Digital Store Ready",
    val4Desc: "Prepared to handle retail store hardware issues, POS terminal support, network stability, and accurate inventory audits.",

    // Contact
    contactTag: "Get In Touch",
    contactTitle: "Let's Connect & Collaborate",
    contactSub: "Open for internship positions, IT support roles, and digital store operations opportunities.",
    copyBtn: "Copy",
    formHeading: "Send a Direct Message",
    formSub: "Fill out the form below to initiate communication via WhatsApp or Email.",
    formName: "Your Full Name",
    formEmail: "Email Address",
    formSubject: "Topic / Inquiry",
    optIntern: "Internship Opportunity",
    optJob: "IT Support / Digital Operations Role",
    optGeneral: "General Inquiries / Discussion",
    formMessage: "Your Message",
    btnSendWa: "Send via WhatsApp",
    btnSendMail: "Send via Email",

    // Footer
    footerBio: "Valdene Buchori Tio — Information Systems student at Gunadarma University dedicated to IT support excellence, network operations, and database administration.",
    footerNavTitle: "Quick Links",
    footerContactTitle: "Official Contacts",
    footerCopy: "Copyright © 2026 Valdene Buchori Tio. All rights reserved.",
    backToTop: "Back to Top"
  }
};

// --- Project Modal Data ---
const projectDetails = {
  proj1: {
    title: {
      id: "Sistem Administrasi & Validasi Basis Data Samsat",
      en: "Vehicle Registration Record & Database Archival System"
    },
    badge: {
      id: "Database Administration & Samsat Ciledug Case Study",
      en: "Database Administration & Samsat Ciledug Case Study"
    },
    img: "assets/samsat-db.jpg",
    desc: {
      id: "Studi kasus berdasarkan pengalaman langsung sebagai Database Administration Intern di Kantor Pelayanan Samsat Ciledug. Sistem ini berfokus pada alur pencatatan dan rekonsiliasi data kendaraan bermotor, verifikasi dokumen legalitas wajib pajak, dan penanganan ribuan data registrasi harian dengan batas toleransi kesalahan nol (zero-defect).",
      en: "Case study based directly on practical internship experience as a Database Administration Intern at Samsat Ciledug. This project highlights the daily workflow of recording, verifying, and reconciling vehicle registration data, managing taxpayer documents, and maintaining high-volume database records with zero-tolerance for inaccuracy."
    },
    responsibilities: {
      id: [
        "Melakukan entri data identitas pemilik, nomor rangka, nomor mesin, dan masa berlaku pajak kendaraan ke sistem pusat.",
        "Mengecek kelengkapan berkas fisik dari loket front desk dan memvalidasi keabsahan data terhadap riwayat arsip.",
        "Melakukan pembersihan data (data cleaning) terhadap anomali atau data entri yang terduplikasi.",
        "Membuat laporan rekapitulasi data harian untuk keperluan audit internal samsat."
      ],
      en: [
        "Conducted data entry for vehicle owner identity, VIN/engine numbers, and tax expiry dates into the central database system.",
        "Cross-referenced physical documents from front desk service counters with historical digital records to ensure validity.",
        "Performed data cleansing to resolve anomalies and prevent duplicate data entries.",
        "Generated daily administrative summary logs for internal audit and record-keeping."
      ]
    },
    tools: ["Samsat Database System", "Microsoft Excel (Data Reconciliation)", "Digital Archival Scanner", "Data Verification SOP"]
  },
  proj2: {
    title: {
      id: "Implementasi Jaringan Komputer & Workstation Gerai",
      en: "Workstation & Retail LAN Infrastructure Deployment"
    },
    badge: {
      id: "Computer & Network Engineering (TKJ) Practical Project",
      en: "Computer & Network Engineering (TKJ) Practical Project"
    },
    img: "assets/network-infra.jpg",
    desc: {
      id: "Proyek perancangan dan implementasi infrastruktur jaringan kabel (LAN) dan nirkabel (WLAN) untuk workstation perkantoran dan gerai ritel modern. Mencakup penataan rak server (patch panel), pengkabelan terstruktur Cat6, konfigurasi subnetting IP address, serta penanganan gangguan konektivitas (network troubleshooting).",
      en: "Design and deployment of structured wired (LAN) and wireless (WLAN) infrastructure for office workstations and modern retail storefronts. Includes server rack patch panel management, Cat6 structured cabling, IP subnetting, and network connectivity troubleshooting."
    },
    responsibilities: {
      id: [
        "Perancangan skema topologi jaringan bintang (star topology) untuk menghubungkan kasir POS, workstation admin, dan access point.",
        "Crimping kabel UTP RJ-45 sesuai standar T568B dan pengetesan redaman serta kontinuitas pin menggunakan LAN Tester.",
        "Konfigurasi router gateway, IP DHCP pool, port forwarding, dan segmentasi traffic jaringan.",
        "Pengujian kestabilan koneksi melalui perintah ping, traceroute, dan throughput monitoring pada router diagnostic console."
      ],
      en: [
        "Designed star topology network schematics connecting POS cashier terminals, administration workstations, and Wi-Fi APs.",
        "Crimped UTP Cat6 cables following T568B standards and verified pin continuity using hardware cable testers.",
        "Configured gateway router settings, DHCP IP pools, port mapping, and traffic segmentation.",
        "Tested connectivity stability through ping, traceroute, and packet diagnostic consoles."
      ]
    },
    tools: ["Cisco / Mikrotik Routers", "Managed Switches & Patch Panels", "Cat6 Cabling & RJ-45", "Windows Diagnostic Tools", "Ping / Tracert / Nmap"]
  },
  proj3: {
    title: {
      id: "Dashboard Analitik Kinerja Toko & Inventaris",
      en: "Retail Store Performance & Inventory Analytics Dashboard"
    },
    badge: {
      id: "Tableau & Advanced Excel Analytics",
      en: "Tableau & Advanced Excel Analytics"
    },
    img: "assets/store-analytics.jpg",
    desc: {
      id: "Pengembangan dashboard visualisasi bisnis interaktif yang dirancang untuk mendukung operasional Digital Store Support. Dashboard ini memvisualisasikan data penjualan gerai harian, tingkat perputaran barang (inventory turnover), alert stok menipis (reorder warning), dan tren performa kategori produk secara real-time.",
      en: "Interactive business intelligence dashboard designed to support Digital Store Operations and retail management. Visualizes daily store transaction metrics, inventory turnover rates, low-stock reorder alerts, and multi-category sales performance in real time."
    },
    responsibilities: {
      id: [
        "Transformasi data mentah transaksi CSV/Excel menjadi model data terstruktur di Tableau.",
        "Membangun visualisasi interaktif: grafik tren pendapatan, diagram distribusi kategori barang, dan indikator KPI kesehatan stok.",
        "Penerapan formula kalkulasi otomatis untuk batas minimum safety stock guna mencegah terjadinya out-of-stock.",
        "Penyajian insight yang mudah dipahami oleh manajer toko dan tim operasional untuk pengambilan keputusan berbasis data."
      ],
      en: [
        "Transformed raw transaction records from CSV/Excel into structured dimensional models in Tableau.",
        "Engineered interactive visual components: revenue trend curves, product category breakdowns, and inventory KPI cards.",
        "Implemented automated calculated fields for safety stock thresholds to mitigate out-of-stock occurrences.",
        "Delivered actionable executive insights tailored for retail store managers and operations teams."
      ]
    },
    tools: ["Tableau Desktop", "Microsoft Excel (Pivot Tables, XLOOKUP)", "Data Modeling", "Business Intelligence"]
  }
};

// --- State Variables ---
let currentLang = localStorage.getItem("vbt_lang") || "id";
let currentTheme = localStorage.getItem("vbt_theme") || "dark";

// --- DOM Initializations ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initNavbarScroll();
  initMobileDrawer();
  initSkillFilter();
  initProjectModals();
  initContactActions();
  initFormHandlers();
  initBackToTop();
});

// --- Theme Management ---
function initTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon();

  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("vbt_theme", currentTheme);
      updateThemeIcon();
      showToast(currentLang === "id" 
        ? `Mode ${currentTheme === 'dark' ? 'Gelap' : 'Terang'} diaktifkan` 
        : `${currentTheme === 'dark' ? 'Dark' : 'Light'} mode activated`);
    });
  }
}

function updateThemeIcon() {
  const icon = document.getElementById("themeIcon");
  if (!icon) return;
  if (currentTheme === "dark") {
    // Show Sun icon to switch to light
    icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  } else {
    // Show Moon icon to switch to dark
    icon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

// --- Language Management ---
function initLanguage() {
  applyLanguage(currentLang);

  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "id" ? "en" : "id";
      localStorage.setItem("vbt_lang", currentLang);
      applyLanguage(currentLang);
      showToast(currentLang === "id" ? "Bahasa diubah ke Indonesia" : "Language switched to English");
    });
  }
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
  placeholders.forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    langBtn.textContent = lang === "id" ? "EN" : "ID";
    langBtn.setAttribute("aria-label", lang === "id" ? "Ganti ke Bahasa Inggris" : "Switch to Indonesian");
  }
}

// --- Navbar Scrolled State ---
function initNavbarScroll() {
  const header = document.querySelector(".header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Scroll spy
    let currentSection = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSection = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
}

// --- Mobile Drawer ---
function initMobileDrawer() {
  const toggleBtn = document.getElementById("mobileToggleBtn");
  const drawer = document.getElementById("mobileDrawer");
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    drawer.classList.toggle("open");
  });

  const drawerLinks = drawer.querySelectorAll("a");
  drawerLinks.forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
    });
  });
}

// --- Skill Filter ---
function initSkillFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".skill-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      cards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.style.display = "flex";
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.opacity = "1";
          }, 50);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// --- Project Modals ---
function initProjectModals() {
  const projectCards = document.querySelectorAll(".project-card");
  const modalBackdrop = document.getElementById("projectModalBackdrop");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalMedia = document.getElementById("modalMedia");
  const modalBadge = document.getElementById("modalBadge");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalList = document.getElementById("modalList");
  const modalTools = document.getElementById("modalTools");

  if (!modalBackdrop) return;

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const projId = card.getAttribute("data-project-id");
      const data = projectDetails[projId];
      if (!data) return;

      modalMedia.src = data.img;
      modalBadge.textContent = data.badge[currentLang] || data.badge.id;
      modalTitle.textContent = data.title[currentLang] || data.title.id;
      modalDesc.textContent = data.desc[currentLang] || data.desc.id;

      // Render responsibilities list
      modalList.innerHTML = "";
      const items = data.responsibilities[currentLang] || data.responsibilities.id;
      items.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        modalList.appendChild(li);
      });

      // Render tools
      modalTools.innerHTML = "";
      data.tools.forEach(tool => {
        const tag = document.createElement("span");
        tag.className = "skill-tag";
        tag.textContent = tool;
        modalTools.appendChild(tag);
      });

      modalBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("active")) {
      closeModal();
    }
  });
}

// --- Contact Actions & Copy to Clipboard ---
function initContactActions() {
  const copyBtns = document.querySelectorAll(".contact-copy-btn");
  copyBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const text = btn.getAttribute("data-copy-text");
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(currentLang === "id" ? `Tersalin ke clipboard: ${text}` : `Copied to clipboard: ${text}`);
        });
      }
    });
  });
}

// --- Interactive Message Form & WhatsApp Handler ---
function initFormHandlers() {
  const form = document.getElementById("contactForm");
  const waBtn = document.getElementById("sendWaBtn");
  const mailBtn = document.getElementById("sendMailBtn");

  if (!form) return;

  function getFormData() {
    const name = document.getElementById("senderName").value.trim();
    const email = document.getElementById("senderEmail").value.trim();
    const subjectSelect = document.getElementById("senderSubject");
    const subject = subjectSelect.options[subjectSelect.selectedIndex].text;
    const message = document.getElementById("senderMessage").value.trim();

    return { name, email, subject, message };
  }

  if (waBtn) {
    waBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!data.name || !data.message) {
        showToast(currentLang === "id" ? "Mohon lengkapi nama dan pesan Anda." : "Please fill in your name and message.");
        return;
      }

      const waText = encodeURIComponent(
        `Halo Valdene Buchori Tio,\n\nNama: ${data.name}\nEmail: ${data.email || '-'}\nTopik: ${data.subject}\n\nPesan:\n${data.message}`
      );
      const waUrl = `https://wa.me/6282194212251?text=${waText}`;
      window.open(waUrl, "_blank");
      showToast(currentLang === "id" ? "Membuka WhatsApp..." : "Opening WhatsApp...");
    });
  }

  if (mailBtn) {
    mailBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!data.name || !data.message) {
        showToast(currentLang === "id" ? "Mohon lengkapi nama dan pesan Anda." : "Please fill in your name and message.");
        return;
      }

      const mailSubject = encodeURIComponent(`[Inquiry Portfolio] ${data.subject} - ${data.name}`);
      const mailBody = encodeURIComponent(
        `Halo Valdene Buchori Tio,\n\nNama: ${data.name}\nEmail: ${data.email}\nTopik: ${data.subject}\n\nPesan:\n${data.message}\n\nSalam,\n${data.name}`
      );
      const mailUrl = `mailto:valdenebuchori@gmail.com?subject=${mailSubject}&body=${mailBody}`;
      window.location.href = mailUrl;
      showToast(currentLang === "id" ? "Membuka aplikasi email..." : "Opening email client...");
    });
  }
}

// --- Back to Top ---
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- Toast Notification Engine ---
function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
