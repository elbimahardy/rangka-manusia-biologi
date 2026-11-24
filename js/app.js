// =========================================================================
// 1. HORIZONTAL ROTATING BONE SVG TEMPLATES (TANPA GAMBAR EKSTERNAL)
// =========================================================================
const boneSpinSvgs = {
    femur: `
        <svg viewBox="0 0 64 64" class="w-9 h-9" fill="none">
            <path d="M24 10 C19 10, 17 15, 20 19 C22 22, 26 24, 27 28 L28 43 C26 47, 22 49, 20 52 C17 56, 20 60, 25 59 C28 58, 30 55, 32 55 C34 55, 36 58, 39 59 C44 60, 47 56, 44 52 C42 49, 38 47, 36 43 L37 28 C38 24, 42 22, 44 19 C47 15, 45 10, 40 10 C37 10, 35 13, 32 13 C29 13, 27 10, 24 10 Z"
                  fill="#FDE68A" fill-opacity="0.28" stroke="#FDE68A" stroke-width="2.3" stroke-linejoin="round" />
            <line x1="32" y1="18" x2="32" y2="50" stroke="#FFFFFF" stroke-width="1.3" stroke-dasharray="3 3" />
        </svg>
    `,
    skull: `
        <svg viewBox="0 0 64 64" class="w-9 h-9" fill="none">
            <path d="M18 28 C18 15, 46 15, 46 28 C46 36, 42 40, 39 42 L39 50 L25 50 L25 42 C22 40, 18 36, 18 28 Z"
                  fill="#FDE68A" fill-opacity="0.25" stroke="#FDE68A" stroke-width="2.3" stroke-linejoin="round" />
            <circle cx="26" cy="30" r="3.5" fill="#FAF8F5" />
            <circle cx="38" cy="30" r="3.5" fill="#FAF8F5" />
            <line x1="29" y1="45" x2="29" y2="50" stroke="#FAF8F5" stroke-width="1.6" />
            <line x1="35" y1="45" x2="35" y2="50" stroke="#FAF8F5" stroke-width="1.6" />
        </svg>
    `,
    spine: `
        <svg viewBox="0 0 64 64" class="w-9 h-9" fill="none">
            <rect x="24" y="10" width="16" height="8" rx="3" fill="#FDE68A" fill-opacity="0.3" stroke="#FDE68A" stroke-width="2" />
            <rect x="22" y="21" width="20" height="8" rx="3" fill="#FDE68A" fill-opacity="0.3" stroke="#FDE68A" stroke-width="2" />
            <rect x="21" y="32" width="22" height="9" rx="3" fill="#FDE68A" fill-opacity="0.3" stroke="#FDE68A" stroke-width="2" />
            <rect x="23" y="44" width="18" height="9" rx="3" fill="#FDE68A" fill-opacity="0.3" stroke="#FDE68A" stroke-width="2" />
        </svg>
    `,
    ribcage: `
        <svg viewBox="0 0 64 64" class="w-9 h-9" fill="none">
            <line x1="32" y1="12" x2="32" y2="52" stroke="#FAF8F5" stroke-width="2.5" stroke-linecap="round" />
            <path d="M32 18 C16 18, 14 28, 30 29" stroke="#FDE68A" stroke-width="2.3" stroke-linecap="round" />
            <path d="M32 18 C48 18, 50 28, 34 29" stroke="#FDE68A" stroke-width="2.3" stroke-linecap="round" />
            <path d="M32 30 C15 30, 14 40, 30 41" stroke="#FDE68A" stroke-width="2.3" stroke-linecap="round" />
            <path d="M32 30 C49 30, 50 40, 34 41" stroke="#FDE68A" stroke-width="2.3" stroke-linecap="round" />
        </svg>
    `,
    pelvis: `
        <svg viewBox="0 0 64 64" class="w-9 h-9" fill="none">
            <path d="M14 22 L22 28 L42 28 L50 22 L54 32 L44 44 L38 36 L26 36 L20 44 L10 32 Z"
                  fill="#FDE68A" fill-opacity="0.25" stroke="#FDE68A" stroke-width="2.2" stroke-linejoin="round" />
        </svg>
    `,
    flat: `
        <svg viewBox="0 0 64 64" class="w-9 h-9" fill="none">
            <path d="M16 20 Q32 12 48 20 L44 44 Q32 50 20 44 Z"
                  fill="#FDE68A" fill-opacity="0.25" stroke="#FDE68A" stroke-width="2.2" stroke-linejoin="round" />
            <line x1="23" y1="27" x2="41" y2="27" stroke="#FAF8F5" stroke-width="1.4" stroke-dasharray="3 2" />
            <line x1="25" y1="35" x2="39" y2="35" stroke="#FAF8F5" stroke-width="1.4" stroke-dasharray="3 2" />
        </svg>
    `,
    short: `
        <svg viewBox="0 0 64 64" class="w-9 h-9" fill="none">
            <rect x="18" y="18" width="28" height="28" rx="7"
                  fill="#FDE68A" fill-opacity="0.25" stroke="#FDE68A" stroke-width="2.3" />
            <circle cx="27" cy="27" r="2.2" fill="#FAF8F5" />
            <circle cx="37" cy="37" r="2.2" fill="#FAF8F5" />
        </svg>
    `,
    irregular: `
        <svg viewBox="0 0 64 64" class="w-9 h-9" fill="none">
            <path d="M22 14 L38 16 L46 28 L40 38 L44 50 L28 48 L20 36 L14 26 Z"
                  fill="#FDE68A" fill-opacity="0.25" stroke="#FDE68A" stroke-width="2.2" stroke-linejoin="round" />
        </svg>
    `
};

function renderAllSpinners() {
    document.querySelectorAll('.bone-spinner[data-bone-type]').forEach(el => {
        const type = el.getAttribute('data-bone-type');
        if (boneSpinSvgs[type]) {
            el.innerHTML = boneSpinSvgs[type];
        }
    });
}

function updateHeroSpinner(boneKey) {
    const mapKeyToType = {
        skull: 'skull',
        spine: 'spine',
        ribcage: 'ribcage',
        shoulder: 'flat',
        arms: 'femur',
        pelvis: 'pelvis',
        legs: 'femur'
    };
    const spinner = document.getElementById('heroBoneSpinner');
    if (spinner) {
        const boneType = mapKeyToType[boneKey] || 'femur';
        spinner.innerHTML = boneSpinSvgs[boneType];
    }
}

// =========================================================================
// 2. MOBILE DRAWER CONTROLS
// =========================================================================
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebarDock');
    const backdrop = document.getElementById('mobileBackdrop');
    const icon = document.getElementById('mobileMenuIcon');
    const isOpen = sidebar.classList.toggle('mobile-open');

    if (isOpen) {
        backdrop.classList.remove('hidden');
        icon.className = 'fa-solid fa-xmark';
    } else {
        backdrop.classList.add('hidden');
        icon.className = 'fa-solid fa-bars';
    }
}

function closeMobileMenu() {
    const sidebar = document.getElementById('sidebarDock');
    const backdrop = document.getElementById('mobileBackdrop');
    const icon = document.getElementById('mobileMenuIcon');
    sidebar.classList.remove('mobile-open');
    backdrop.classList.add('hidden');
    if (icon) icon.className = 'fa-solid fa-bars';
}

// =========================================================================
// 3. VIEW SWITCHER
// =========================================================================
const viewIds = ['start', 'pengantar', 'fungsi', 'klasifikasi', 'jaringan', 'osifikasi', 'kesimpulan'];

function switchView(viewName, btnEl) {
    viewIds.forEach(id => {
        const el = document.getElementById(`view-${id}`);
        if (el) el.classList.add('hidden');
    });

    const target = document.getElementById(`view-${viewName}`);
    if (target) target.classList.remove('hidden');

    document.querySelectorAll('.dock-item').forEach(item => {
        item.classList.remove('active', 'font-semibold', 'text-white');
        item.classList.add('font-medium', 'text-neutral-200');
    });

    if (btnEl) {
        btnEl.classList.add('active', 'font-semibold', 'text-white');
        btnEl.classList.remove('font-medium', 'text-neutral-200');
    }

    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function triggerNavClick(index) {
    const buttons = document.querySelectorAll('.dock-item');
    if (buttons[index]) buttons[index].click();
}

// =========================================================================
// 4. INTERACTIVE 2D SKELETON VIEWER
// =========================================================================
const bonePartsInfo = {
    skull: {
        title: 'Tulang tengkorak',
        group: 'axial',
        desc: 'Aksial. Melindungi otak dan membentuk struktur wajah. Tulang tengkorak bagian kepala tidak dapat digerakkan.'
    },
    spine: {
        title: 'Tulang belakang',
        group: 'axial',
        desc: 'Aksial. Terdiri atas 33 ruas. Menyangga kepala dan tubuh, menjaga kestabilan tubuh, serta tempat melekatnya tulang rusuk.'
    },
    ribcage: {
        title: 'Tulang dada & rusuk',
        group: 'axial',
        desc: 'Aksial. Melindungi organ dalam. Terdiri atas tulang dada serta 7 pasang rusuk sejati, 3 rusuk palsu, dan 2 rusuk melayang.'
    },
    shoulder: {
        title: 'Tulang gelang bahu',
        group: 'appendicular',
        desc: 'Apendikular. Terdiri atas tulang belikat dan tulang selangka yang menghubungkan anggota gerak atas dengan rangka tubuh.'
    },
    arms: {
        title: 'Anggota gerak atas',
        group: 'appendicular',
        desc: 'Apendikular. Lengan atas, pengumpil, hasta, pergelangan tangan, telapak dan jari tangan.'
    },
    pelvis: {
        title: 'Tulang gelang panggul',
        group: 'appendicular',
        desc: 'Apendikular. Tersusun atas tulang pinggul, tulang duduk, dan tulang kemaluan yang membantu menopang tubuh.'
    },
    legs: {
        title: 'Anggota gerak bawah',
        group: 'appendicular',
        desc: 'Apendikular. Paha, tempurung lutut, kering, betis, pergelangan kaki, telapak dan jari kaki untuk menopang badan & berjalan.'
    }
};

let activeBoneKey = 'arms';

function selectBonePart(partKey) {
    activeBoneKey = partKey;
    const info = bonePartsInfo[partKey];
    if (!info) return;

    document.getElementById('boneCardTitle').innerText = info.title;
    document.getElementById('boneCardDesc').innerText = info.desc;
    updateHeroSpinner(partKey);

    Object.keys(bonePartsInfo).forEach(key => {
        const groupEl = document.getElementById(`part-${key}`);
        if (!groupEl) return;
        const color = key === partKey ? '#F59E0B' : '#F3F4F6';
        groupEl.querySelectorAll('path, line, polygon').forEach(el => el.setAttribute('stroke', color));
        groupEl.querySelectorAll('circle, rect').forEach(el => el.setAttribute('fill', color));
    });
}

function setSkeletonFilter(filter) {
    const activeClass = 'px-4 py-1.5 rounded-full bg-white text-[#18191B] text-xs font-bold transition';
    const inactiveClass = 'px-3.5 py-1.5 rounded-full bg-transparent border border-white/25 text-neutral-200 hover:text-white text-xs font-medium transition';

    document.getElementById('filterAllBtn').className = filter === 'all' ? activeClass : inactiveClass;
    document.getElementById('filterAxialBtn').className = filter === 'axial' ? activeClass : inactiveClass;
    document.getElementById('filterAppBtn').className = filter === 'appendicular' ? activeClass : inactiveClass;

    Object.keys(bonePartsInfo).forEach(key => {
        const groupEl = document.getElementById(`part-${key}`);
        if (!groupEl) return;
        const partGroup = groupEl.getAttribute('data-group');
        if (filter === 'all' || partGroup === filter) groupEl.classList.remove('bone-dimmed');
        else groupEl.classList.add('bone-dimmed');
    });

    if (filter === 'axial' && bonePartsInfo[activeBoneKey].group !== 'axial') selectBonePart('ribcage');
    else if (filter === 'appendicular' && bonePartsInfo[activeBoneKey].group !== 'appendicular') selectBonePart('arms');
}

// =========================================================================
// 5. KEY POINTS SELECTOR
// =========================================================================
const keyPoints = [
    "<strong class='text-white'>1. Sistem Gerak:</strong> Sistem organ yang berperan dalam pergerakan tulang dan tubuh manusia.",
    "<strong class='text-white'>2. Alat Gerak Aktif (Otot):</strong> Otot mampu berkontraksi dan berelaksasi sehingga dapat menggerakkan tulang.",
    "<strong class='text-white'>3. Alat Gerak Pasif (Tulang / Endoskeleton):</strong> Susunan tulang yang disebut endoskeleton; tidak dapat bergerak tanpa bantuan otot.",
    "<strong class='text-white'>4. Penyusun Rangka Manusia:</strong> Tersusun atas tulang keras dan tulang rawan, serta ditunjang oleh ligamen, tendon, dan otot.",
    "<strong class='text-white'>5. Pelindung Rangka:</strong> Rangka terletak di dalam tubuh (endoskeleton) dan dilindungi oleh otot serta kulit."
];

function selectKeyPoint(idx) {
    document.getElementById('kpSpotlight').innerHTML = keyPoints[idx];
    document.querySelectorAll('.kp-btn').forEach((btn, i) => {
        btn.className = i === idx
            ? 'kp-btn px-3 py-1 rounded-lg bg-white text-[#18191B] text-xs font-semibold'
            : 'kp-btn px-3 py-1 rounded-lg bg-white/10 text-neutral-200 text-xs font-semibold';
    });
}

// =========================================================================
// 6. AKSIAL VS APENDIKULAR TABS
// =========================================================================
function switchSkeletonTab(tab) {
    if (tab === 'axial') {
        document.getElementById('tabAxialBtn').className = 'px-4 py-2 rounded-lg bg-white text-[#18191B] text-xs font-bold transition';
        document.getElementById('tabAppendicularBtn').className = 'px-4 py-2 rounded-lg text-neutral-200 text-xs font-bold transition';
        document.getElementById('panelAxial').classList.remove('hidden');
        document.getElementById('panelAppendicular').classList.add('hidden');
    } else {
        document.getElementById('tabAppendicularBtn').className = 'px-4 py-2 rounded-lg bg-white text-[#18191B] text-xs font-bold transition';
        document.getElementById('tabAxialBtn').className = 'px-4 py-2 rounded-lg text-neutral-200 text-xs font-bold transition';
        document.getElementById('panelAppendicular').classList.remove('hidden');
        document.getElementById('panelAxial').classList.add('hidden');
    }
}

// =========================================================================
// 7. OSIFIKASI STEPPER
// =========================================================================
const osiSteps = [
    "<strong class='text-white'>Tahap 1:</strong> Proses penulangan dimulai pada tulang rawan yang mengandung <strong class='text-amber-300'>osteoblas</strong> (sel pembentuk tulang).",
    "<strong class='text-white'>Tahap 2:</strong> Rongga pada tulang rawan mulai terbentuk dan terisi oleh sel-sel <strong class='text-amber-300'>osteoblas</strong>.",
    "<strong class='text-white'>Tahap 3:</strong> <strong class='text-amber-300'>Osteosit</strong> (sel tulang matang) terbentuk dan tersusun mengelilingi <strong class='text-white'>saluran Havers</strong>.",
    "<strong class='text-white'>Tahap 4:</strong> Matriks tulang terbentuk dengan kandungan <strong class='text-white'>kalsium dan fosfor</strong> sehingga tulang mengeras.",
    "<strong class='text-white'>Tahap 5:</strong> Pusat osifikasi sekunder terbentuk pada ujung tulang (<strong class='text-amber-300'>epifisis</strong>) dan membantu pemanjangan tulang."
];

function setOssificationStep(idx) {
    document.getElementById('osiDesc').innerHTML = osiSteps[idx];
    document.querySelectorAll('.osi-btn').forEach((btn, i) => {
        btn.className = i === idx
            ? 'osi-btn px-2.5 py-1 rounded-lg bg-white text-[#18191B] text-xs font-bold'
            : 'osi-btn px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-bold';
    });
}

// =========================================================================
// 8. QUIZ MODAL
// =========================================================================
const quizData = [
    { q: 'Mengapa tulang disebut alat gerak pasif?', opts: ['Tidak memiliki sel hidup', 'Tidak dapat bergerak tanpa kontraksi otot', 'Hanya tersusun dari kalsium', 'Dilindungi oleh kulit'], ans: 1 },
    { q: 'Manakah yang termasuk rangka aksial?', opts: ['Tengkorak, tulang belakang, rusuk, dan dada', 'Gelang bahu dan panggul', 'Lengan atas dan paha', 'Belikat dan selangka'], ans: 0 },
    { q: 'Saluran pada tulang keras yang berisi pembuluh kapiler pengangkut nutrisi disebut...', opts: ['Saluran Kondrosit', 'Saluran Havers', 'Epifisis', 'Sutura'], ans: 1 },
    { q: 'Hubungan tulang atlas (C1) dengan tulang tengkorak adalah contoh...', opts: ['Sendi engsel', 'Sendi peluru', 'Sendi putar', 'Sendi kelana'], ans: 2 },
    { q: 'Perbedaan osteoblas dan osteosit adalah...', opts: ['Osteoblas pembentuk tulang muda, osteosit sel tulang matang', 'Osteoblas sel rawan, osteosit sel otot', 'Keduanya sama saja', 'Osteosit hanya ada di tengkorak'], ans: 0 }
];
let qIdx = 0;
let score = 0;

function openQuizModal() {
    qIdx = 0;
    score = 0;
    document.getElementById('quizModal').classList.remove('hidden');
    renderQuiz();
}

function closeQuizModal() {
    document.getElementById('quizModal').classList.add('hidden');
}

function renderQuiz() {
    const box = document.getElementById('quizContent');
    if (qIdx >= quizData.length) {
        box.innerHTML = `
            <div class="text-center space-y-4 py-3">
                <div class="w-14 h-14 rounded-2xl bg-white/10 text-amber-300 text-2xl flex items-center justify-center mx-auto"><i class="fa-solid fa-award"></i></div>
                <h3 class="text-2xl font-extrabold text-white">Skor Kamu: ${score} / ${quizData.length}</h3>
                <p class="text-xs text-neutral-300">Hebat! Kamu telah menyelesaikan kuis Multimedia Biologi: Rangka Manusia.</p>
                <button onclick="closeQuizModal()" class="px-6 py-2.5 rounded-xl bg-white text-[#18191B] text-xs font-bold">Selesai</button>
            </div>`;
        return;
    }
    const item = quizData[qIdx];
    box.innerHTML = `
        <div class="space-y-4">
            <span class="text-xs font-bold text-amber-300">SOAL ${qIdx + 1} / ${quizData.length}</span>
            <h3 class="text-base font-bold text-white">${item.q}</h3>
            <div class="space-y-2">
                ${item.opts.map((o, i) => `
                    <button onclick="answerQuiz(${i})" class="w-full text-left p-3 rounded-xl bg-white/5 border border-white/15 hover:bg-white/15 text-xs font-medium text-neutral-200 transition">${o}</button>
                `).join('')}
            </div>
        </div>`;
}

function answerQuiz(i) {
    if (i === quizData[qIdx].ans) score++;
    qIdx++;
    renderQuiz();
}

window.addEventListener('DOMContentLoaded', () => {
    renderAllSpinners();
    selectBonePart('arms');
    selectKeyPoint(0);
});