/**
 * Amit Kumar — Industrial Designer Portfolio
 * Pure Static Web Application (No Node.js or React runtime required)
 */

(function () {
  const {
    INITIAL_SITE_SETTINGS,
    PROJECTS_DATA,
    WORK_EXPERIENCE_DATA,
    EDUCATION_DATA,
    SKILLS_DATA,
    AWARDS_DATA,
  } = window.portfolioData;

  // --- STATE ---
  let currentTab = 'home';
  let previousTab = 'home';
  let selectedProject = null;
  let projectsFilter = 'all';
  let redDotModalOpen = false;
  let indiaDesignModalOpen = false;
  let kloveModalOpen = false;
  let customizerOpen = false;
  let selectedImageModal = null;
  let copiedLink = false;
  let mobileMenuOpen = false;
  let galleryLayout = 'stack';

  let siteSettings = (() => {
    try {
      const saved = localStorage.getItem('portfolio_site_settings');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading settings', e);
    }
    return JSON.parse(JSON.stringify(INITIAL_SITE_SETTINGS));
  })();

  // --- SVG ICON HELPER ---
  function getIconSvg(name, classNames = 'w-4 h-4') {
    const icons = {
      'arrow-right': `<path d="M5 12h14M12 5l7 7-7 7"/>`,
      'arrow-left': `<path d="M19 12H5M12 19l-7-7 7-7"/>`,
      'arrow-down': `<path d="M12 5v14M19 12l-7 7-7-7"/>`,
      'award': `<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>`,
      'sparkles': `<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/><path d="M5 3v4M3 5h4M19 17v4M17 19h4"/>`,
      'file-text': `<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>`,
      'check': `<path d="M20 6 9 17l-5-5"/>`,
      'check-circle-2': `<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>`,
      'x': `<path d="M18 6 6 18M6 6l12 12"/>`,
      'share-2': `<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>`,
      'copy': `<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>`,
      'sliders': `<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>`,
      'maximize-2': `<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>`,
      'chevron-right': `<path d="m9 18 6-6-6-6"/>`,
      'chevron-left': `<path d="m15 18-6-6 6-6"/>`,
      'wrench': `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`,
      'layers': `<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3.17 12.5"/><path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L3.17 17.5"/>`,
      'eye': `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`,
      'calendar': `<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="19" y1="10" y2="10"/>`,
      'user': `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
      'briefcase': `<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
      'graduation-cap': `<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>`,
      'mail': `<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`,
      'phone': `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>`,
      'map-pin': `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`,
      'linkedin': `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>`,
      'rotate-ccw': `<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>`,
      'menu': `<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>`
    };

    const path = icons[name] || icons['sparkles'];
    return `<svg xmlns="http://www.w3.org/2000/svg" class="${classNames}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  }

  function getSoftwareLogoSvg(logoType, classNames = 'w-7 h-7') {
    switch ((logoType || '').toLowerCase()) {
      case 'fusion360':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#334155" /><path d="M5 14C5 11 8 8 13 8C17 8 19 10 19 13C19 16.5 15 17 12 17C9 17 5 16 5 14Z" stroke="#10B981" stroke-width="2" /><circle cx="16" cy="11" r="1" fill="#10B981" /><path d="M8 17L6 20" stroke="#10B981" stroke-width="2" stroke-linecap="round" /></svg>`;
      case 'rhino3d':
        return `<img src="/images/fusion360_logo.png" onerror="this.onerror=null; this.src='https://lh3.googleusercontent.com/d/1LyfMmSpkXGAQvAAHeo5RgtkhVQ1rOvbl';" alt="Rhino 3D" class="${classNames} object-contain rounded" />`;
      case 'keyshot':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#0F172A" /><circle cx="12" cy="12" r="7" stroke="#10B981" stroke-width="2" /><circle cx="12" cy="12" r="3" fill="#10B981" /><path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="#10B981" stroke-width="1.5" stroke-linecap="round" /></svg>`;
      case 'photoshop':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#001E36" /><text x="5" y="17" fill="#31A8FF" font-size="12" font-weight="bold" font-family="sans-serif">Ps</text></svg>`;
      case 'illustrator':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#330000" /><text x="6" y="17" fill="#FF9A00" font-size="12" font-weight="bold" font-family="sans-serif">Ai</text></svg>`;
      case 'indesign':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#2D001E" /><text x="7" y="17" fill="#FF3366" font-size="12" font-weight="bold" font-family="sans-serif">Id</text></svg>`;
      case 'autocad':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#C62828" /><path d="M6 18L12 6L18 18M9 13H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
      case '3dsmax':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#1A237E" /><path d="M7 17V7L12 12L17 7V17" stroke="#80D8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
      case 'coreldraw':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#2E7D32" /><circle cx="12" cy="12" r="6" stroke="white" stroke-width="2" stroke-dasharray="2 2" /><path d="M12 6C9 6 7 8 7 12C7 16 9 18 12 18" stroke="white" stroke-width="2" stroke-linecap="round" /></svg>`;
      case 'prototyping':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#18181B" /><path d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z" stroke="#CCFF00" stroke-width="1.5" stroke-linejoin="round" /><path d="M12 12L20 7.5M12 12V21M12 12L4 7.5" stroke="#CCFF00" stroke-width="1.5" /></svg>`;
      case 'sketching':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#18181B" /><path d="M16 3L21 8L8 21H3V16L16 3Z" stroke="#CCFF00" stroke-width="1.5" stroke-linejoin="round" /><path d="M13 6L18 11" stroke="#CCFF00" stroke-width="1.5" /></svg>`;
      case 'cmf':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#18181B" /><circle cx="9" cy="9" r="4" fill="#CCFF00" opacity="0.9" /><circle cx="15" cy="9" r="4" fill="#38BDF8" opacity="0.9" /><circle cx="12" cy="15" r="4" fill="#F43F5E" opacity="0.9" /></svg>`;
      case 'manufacturing':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#18181B" /><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#CCFF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`;
      case 'genai':
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#18181B" /><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" fill="#CCFF00" /></svg>`;
      default:
        return `<svg class="${classNames}" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#F1F5F9" /><circle cx="12" cy="12" r="5" stroke="#10B981" stroke-width="2" /></svg>`;
    }
  }

  // Set Dynamic Accent CSS Variable
  function applyAccentColor() {
    document.documentElement.style.setProperty('--accent-color', siteSettings.accentColorHex || '#CCFF00');
  }

  // Helper for navigating
  function setTab(tab) {
    previousTab = currentTab;
    currentTab = tab;
    selectedProject = null;
    projectsFilter = 'all';
    mobileMenuOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderApp();
  }

  function goBack() {
    setTab(previousTab);
  }

  function setProjectsFilter(filter) {
    projectsFilter = filter;
    renderApp();
  }

  function selectProject(proj) {
    previousTab = currentTab;
    selectedProject = proj;
    currentTab = 'case-study';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderApp();
  }

  function openRedDotModal() {
    redDotModalOpen = true;
    renderApp();
  }

  function closeRedDotModal() {
    redDotModalOpen = false;
    renderApp();
  }

  function openIndiaDesignModal() {
    indiaDesignModalOpen = true;
    renderApp();
  }

  function closeIndiaDesignModal() {
    indiaDesignModalOpen = false;
    renderApp();
  }

  function openKloveModal() {
    kloveModalOpen = true;
    renderApp();
  }

  function closeKloveModal() {
    kloveModalOpen = false;
    renderApp();
  }

  function openCustomizer() {
    customizerOpen = true;
    renderApp();
  }

  function closeCustomizer() {
    customizerOpen = false;
    renderApp();
  }

  function resetSiteSettings() {
    siteSettings = JSON.parse(JSON.stringify(INITIAL_SITE_SETTINGS));
    try {
      localStorage.removeItem('portfolio_site_settings');
    } catch (e) {}
    applyAccentColor();
    renderApp();
  }

  function saveSiteSettings() {
    try {
      localStorage.setItem('portfolio_site_settings', JSON.stringify(siteSettings));
    } catch (e) {}
    applyAccentColor();
    renderApp();
  }

  // --- COMPONENT RENDERERS ---

  function renderHeader() {
    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'projects', label: 'Projects' },
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'resume', label: 'Resume' },
      { id: 'contact', label: 'Contact' },
    ];

    return `
      <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#F4F4F5] transition-colors">
        <div class="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          
          <!-- Brand Logo & Name -->
          <div class="flex items-center gap-3">
            <button onclick="window.app.setTab('home')" class="text-left group">
              <span class="font-display font-bold text-lg text-[#18181B] tracking-tight group-hover:text-neutral-600 transition-colors block">
                ${siteSettings.designerName}
              </span>
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest block -mt-1">
                Industrial Designer
              </span>
            </button>
          </div>

          <!-- Right Action Buttons & Desktop Navigation -->
          <div class="flex items-center gap-2 ml-auto">
            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-1 bg-[#FAFAFA] border border-[#F4F4F5] p-1">
              ${navItems
                .map(
                  (item) => `
                <button
                  onclick="window.app.setTab('${item.id}')"
                  class="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    currentTab === item.id && !selectedProject
                      ? 'bg-[#18181B] text-white shadow-xs'
                      : 'text-[#71717A] hover:text-[#18181B] hover:bg-white'
                  }"
                >
                  ${item.label}
                </button>
              `
                )
                .join('')}
            </nav>

            <!-- Mobile Menu Toggle -->
            <button
              onclick="window.app.toggleMobileMenu()"
              class="md:hidden p-2 text-[#18181B] hover:bg-[#F4F4F5]"
            >
              ${getIconSvg('menu', 'w-5 h-5')}
            </button>
          </div>
        </div>

        <!-- Mobile Nav Menu -->
        ${
          mobileMenuOpen
            ? `
          <div class="md:hidden bg-white border-b border-[#F4F4F5] px-4 py-3 space-y-2 animate-fade-in">
            ${navItems
              .map(
                (item) => `
              <button
                onclick="window.app.setTab('${item.id}')"
                class="w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wider ${
                  currentTab === item.id
                    ? 'bg-[#18181B] text-white'
                    : 'text-[#71717A] hover:bg-[#F4F4F5]'
                }"
              >
                ${item.label}
              </button>
            `
              )
              .join('')}
          </div>
        `
            : ''
        }
      </header>
    `;
  }

  function renderHero() {
    const flagshipProject = PROJECTS_DATA.find((p) => p.id === 'spunch') || PROJECTS_DATA[0];

    return `
      <section class="bg-white border-b border-[#F4F4F5] overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-12 pb-14 lg:pt-14 lg:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          <!-- Left Column -->
          <div class="lg:col-span-7 flex flex-col justify-between lg:border-r lg:border-[#F4F4F5] lg:pr-12 py-1">
            <div class="space-y-6 pb-8 lg:pb-0">
              <div class="flex flex-wrap items-center gap-3">
                <div class="inline-block px-3 py-1 bg-[#F4F4F5] text-[10px] font-bold uppercase tracking-widest text-[#52525B] border border-[#E4E4E7]">
                  Senior Industrial Designer
                </div>
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold leading-[0.95] tracking-tight uppercase font-display text-[#18181B]">
                Beautifully <br />
                <span class="text-[#18181B]">Functional.</span>
              </h1>

              <p class="text-sm sm:text-base text-[#52525B] leading-relaxed max-w-xl">
                ${siteSettings.taglineBio}
              </p>

              <div class="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onclick="document.getElementById('work').scrollIntoView({ behavior: 'smooth' })"
                  class="inline-flex items-center gap-2 px-6 py-3.5 bg-[#18181B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors cursor-pointer"
                >
                  <span>View Works</span>
                  ${getIconSvg('arrow-right', 'w-4 h-4')}
                </button>

                <button
                  onclick="window.app.setTab('resume')"
                  class="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#18181B] border border-[#E4E4E7] text-xs font-bold uppercase tracking-widest hover:bg-[#F4F4F5] transition-colors cursor-pointer"
                >
                  ${getIconSvg('file-text', 'w-4 h-4')}
                  <span>Resume & Experience</span>
                </button>
              </div>
            </div>

            <!-- Stats Section (Pinned to bottom to match the flagship card on right) -->
            <div class="grid grid-cols-3 gap-4 pt-8 border-t border-[#F4F4F5] mt-auto">
              <div>
                <div class="font-display font-bold text-2xl sm:text-3xl text-[#18181B]">5.5+</div>
                <div class="text-[11px] sm:text-xs uppercase font-bold text-[#71717A] tracking-wider mt-1">Years Exp</div>
              </div>
              <div>
                <div class="font-display font-bold text-2xl sm:text-3xl text-[#18181B]">IIT Bombay</div>
                <div class="text-[11px] sm:text-xs uppercase font-bold text-[#71717A] tracking-wider mt-1">M.Des Alumni</div>
              </div>
              <div>
                <div class="font-display font-bold text-2xl sm:text-3xl text-[#18181B]">10+</div>
                <div class="text-[11px] sm:text-xs uppercase font-bold text-[#71717A] tracking-wider mt-1">Products</div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="lg:col-span-5 flex flex-col justify-between bg-[#FAFAFA] p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A1A1AA]">
                Flagship Awarded Concept / 2025
              </span>
              <span class="text-[10px] font-bold uppercase tracking-widest text-[#18181B] bg-[#CCFF00] px-2 py-0.5">
                RED DOT WINNER
              </span>
            </div>

            <div
              onclick="window.app.selectProjectById('${flagshipProject.id}')"
              class="group cursor-pointer bg-white border border-[#F4F4F5] p-4 hover:border-[#CCFF00] transition-colors"
            >
              <div class="relative w-full aspect-[4/3] bg-[#F1F1F1] overflow-hidden flex items-center justify-center">
                <img
                  src="${flagshipProject.heroImage}"
                  alt="${flagshipProject.title}"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div class="mt-5 space-y-1">
                <h3 class="text-xl font-bold uppercase tracking-tight text-[#18181B] font-display">
                  ${flagshipProject.title}
                </h3>
                <p class="text-xs text-[#71717A]">
                  ${flagshipProject.shortDescription}
                </p>
                <div class="pt-3 flex items-center gap-2 text-[#18181B] group-hover:text-[#CCFF00] transition-colors">
                  <span class="text-[10px] font-bold uppercase tracking-widest">
                    Explore Case Study
                  </span>
                  <div class="w-8 h-[2px] bg-current"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  function renderProjectCard(project) {
    return `
      <div 
        onclick="window.app.selectProjectById('${project.id}')"
        class="group cursor-pointer bg-white border border-[#F4F4F5] hover:border-[#18181B] transition-all flex flex-col justify-between"
      >
        <div>
          <!-- Thumbnail Viewport -->
          <div class="relative w-full aspect-[16/10] bg-[#F4F4F5] overflow-hidden">
            <img 
              src="${project.heroImage}" 
              alt="${project.title}"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            <div class="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
              <span class="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-[#18181B] text-white">
                ${project.category}
              </span>
            </div>

            <div class="absolute bottom-3 right-3 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-xs text-[#18181B]">
              ${project.year}
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-6 space-y-3">
            <div class="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA]">
              ${project.tagline}
            </div>

            <h3 class="font-display font-bold text-xl sm:text-2xl text-[#18181B] uppercase tracking-tight group-hover:text-black transition-colors">
              ${project.title}
            </h3>

            <p class="text-xs text-[#52525B] leading-relaxed line-clamp-3 font-sans">
              ${project.shortDescription}
            </p>
          </div>
        </div>

        <!-- Footer Bar -->
        <div class="p-6 pt-0 flex items-center justify-between border-t border-[#F4F4F5] mt-4">
          <div class="flex flex-wrap gap-1">
            ${project.tools
              .slice(0, 3)
              .map(
                (tool) => `
              <span class="px-2 py-0.5 bg-[#F4F4F5] text-[#71717A] text-[9px] font-medium uppercase tracking-wider">
                ${tool}
              </span>
            `
              )
              .join('')}
          </div>

          <div class="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#18181B] group-hover:text-[#CCFF00] group-hover:translate-x-1 transition-all">
            <span>Explore</span>
            ${getIconSvg('arrow-right', 'w-3.5 h-3.5')}
          </div>
        </div>
      </div>
    `;
  }

  function renderProjectGrid() {
    // Sort projects by siteSettings.projectOrder
    const sortedProjects = [...PROJECTS_DATA].sort((a, b) => {
      const indexA = siteSettings.projectOrder.indexOf(a.id);
      const indexB = siteSettings.projectOrder.indexOf(b.id);
      return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
    });

    const displayProjects = sortedProjects.slice(0, 3);

    return `
      <section id="work" class="max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 space-y-12">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#F4F4F5] pb-6">
          <div>
            <div class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em]">
              Selected Portfolio / 2019 – 2025
            </div>
            <h2 class="font-display font-bold text-3xl sm:text-4xl text-[#18181B] uppercase tracking-tight mt-1">
              Industrial Hardware & CMF Works
            </h2>
          </div>
          <div class="text-xs text-[#71717A] max-w-xs font-sans">
            Deep-dive industrial design case studies covering CAD surface modeling, CMF strategies, and physical ergonomics.
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${displayProjects.map((p) => renderProjectCard(p)).join('')}
        </div>

        <div class="flex justify-center pt-4">
          <button
            onclick="window.app.setTab('projects')"
            class="inline-flex items-center gap-2 px-6 py-3.5 bg-[#18181B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors cursor-pointer"
          >
            <span>View All Projects</span>
            ${getIconSvg('arrow-right', 'w-4 h-4')}
          </button>
        </div>
      </section>
    `;
  }

  function renderCmfTeaser() {
    return `
      <section class="bg-[#18181B] text-white py-16 border-y border-black">
        <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-6">
            <div>
              <span class="text-[10px] font-bold text-[#CCFF00] uppercase tracking-[0.2em] font-display">
                Material Philosophy
              </span>
              <h2 class="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight mt-1">
                CMF & Tactile Architecture
              </h2>
            </div>
            <p class="text-xs text-neutral-400 max-w-md font-sans leading-relaxed">
              Color, Material, and Finish strategies engineered to create emotional resonance, tactile feedback, and durable longevity in mass hardware.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-neutral-900 border border-neutral-800 p-6 space-y-4">
              <div class="w-8 h-8 bg-[#CCFF00] text-[#18181B] font-bold font-display flex items-center justify-center text-xs">
                01
              </div>
              <h3 class="font-display font-bold text-lg uppercase">Architectural Anodizing</h3>
              <p class="text-xs text-neutral-400 leading-relaxed font-sans">
                6061-T6 aluminum surfaces with bead-blasted satin anodizing bath control, delivering fingerprint resistance and tactile cool-touch luxury.
              </p>
            </div>

            <div class="bg-neutral-900 border border-neutral-800 p-6 space-y-4">
              <div class="w-8 h-8 bg-[#CCFF00] text-[#18181B] font-bold font-display flex items-center justify-center text-xs">
                02
              </div>
              <h3 class="font-display font-bold text-lg uppercase">Tactile Control Points</h3>
              <p class="text-xs text-neutral-400 leading-relaxed font-sans">
                Knurled aluminum rotary knobs, spring-damped push buttons, and high-contrast light indicators engineered for fixed-function muscle memory.
              </p>
            </div>

            <div class="bg-neutral-900 border border-neutral-800 p-6 space-y-4">
              <div class="w-8 h-8 bg-[#CCFF00] text-[#18181B] font-bold font-display flex items-center justify-center text-xs">
                03
              </div>
              <h3 class="font-display font-bold text-lg uppercase">Textured Mold Grains</h3>
              <p class="text-xs text-neutral-400 leading-relaxed font-sans">
                Diamond-pyramid micro-grain mold textures for PC thermoforming and ABS injection shells, masking scratches under heavy usage.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderAwardsSection() {
    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16 space-y-8">
        <div class="border-b border-[#F4F4F5] pb-6">
          <div class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em]">
            Honors & Exhibitions
          </div>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-[#18181B] uppercase tracking-tight mt-1">
            Awards & Recognitions
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${AWARDS_DATA.map(
            (award) => `
            <div class="bg-white border border-[#F4F4F5] p-6 space-y-4 hover:border-[#18181B] transition-colors flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-[#CCFF00] text-[#18181B]">
                    ${award.badgeText}
                  </span>
                  <span class="text-xs font-bold text-[#A1A1AA]">${award.year}</span>
                </div>

                <h3 class="font-display font-bold text-xl text-[#18181B] uppercase tracking-tight">
                  ${award.title}
                </h3>

                <div class="text-xs font-bold text-[#71717A] uppercase tracking-wider">
                  ${award.organization}
                </div>

                <p class="text-xs text-[#52525B] leading-relaxed font-sans">
                  ${award.description}
                </p>
              </div>

              ${
                award.id === 'award-1'
                  ? `
                <button
                  onclick="window.app.openRedDotModal()"
                  class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#18181B] hover:text-[#CCFF00] pt-4 border-t border-[#F4F4F5] transition-colors"
                >
                  <span>View Red Dot Showcase</span>
                  ${getIconSvg('arrow-right', 'w-3.5 h-3.5')}
                </button>
              `
                  : award.id === 'award-2'
                  ? `
                <button
                  onclick="window.app.openIndiaDesignModal()"
                  class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#18181B] hover:text-[#CCFF00] pt-4 border-t border-[#F4F4F5] transition-colors"
                >
                  <span>View India Design Showcase</span>
                  ${getIconSvg('arrow-right', 'w-3.5 h-3.5')}
                </button>
              `
                  : award.id === 'award-3'
                  ? `
                <button
                  onclick="window.app.openKloveModal()"
                  class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#18181B] hover:text-[#CCFF00] pt-4 border-t border-[#F4F4F5] transition-colors"
                >
                  <span>View KLOVE Showcase</span>
                  ${getIconSvg('arrow-right', 'w-3.5 h-3.5')}
                </button>
              `
                  : ''
              }
            </div>
          `
          ).join('')}
        </div>
      </section>
    `;
  }

  function renderAboutSection() {
    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16 space-y-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Left Column Profile -->
          <div class="lg:col-span-5 space-y-6">
            <div class="relative aspect-square bg-[#F4F4F5] overflow-hidden border border-[#E4E4E7]">
              <img 
                src="/images/amit_kumar.jpg" 
                alt="Amit Kumar Industrial Designer" 
                class="w-full h-full object-cover object-top"
                onerror="this.onerror=null; this.src='https://lh3.googleusercontent.com/d/1SAeaiBfyG92d12ZYWAoTB547rkzd3WK5';"
              />
              <div class="absolute bottom-4 left-4 right-4 p-4 bg-white/80 backdrop-blur-md border border-[#F4F4F5] opacity-80">
                <div class="font-display font-bold text-base uppercase text-[#18181B]">${siteSettings.designerName}</div>
                <div class="text-xs text-[#71717A] uppercase tracking-wider font-semibold">M.Des Industrial Design (IIT Bombay)</div>
              </div>
            </div>
          </div>

          <!-- Right Column Bio & Philosophy -->
          <div class="lg:col-span-7 space-y-8">
            <div>
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                Biography & Approach
              </span>
              <h2 class="font-display font-bold text-3xl sm:text-5xl text-[#18181B] uppercase tracking-tight mt-1">
                Engineering Tangible Elegance
              </h2>
            </div>

            <div class="space-y-4 text-sm sm:text-base text-[#52525B] leading-relaxed font-sans">
              <p>
                As an Industrial Designer, I bring a thoughtful balance of creativity, technical know-how, and a strong appreciation for well-crafted products. With roots in accessory design and bespoke craftsmanship, my journey has been shaped by a genuine passion for creating designs that are both beautiful and practical.
              </p>
              <p>
                I enjoy working at the intersection of aesthetics and function, with a detail-oriented approach and a growing interest in how emerging technologies can enhance design. My experience allows me to blend traditional design principles with modern tools to develop solutions that are meaningful and user-focused.
              </p>
              <p>
                Whether it’s designing refined accessories or exploring broader industrial challenges, I strive to create designs that are honest, useful, and engaging.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderSkillsSection() {
    // Group skills by category
    const categories = ['3D & CAD', 'Rendering & Visuals', 'Adobe Suite', 'Design & Strategy'];

    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16 space-y-12">
        <div class="border-b border-[#F4F4F5] pb-6">
          <div class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em]">
            Technical Competencies
          </div>
          <h2 class="font-display font-bold text-3xl sm:text-4xl text-[#18181B] uppercase tracking-tight mt-1">
            Software & Core Expertise
          </h2>
        </div>

        <div class="space-y-10">
          ${categories
            .map((cat) => {
              const catSkills = SKILLS_DATA.filter((s) => s.category === cat);
              if (catSkills.length === 0) return '';

              return `
              <div class="space-y-4">
                <h3 class="font-display font-bold text-lg uppercase text-[#18181B] border-l-2 border-[#CCFF00] pl-3">
                  ${cat}
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  ${catSkills
                    .map(
                      (skill) => `
                    <div class="p-5 bg-white border border-[#F4F4F5] hover:border-[#18181B] transition-colors flex items-center gap-4">
                      <div class="p-2 border border-[#E4E4E7] bg-[#FAFAFA] shrink-0">
                        ${getSoftwareLogoSvg(skill.logoType, 'w-7 h-7')}
                      </div>
                      <div>
                        <span class="font-display font-bold text-sm text-[#18181B] uppercase tracking-wider block">${skill.name}</span>
                        <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest block">${skill.category}</span>
                      </div>
                    </div>
                  `
                    )
                    .join('')}
                </div>
              </div>
            `;
            })
            .join('')}
        </div>
      </section>
    `;
  }

  function renderExperienceTimeline() {
    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 animate-fade-in font-sans">
        <!-- BEGIN: MainHeader -->
        <header class="mb-12">
          <p class="text-xs font-bold tracking-widest text-[#666666] uppercase mb-1">Career Chronology</p>
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-[#121417] font-display">WORK EXPERIENCE</h1>
          <div class="section-divider"></div>
        </header>
        <!-- END: MainHeader -->

        <div class="space-y-12">
          ${WORK_EXPERIENCE_DATA.map((item, index) => {
            const isCurrent = item.period.toUpperCase().includes('PRESENT');
            const checkboxClass = isCurrent ? 'checkbox-icon checkbox-icon-filled' : 'checkbox-icon';
            return `
              <!-- BEGIN: ExperienceItem - ${item.company} -->
              <div class="flex gap-6 experience-block cursor-pointer" data-purpose="experience-entry">
                <div class="${checkboxClass} mt-2"></div>
                <div class="flex-grow">
                  <div class="flex flex-col md:flex-row md:justify-between items-start">
                    <div>
                      <h2 class="text-xl font-bold uppercase tracking-tight text-[#121417] font-display">${item.role}</h2>
                      <p class="text-sm font-bold text-[#666666] uppercase tracking-wide">${item.company} &bull; ${item.location}</p>
                    </div>
                    <span class="bg-gray-200 text-[#121417] text-[10px] font-bold px-2 py-1 mt-2 md:mt-0 tracking-widest uppercase">
                      ${item.period}
                    </span>
                  </div>
                  <div class="accordion-content">
                    <p class="text-sm text-[#121417] leading-relaxed mb-4 max-w-4xl font-sans">
                      ${item.description}
                    </p>
                    ${item.deliverables && item.deliverables.length > 0 ? `
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-xs font-medium">
                        ${item.deliverables.map(d => `
                          <div class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 bg-[#CCFF00] shrink-0"></span>
                            <span class="text-[#121417] font-sans">${d}</span>
                          </div>
                        `).join('')}
                      </div>
                    ` : ''}
                  </div>
                </div>
              </div>
              <!-- END: ExperienceItem - ${item.company} -->
            `;
          }).join('')}
        </div>
      </section>
    `;
  }

  function renderResumeView() {
    return `
      <section class="max-w-5xl mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 space-y-10 animate-fade-in">
        <!-- Top Action Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white border border-[#F4F4F5]">
          <div>
            <h1 class="font-display font-bold text-2xl text-[#18181B] uppercase">${siteSettings.designerName} — Curriculum Vitae</h1>
            <p class="text-xs text-[#71717A]">M.Des Industrial Design (IIT Bombay) &bull; Red Dot Award Winner 2025</p>
          </div>

          <button
            onclick="window.print()"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-[#18181B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors"
          >
            ${getIconSvg('file-text', 'w-4 h-4')}
            <span>Print / Save PDF</span>
          </button>
        </div>

        <!-- Resume Content Sheet -->
        <div class="bg-white border border-[#F4F4F5] p-8 sm:p-12 space-y-10 shadow-xs">
          <!-- Header info -->
          <div class="border-b border-[#F4F4F5] pb-8 space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 class="font-display font-bold text-3xl sm:text-4xl text-[#18181B] uppercase">${siteSettings.designerName}</h2>
                <div class="text-sm font-bold text-[#71717A] uppercase tracking-wider">${siteSettings.headlineTitle}</div>
              </div>

              <div class="text-xs text-[#52525B] space-y-1 font-medium sm:text-right">
                <div>Email: <a href="mailto:${siteSettings.email}" class="underline font-bold text-[#18181B]">${siteSettings.email}</a></div>
                <div>Phone: ${siteSettings.phone}</div>
                <div>Location: ${siteSettings.location}</div>
                <div>LinkedIn: <a href="${siteSettings.linkedin}" target="_blank" class="underline font-bold text-[#18181B]">View Profile</a></div>
              </div>
            </div>

            <p class="text-xs text-[#52525B] leading-relaxed max-w-3xl font-sans pt-2">
              ${siteSettings.taglineBio}
            </p>
          </div>

          <!-- Experience section -->
          <div class="space-y-6">
            <h3 class="font-display font-bold text-xl uppercase text-[#18181B] border-b-2 border-[#18181B] pb-2">
              Work Experience
            </h3>

            <div class="space-y-6">
              ${WORK_EXPERIENCE_DATA.map(
                (exp) => `
                <div class="space-y-2">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span class="font-display font-bold text-base text-[#18181B] uppercase">${exp.role}</span>
                      <span class="text-xs font-bold text-[#71717A] uppercase"> &bull; ${exp.company} (${exp.location})</span>
                    </div>
                    <span class="text-xs font-bold text-[#A1A1AA] uppercase">${exp.period}</span>
                  </div>
                  <p class="text-xs text-[#52525B] font-sans leading-relaxed">${exp.description}</p>
                </div>
              `
              ).join('')}
            </div>
          </div>

          <!-- Education section -->
          <div class="space-y-6">
            <h3 class="font-display font-bold text-xl uppercase text-[#18181B] border-b-2 border-[#18181B] pb-2">
              Education
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              ${EDUCATION_DATA.map(
                (edu) => `
                <div class="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-1">
                  <div class="font-display font-bold text-sm text-[#18181B]">${edu.degree}</div>
                  <div class="text-xs font-bold text-[#71717A]">${edu.institution}</div>
                  <div class="text-[10px] text-[#A1A1AA] font-bold uppercase">${edu.period} &bull; ${edu.location}</div>
                </div>
              `
              ).join('')}
            </div>
          </div>

          <!-- Awards section -->
          <div class="space-y-6">
            <h3 class="font-display font-bold text-xl uppercase text-[#18181B] border-b-2 border-[#18181B] pb-2">
              Key Awards & Honors
            </h3>

            <div class="space-y-3">
              ${AWARDS_DATA.map(
                (a) => `
                <div class="flex items-start justify-between text-xs font-sans">
                  <div>
                    <span class="font-bold text-[#18181B]">${a.title}</span> — <span class="text-[#71717A]">${a.organization}</span> (${a.project})
                  </div>
                  <span class="font-bold text-[#18181B] ml-4">${a.year}</span>
                </div>
              `
              ).join('')}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderContactView() {
    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-16 sm:pb-24 space-y-12">
        <div class="border-b border-[#F4F4F5] pb-6">
          <div class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em]">
            Get In Touch
          </div>
          <h2 class="font-display font-bold text-3xl sm:text-5xl text-[#18181B] uppercase tracking-tight mt-1">
            Let's Collaborate
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Left Info Cards -->
          <div class="lg:col-span-5 space-y-6">
            <p class="text-sm text-[#52525B] font-sans leading-relaxed">
              Open for senior industrial design roles, consultancy, bespoke timepiece CMF strategy, and hardware product development globally.
            </p>

            <div class="space-y-4">
              <a 
                href="mailto:${siteSettings.email}" 
                class="flex items-center gap-4 p-5 bg-white border border-[#F4F4F5] hover:border-[#18181B] transition-colors group"
              >
                <div class="p-3 bg-[#CCFF00] text-[#18181B]">
                  ${getIconSvg('mail', 'w-5 h-5')}
                </div>
                <div>
                  <div class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest">Email Address</div>
                  <div class="font-display font-bold text-sm text-[#18181B] group-hover:underline">${siteSettings.email}</div>
                </div>
              </a>

              <a 
                href="tel:${siteSettings.phone.replace(/\s+/g, '')}" 
                class="flex items-center gap-4 p-5 bg-white border border-[#F4F4F5] hover:border-[#18181B] transition-colors group"
              >
                <div class="p-3 bg-[#CCFF00] text-[#18181B]">
                  ${getIconSvg('phone', 'w-5 h-5')}
                </div>
                <div>
                  <div class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest">Phone Number</div>
                  <div class="font-display font-bold text-sm text-[#18181B] group-hover:underline">${siteSettings.phone}</div>
                </div>
              </a>

              <div class="flex items-center gap-4 p-5 bg-white border border-[#F4F4F5]">
                <div class="p-3 bg-[#CCFF00] text-[#18181B]">
                  ${getIconSvg('map-pin', 'w-5 h-5')}
                </div>
                <div>
                  <div class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest">Location</div>
                  <div class="font-display font-bold text-sm text-[#18181B]">${siteSettings.location}</div>
                </div>
              </div>

              <a 
                href="${siteSettings.linkedin}" 
                target="_blank" 
                class="flex items-center gap-4 p-5 bg-white border border-[#F4F4F5] hover:border-[#18181B] transition-colors group"
              >
                <div class="p-3 bg-[#CCFF00] text-[#18181B]">
                  ${getIconSvg('linkedin', 'w-5 h-5')}
                </div>
                <div>
                  <div class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest">LinkedIn Profile</div>
                  <div class="font-display font-bold text-sm text-[#18181B] group-hover:underline">Connect on LinkedIn</div>
                </div>
              </a>
            </div>
          </div>

          <!-- Right Contact Form -->
          <div class="lg:col-span-7 bg-white p-8 border border-[#F4F4F5] space-y-6">
            <h3 class="font-display font-bold text-xl uppercase text-[#18181B]">Send Direct Message</h3>

            <form onsubmit="window.app.handleContactSubmit(event)" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Sarah Jenkins" 
                    class="w-full px-4 py-3 border border-[#E4E4E7] text-xs font-medium focus:outline-none focus:border-[#18181B]"
                  />
                </div>
                <div class="space-y-1">
                  <label class="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="s.jenkins@company.com" 
                    class="w-full px-4 py-3 border border-[#E4E4E7] text-xs font-medium focus:outline-none focus:border-[#18181B]"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label class="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Project Subject / Inquiry</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Consumer Hardware CMF & Prototyping" 
                  class="w-full px-4 py-3 border border-[#E4E4E7] text-xs font-medium focus:outline-none focus:border-[#18181B]"
                />
              </div>

              <div class="space-y-1">
                <label class="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Message Details</label>
                <textarea 
                  rows="5" 
                  required 
                  placeholder="Describe your design project, timeline, and scope requirements..."
                  class="w-full px-4 py-3 border border-[#E4E4E7] text-xs font-medium focus:outline-none focus:border-[#18181B]"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full py-4 bg-[#18181B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors cursor-pointer"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    `;
  }

  function renderCaseStudyView() {
    if (!selectedProject) return '';
    const proj = selectedProject;

    // Prev / Next Project
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === proj.id);
    const prevProj = PROJECTS_DATA[currentIndex > 0 ? currentIndex - 1 : PROJECTS_DATA.length - 1];
    const nextProj = PROJECTS_DATA[currentIndex < PROJECTS_DATA.length - 1 ? currentIndex + 1 : 0];

    return `
      <article class="min-h-screen bg-white text-[#18181B] pb-24 animate-fade-in">
        <!-- Floating Back Bar -->
        <div class="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#F4F4F5] px-4 sm:px-8 py-3 flex items-center justify-between">
          <button
            onclick="window.app.goBack()"
            class="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00] hover:bg-black transition-colors cursor-pointer"
          >
            ${getIconSvg('arrow-left', 'w-3.5 h-3.5 text-[#CCFF00]')}
            <span>Back to All Works</span>
          </button>

          <div class="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#71717A]">
            <span>${proj.category}</span>
            <span>/</span>
            <span class="text-[#18181B]">${proj.title}</span>
          </div>

          <button
            onclick="window.app.copyCaseStudyLink()"
            class="p-2 bg-[#FAFAFA] border border-[#F4F4F5] hover:border-[#18181B] text-[#18181B] transition-colors"
            title="Share case study link"
          >
            ${copiedLink ? getIconSvg('check', 'w-4 h-4 text-[#18181B]') : getIconSvg('share-2', 'w-4 h-4')}
          </button>
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
          <!-- Hero Header -->
          <header class="space-y-6">
            <div class="space-y-4">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00]">
                  ${proj.category}
                </span>
              </div>

              <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div class="space-y-3 flex-1">
                  <h1 class="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#18181B] tracking-tight leading-[1.1] uppercase">
                    ${proj.title}
                  </h1>
                  <p class="text-base sm:text-lg text-[#52525B] font-sans leading-relaxed max-w-3xl">
                    ${proj.shortDescription}
                  </p>
                </div>
              </div>
            </div>

            <!-- Metadata Cards -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5 bg-white border border-[#F4F4F5]">
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Institution / Client</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">${proj.university || proj.client}</span>
                ${
                  (proj.faculty_advisor || proj.project_guide)
                    ? `<span class="text-[10px] text-[#71717A] font-medium tracking-normal block normal-case mt-0.5">(Faculty Advisor: ${proj.faculty_advisor || proj.project_guide})</span>`
                    : ''
                }
              </div>
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Design Team</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">${proj.designers || proj.role}</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Category</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">${proj.category}</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Year</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">${proj.year}</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Tools</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">${proj.tools.slice(0, 3).join(', ')}</span>
              </div>
            </div>

            <!-- Hero Image -->
            <div class="relative aspect-[16/9] border border-[#E4E4E7] bg-[#18181B]">
              <img
                src="${proj.heroImage}"
                alt="${proj.title}"
                class="w-full h-full object-cover object-center"
              />
              <button
                onclick="window.app.openImageModal('${proj.heroImage}')"
                class="absolute bottom-4 right-4 p-2.5 bg-[#18181B] text-[#CCFF00] border border-[#CCFF00]/40 hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors"
                title="Expand full screen"
              >
                ${getIconSvg('maximize-2', 'w-4 h-4')}
              </button>
            </div>
          </header>

          <!-- 21 Concept Storyboard & Process Gallery Section (Only for Feature Phone Concept) -->
          ${proj.id === 'tejas-feature-phone' ? `
          <section class="!mt-0 w-full p-0 m-0 border-0 flex flex-col gap-0 space-y-0 overflow-hidden">
            ${[
              'https://lh3.googleusercontent.com/d/1YIxl5HsDk2DB_HMl89vaDswsVfxz9rXX',
              '/src/assets/images/regenerated_image_1788534867728.webp',
              '/src/assets/images/regenerated_image_1788534869864.webp',
              '/src/assets/images/regenerated_image_1788534871598.webp',
              '/src/assets/images/regenerated_image_1788534872831.webp',
              '/src/assets/images/regenerated_image_1788534875456.webp',
              '/src/assets/images/regenerated_image_1788534877239.webp',
              '/src/assets/images/regenerated_image_1788534879285.webp',
              '/src/assets/images/regenerated_image_1788534880992.webp',
              '/src/assets/images/regenerated_image_1788534882356.webp',
              '/src/assets/images/regenerated_image_1788534884097.webp',
              '/src/assets/images/regenerated_image_1788534885697.webp',
              '/src/assets/images/regenerated_image_1788534887066.webp',
              '/src/assets/images/regenerated_image_1788534889012.webp',
              '/src/assets/images/regenerated_image_1788534890349.webp',
              '/src/assets/images/regenerated_image_1788534891985.webp',
              '/src/assets/images/regenerated_image_1788534894617.webp',
              '/src/assets/images/regenerated_image_1788534896149.webp',
              '/src/assets/images/regenerated_image_1788534898228.webp',
              '/src/assets/images/regenerated_image_1788534903963.webp',
              '/images/storyboard_frame_21.jpg'
            ].map((imgUrl, index) => {
              return `
                <div class="w-full overflow-hidden block m-0 p-0" style="aspect-ratio: 1280 / 537;">
                  <img 
                    src="${imgUrl}" 
                    alt="Process Frame ${index + 1}" 
                    class="w-full h-full object-cover object-center block"
                    referrerpolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              `;
            }).join('')}
          </section>
          ` : ''}

          <!-- Demographics & Market Landscape -->
          ${
            proj.demographics
              ? `
            <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                02. Demographics, Market & Connectivity Research
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Indian Market & Rural Demographic Context
              </h2>

              <!-- Population & Connectivity Stats Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                <div class="p-4 bg-[#FAFAFA] border border-[#F4F4F5]">
                  <div class="text-[10px] font-bold text-[#71717A] uppercase tracking-wider">Total Population</div>
                  <div class="font-display font-bold text-base sm:text-lg text-[#18181B] mt-1">${proj.demographics.totalPopulation}</div>
                </div>
                <div class="p-4 bg-[#FAFAFA] border border-[#F4F4F5]">
                  <div class="text-[10px] font-bold text-[#71717A] uppercase tracking-wider">Mobile Subscribers</div>
                  <div class="font-display font-bold text-base sm:text-lg text-[#18181B] mt-1">${proj.demographics.mobileSubscribers}</div>
                </div>
                <div class="p-4 bg-[#FAFAFA] border border-[#F4F4F5]">
                  <div class="text-[10px] font-bold text-[#71717A] uppercase tracking-wider">Urban vs Rural</div>
                  <div class="font-display font-bold text-xs text-[#18181B] mt-1">${proj.demographics.urbanVsRuralSubscribers}</div>
                </div>
                <div class="p-4 bg-[#FAFAFA] border border-[#F4F4F5]">
                  <div class="text-[10px] font-bold text-[#71717A] uppercase tracking-wider">Without Phone Access</div>
                  <div class="font-display font-bold text-base text-[#18181B] mt-1">${proj.demographics.unconnectedPopulation}</div>
                </div>
                <div class="p-4 bg-[#FAFAFA] border border-[#F4F4F5]">
                  <div class="text-[10px] font-bold text-[#71717A] uppercase tracking-wider">Market Projection</div>
                  <div class="font-display font-bold text-base text-[#18181B] mt-1">${proj.demographics.marketSize}</div>
                </div>
              </div>

              <!-- Market Share Breakdown -->
              ${
                proj.demographics.marketShare
                  ? `
                <div class="p-5 bg-[#FAFAFA] border border-[#F4F4F5] space-y-4">
                  <h3 class="font-display font-bold text-sm uppercase text-[#18181B]">Feature Phone Market Share Breakdown (India)</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    ${proj.demographics.marketShare
                      .map(
                        (m) => `
                      <div class="p-3.5 bg-white border border-[#E4E4E7] space-y-3 flex flex-col justify-between">
                        <div class="space-y-2">
                          <!-- Brand logo if any (except others) -->
                          ${
                            !m.brand.toLowerCase().includes('others')
                              ? `
                            <div class="h-12 w-full flex items-center justify-center rounded-sm bg-[#FAFAFA] border border-[#F4F4F5] p-2 select-none overflow-hidden">
                              ${
                                m.brand.includes('Reliance Jio')
                                  ? `
                                  <svg class="h-7 w-auto" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="100" height="32" rx="4" fill="#0F3E99"/>
                                    <circle cx="20" cy="16" r="10" fill="#FFFFFF"/>
                                    <text x="20" y="20" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="10" fill="#0F3E99" text-anchor="middle">jio</text>
                                    <text x="38" y="21" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="13" fill="#FFFFFF" letter-spacing="0.5px">Jio</text>
                                  </svg>
                                  `
                                  : m.brand.includes('Itel')
                                  ? `
                                  <svg class="h-6 w-auto" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <text x="50" y="24" font-family="'Impact', 'Arial Black', sans-serif" font-weight="900" font-style="italic" font-size="24" fill="#E11D48" text-anchor="middle" letter-spacing="-1px">itel</text>
                                  </svg>
                                  `
                                  : m.brand.includes('Lava')
                                  ? `
                                  <svg class="h-5 w-auto" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <text x="50" y="23" font-family="'Montserrat', 'Helvetica', sans-serif" font-weight="900" font-size="20" fill="#FF0000" text-anchor="middle" letter-spacing="2px">LAVA</text>
                                  </svg>
                                  `
                                  : ''
                              }
                            </div>
                            `
                              : `
                            <div class="h-12 w-full flex items-center justify-center rounded-sm bg-[#FAFAFA] border border-[#F4F4F5] p-2 select-none font-display text-[10px] uppercase font-bold text-[#A1A1AA] tracking-wider">
                              Other Players
                            </div>
                            `
                          }
                          <div class="flex items-center justify-between text-xs font-bold text-[#18181B] pt-1">
                            <span class="truncate pr-1">${m.brand}</span>
                            <span class="px-2 py-0.5 bg-[#CCFF00] text-[#18181B] font-mono text-[11px] shrink-0">${m.share}</span>
                          </div>
                        </div>
                        <p class="text-[11px] text-[#71717A] leading-tight font-sans pt-2 border-t border-[#F4F4F5]">${m.note}</p>
                      </div>
                    `
                      )
                      .join('')}
                  </div>
                </div>
              `
                  : ''
              }

              <!-- Target Consumer Groups -->
              ${
                proj.demographics.targetGroups
                  ? `
                <div class="space-y-4 pt-2">
                  <h3 class="font-display font-bold text-lg uppercase text-[#18181B]">Target Consumer Groups & Income Tiers</h3>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    ${proj.demographics.targetGroups
                      .map(
                        (group) => `
                      <div class="p-5 bg-white border border-[#E4E4E7] space-y-4">
                        <div class="space-y-2">
                          <div class="inline-block px-2.5 py-1 bg-[#18181B] text-[#CCFF00] text-[10px] font-bold uppercase tracking-wider">
                            ${group.group}
                          </div>
                          <div class="text-xs font-bold text-[#18181B]">Monthly Income: ${group.monthlyIncome}</div>
                          <p class="text-xs text-[#52525B] leading-relaxed font-sans">${group.description}</p>
                        </div>

                        ${
                          group.landholdingBreakdown
                            ? `
                          <div class="space-y-2 pt-3 border-t border-[#F4F4F5]">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA] font-display block">Landholding & Income Tiers</span>
                            <div class="space-y-2">
                              ${group.landholdingBreakdown
                                .map(
                                  (l) => `
                                <div class="p-3 ${l.isTargetGroup ? 'bg-[#CCFF00]/15 border-2 border-[#18181B]' : 'bg-[#FAFAFA] border border-[#F4F4F5]'} flex flex-wrap items-center justify-between text-xs gap-2 transition-all">
                                  <div class="space-y-0.5 max-w-[70%]">
                                    <div class="flex items-center gap-2 flex-wrap">
                                      <span class="font-bold text-[#18181B]">${l.type}</span>
                                      ${l.isTargetGroup ? `<span class="px-2 py-0.5 bg-[#E11D48] text-white font-bold font-display text-[9px] uppercase tracking-wider">Target Group</span>` : ''}
                                    </div>
                                    <span class="text-[10px] text-[#52525B] block font-sans">${l.land} &bull; ${l.percentage}</span>
                                  </div>
                                  <span class="px-2.5 py-1 ${l.isTargetGroup ? 'bg-[#18181B] text-[#CCFF00]' : 'bg-white border border-[#E4E4E7] text-[#18181B]'} font-bold font-mono text-[11px] shrink-0">${l.income}</span>
                                </div>
                              `
                                )
                                .join('')}
                            </div>
                          </div>
                        `
                            : ''
                        }

                        ${
                          group.laborerBreakdown
                            ? `
                          <div class="space-y-2 pt-3 border-t border-[#F4F4F5]">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA] font-display block">Labor Income Categories</span>
                            <div class="space-y-2">
                              ${group.laborerBreakdown
                                .map(
                                  (l) => `
                                <div class="p-3 ${l.isTargetGroup ? 'bg-[#CCFF00]/15 border-2 border-[#18181B]' : 'bg-[#FAFAFA] border border-[#F4F4F5]'} flex flex-wrap items-center justify-between text-xs gap-2 transition-all">
                                  <div class="space-y-0.5 max-w-[70%]">
                                    <div class="flex items-center gap-2 flex-wrap">
                                      <span class="font-bold text-[#18181B]">${l.type}</span>
                                      ${l.isTargetGroup ? `<span class="px-2 py-0.5 bg-[#E11D48] text-white font-bold font-display text-[9px] uppercase tracking-wider">Target Group</span>` : ''}
                                    </div>
                                    <span class="text-[10px] text-[#52525B] block font-sans">${l.occupation || l.land || ''} ${l.characteristic ? '&bull; ' + l.characteristic : ''} ${l.percentage ? '&bull; ' + l.percentage : ''}</span>
                                  </div>
                                  <span class="px-2.5 py-1 ${l.isTargetGroup ? 'bg-[#18181B] text-[#CCFF00]' : 'bg-white border border-[#E4E4E7] text-[#18181B]'} font-bold font-mono text-[11px] shrink-0">${l.income}</span>
                                </div>
                              `
                                )
                                .join('')}
                            </div>
                          </div>
                        `
                            : ''
                        }
                      </div>
                    `
                      )
                      .join('')}
                  </div>
                </div>
              `
                  : ''
              }
            </section>
          `
              : ''
          }

          <!-- User Persona Section -->
          ${
            proj.userPersona
              ? `
            <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                03. Primary User Persona & Field Context
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                User Archetype: ${proj.userPersona.name}
              </h2>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Profile Image & Key Details Below it -->
                <div class="md:col-span-1 bg-[#18181B] text-white border border-[#27272A] overflow-hidden flex flex-col rounded-sm">
                  <!-- The Frame with Dummy Farmer Image -->
                  <div class="aspect-[4/5] w-full bg-[#27272A] relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=600&q=80" 
                      alt="Rajesh Kumar - Farmer Portrait" 
                      class="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                      referrerpolicy="no-referrer"
                    />
                    <div class="absolute top-3 left-3 px-2 py-0.5 bg-[#CCFF00] text-[#18181B] font-bold font-display text-[9px] uppercase tracking-wider">
                      Active Field Worker
                    </div>
                  </div>
                  <!-- Name, age, occupation, location details below the image -->
                  <div class="p-5 space-y-4 bg-[#18181B] border-t border-[#27272A]">
                    <div class="space-y-1">
                      <span class="text-[9px] font-mono text-[#A1A1AA] uppercase tracking-widest block">Full Name & Age</span>
                      <h3 class="font-display font-bold text-xl uppercase text-white tracking-tight">
                        ${proj.userPersona.name}, ${proj.userPersona.age} Yrs
                      </h3>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-3 text-xs pt-3 border-t border-[#27272A]">
                      <div class="space-y-0.5">
                        <span class="text-[9px] font-mono text-[#71717A] uppercase tracking-wider block font-semibold">Occupation</span>
                        <span class="font-medium text-white">${proj.userPersona.occupation}</span>
                      </div>
                      <div class="space-y-0.5">
                        <span class="text-[9px] font-mono text-[#71717A] uppercase tracking-wider block font-semibold">Location</span>
                        <span class="font-medium text-[#CCFF00]">${proj.userPersona.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Biography & Additional Context -->
                <div class="md:col-span-2 p-6 bg-[#FAFAFA] border border-[#E4E4E7] flex flex-col justify-between space-y-6 rounded-sm">
                  <div class="space-y-4">
                    <div class="inline-block px-2.5 py-1 bg-[#18181B] text-[#CCFF00] text-[10px] font-bold uppercase tracking-widest font-display">
                      Persona Demographics & Context
                    </div>
                    
                    <div class="space-y-2">
                      <h3 class="font-display font-bold text-lg uppercase text-[#18181B] tracking-tight">
                        Daily Work Environment & Household Profile
                      </h3>
                      <p class="text-xs text-[#52525B] font-sans leading-relaxed">
                        Rajesh represents the core rural consumer base: hard-working, family-oriented, and highly practical. Operating in tough climatic conditions with limited access to continuous electricity or digital literacy, his technology needs are defined purely by functional utility, extreme battery durability, and offline entertainment.
                      </p>
                    </div>

                    <!-- Details Table-like Layout -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E4E4E7] text-xs">
                      <div class="space-y-1">
                        <span class="text-[10px] font-bold text-[#71717A] uppercase tracking-wider block font-display">Family & Household</span>
                        <p class="text-sm text-[#18181B] font-medium font-sans">${proj.userPersona.family}</p>
                      </div>
                      <div class="space-y-1">
                        <span class="text-[10px] font-bold text-[#71717A] uppercase tracking-wider block font-display">Educational Status</span>
                        <p class="text-sm text-[#18181B] font-medium font-sans">${proj.userPersona.education}</p>
                      </div>
                      <div class="space-y-1 sm:col-span-2 pt-3 border-t border-[#F4F4F5]">
                        <span class="text-[10px] font-bold text-[#71717A] uppercase tracking-wider block font-display">Household Income Range</span>
                        <p class="text-sm text-[#E11D48] font-bold font-mono">${proj.userPersona.income}</p>
                      </div>
                    </div>
                  </div>

                  <div class="p-4 bg-[#18181B] text-white flex items-center gap-3 rounded-sm">
                    <div class="w-1 h-8 bg-[#CCFF00] shrink-0"></div>
                    <p class="text-xs italic font-serif text-[#E4E4E7]">
                      "My phone is my connection to the market, my companion during solitary field work, and my only source of news when the power goes out."
                    </p>
                  </div>
                </div>
              </div>

              <!-- Persona Attributes Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="p-5 bg-[#FAFAFA] border border-[#F4F4F5] space-y-3">
                  <h4 class="font-display font-bold text-xs uppercase text-[#18181B] flex items-center gap-1.5">
                    <span class="w-2 h-2 bg-[#CCFF00] inline-block"></span>
                    Goals & Aspirations
                  </h4>
                  <ul class="space-y-2 text-xs text-[#52525B] font-sans">
                    ${proj.userPersona.goals.map((g) => `<li class="flex items-start gap-2"><span>&bull;</span><span>${g}</span></li>`).join('')}
                  </ul>
                </div>

                <div class="p-5 bg-[#FAFAFA] border border-[#F4F4F5] space-y-3">
                  <h4 class="font-display font-bold text-xs uppercase text-[#18181B] flex items-center gap-1.5">
                    <span class="w-2 h-2 bg-[#18181B] inline-block"></span>
                    Environmental Challenges
                  </h4>
                  <ul class="space-y-2 text-xs text-[#52525B] font-sans">
                    ${proj.userPersona.challenges.map((c) => `<li class="flex items-start gap-2"><span>&bull;</span><span>${c}</span></li>`).join('')}
                  </ul>
                </div>

                <div class="p-5 bg-[#FAFAFA] border border-[#F4F4F5] space-y-3">
                  <h4 class="font-display font-bold text-xs uppercase text-[#18181B] flex items-center gap-1.5">
                    <span class="w-2 h-2 bg-[#CCFF00] inline-block"></span>
                    Values & Beliefs
                  </h4>
                  <ul class="space-y-2 text-xs text-[#52525B] font-sans">
                    ${proj.userPersona.values.map((v) => `<li class="flex items-start gap-2"><span>&bull;</span><span>${v}</span></li>`).join('')}
                  </ul>
                </div>

                <div class="p-5 bg-[#FAFAFA] border border-[#F4F4F5] space-y-3">
                  <h4 class="font-display font-bold text-xs uppercase text-[#18181B] flex items-center gap-1.5">
                    <span class="w-2 h-2 bg-red-500 inline-block"></span>
                    Pain Points
                  </h4>
                  <ul class="space-y-2 text-xs text-[#52525B] font-sans">
                    ${proj.userPersona.painPoints.map((p) => `<li class="flex items-start gap-2"><span>&bull;</span><span>${p}</span></li>`).join('')}
                  </ul>
                </div>
              </div>
            </section>
          `
              : ''
          }

          <!-- Product Requirements & Feature Solutions -->
          ${
            proj.featureSolutions
              ? `
            <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                04. Product Requirements & Feature Solutions
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Need-Driven Hardware Engineering
              </h2>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${proj.featureSolutions
                  .map(
                    (item, idx) => `
                  <div class="p-4 bg-white border border-[#E4E4E7] flex flex-col justify-between hover:border-[#18181B] transition-colors rounded-sm">
                    <div class="space-y-2">
                      <div class="flex items-center gap-2">
                        <span class="text-[11px] font-mono font-bold text-[#71717A]">0${idx + 1}</span>
                        <h3 class="font-display font-bold text-xs uppercase tracking-wider text-[#18181B]">${item.title}</h3>
                      </div>
                      <p class="text-xs text-[#52525B] leading-relaxed font-sans">
                        <span class="font-bold text-[#18181B]">User Need:</span> ${item.why}
                      </p>
                    </div>

                    <div class="mt-3 pt-2.5 border-t border-[#F4F4F5]">
                      <p class="text-xs text-[#18181B] font-medium leading-relaxed font-sans">
                        <span class="inline-block px-1.5 py-0.5 bg-[#CCFF00] text-[9px] font-bold uppercase font-display tracking-wider mr-1.5 rounded-sm">Solution</span>
                        ${item.solution}
                      </p>
                    </div>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </section>
          `
              : ''
          }

          <!-- Specifications & Benchmarking -->
          ${
            proj.specifications
              ? `
            <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                05. Technical Specifications & Benchmarking
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Form Factor & Competitor Benchmark
              </h2>

              <!-- Tech Specs Grid -->
              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                ${Object.entries(proj.specifications)
                  .map(
                    ([key, value]) => `
                  <div class="p-4 bg-[#FAFAFA] border border-[#F4F4F5]">
                    <div class="text-[10px] font-bold text-[#71717A] uppercase tracking-wider capitalize font-display">${key.replace(/([A-Z])/g, ' $1')}</div>
                    <div class="font-display font-bold text-xs text-[#18181B] mt-1">${value}</div>
                  </div>
                `
                  )
                  .join('')}
              </div>

              ${
                proj.competitorMatrix
                  ? `
                <div class="pt-4 space-y-3">
                  <h3 class="font-display font-bold text-lg uppercase text-[#18181B]">Competitor Matrix Benchmark</h3>
                  <div class="overflow-x-auto border border-[#F4F4F5]">
                    <table class="w-full text-left text-xs font-sans whitespace-nowrap">
                      <thead class="bg-[#18181B] text-white font-display uppercase">
                        <tr>
                          <th class="p-3">Brand</th>
                          <th class="p-3">Model</th>
                          <th class="p-3">Price</th>
                          <th class="p-3">RAM</th>
                          <th class="p-3">Display</th>
                          <th class="p-3">Camera / Flash</th>
                          <th class="p-3">Battery</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-[#F4F4F5]">
                        ${proj.competitorMatrix
                          .map(
                            (m) => `
                          <tr class="${m.brand.includes('TEJAS') ? 'bg-[#CCFF00]/20 font-bold' : ''}">
                            <td class="p-3 font-bold">${m.brand}</td>
                            <td class="p-3">${m.model}</td>
                            <td class="p-3 font-bold text-[#18181B]">${m.price}</td>
                            <td class="p-3">${m.ram}</td>
                            <td class="p-3">${m.display}</td>
                            <td class="p-3">${m.camera}</td>
                            <td class="p-3 font-medium">${m.battery}</td>
                          </tr>
                        `
                          )
                          .join('')}
                      </tbody>
                    </table>
                  </div>
                </div>
              `
                  : ''
              }
            </section>
          `
              : ''
          }

          <!-- Design Evolution & Prototyping -->
          ${
            proj.sketchDevelopment || proj.cadDevelopment || proj.prototyping
              ? `
            <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                06. Design Evolution & Prototyping
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Sketches, 3D CAD & Mockups
              </h2>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${[...(proj.sketchDevelopment || []), ...(proj.cadDevelopment || []), ...(proj.prototyping || [])]
                  .map(
                    (item) => `
                  <div class="bg-[#FAFAFA] border border-[#E4E4E7] overflow-hidden flex flex-col justify-between">
                    <div class="aspect-[16/10] bg-[#18181B] relative">
                      <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" />
                      <button onclick="window.app.openImageModal('${item.image}')" class="absolute bottom-2 right-2 p-1.5 bg-[#18181B] text-[#CCFF00]">
                        ${getIconSvg('maximize-2', 'w-3.5 h-3.5')}
                      </button>
                    </div>
                    <div class="p-4 space-y-2">
                      <h3 class="font-display font-bold text-xs uppercase text-[#18181B]">${item.title}</h3>
                      <p class="text-xs text-[#52525B] leading-relaxed font-sans">${item.text}</p>
                    </div>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </section>
          `
              : ''
          }

          <!-- TEJAS Special Presentation Sections (From PDF) -->
          ${
            proj.tejasDetails
              ? `
            <!-- Section: Dimensional Concepts Benchmark -->
            <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                07. Final Concepts & Form Factor Specs
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Dimensional Concepts & Form Benchmark
              </h2>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${proj.tejasDetails.concepts
                  .map(
                    (c) => `
                  <div class="p-5 bg-[#FAFAFA] border border-[#E4E4E7] space-y-4 relative flex flex-col justify-between">
                    <div class="space-y-3">
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#18181B] text-[#CCFF00] font-display">
                          ${c.badge}
                        </span>
                      </div>
                      <h3 class="font-display font-bold text-lg uppercase text-[#18181B]">${c.name}</h3>
                      <p class="text-xs text-[#71717A] font-sans">${c.subtitle}</p>

                      <div class="aspect-[4/3] bg-white border border-[#E4E4E7] relative overflow-hidden">
                        <img src="${c.image}" alt="${c.name}" class="w-full h-full object-cover" />
                      </div>
                    </div>

                    <!-- Dimensional Specs Box -->
                    <div class="p-3 bg-white border border-[#E4E4E7] space-y-1 mt-2 font-mono text-xs">
                      <div class="flex justify-between border-b border-[#F4F4F5] pb-1">
                        <span class="text-[#71717A]">Width:</span>
                        <span class="font-bold text-[#18181B]">${c.width}</span>
                      </div>
                      <div class="flex justify-between border-b border-[#F4F4F5] pb-1">
                        <span class="text-[#71717A]">Height:</span>
                        <span class="font-bold text-[#18181B]">${c.height}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-[#71717A]">Depth:</span>
                        <span class="font-bold text-[#18181B]">${c.depth}</span>
                      </div>
                    </div>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </section>

            <!-- Section: Hardware Callout Diagram (1-9) -->
            <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                08. Hardware Layout & Callout Architecture
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Controls & Interface Callouts (1–9)
              </h2>

              <div class="p-5 bg-[#18181B] text-white space-y-4">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#3F3F46] pb-3">
                  <span class="text-xs font-bold font-display uppercase tracking-wider text-[#CCFF00]">Tejas Hardware Diagram Map</span>
                  <span class="text-[10px] font-mono text-[#A1A1AA]">Physical Buttons & Ports Reference</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                  ${proj.tejasDetails.calloutDiagram
                    .map(
                      (item) => `
                    <div class="p-3 bg-[#27272A] border border-[#3F3F46] flex items-start gap-3">
                      <span class="w-6 h-6 bg-[#CCFF00] text-[#18181B] font-bold font-display flex items-center justify-center text-xs shrink-0">
                        ${item.num}
                      </span>
                      <div class="space-y-0.5">
                        <div class="font-display font-bold text-xs uppercase text-white">${item.label}</div>
                        <div class="text-[11px] text-[#A1A1AA] font-sans leading-tight">${item.desc}</div>
                      </div>
                    </div>
                  `
                    )
                    .join('')}
                </div>
              </div>
            </section>

            <!-- Section: Deep Dive Hardware Innovations -->
            <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                09. Feature Ergonomics Deep Dive
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Music, Slant Acoustics, Gaming & Recessed Cavity
              </h2>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${proj.tejasDetails.keyInnovations
                  .map(
                    (item) => `
                  <div class="p-5 bg-white border border-[#E4E4E7] space-y-4 flex flex-col justify-between">
                    <div class="space-y-3">
                      <div class="aspect-[16/9] bg-[#18181B] relative overflow-hidden">
                        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" />
                        <span class="absolute top-2 left-2 px-2 py-0.5 bg-[#18181B] text-[#CCFF00] font-bold font-display text-[10px] uppercase">
                          ${item.title}
                        </span>
                      </div>
                      <h3 class="font-display font-bold text-base uppercase text-[#18181B]">${item.subtitle}</h3>
                      <p class="text-xs text-[#52525B] leading-relaxed font-sans">${item.description}</p>
                    </div>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </section>

            <!-- Section: Colorways Pantone Palette -->
            <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                10. CMF Colorways & Regional Aesthetics
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Tejas Palette & Pantone Swatches
              </h2>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                ${proj.tejasDetails.colorways
                  .map(
                    (cw) => `
                  <div class="p-5 bg-[#FAFAFA] border border-[#E4E4E7] space-y-3">
                    <div class="w-full h-20 border border-[#E4E4E7]" style="background-color: ${cw.hex}"></div>
                    <div>
                      <h3 class="font-display font-bold text-sm uppercase text-[#18181B]">${cw.name}</h3>
                      <p class="text-xs font-mono text-[#71717A] mt-0.5">${cw.pantone}</p>
                      <p class="text-[11px] font-mono text-[#A1A1AA]">${cw.hex}</p>
                    </div>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </section>

            <!-- Section: Thesis Credits & PDF Presentation Summary -->
            <div class="p-6 bg-[#18181B] text-white border border-[#18181B] flex flex-col md:flex-row items-center justify-between gap-4">
              <div class="space-y-1">
                <span class="text-[10px] font-bold uppercase tracking-widest text-[#CCFF00] font-display">Thesis Documentation Complete</span>
                <h3 class="font-display font-bold text-lg uppercase text-white">LAVA TEJAS — Industrial Design Thesis</h3>
                <p class="text-xs text-[#A1A1AA] font-sans">Compiled by Amit Kumar &bull; Lead Industrial Designer &bull; +91-9805621130 &bull; 2753amit@gmail.com</p>
              </div>
              <button onclick="window.app.openImageModal('${proj.heroImage}')" class="px-4 py-2 bg-[#CCFF00] text-[#18181B] font-bold font-display text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0">
                View High-Res Presentation
              </button>
            </div>
          `
              : ''
          }

          <!-- Key Insights -->
          ${
            proj.keyInsights && proj.keyInsights.length > 0
              ? `
            <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                07. User Research & Discoveries
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Contextual Inquiry Insights
              </h2>

              <p class="text-xs text-[#52525B] font-sans">${proj.research}</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                ${proj.keyInsights
                  .map(
                    (insight, idx) => `
                  <div class="p-4 bg-[#FAFAFA] border border-[#F4F4F5] flex items-start gap-3">
                    <span class="w-6 h-6 bg-[#CCFF00] text-[#18181B] font-bold font-display flex items-center justify-center text-xs flex-shrink-0">
                      ${idx + 1}
                    </span>
                    <p class="text-xs text-[#18181B] font-medium leading-relaxed font-sans">${insight}</p>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </section>
          `
              : ''
          }

          <!-- P2 Air Purifier Special Deep Dive Tables -->
          ${
            proj.id === 'air-purifier-redesign'
              ? `
            <!-- Air Pollution Context -->
            <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                03. Macro Problem Statement
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Air Pollution & Market Needs
              </h2>

              <div class="p-4 bg-[#FAFAFA] text-xs font-semibold text-[#18181B] border-l-4 border-[#CCFF00]">
                ${proj.pollutionContext.summary}
              </div>

              <!-- PM2.5 Table -->
              <div class="overflow-x-auto border border-[#F4F4F5]">
                <table class="w-full text-left text-xs font-sans">
                  <thead class="bg-[#18181B] text-white font-display uppercase">
                    <tr>
                      <th class="p-3">Country</th>
                      <th class="p-3">PM2.5 Concentration (µg/m³)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#F4F4F5]">
                    ${proj.pollutionContext.pm25Stats
                      .map(
                        (stat) => `
                      <tr class="${stat.country === 'India' ? 'bg-[#CCFF00]/20 font-bold' : ''}">
                        <td class="p-3">${stat.country}</td>
                        <td class="p-3">${stat.value}</td>
                      </tr>
                    `
                      )
                      .join('')}
                  </tbody>
                </table>
              </div>

              <!-- Competitor Analysis Table -->
              <div class="pt-4 space-y-3">
                <h3 class="font-display font-bold text-lg uppercase text-[#18181B]">Competitor Matrix Benchmark</h3>
                <div class="overflow-x-auto border border-[#F4F4F5]">
                  <table class="w-full text-left text-xs font-sans whitespace-nowrap">
                    <thead class="bg-[#18181B] text-white font-display uppercase">
                      <tr>
                        <th class="p-3">Brand & Model</th>
                        <th class="p-3">Area</th>
                        <th class="p-3">Power</th>
                        <th class="p-3">Filters</th>
                        <th class="p-3">Price</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-[#F4F4F5]">
                      ${proj.competitorMatrix
                        .slice(0, 7)
                        .map(
                          (m) => `
                        <tr>
                          <td class="p-3 font-bold">${m.brand} ${m.model}</td>
                          <td class="p-3">${m.area}</td>
                          <td class="p-3">${m.power}</td>
                          <td class="p-3">${m.filters}</td>
                          <td class="p-3 font-bold text-[#18181B]">${m.price}</td>
                        </tr>
                      `
                        )
                        .join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          `
              : ''
          }

          <!-- CMF Exploration -->
          ${
            proj.cmfExploration
              ? `
            <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                04. CMF & Material Architecture
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                ${proj.cmfExploration.title}
              </h2>

              <p class="text-xs text-[#52525B] font-sans leading-relaxed">${proj.cmfExploration.text}</p>

              <!-- Swatches Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                ${proj.cmfExploration.swatches
                  .map(
                    (swatch) => `
                  <div class="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-3">
                    <div class="w-full h-12 border border-[#E4E4E7]" style="background-color: ${swatch.hex};"></div>
                    <div>
                      <div class="font-display font-bold text-xs uppercase text-[#18181B]">${swatch.name}</div>
                      <div class="text-[10px] font-mono text-[#71717A]">${swatch.hex} &bull; ${swatch.finish}</div>
                    </div>
                  </div>
                `
                  )
                  .join('')}
              </div>
            </section>
          `
              : ''
          }

          <!-- Manufacturing & Final Outcome -->
          <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
              05. Production & Impact
            </span>
            <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
              Manufacturing & Results
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-5 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2">
                <h3 class="font-display font-bold text-sm uppercase text-[#18181B]">Manufacturing Feasibility</h3>
                <p class="text-xs text-[#52525B] leading-relaxed font-sans">${proj.manufacturing}</p>
              </div>

              <div class="p-5 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2">
                <h3 class="font-display font-bold text-sm uppercase text-[#18181B]">Final Outcome</h3>
                <p class="text-xs text-[#52525B] leading-relaxed font-sans">${proj.finalOutcome}</p>
              </div>
            </div>
          </section>

          <!-- Prev / Next Navigation -->
          <nav class="flex items-center justify-between pt-8 border-t border-[#F4F4F5]">
            <button
              onclick="window.app.selectProjectById('${prevProj.id}')"
              class="inline-flex items-center gap-2 p-4 bg-white border border-[#F4F4F5] hover:border-[#18181B] transition-colors text-left"
            >
              ${getIconSvg('chevron-left', 'w-5 h-5')}
              <div>
                <div class="text-[9px] font-bold uppercase text-[#A1A1AA]">Previous Case Study</div>
                <div class="font-display font-bold text-xs uppercase text-[#18181B]">${prevProj.title}</div>
              </div>
            </button>

            <button
              onclick="window.app.selectProjectById('${nextProj.id}')"
              class="inline-flex items-center gap-2 p-4 bg-white border border-[#F4F4F5] hover:border-[#18181B] transition-colors text-right"
            >
              <div>
                <div class="text-[9px] font-bold uppercase text-[#A1A1AA]">Next Case Study</div>
                <div class="font-display font-bold text-xs uppercase text-[#18181B]">${nextProj.title}</div>
              </div>
              ${getIconSvg('chevron-right', 'w-5 h-5')}
            </button>
          </nav>
        </div>
      </article>
    `;
  }

  function renderRedDotModal() {
    if (!redDotModalOpen) return '';

    return `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in">
        <div class="relative w-full max-w-2xl bg-white border border-[#18181B] p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
          <!-- Close Button -->
          <button
            onclick="window.app.closeRedDotModal()"
            class="absolute top-4 right-4 p-2 text-[#18181B] hover:bg-[#F4F4F5] transition-colors"
          >
            ${getIconSvg('x', 'w-5 h-5')}
          </button>

          <!-- Modal Header -->
          <div class="space-y-3 pr-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#CCFF00] text-[#18181B] text-[10px] font-bold uppercase tracking-widest">
              ${getIconSvg('award', 'w-3.5 h-3.5')}
              <span>Red Dot Award: Design Concept Winner 2025</span>
            </div>

            <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
              Spunch - A Minimalist Paper Crimper And Punch
            </h2>

            <p class="text-xs text-[#71717A] uppercase font-bold tracking-wider">
              Awarded by Red Dot Design Award, Essen, Germany (2025)
            </p>
          </div>

          <!-- Hero Image -->
          <div class="aspect-[16/9] bg-[#F4F4F5] border border-[#E4E4E7] overflow-hidden">
            <img 
              src="/images/spunch.jpg" 
              onerror="this.onerror=null; this.src='https://lh3.googleusercontent.com/d/1DC0YBMm4FiJKdj-UXPFm1viy8PAIc9NS';"
              alt="Spunch Red Dot Winner"
              class="w-full h-full object-cover" 
            />
          </div>

          <p class="text-xs text-[#52525B] font-sans leading-relaxed">
            Honored with the globally recognized Red Dot Design Concept Winner 2025 for poetic mechanical simplification, staple-free desktop crimping, and satin anodized 6061-T6 aluminum ergonomics.
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#FAFAFA] border border-[#F4F4F5] text-xs font-medium">
            <div>
              <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Award Status</span>
              <span class="font-bold text-[#18181B] uppercase">Official Winner 2025</span>
            </div>
            <div>
              <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Category</span>
              <span class="font-bold text-[#18181B] uppercase">Office Supplies and Stationery</span>
            </div>
            <div>
              <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">University</span>
              <span class="font-bold text-[#18181B] uppercase">IDC, IIT Bombay, India</span>
              <span class="text-[10px] text-[#71717A] font-medium tracking-normal block normal-case mt-0.5">(Faculty Advisor: Prof. Purba Joshi)</span>
            </div>
            <div>
              <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Designers</span>
              <span class="font-bold text-[#18181B] uppercase">Amit Kumar, Aatman Shah</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#F4F4F5]">
            <button
              onclick="window.app.closeRedDotModal()"
              class="px-5 py-2.5 bg-[#F4F4F5] text-[#18181B] text-xs font-bold uppercase tracking-widest hover:bg-[#E4E4E7] transition-colors"
            >
              Close
            </button>

            <button
              onclick="window.app.closeRedDotModal(); window.app.selectProjectById('spunch');"
              class="px-5 py-2.5 bg-[#18181B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors"
            >
              View Case Study
            </button>

            <a
              href="https://www.red-dot.org/project/spunch-minimalist-paper-crimper-and-punch-83324"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-[#CCFF00] text-[#18181B] text-xs font-bold uppercase tracking-widest hover:bg-[#b8e600] transition-colors"
            >
              <span>View on Red Dot</span>
              ${getIconSvg('external-link', 'w-4 h-4')}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function renderIndiaDesignModal() {
    if (!indiaDesignModalOpen) return '';

    return `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in">
        <div class="relative w-full max-w-3xl bg-white border border-[#18181B] p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
          <!-- Close Button -->
          <button
            onclick="window.app.closeIndiaDesignModal()"
            class="absolute top-4 right-4 p-2 text-[#18181B] hover:bg-[#F4F4F5] transition-colors"
          >
            ${getIconSvg('x', 'w-5 h-5')}
          </button>

          <!-- Modal Header -->
          <div class="space-y-3 pr-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#CCFF00] text-[#18181B] text-[10px] font-bold uppercase tracking-widest">
              ${getIconSvg('award', 'w-3.5 h-3.5')}
              <span>India Design ID 2020 Exhibition</span>
            </div>

            <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
              Freelance Glass Chandeliers for Formus
            </h2>

            <p class="text-xs text-[#71717A] uppercase font-bold tracking-wider">
              Exhibited at India Design 2020 (New Delhi)
            </p>
          </div>

          <!-- Image Gallery Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="aspect-[4/3] bg-[#F4F4F5] border border-[#E4E4E7] overflow-hidden group">
              <img 
                src="/images/india_design_1.jpg" 
                alt="Formus Chandelier at India Design 2020 - Image 1"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onclick="window.app.openImageModal('/images/india_design_1.jpg', 'Formus Chandelier at India Design 2020')"
              />
            </div>
            <div class="aspect-[4/3] bg-[#F4F4F5] border border-[#E4E4E7] overflow-hidden group">
              <img 
                src="/images/india_design_2.jpg" 
                alt="Formus Chandelier at India Design 2020 - Image 2"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onclick="window.app.openImageModal('/images/india_design_2.jpg', 'Formus Chandelier at India Design 2020')"
              />
            </div>
          </div>

          <p class="text-xs text-[#52525B] font-sans leading-relaxed">
            Hired as a freelance lighting designer by Formus to design bespoke glass chandeliers, which were showcased and displayed at India Design 2020 in New Delhi. Combining artisanal handblown glass craftsmanship with precision CNC brass joinery.
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-[#FAFAFA] border border-[#F4F4F5] text-xs font-medium">
            <div>
              <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Client / Firm</span>
              <span class="font-bold text-[#18181B] uppercase">Formus</span>
            </div>
            <div>
              <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">My Role</span>
              <span class="font-bold text-[#18181B] uppercase">Freelance Designer</span>
            </div>
            <div class="col-span-2 sm:col-span-1">
              <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Exposition</span>
              <span class="font-bold text-[#18181B] uppercase">India Design 2020</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#F4F4F5]">
            <button
              onclick="window.app.closeIndiaDesignModal()"
              class="px-5 py-2.5 bg-[#F4F4F5] text-[#18181B] text-xs font-bold uppercase tracking-widest hover:bg-[#E4E4E7] transition-colors"
            >
              Close
            </button>

            <button
              onclick="window.app.closeIndiaDesignModal(); window.app.selectProjectById('lumina-lighting');"
              class="px-5 py-2.5 bg-[#18181B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors"
            >
              View Lighting Case Study
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderKloveModal() {
    if (!kloveModalOpen) return '';

    return `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in">
        <div class="relative w-full max-w-4xl bg-white border border-[#18181B] p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
          <!-- Close Button -->
          <button
            onclick="window.app.closeKloveModal()"
            class="absolute top-4 right-4 p-2 text-[#18181B] hover:bg-[#F4F4F5] transition-colors"
          >
            ${getIconSvg('x', 'w-5 h-5')}
          </button>

          <!-- Modal Header -->
          <div class="space-y-3 pr-8">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#CCFF00] text-[#18181B] text-[10px] font-bold uppercase tracking-widest">
              ${getIconSvg('award', 'w-3.5 h-3.5')}
              <span>India Design ID 2019 Exhibition</span>
            </div>

            <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
              Glass Chandeliers at KLOVE Studio
            </h2>

            <p class="text-xs text-[#71717A] uppercase font-bold tracking-wider">
              Exhibited at India Design 2019 (New Delhi)
            </p>
          </div>

          <!-- Image Gallery Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="aspect-[3/4] bg-[#F4F4F5] border border-[#E4E4E7] overflow-hidden group">
              <img 
                src="/images/klove_2.jpg" 
                alt="KLOVE Studio Chandelier at India Design 2019 - Image 1"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onclick="window.app.openImageModal('/images/klove_2.jpg', 'KLOVE Studio Chandelier at India Design 2019')"
              />
            </div>
            <div class="aspect-[3/4] bg-[#F4F4F5] border border-[#E4E4E7] overflow-hidden group">
              <img 
                src="/images/klove_3.jpg" 
                alt="KLOVE Studio Chandelier at India Design 2019 - Image 2"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onclick="window.app.openImageModal('/images/klove_3.jpg', 'KLOVE Studio Chandelier at India Design 2019')"
              />
            </div>
          </div>

          <p class="text-xs text-[#52525B] font-sans leading-relaxed">
            Designed bespoke glass chandeliers and ambient light installations while working as a fulltime designer at KLOVE Studio, which were showcased and displayed at India Design 2019 in New Delhi.
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-[#FAFAFA] border border-[#F4F4F5] text-xs font-medium">
            <div>
              <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Studio / Firm</span>
              <span class="font-bold text-[#18181B] uppercase">KLOVE Studio</span>
            </div>
            <div>
              <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">My Role</span>
              <span class="font-bold text-[#18181B] uppercase">Fulltime Designer</span>
            </div>
            <div class="col-span-2 sm:col-span-1">
              <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Exposition</span>
              <span class="font-bold text-[#18181B] uppercase">India Design 2019</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#F4F4F5]">
            <button
              onclick="window.app.closeKloveModal()"
              class="px-5 py-2.5 bg-[#F4F4F5] text-[#18181B] text-xs font-bold uppercase tracking-widest hover:bg-[#E4E4E7] transition-colors"
            >
              Close
            </button>

            <button
              onclick="window.app.closeKloveModal(); window.app.selectProjectById('lumina-lighting');"
              class="px-5 py-2.5 bg-[#18181B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors"
            >
              View Lighting Case Study
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderVisualCustomizerDrawer() {
    if (!customizerOpen) return '';

    const presetColors = [
      { name: 'Neon Lime', hex: '#CCFF00' },
      { name: 'Electric Cyan', hex: '#00F0FF' },
      { name: 'Warm Gold', hex: '#EAB308' },
      { name: 'Crimson Pulse', hex: '#EF4444' },
      { name: 'Violet Glow', hex: '#A855F7' },
    ];

    return `
      <div class="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
        <div class="w-full max-w-md bg-white border-l border-[#18181B] h-full flex flex-col justify-between p-6 overflow-y-auto space-y-6">
          
          <!-- Drawer Header -->
          <div class="flex items-center justify-between border-b border-[#F4F4F5] pb-4">
            <div class="flex items-center gap-2">
              ${getIconSvg('sliders', 'w-4 h-4 text-[#18181B]')}
              <h2 class="font-display font-bold text-lg uppercase text-[#18181B]">Visual Customizer</h2>
            </div>
            <button
              onclick="window.app.closeCustomizer()"
              class="p-2 text-[#18181B] hover:bg-[#F4F4F5]"
            >
              ${getIconSvg('x', 'w-5 h-5')}
            </button>
          </div>

          <!-- Drawer Body Controls -->
          <div class="space-y-6 flex-1">
            <!-- Designer Name -->
            <div class="space-y-1">
              <label class="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Designer Display Name</label>
              <input
                type="text"
                value="${siteSettings.designerName}"
                onchange="window.app.updateSetting('designerName', this.value)"
                class="w-full px-3 py-2 border border-[#E4E4E7] text-xs font-bold focus:outline-none focus:border-[#18181B]"
              />
            </div>

            <!-- Tagline Bio -->
            <div class="space-y-1">
              <label class="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Tagline Bio</label>
              <textarea
                rows="3"
                onchange="window.app.updateSetting('taglineBio', this.value)"
                class="w-full px-3 py-2 border border-[#E4E4E7] text-xs font-medium focus:outline-none focus:border-[#18181B]"
              >${siteSettings.taglineBio}</textarea>
            </div>

            <!-- Accent Color Selection -->
            <div class="space-y-2">
              <label class="text-[10px] font-bold uppercase tracking-wider text-[#71717A]">Accent Highlight Color</label>
              <div class="flex items-center gap-2">
                ${presetColors
                  .map(
                    (color) => `
                  <button
                    onclick="window.app.updateSetting('accentColorHex', '${color.hex}')"
                    class="w-8 h-8 rounded-full border-2 transition-transform ${
                      siteSettings.accentColorHex === color.hex ? 'border-[#18181B] scale-110' : 'border-transparent'
                    }"
                    style="background-color: ${color.hex};"
                    title="${color.name}"
                  ></button>
                `
                  )
                  .join('')}
              </div>
            </div>

            <!-- Section Visibility Toggles -->
            <div class="space-y-3 pt-4 border-t border-[#F4F4F5]">
              <label class="text-[10px] font-bold uppercase tracking-wider text-[#71717A] block">Home View Section Visibility</label>
              
              <div class="space-y-2 text-xs font-medium">
                ${Object.keys(siteSettings.sectionVisibility)
                  .map(
                    (key) => `
                  <label class="flex items-center justify-between p-2 bg-[#FAFAFA] border border-[#F4F4F5] cursor-pointer">
                    <span class="capitalize text-[#18181B] font-bold">${key} Section</span>
                    <input 
                      type="checkbox" 
                      ${siteSettings.sectionVisibility[key] ? 'checked' : ''}
                      onchange="window.app.toggleSectionVisibility('${key}', this.checked)"
                      class="w-4 h-4 accent-[#18181B]"
                    />
                  </label>
                `
                  )
                  .join('')}
              </div>
            </div>
          </div>

          <!-- Drawer Footer -->
          <div class="pt-4 border-t border-[#F4F4F5] flex items-center justify-between">
            <button
              onclick="window.app.resetSiteSettings()"
              class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#EF4444] hover:bg-[#FEF2F2] transition-colors"
            >
              ${getIconSvg('rotate-ccw', 'w-3.5 h-3.5')}
              <span>Reset Defaults</span>
            </button>

            <button
              onclick="window.app.closeCustomizer()"
              class="px-5 py-2.5 bg-[#18181B] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors"
            >
              Done
            </button>
          </div>

        </div>
      </div>
    `;
  }

  function renderImageModal() {
    if (!selectedImageModal) return '';

    return `
      <div 
        onclick="window.app.closeImageModal()" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xs animate-fade-in cursor-pointer"
      >
        <div class="relative max-w-5xl max-h-[90vh] overflow-hidden">
          <img src="${selectedImageModal}" class="w-full h-full object-contain" />
          <button 
            onclick="window.app.closeImageModal()"
            class="absolute top-4 right-4 p-3 bg-black/80 text-white hover:bg-white hover:text-black transition-colors"
          >
            ${getIconSvg('x', 'w-6 h-6')}
          </button>
        </div>
      </div>
    `;
  }

  function renderProjectsTab() {
    // Sort projects by siteSettings.projectOrder
    const sortedProjects = [...PROJECTS_DATA].sort((a, b) => {
      const indexA = siteSettings.projectOrder.indexOf(a.id);
      const indexB = siteSettings.projectOrder.indexOf(b.id);
      return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
    });

    // Filter projects based on projectsFilter
    const filteredProjects = projectsFilter === 'all'
      ? sortedProjects
      : sortedProjects.filter(p => p.category === projectsFilter);

    // Unique categories from PROJECTS_DATA
    const categories = ['all', ...new Set(PROJECTS_DATA.map(p => p.category))];

    return `
      <section class="max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 space-y-12 animate-fade-in">
        
        <!-- Header Section -->
        <div class="space-y-4 border-b border-[#F4F4F5] pb-8">
          <div class="inline-block px-3 py-1 bg-[#CCFF00] text-[10px] font-bold uppercase tracking-widest text-[#18181B]">
            Selected Portfolio
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none tracking-tighter uppercase font-display text-[#18181B]">
            Industrial Hardware <br class="hidden sm:block" />
            & CMF Works
          </h1>
          <p class="text-sm sm:text-base text-[#52525B] leading-relaxed max-w-2xl font-sans">
            Explore deep-dive industrial design case studies covering CAD surface modeling, user ergonomics, 
            manufacturing feasibility, and Color, Material, Finish (CMF) strategies.
          </p>
        </div>

        <!-- Interactive Filter Controls -->
        <div class="space-y-3">
          <span class="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA]">
            Filter by Category
          </span>
          <div class="flex flex-wrap gap-2">
            ${categories
              .map(
                (cat) => `
              <button
                onclick="window.app.setProjectsFilter('${cat}')"
                class="px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  projectsFilter === cat
                    ? 'bg-[#18181B] text-white border-[#18181B]'
                    : 'bg-white text-[#71717A] border-[#E4E4E7] hover:border-[#18181B] hover:text-[#18181B]'
                }"
              >
                ${cat === 'all' ? 'All Works' : cat}
              </button>
            `
              )
              .join('')}
          </div>
        </div>

        <!-- Project Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${
            filteredProjects.length > 0
              ? filteredProjects.map((p) => renderProjectCard(p)).join('')
              : `
            <div class="col-span-full py-16 text-center border border-dashed border-[#E4E4E7] bg-white">
              <span class="text-3xl">📁</span>
              <p class="text-sm font-bold text-[#71717A] uppercase tracking-wider mt-4">
                No projects found in this category
              </p>
            </div>
          `
          }
        </div>

      </section>
    `;
  }

  function renderFooter() {
    return `
      <footer class="bg-white border-t border-[#F4F4F5] py-12 text-[#18181B]">
        <div class="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#F4F4F5]">
            <div>
              <div class="font-display font-bold text-xl uppercase">${siteSettings.designerName}</div>
              <div class="text-xs text-[#71717A] uppercase tracking-wider mt-0.5">${siteSettings.headlineTitle}</div>
            </div>

            <div class="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider">
              <button onclick="window.app.setTab('home')" class="hover:text-[#CCFF00] transition-colors">Home</button>
              <button onclick="window.app.setTab('projects')" class="hover:text-[#CCFF00] transition-colors">Projects</button>
              <button onclick="window.app.setTab('about')" class="hover:text-[#CCFF00] transition-colors">About</button>
              <button onclick="window.app.setTab('skills')" class="hover:text-[#CCFF00] transition-colors">Skills</button>
              <button onclick="window.app.setTab('experience')" class="hover:text-[#CCFF00] transition-colors">Experience</button>
              <button onclick="window.app.setTab('resume')" class="hover:text-[#CCFF00] transition-colors">Resume</button>
              <button onclick="window.app.setTab('contact')" class="hover:text-[#CCFF00] transition-colors">Contact</button>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest">
            <div>&copy; ${new Date().getFullYear()} ${siteSettings.designerName}. All rights reserved.</div>
            <div>Built for High Performance & Pure Utility.</div>
          </div>
        </div>
      </footer>
    `;
  }

  function renderEbikeDesignView() {
    return `
      <article class="min-h-screen bg-[#FAFAFA] text-[#18181B] font-sans pb-24 animate-fade-in">
        <!-- Floating Back Bar -->
        <div class="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#F4F4F5] px-4 sm:px-8 py-3 flex items-center justify-between">
          <button
            onclick="window.app.goBack()"
            class="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00] hover:bg-black transition-colors cursor-pointer"
          >
            ${getIconSvg('arrow-left', 'w-3.5 h-3.5 text-[#CCFF00]')}
            <span>Back to All Works</span>
          </button>

          <div class="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#71717A]">
            <span>EV & MOBILITY</span>
            <span>/</span>
            <span class="text-[#18181B]">E-BIKE DESIGN</span>
          </div>

          <button
            onclick="window.app.copyCaseStudyLink()"
            class="p-2 bg-[#FAFAFA] border border-[#F4F4F5] hover:border-[#18181B] text-[#18181B] transition-colors"
            title="Share case study link"
          >
            ${copiedLink ? getIconSvg('check', 'w-4 h-4 text-[#18181B]') : getIconSvg('share-2', 'w-4 h-4')}
          </button>
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
          <!-- Hero Header -->
          <header class="space-y-6">
            <div class="space-y-4">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00]">
                  EV & MOBILITY // 2021
                </span>
              </div>

              <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div class="space-y-3 flex-1">
                  <h1 class="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#18181B] tracking-tight leading-[1.1] uppercase">
                    E-Bike Design
                  </h1>
                  <p class="text-base sm:text-lg text-[#52525B] font-sans leading-relaxed max-w-3xl">
                    Due to the increase in pollution, many companies are getting in E-Mobility. This E-bike was designed as an industrial project for an Ahmedabad, Gujarat based startup aiming to provide affordable, high-performance mobility solutions for the Indian mass market.
                  </p>
                </div>
              </div>
            </div>

            <!-- Metadata Cards -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5 bg-white border border-[#F4F4F5]">
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Institution / Client</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">Ahmedabad Startup</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Design Team</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">Amit Kumar</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Category</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">Mobility & EV</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Year</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">2021</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Duration</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">10 Months</span>
              </div>
            </div>

            <!-- Hero Image -->
            <div class="relative aspect-[16/9] border border-[#E4E4E7] bg-[#18181B]">
              <img
                src="https://lh3.googleusercontent.com/d/1Shx0UCgx5uuw9WHD2xSIEzLmlK_h_8i5"
                alt="E-Bike Design"
                class="w-full h-full object-cover object-center"
              />
              <button
                onclick="window.app.openImageModal('https://lh3.googleusercontent.com/d/1Shx0UCgx5uuw9WHD2xSIEzLmlK_h_8i5')"
                class="absolute bottom-4 right-4 p-2.5 bg-[#18181B] text-[#CCFF00] border border-[#CCFF00]/40 hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors"
                title="Expand full screen"
              >
                ${getIconSvg('maximize-2', 'w-4 h-4')}
              </button>
            </div>
          </header>

          <!-- Executive Brief Section (Warm/Dark Elegant Bento) -->
          <section class="bg-[#18181B] text-white p-6 sm:p-8 border border-[#18181B] space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div class="md:col-span-6 space-y-4">
                <span class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#CCFF00] text-[#18181B] inline-block">
                  The Brief
                </span>
                <h3 class="font-display font-medium text-2xl sm:text-3xl text-white leading-tight tracking-tight">
                  To Design an <span class="text-[#CCFF00] font-bold">EV bicycle</span> for general age (14+) group for daily use in and around the city.
                </h3>
              </div>
              
              <div class="md:col-span-6 grid grid-cols-2 gap-4">
                <div class="p-4 bg-neutral-900 border border-neutral-800">
                  <span class="text-[9px] font-mono text-[#A1A1AA] uppercase block mb-1">Target Group</span>
                  <span class="text-xs font-bold text-white uppercase">Students & Professionals</span>
                </div>
                <div class="p-4 bg-neutral-900 border border-neutral-800">
                  <span class="text-[9px] font-mono text-[#A1A1AA] uppercase block mb-1">Primary Use</span>
                  <span class="text-xs font-bold text-white uppercase">Urban Commute (L-15km)</span>
                </div>
                <div class="p-4 bg-neutral-900 border border-neutral-800">
                  <span class="text-[9px] font-mono text-[#A1A1AA] uppercase block mb-1">Key Value</span>
                  <span class="text-xs font-bold text-white uppercase">Affordability & Efficiency</span>
                </div>
                <div class="p-4 bg-neutral-900 border border-neutral-800">
                  <span class="text-[9px] font-mono text-[#A1A1AA] uppercase block mb-1">Market</span>
                  <span class="text-xs font-bold text-white uppercase">Tier 1 & 2 Cities (India)</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Timeline Section -->
          <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <div class="space-y-2">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                01. Process & Roadmap
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Project Timeline
              </h2>
              <p class="text-xs font-mono font-bold text-[#71717A] uppercase mt-1">Development Phase: 6 Months Comprehensive</p>
            </div>

            <!-- Timeline visualization -->
            <div class="space-y-6">
              <div class="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-4">
                <div class="flex justify-between items-center text-[10px] font-mono font-bold text-[#71717A] pb-2 border-b border-[#E4E4E7]">
                  <span>DEVELOPMENT PHASES & ALLOCATION</span>
                  <span class="text-[#18181B]">MONTH 1 - MONTH 6</span>
                </div>

                <div class="space-y-3.5">
                  <div class="flex items-center gap-3">
                    <span class="w-32 text-[10px] font-bold uppercase text-[#71717A] shrink-0">Brief & Setup</span>
                    <div class="flex-1 bg-neutral-100 h-2.5 overflow-hidden">
                      <div class="h-full bg-[#18181B]" style="width: 8.33%; margin-left: 0%;"></div>
                    </div>
                    <span class="w-12 text-[10px] font-mono text-right text-[#71717A]">0.5 Mo</span>
                  </div>

                  <div class="flex items-center gap-3">
                    <span class="w-32 text-[10px] font-bold uppercase text-[#71717A] shrink-0">Primary Research</span>
                    <div class="flex-1 bg-neutral-100 h-2.5 overflow-hidden">
                      <div class="h-full bg-[#18181B]" style="width: 16.67%; margin-left: 8.33%;"></div>
                    </div>
                    <span class="w-12 text-[10px] font-mono text-right text-[#71717A]">1.0 Mo</span>
                  </div>

                  <div class="flex items-center gap-3">
                    <span class="w-32 text-[10px] font-bold uppercase text-[#71717A] shrink-0">Secondary Research</span>
                    <div class="flex-1 bg-neutral-100 h-2.5 overflow-hidden">
                      <div class="h-full bg-[#18181B]" style="width: 16.67%; margin-left: 16.67%;"></div>
                    </div>
                    <span class="w-12 text-[10px] font-mono text-right text-[#71717A]">1.0 Mo</span>
                  </div>

                  <div class="flex items-center gap-3">
                    <span class="w-32 text-[10px] font-bold uppercase text-[#71717A] shrink-0">Concept Generation</span>
                    <div class="flex-1 bg-neutral-100 h-2.5 overflow-hidden">
                      <div class="h-full bg-[#18181B]" style="width: 16.67%; margin-left: 33.33%;"></div>
                    </div>
                    <span class="w-12 text-[10px] font-mono text-right text-[#71717A]">1.0 Mo</span>
                  </div>

                  <div class="flex items-center gap-3">
                    <span class="w-32 text-[10px] font-bold uppercase text-[#71717A] shrink-0">Proof of concept and Sampling</span>
                    <div class="flex-1 bg-neutral-100 h-2.5 overflow-hidden">
                      <div class="h-full bg-[#CCFF00]" style="width: 50%; margin-left: 50%;"></div>
                    </div>
                    <span class="w-12 text-[10px] font-mono text-right text-[#18181B] font-bold">3.0 Mo</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 2: PRIMARY RESEARCH (CAUSE) -->
          <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-8">
            <div class="space-y-2">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                02. Macro Context
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Primary Research (The Cause)
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div class="lg:col-span-5 space-y-4">
                <p class="text-sm text-[#52525B] leading-relaxed">
                  Air pollution can shorten lives by almost 10 years in the Indian capital, Delhi, the world’s most polluted city, says a report by a US research group. The study adds that the average Indian life expectancy is shortened by five years at current air quality levels.
                </p>
                <p class="text-sm text-[#52525B] leading-relaxed">
                  India’s 1.3 billion people live in areas where the “annual average particulate pollution level” exceeds the WHO safe limit of 5µg/m³, it says.
                </p>
              </div>

              <!-- AQI Map of India -->
              <div class="lg:col-span-7 bg-[#FAFAFA] border border-[#E4E4E7] p-5 space-y-4">
                <h4 class="text-[10px] font-mono font-bold text-[#71717A] uppercase border-b border-[#E4E4E7] pb-2">
                  Air Quality Index Across India's Cities
                </h4>
                
                <div class="relative aspect-video bg-[#18181B] overflow-hidden border border-[#E4E4E7]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh7ym-l451-5u_q4rubaJsYtQZOudcJRMalxyV5R_MYBuF_ITdt1PbJi7fUFS2T2Kmte0LLD5bmJ7oSXdf3fKP7cXKqincwH1vXNv0da1P1DuuG225Q2i90CVq3Uql2iE5e38SkQF2IiWslp8S482bb7UeWfYD7hnhBykjk_S3bKBAv2qbWTLixEY2qfBxyNDMcEnn4gQBijGDTPTO9RO2HDRavp87L4dx3c1PNxdhaOFN7oZXHQ-V"
                    alt="Air Quality Index Map India"
                    class="w-full h-full object-contain"
                  />
                </div>

                <div class="grid grid-cols-4 gap-2 text-center">
                  <div class="p-2 bg-white border border-[#F4F4F5]">
                    <span class="block text-[8px] font-bold text-[#A1A1AA] uppercase">Gurugram</span>
                    <span class="text-xs font-bold text-[#EF4444]">335</span>
                  </div>
                  <div class="p-2 bg-white border border-[#F4F4F5]">
                    <span class="block text-[8px] font-bold text-[#A1A1AA] uppercase">Lucknow</span>
                    <span class="text-xs font-bold text-[#18181B]">202</span>
                  </div>
                  <div class="p-2 bg-white border border-[#F4F4F5]">
                    <span class="block text-[8px] font-bold text-[#A1A1AA] uppercase">Patna</span>
                    <span class="text-xs font-bold text-[#EF4444]">278</span>
                  </div>
                  <div class="p-2 bg-white border border-[#F4F4F5]">
                    <span class="block text-[8px] font-bold text-[#A1A1AA] uppercase">Bhopal</span>
                    <span class="text-xs font-bold text-[#EF4444]">292</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pollution Imagery -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#F4F4F5]">
              <div class="space-y-2">
                <div class="aspect-[16/10] bg-[#18181B] border border-[#E4E4E7] overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPKf9Gkg6DE4sBYMvFW9iHNQkO_l7OsqSpweIRlM2vldbIpFgsmjqouLnDKsDCk4UEAvYop71fkWczl--fGFcz38IWsJJx97zfc92eGoot-lSQFv_J7OmtksRGIX32sClIC0iDaaDmP94C5B3ewt2FoPQ3ErGMFSahbn-x1EoyuFytgTaW8oNOzaqnS7MY_j-x04G5m2pchF1MyWvONHbeeep-QMXJuCPZBGz4rw2h7C9DuSUvyr3Z"
                    alt="Congestion & Traffic"
                    class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <span class="block text-[10px] font-mono text-[#71717A] uppercase">Fig 1.1: Congestion & Traffic</span>
              </div>

              <div class="space-y-2">
                <div class="aspect-[16/10] bg-[#18181B] border border-[#E4E4E7] overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu2RWwJoUeBvIoEev2XcaVS-GzCDSOCgBh7XNz_JViOKHt15ANPfjDiFD8gOXUU8vzVpiZ9SuekDRDwnpOc1GbKD5VDtoqSaJ5mSM4RwGJ0reSwWipGOE67SS29hC3dBQ7nX1MYoRgMkcSkAeMUYx5hh9jGbTg3g6XzM_6OBGrzuPugFxDcV26q5azNwsUm_qIpAcAQ_CDuAinaDYTiynaCZISu2AM7AU7L9nR5VannvFxwGgU2qyS"
                    alt="Air Pollution Impact"
                    class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <span class="block text-[10px] font-mono text-[#71717A] uppercase">Fig 1.2: Air Pollution Impact</span>
              </div>
            </div>

            <!-- Vehicle Registration Growth -->
            <div class="pt-6 border-t border-[#F4F4F5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-5 space-y-4">
                <h3 class="font-display font-bold text-lg text-[#18181B] uppercase">
                  Growth of Private-vehicle Ownership
                </h3>
                <p class="text-xs text-[#52525B] leading-relaxed">
                  The number of registered vehicles increased from 55 million in 2001 to 142 million by 2011, with a currently estimated 195.5 million in 2016. Seventy-five percent of these registered vehicles (147 million) are motorcycles.
                </p>
              </div>

              <div class="lg:col-span-7 bg-white border border-[#E4E4E7] p-4">
                <div class="aspect-video bg-[#FAFAFA] overflow-hidden border border-[#F4F4F5]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVIf4GCjI7wxTdR_nQeriZDGvexiSlSSXKvKzpDiy_yksmRWv4CUOjfDgu7vNj3vwGGLiiwtB09ma3QO2ebOws9FB3TAWdoOgI32Nddxhhagl_QVlF390BjCjSGjzPXQJhrfvrQ1LVN303NLKE5rnQ-l9nn-C-2W2nVzJ3kKcJCOjO9_IZCR-R6UwL93z35NIsaQTKAo_P8SqjVy7Uust0ILW0k9SUxspfA3kMsP7qa5dsDTVOHaMq"
                    alt="Vehicle Registration Growth Chart"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 3: EVOLUTION OF BICYCLE -->
          <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <div class="space-y-2">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                03. Contextual Timeline
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Evolution of Bicycle
              </h2>
              <p class="text-xs font-mono font-bold text-[#71717A] uppercase mt-1">Historical Context Analysis</p>
            </div>

            <!-- Horizontal timeline grid -->
            <div class="overflow-x-auto pb-4">
              <div class="min-w-[1000px] grid grid-cols-5 gap-4 pt-4">
                <div class="flex flex-col items-center text-center space-y-3 group border border-[#F4F4F5] p-3 bg-[#FAFAFA]">
                  <div class="w-full aspect-[4/3] bg-white border border-[#E4E4E7] p-2 group-hover:border-[#18181B] transition-colors flex items-center justify-center">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIbHZhywqV1_N8T82sCBxmegxGU8DbGvSN4QzOCCU6qrkMeJeVD9a2OctzXHFowMdW_VYmEJMo3yjV316KYV4LmEyufxsBSte1PyP7VvnjsRySjX43f94oQkAkc4QBjlteP_Mv6bQAL0bSw1age1aDEb8sRXPwZsf11q1mw-u80G8atdDRObFhdzrK42F19oPqnSiNnYS0lLO3Gsxq9aZ_K3lhFs8M7PzGZ0NrPAxh5190XF9jJY2k"
                      alt="1817 Draisine"
                      class="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div class="space-y-0.5">
                    <div class="font-display font-bold text-base text-[#18181B]">1817</div>
                    <div class="font-mono text-[10px] font-bold text-[#52525B] uppercase">DRAISINE</div>
                    <div class="font-mono text-[9px] text-[#A1A1AA] uppercase">Karl Freiherr Drais</div>
                  </div>
                </div>

                <div class="flex flex-col items-center text-center space-y-3 group border border-[#F4F4F5] p-3 bg-[#FAFAFA]">
                  <div class="w-full aspect-[4/3] bg-white border border-[#E4E4E7] p-2 group-hover:border-[#18181B] transition-colors flex items-center justify-center">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDdfZUc9ubiD-IHNM2yhpNfRr-7M4x0DtfS9RWEQv8jfzvorIVzQ0rell4SdWYv82BJSVhOgj5JWJtR3-rAEldZ9SzGEkAAhqOnTfOXeYYAxTnFe1WbM6vVgUO5cdKzu8fYoduZT2LQOEtKM2vGvqtqLPQGaQBqpwA07A51vc50PfXUG3Eiis13wqqRaqzgn3K4_NfVkMJz3KwkI1jOGW1EAcaFnbSJaKUxxWEtquapjwBdDktme09"
                      alt="1861 Penny-Farthing"
                      class="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div class="space-y-0.5">
                    <div class="font-display font-bold text-base text-[#18181B]">1861</div>
                    <div class="font-mono text-[10px] font-bold text-[#52525B] uppercase">PENNY-FARTHING</div>
                    <div class="font-mono text-[9px] text-[#A1A1AA] uppercase">Pierre & Ernest Michaux</div>
                  </div>
                </div>

                <div class="flex flex-col items-center text-center space-y-3 group border border-[#F4F4F5] p-3 bg-[#FAFAFA]">
                  <div class="w-full aspect-[4/3] bg-white border border-[#E4E4E7] p-2 group-hover:border-[#18181B] transition-colors flex items-center justify-center">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcWztzNzWRpHOZw3d1xBxXgE44zKdsVOHS9n0flZlLnBnGSczEh54uiEmII1V_K9eLZ-BM4SX2P9poTzXMA7OLqshK3X49TKuX8m0EJz0qjzT81L0aENkI8WwLGrRz-H2V3KK1VRsDYVDivabekPoxgeiN3hDfgEsLesUt4PNSAB83HYNuadbENN_GfHWW92tSmXy3Kc_L0iukz5oMn2wd-gwekM0x46pKM--AYHuNG_Z9Mro2PRGk"
                      alt="1884 Safety Bicycle"
                      class="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div class="space-y-0.5">
                    <div class="font-display font-bold text-base text-[#18181B]">1884</div>
                    <div class="font-mono text-[10px] font-bold text-[#52525B] uppercase">SAFETY BICYCLE</div>
                    <div class="font-mono text-[9px] text-[#A1A1AA] uppercase">John Kemp Starley</div>
                  </div>
                </div>

                <div class="flex flex-col items-center text-center space-y-3 group border border-[#F4F4F5] p-3 bg-[#FAFAFA]">
                  <div class="w-full aspect-[4/3] bg-white border border-[#E4E4E7] p-2 group-hover:border-[#18181B] transition-colors flex items-center justify-center">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBJSQI1RITmpZ9YUjJuL-4cnPbX4-L5i9OnkrmHm7_Kx0gYClwtyklKbHmIqSuY-h6XGz8K51caSlqOFdWmSsMpFA0uYIR0L61ksiVhEehj0eX1RcuE-O2hFjwr2LyuS4x2ofoQOosKb8__9jHnO5GdrmwfcSax5mA5aE_4CcEzZ5taYCGO6wYFdLibwKSzPaUIZriotkGb8PJ3fAMPeQNr7bwp6uYSg3PQQ2XcCFAQf3_U5DmQwGv"
                      alt="1969 BMX"
                      class="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div class="space-y-0.5">
                    <div class="font-display font-bold text-base text-[#18181B]">1969</div>
                    <div class="font-mono text-[10px] font-bold text-[#52525B] uppercase">BMX</div>
                    <div class="font-mono text-[9px] text-[#A1A1AA] uppercase">California Culture</div>
                  </div>
                </div>

                <div class="flex flex-col items-center text-center space-y-3 group border border-[#F4F4F5] p-3 bg-[#FAFAFA]">
                  <div class="w-full aspect-[4/3] bg-white border border-[#E4E4E7] p-2 group-hover:border-[#CCFF00] transition-colors flex items-center justify-center">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1uUdiMRIpdBrY2qke1bElVNXxBaPqmVQVJZwDZWKfif195E8ZjxFAUDMcTJLXYAk2x4zcjE2hjcYt7ydpdhMjiuMUaMCMWQYJ4tr4_d4o7F2yGZZdiZduC3x5A3ngqZml1DWK-QPSa8DreGyOTOE8z_mCQlYeOHdlHHficK9HQMdJJQUoopckYIQVAnJ6nDg6gx5aoBbUXRqfsRQ9t5h6rbK0RNkxO_VhoAnv25JpuJQRAehBwU-n"
                      alt="2021 E-Bike Concept"
                      class="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div class="space-y-0.5">
                    <div class="font-display font-bold text-base text-[#18181B]">2021</div>
                    <div class="font-mono text-[10px] font-bold text-[#52525B] uppercase">E-BIKE CONCEPT</div>
                    <div class="font-mono text-[9px] text-[#A1A1AA] uppercase">Integrated EV Tech</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 4: PRIMARY RESEARCH (THE PRODUCT) -->
          <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-8">
            <div class="space-y-2">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                04. Functional Architecture
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Primary Research (The Product)
              </h2>
              <p class="text-sm text-[#52525B] leading-relaxed max-w-3xl">
                A deep dive into the mechanical components of modern electric bicycles, identifying key differentiators between traditional mechanical cycles and their electric counterparts.
              </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <!-- Color code & List info -->
              <div class="lg:col-span-4 space-y-6">
                <div class="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-4">
                  <h4 class="text-[10px] font-mono font-bold text-[#71717A] uppercase tracking-wider">
                    Component Legend
                  </h4>
                  
                  <div class="space-y-3 text-xs font-semibold">
                    <div class="flex items-center gap-2.5">
                      <span class="w-3.5 h-3.5 bg-emerald-500 block shrink-0"></span>
                      <span class="text-[#18181B] uppercase">Mechanical Components</span>
                    </div>
                    <div class="flex items-center gap-2.5">
                      <span class="w-3.5 h-3.5 bg-red-500 block shrink-0"></span>
                      <span class="text-[#18181B] uppercase">Electric Components</span>
                    </div>
                  </div>
                </div>

                <div class="p-4 bg-[#FAFAFA] border border-[#F4F4F5] space-y-2 font-mono text-[11px] text-[#52525B]">
                  <h5 class="font-bold text-xs uppercase text-[#18181B] pb-1 border-b border-[#E4E4E7] mb-2">Key Parts</h5>
                  <div class="grid grid-cols-2 gap-2">
                    <div>01. Frame</div>
                    <div>02. Stem</div>
                    <div>03. Handlebar</div>
                    <div>04. Grip</div>
                    <div>05. Brake lever</div>
                    <div class="text-red-500 font-bold">20. Motor</div>
                    <div class="text-red-500 font-bold">21. Lithium Battery</div>
                    <div class="text-red-500 font-bold">22. Display Unit</div>
                  </div>
                </div>
              </div>

              <!-- Exploded Diagram -->
              <div class="lg:col-span-8 bg-[#FAFAFA] border border-[#E4E4E7] p-5">
                <div class="aspect-video bg-white overflow-hidden border border-[#F4F4F5]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZHFjirBHLMXwIfWwgyL-qqnPc3kmIlRfH0w2qgC9HuyiOHKKXdF4_mROTgx9zIliv_c8Kn3BHsr6Ie8_P06HLsbyN72fFlmhGgR1snggF5mOD8Vc1Erl7f4ndocwqB1JPeMw04OsfIUQLPPtqI29dNKBrCtbMWt_l2Pm1S1oHQX3u4pZyiaehg4kc7HLforXH6ijt0XK1_9FQIan5fuBJ7SM6mhTo259vkNdySykI3Sw3uZlk5HUG"
                    alt="Exploded view of electric bicycle components"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <!-- Market Analysis Tables -->
            <div class="space-y-8 pt-4">
              <!-- Global Table -->
              <div class="space-y-3">
                <h3 class="font-display font-bold text-lg text-[#18181B] uppercase border-l-3 border-[#CCFF00] pl-3">
                  Top 10 EV Cycles (Global Market)
                </h3>
                
                <div class="overflow-x-auto border border-[#E4E4E7]">
                  <table class="w-full text-left text-xs font-sans whitespace-nowrap">
                    <thead class="bg-[#18181B] text-white font-display uppercase text-[10px]">
                      <tr>
                        <th class="p-3">Brand/Model</th>
                        <th class="p-3">Motor Specs</th>
                        <th class="p-3">Battery Tech</th>
                        <th class="p-3">Display</th>
                        <th class="p-3">Range</th>
                        <th class="p-3">Weight</th>
                        <th class="p-3">Material</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-[#F4F4F5] font-medium text-[#52525B]">
                      <tr>
                        <td class="p-3 font-bold text-[#18181B]">Hero Lectro Kinza</td>
                        <td class="p-3">250W Rear Hub BLDC</td>
                        <td class="p-3">5.8Ah IP67 Lithium</td>
                        <td class="p-3">LED Type</td>
                        <td class="p-3">35-40 km</td>
                        <td class="p-3">19 kg</td>
                        <td class="p-3">Steel</td>
                      </tr>
                      <tr>
                        <td class="p-3 font-bold text-[#18181B]">E-Trio I-Switch</td>
                        <td class="p-3">250W Rear Hub BLDC</td>
                        <td class="p-3">7.5Ah Lithium-Ion</td>
                        <td class="p-3">LCD Display</td>
                        <td class="p-3">35 km</td>
                        <td class="p-3">25 kg</td>
                        <td class="p-3">Steel</td>
                      </tr>
                      <tr>
                        <td class="p-3 font-bold text-[#18181B]">VanMoof S3</td>
                        <td class="p-3">250W-350W Hub</td>
                        <td class="p-3">504Wh Integrated</td>
                        <td class="p-3">Matrix Display</td>
                        <td class="p-3">60-150 km</td>
                        <td class="p-3">19 kg</td>
                        <td class="p-3">Aluminium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Indian Table -->
              <div class="space-y-3">
                <h3 class="font-display font-bold text-lg text-[#18181B] uppercase border-l-3 border-[#CCFF00] pl-3">
                  Indian EV Cycle Ecosystem Analysis
                </h3>
                
                <div class="overflow-x-auto border border-[#E4E4E7]">
                  <table class="w-full text-left text-xs font-sans whitespace-nowrap">
                    <thead class="bg-[#18181B] text-white font-display uppercase text-[10px]">
                      <tr>
                        <th class="p-3">Model</th>
                        <th class="p-3">Motor</th>
                        <th class="p-3">Battery</th>
                        <th class="p-3">Throttle</th>
                        <th class="p-3">Wheel Size</th>
                        <th class="p-3">Weight</th>
                        <th class="p-3">Price Target</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-[#F4F4F5] font-medium text-[#52525B]">
                      <tr>
                        <td class="p-3 font-bold text-[#18181B]">Trok ALLANT+ 8s</td>
                        <td class="p-3">250W Hub / 75Nm</td>
                        <td class="p-3">36V 4Ah Lithium</td>
                        <td class="p-3">No Throttle</td>
                        <td class="p-3">27.5" x 2.40"</td>
                        <td class="p-3">25.5 kg</td>
                        <td class="p-3 font-bold text-[#18181B]">Premium</td>
                      </tr>
                      <tr>
                        <td class="p-3 font-bold text-[#18181B]">Propella 7S</td>
                        <td class="p-3">250W Hub / 35Nm</td>
                        <td class="p-3">36V 7.5Ah Lithium</td>
                        <td class="p-3">Throttle</td>
                        <td class="p-3">28" x 2.10"</td>
                        <td class="p-3">16.8 kg</td>
                        <td class="p-3 font-bold text-[#18181B]">Affordable</td>
                      </tr>
                      <tr>
                        <td class="p-3 font-bold text-[#18181B]">Fido D11</td>
                        <td class="p-3">250W Hub / 40Nm</td>
                        <td class="p-3">36V 11.6Ah Lithium</td>
                        <td class="p-3">Throttle</td>
                        <td class="p-3">20" x 2.10"</td>
                        <td class="p-3">12 kg</td>
                        <td class="p-3 font-bold text-[#18181B]">Compact</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 5: GEOMETRY -->
          <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <div class="space-y-2">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                05. Engineering Specifications
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Engineering Geometry
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <!-- Left side: CAD Image -->
              <div class="lg:col-span-4 bg-[#FAFAFA] border border-[#E4E4E7] p-5">
                <div class="aspect-square bg-white overflow-hidden border border-[#F4F4F5] flex items-center justify-center">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoi1wweVGXJnyAU7AE9QxEFH9LiB2XrhedOb6HsAtRncUsJ8Bg0KwdTxQCoTLarNuwcvAhfoessdGuk2EZMfK5Vmjgdti3mOmXTUxsp4VWN1bER66XCBS9FTXDulJdJIOQR-gwnO5opcRVbE-u3NO3z9HoF5ZPHFZ0ZQIOeQicpXYPIqhENYI_5c-xgFigT1Ib_oDyRqtp_bAaXxnoFJ-2-Xc1LG2lAAD8_yDhUUT0umzir_t6ypiR"
                    alt="Engineering CAD Frame Geometry Drawing"
                    class="max-h-full max-w-full object-contain"
                  />
                </div>
                <div class="text-[9px] font-mono font-bold text-right text-[#71717A] mt-2 uppercase">
                  Technical Schematic Ref: B-012/2021
                </div>
              </div>

              <!-- Right side: New Multi-size Tables & Accessories -->
              <div class="lg:col-span-8 space-y-8">
                <!-- Main Geometry Matrix -->
                <div class="overflow-x-auto border border-[#E4E4E7] bg-white">
                  <table class="w-full text-left text-xs font-sans whitespace-nowrap border-collapse" id="geometry-table">
                    <thead class="bg-[#18181B] text-white font-display uppercase text-[10px]">
                      <tr>
                        <th class="p-3 text-left font-bold border-b border-[#E4E4E7]">SIZE</th>
                        <th class="p-3 text-center font-bold border-b border-[#E4E4E7]">47</th>
                        <th class="p-3 text-center font-bold border-b border-[#E4E4E7]">49</th>
                        <th class="p-3 text-center font-bold border-b border-[#E4E4E7]">51</th>
                        <th class="p-3 text-center font-bold border-b border-[#E4E4E7]">53</th>
                        <th class="p-3 text-center font-bold border-b border-[#E4E4E7]">55</th>
                        <th class="p-3 text-center font-bold border-b border-[#E4E4E7]">57</th>
                        <th class="p-3 text-center font-bold border-b border-[#E4E4E7]">60</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-[#F4F4F5] font-medium text-[#52525B] font-mono text-[11px]">
                      <tr class="hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">1 - SEAT TUBE (C-T)</td>
                        <td class="p-3 text-center">410</td>
                        <td class="p-3 text-center">440</td>
                        <td class="p-3 text-center">470</td>
                        <td class="p-3 text-center">490</td>
                        <td class="p-3 text-center">510</td>
                        <td class="p-3 text-center">530</td>
                        <td class="p-3 text-center">560</td>
                      </tr>
                      <tr class="bg-[#FAFAFA] hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">2 - TOP TUBE (EFF)</td>
                        <td class="p-3 text-center">514.8</td>
                        <td class="p-3 text-center">520.55</td>
                        <td class="p-3 text-center">537.9</td>
                        <td class="p-3 text-center">548.5</td>
                        <td class="p-3 text-center">563.7</td>
                        <td class="p-3 text-center">576</td>
                        <td class="p-3 text-center">590</td>
                      </tr>
                      <tr class="hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">3 - HEAD TUBE</td>
                        <td class="p-3 text-center">104</td>
                        <td class="p-3 text-center">112</td>
                        <td class="p-3 text-center">130</td>
                        <td class="p-3 text-center">145</td>
                        <td class="p-3 text-center">165</td>
                        <td class="p-3 text-center">182</td>
                        <td class="p-3 text-center">207.1</td>
                      </tr>
                      <tr class="bg-[#FAFAFA] hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">4 - CHAINSTAY</td>
                        <td class="p-3 text-center">405</td>
                        <td class="p-3 text-center">405</td>
                        <td class="p-3 text-center">405</td>
                        <td class="p-3 text-center">405</td>
                        <td class="p-3 text-center">408</td>
                        <td class="p-3 text-center">408</td>
                        <td class="p-3 text-center">408</td>
                      </tr>
                      <tr class="hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">5 - BB HEIGHT</td>
                        <td class="p-3 text-center text-neutral-400" colspan="7">271.5</td>
                      </tr>
                      <tr class="bg-[#FAFAFA] hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">6 - BB DROP</td>
                        <td class="p-3 text-center text-neutral-400" colspan="7">70</td>
                      </tr>
                      <tr class="hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">7 - WHEELBASE</td>
                        <td class="p-3 text-center">969.6</td>
                        <td class="p-3 text-center">967.58</td>
                        <td class="p-3 text-center">986.92</td>
                        <td class="p-3 text-center">984.77</td>
                        <td class="p-3 text-center">996.32</td>
                        <td class="p-3 text-center">1003.89</td>
                        <td class="p-3 text-center">1012.53</td>
                      </tr>
                      <tr class="bg-[#FAFAFA] hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">8 - HEAD ANGLE</td>
                        <td class="p-3 text-center">71°</td>
                        <td class="p-3 text-center">71.4°</td>
                        <td class="p-3 text-center">71.8°</td>
                        <td class="p-3 text-center">72.1°</td>
                        <td class="p-3 text-center">72.5°</td>
                        <td class="p-3 text-center">73°</td>
                        <td class="p-3 text-center">73.5°</td>
                      </tr>
                      <tr class="hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">9 - SEAT ANGLE</td>
                        <td class="p-3 text-center">73.5°</td>
                        <td class="p-3 text-center">73.5°</td>
                        <td class="p-3 text-center">73.5°</td>
                        <td class="p-3 text-center">73.5°</td>
                        <td class="p-3 text-center">73.2°</td>
                        <td class="p-3 text-center">73.2°</td>
                        <td class="p-3 text-center">73.2°</td>
                      </tr>
                      <tr class="bg-[#FAFAFA] hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">10 - STANDOVER</td>
                        <td class="p-3 text-center">708</td>
                        <td class="p-3 text-center">726</td>
                        <td class="p-3 text-center">751</td>
                        <td class="p-3 text-center">771</td>
                        <td class="p-3 text-center">791</td>
                        <td class="p-3 text-center">807</td>
                        <td class="p-3 text-center">835</td>
                      </tr>
                      <tr class="hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">11 - REACH</td>
                        <td class="p-3 text-center">365</td>
                        <td class="p-3 text-center">372</td>
                        <td class="p-3 text-center">380</td>
                        <td class="p-3 text-center">385</td>
                        <td class="p-3 text-center">391</td>
                        <td class="p-3 text-center">398</td>
                        <td class="p-3 text-center">404</td>
                      </tr>
                      <tr class="bg-[#FAFAFA] hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">12 - STACK</td>
                        <td class="p-3 text-center">506</td>
                        <td class="p-3 text-center">515</td>
                        <td class="p-3 text-center">533</td>
                        <td class="p-3 text-center">552</td>
                        <td class="p-3 text-center">572</td>
                        <td class="p-3 text-center">590</td>
                        <td class="p-3 text-center">616</td>
                      </tr>
                      <tr class="hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">13 - FORK LENGTH</td>
                        <td class="p-3 text-center text-neutral-400" colspan="7">375</td>
                      </tr>
                      <tr class="bg-[#FAFAFA] hover:bg-neutral-50 transition-colors">
                        <td class="p-3 text-left font-bold text-[#18181B] font-sans">RAKE</td>
                        <td class="p-3 text-center">53</td>
                        <td class="p-3 text-center">53</td>
                        <td class="p-3 text-center">53</td>
                        <td class="p-3 text-center">43</td>
                        <td class="p-3 text-center">43</td>
                        <td class="p-3 text-center">43</td>
                        <td class="p-3 text-center">43</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Accessory Sizing & Height Recommendations Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Component Sizing Section -->
                  <div class="space-y-3">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-[#18181B] border-l-2 border-[#18181B] pl-2">
                      Component Sizing Specification
                    </h4>
                    <div class="overflow-x-auto border border-[#E4E4E7] bg-white">
                      <table class="w-full text-left text-xs font-sans whitespace-nowrap border-separate border-spacing-y-0.5 p-1 bg-[#FAFAFA]">
                        <thead>
                          <tr>
                            <th class="p-2 text-left font-bold text-[#71717A] text-[10px] tracking-wider uppercase">SIZE</th>
                            <th class="p-2 text-center font-bold text-[#71717A] text-[10px] tracking-wider uppercase">CRANK</th>
                            <th class="p-2 text-center font-bold text-[#71717A] text-[10px] tracking-wider uppercase">STEM</th>
                            <th class="p-2 text-center font-bold text-[#71717A] text-[10px] tracking-wider uppercase">HANDLEBAR</th>
                          </tr>
                        </thead>
                        <tbody class="font-mono text-[11px] text-[#52525B]">
                          <tr>
                            <td class="p-2 font-bold text-left text-[#71717A] font-sans">47</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">170</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">90</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">400</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-bold text-left text-[#71717A] font-sans">49</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">170</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">100</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">400</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-bold text-left text-[#71717A] font-sans">51</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">170</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">100</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">420</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-bold text-left text-[#71717A] font-sans">53</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">170</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">110</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">420</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-bold text-left text-[#71717A] font-sans">55</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">172</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">110</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">420</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-bold text-left text-[#71717A] font-sans">57</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">172</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">110</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">440</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-bold text-left text-[#71717A] font-sans">60</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">175</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">120</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">440</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="italic text-[9px] text-[#A1A1AA] uppercase font-mono">* Handlebar width is centre-to-centre measurements</p>
                  </div>

                  <!-- Height Recommendation Section -->
                  <div class="space-y-3">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-[#18181B] border-l-2 border-[#18181B] pl-2">
                      Rider Height Recommendations
                    </h4>
                    <div class="overflow-x-auto border border-[#E4E4E7] bg-white">
                      <table class="w-full text-left text-xs font-sans whitespace-nowrap border-separate border-spacing-y-0.5 p-1 bg-[#FAFAFA]">
                        <thead>
                          <tr>
                            <th class="p-2 text-left font-bold text-[#71717A] text-[10px] tracking-wider uppercase">HEIGHT (CM)</th>
                            <th class="p-2 text-center font-bold text-[#71717A] text-[10px] tracking-wider uppercase">HEIGHT (IN)</th>
                            <th class="p-2 text-center font-bold text-[#71717A] text-[10px] tracking-wider uppercase">SIZE</th>
                          </tr>
                        </thead>
                        <tbody class="font-mono text-[11px] text-[#52525B]">
                          <tr>
                            <td class="p-2 font-bold text-left text-[#18181B] bg-white border border-[#F4F4F5]">155 - 160 cm</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">5'1" - 5'3"</td>
                            <td class="p-2 font-bold text-center text-[#71717A] font-sans">47</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-bold text-left text-[#18181B] bg-white border border-[#F4F4F5]">160 - 166 cm</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">5'3" - 5'5"</td>
                            <td class="p-2 font-bold text-center text-[#71717A] font-sans">49</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-bold text-left text-[#18181B] bg-white border border-[#F4F4F5]">167 - 172 cm</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">5'6" - 5'8"</td>
                            <td class="p-2 font-bold text-center text-[#71717A] font-sans">51</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-bold text-left text-[#18181B] bg-white border border-[#F4F4F5]">173 - 179 cm</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">5'8" - 5'10"</td>
                            <td class="p-2 font-bold text-center text-[#71717A] font-sans">53</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-bold text-left text-[#18181B] bg-white border border-[#F4F4F5]">180 - 185 cm</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">5'11" - 6'1"</td>
                            <td class="p-2 font-bold text-center text-[#71717A] font-sans">55</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-bold text-left text-[#18181B] bg-white border border-[#F4F4F5]">186 - 191 cm</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">6'1" - 6'3"</td>
                            <td class="p-2 font-bold text-center text-[#71717A] font-sans">57</td>
                          </tr>
                          <tr>
                            <td class="p-2 font-bold text-left text-[#18181B] bg-white border border-[#F4F4F5]">192 - 207 cm</td>
                            <td class="p-2 text-center bg-white border border-[#F4F4F5]">6'4" - 6'9"</td>
                            <td class="p-2 font-bold text-center text-[#71717A] font-sans">60</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="italic text-[9px] text-[#A1A1AA] text-right md:text-left uppercase font-mono">* Estimated measurements</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 6: ERGONOMICS & POSTURE -->
          <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-8">
            <div class="space-y-2">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                06. Human Factors & Physiology
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                Ergonomics & Posture
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <!-- Left side text & contact points -->
              <div class="lg:col-span-4 space-y-6">
                <p class="text-sm text-[#52525B] leading-relaxed">
                  An ergonomic bike setup aims to keep your centre of gravity over the middle of the bike – which is, depending on the design, often right in front of the seat.
                </p>

                <div class="p-5 bg-[#FAFAFA] border-l-4 border-[#18181B] space-y-3">
                  <h4 class="text-xs font-bold uppercase text-[#18181B]">Key Contact Points:</h4>
                  <ul class="space-y-2 text-xs font-semibold text-[#52525B]">
                    <li class="flex items-center gap-2">
                      <span class="w-1.5 h-1.5 bg-[#CCFF00] block"></span>
                      <span>Pelvis on the saddle</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="w-1.5 h-1.5 bg-[#CCFF00] block"></span>
                      <span>Hand on the handlebars</span>
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="w-1.5 h-1.5 bg-[#CCFF00] block"></span>
                      <span>Foot on the pedal</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Right side sequence -->
              <div class="lg:col-span-8 bg-[#FAFAFA] border border-[#E4E4E7] p-5 space-y-3">
                <h4 class="text-[10px] font-mono font-bold text-[#71717A] uppercase border-b border-[#E4E4E7] pb-2">
                  Posture Sequence Study
                </h4>
                <div class="aspect-video bg-white overflow-hidden border border-[#F4F4F5]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQb335cmz65kG0ISH3TTMTFOfEbfQnt-w_dl3NAtGB5OMvv2tTj2yE2C0QQKdu7QEcQB_vN8stc821-srbLTQTkPJoV0f2a_Cvkw-4VpIBANYs0SmuoFcmEkj180-3iYNTF5sjqvXw3HG0wxkB9APNvcMVkvA4q94o5jrNxjrc6aby8GuSSz81AorESWXLGmvjc4dkXoYpWmxT6C3jol4SwpAzUorJH1lrMO0R1BsHBNoFx1RjGk5L"
                    alt="Posture sequence kinematic joint analysis"
                    class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            <!-- Friction Points & Action Callout -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-[#F4F4F5]">
              <div class="md:col-span-8 p-5 bg-[#FAFAFA] border border-[#F4F4F5] space-y-4">
                <h4 class="font-display font-bold text-base text-[#18181B] uppercase">User Friction Points</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <span class="text-[10px] font-mono font-bold text-[#71717A] uppercase block">01. Visibility</span>
                    <p class="text-xs text-[#52525B]">Drivers often don't see cyclists in the dark, highlighting the need for active EV lighting.</p>
                  </div>
                  <div class="space-y-1">
                    <span class="text-[10px] font-mono font-bold text-[#71717A] uppercase block">02. Terrain</span>
                    <p class="text-xs text-[#52525B]">Poor road conditions lead to mechanical stresses on both frame and commuter joints.</p>
                  </div>
                  <div class="space-y-1">
                    <span class="text-[10px] font-mono font-bold text-[#71717A] uppercase block">03. Fatigue</span>
                    <p class="text-xs text-[#52525B]">Saddle pain and wrist compression occur over prolonged daily home-to-work routes.</p>
                  </div>
                  <div class="space-y-1">
                    <span class="text-[10px] font-mono font-bold text-[#71717A] uppercase block">04. Perception</span>
                    <p class="text-xs text-[#52525B]">Bicycling has been historically perceived as lower-status transport in developing cities.</p>
                  </div>
                </div>
              </div>

              <div class="md:col-span-4 bg-[#18181B] text-white p-5 flex flex-col justify-center items-center text-center space-y-3 border border-[#18181B]">
                <span class="text-2xl text-[#CCFF00]">⚠️</span>
                <p class="font-display font-bold text-sm uppercase tracking-wider text-[#CCFF00]">Safety First</p>
                <p class="text-xs text-[#A1A1AA] leading-relaxed">"Safety must be engineered as a core feature, not an accessory."</p>
              </div>
            </div>
          </section>

          <!-- SECTION 7: USER TRIAL DATA -->
          <section class="bg-white p-6 sm:p-8 border border-[#F4F4F5] space-y-6">
            <div class="space-y-2">
              <span class="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-[0.2em] font-display">
                07. Validation & Field Testing
              </span>
              <h2 class="font-display font-bold text-2xl sm:text-3xl text-[#18181B] uppercase tracking-tight">
                User Trial Data
              </h2>
              <p class="text-xs font-mono font-bold text-[#71717A] uppercase mt-1">Field Research / Primary Insights</p>
            </div>

            <!-- Questionnaire Table -->
            <div class="overflow-x-auto border border-[#E4E4E7]">
              <table class="w-full text-left text-xs font-sans whitespace-nowrap">
                <thead class="bg-[#18181B] text-white font-display uppercase text-[10px]">
                  <tr>
                    <th class="p-3">Name</th>
                    <th class="p-3 text-center">Age</th>
                    <th class="p-3 text-center">Weight</th>
                    <th class="p-3 text-center">Gender</th>
                    <th class="p-3 text-center">Prior Cycling?</th>
                    <th class="p-3 text-center">EV Exp?</th>
                    <th class="p-3">Subjective Feedback</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#F4F4F5] font-medium text-[#52525B]">
                  <tr>
                    <td class="p-3 font-bold text-[#18181B]">Darshan B.</td>
                    <td class="p-3 text-center">18-25</td>
                    <td class="p-3 text-center">80 kg</td>
                    <td class="p-3 text-center">Male</td>
                    <td class="p-3 text-center"><span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase">YES</span></td>
                    <td class="p-3 text-center"><span class="px-2 py-0.5 bg-red-50 text-red-700 text-[10px] font-bold uppercase">NO</span></td>
                    <td class="p-3 text-xs italic">"The ride is smooth but the throttle response felt aggressive at first."</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-bold text-[#18181B]">Maulik K.</td>
                    <td class="p-3 text-center">26-35</td>
                    <td class="p-3 text-center">80 kg</td>
                    <td class="p-3 text-center">Male</td>
                    <td class="p-3 text-center"><span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase">YES</span></td>
                    <td class="p-3 text-center"><span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase">YES</span></td>
                    <td class="p-3 text-xs italic">"Great acceleration button on the thumb. Level works well."</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-bold text-[#18181B]">Parth S.</td>
                    <td class="p-3 text-center">26-35</td>
                    <td class="p-3 text-center">75 kg</td>
                    <td class="p-3 text-center">Male</td>
                    <td class="p-3 text-center"><span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase">YES</span></td>
                    <td class="p-3 text-center"><span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase">YES</span></td>
                    <td class="p-3 text-xs italic">"Very comfortable seat posture. Visibility is excellent."</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- Back to Work Button Footer -->
          <div class="pt-6 border-t border-[#F4F4F5]">
            <button
              onclick="window.app.goBack()"
              class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-3 bg-[#18181B] text-white hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors cursor-pointer"
            >
              ${getIconSvg('arrow-left', 'w-4 h-4')}
              <span>Back to Works</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderCaseStudyViewSimplified() {
    if (!selectedProject) return '';
    const proj = selectedProject;

    return `
      <article class="min-h-screen bg-white text-[#18181B] pb-24 animate-fade-in">
        <!-- Floating Back Bar -->
        <div class="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#F4F4F5] px-4 sm:px-8 py-3 flex items-center justify-between">
          <button
            onclick="window.app.goBack()"
            class="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00] hover:bg-black transition-colors cursor-pointer"
          >
            ${getIconSvg('arrow-left', 'w-3.5 h-3.5 text-[#CCFF00]')}
            <span>Back to All Works</span>
          </button>

          <div class="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#71717A]">
            <span>${proj.category}</span>
            <span>/</span>
            <span class="text-[#18181B]">${proj.title}</span>
          </div>

          <button
            onclick="window.app.copyCaseStudyLink()"
            class="p-2 bg-[#FAFAFA] border border-[#F4F4F5] hover:border-[#18181B] text-[#18181B] transition-colors"
            title="Share case study link"
          >
            ${copiedLink ? getIconSvg('check', 'w-4 h-4 text-[#18181B]') : getIconSvg('share-2', 'w-4 h-4')}
          </button>
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
          <!-- Hero Header -->
          <header class="space-y-6">
            <div class="space-y-4">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#18181B] text-[#CCFF00]">
                  ${proj.category}
                </span>
              </div>

              <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div class="space-y-3 flex-1">
                  <h1 class="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#18181B] tracking-tight leading-[1.1] uppercase">
                    ${proj.title}
                  </h1>
                  <p class="text-base sm:text-lg text-[#52525B] font-sans leading-relaxed max-w-3xl">
                    ${proj.shortDescription}
                  </p>
                </div>
              </div>
            </div>

            <!-- Metadata Cards -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5 bg-white border border-[#F4F4F5]">
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Institution / Client</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">${proj.university || proj.client}</span>
                ${
                  (proj.faculty_advisor || proj.project_guide)
                    ? `<span class="text-[10px] text-[#71717A] font-medium tracking-normal block normal-case mt-0.5">(Faculty Advisor: ${proj.faculty_advisor || proj.project_guide})</span>`
                    : ''
                }
              </div>
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Design Team</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">${proj.designers || proj.role}</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Category</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">${proj.category}</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Year</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">${proj.year}</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-[#A1A1AA] uppercase tracking-widest block">Tools</span>
                <span class="text-xs font-bold text-[#18181B] uppercase tracking-wider mt-0.5 block">${proj.tools.slice(0, 3).join(', ')}</span>
              </div>
            </div>

            <!-- Hero Image -->
            <div class="relative aspect-[16/9] border border-[#E4E4E7] bg-[#18181B]">
              <img
                src="${proj.heroImage}"
                alt="${proj.title}"
                class="w-full h-full object-cover object-center"
              />
              <button
                onclick="window.app.openImageModal('${proj.heroImage}')"
                class="absolute bottom-4 right-4 p-2.5 bg-[#18181B] text-[#CCFF00] border border-[#CCFF00]/40 hover:bg-[#CCFF00] hover:text-[#18181B] transition-colors"
                title="Expand full screen"
              >
                ${getIconSvg('maximize-2', 'w-4 h-4')}
              </button>
            </div>
          </header>

          <!-- 21 Concept Storyboard & Process Gallery Section (Only for Feature Phone Concept) -->
          ${proj.id === 'tejas-feature-phone' ? `
          <section class="!mt-0 w-full p-0 m-0 border-0 flex flex-col gap-0 space-y-0 overflow-hidden font-sans">
            ${[
              'https://lh3.googleusercontent.com/d/1YIxl5HsDk2DB_HMl89vaDswsVfxz9rXX',
              '/src/assets/images/regenerated_image_1788534867728.webp',
              '/src/assets/images/regenerated_image_1788534869864.webp',
              '/src/assets/images/regenerated_image_1788534871598.webp',
              '/src/assets/images/regenerated_image_1788534872831.webp',
              '/src/assets/images/regenerated_image_1788534875456.webp',
              '/src/assets/images/regenerated_image_1788534877239.webp',
              '/src/assets/images/regenerated_image_1788534879285.webp',
              '/src/assets/images/regenerated_image_1788534880992.webp',
              '/src/assets/images/regenerated_image_1788534882356.webp',
              '/src/assets/images/regenerated_image_1788534884097.webp',
              '/src/assets/images/regenerated_image_1788534885697.webp',
              '/src/assets/images/regenerated_image_1788534887066.webp',
              '/src/assets/images/regenerated_image_1788534889012.webp',
              '/src/assets/images/regenerated_image_1788534890349.webp',
              '/src/assets/images/regenerated_image_1788534891985.webp',
              '/src/assets/images/regenerated_image_1788534894617.webp',
              '/src/assets/images/regenerated_image_1788534896149.webp',
              '/src/assets/images/regenerated_image_1788534898228.webp',
              '/src/assets/images/regenerated_image_1788534903963.webp',
              '/images/storyboard_frame_21.jpg'
            ].map((imgUrl, index) => {
              return `
                <div class="w-full overflow-hidden block m-0 p-0" style="aspect-ratio: 1280 / 537;">
                  <img 
                    src="${imgUrl}" 
                    alt="Process Frame ${index + 1}" 
                    class="w-full h-full object-cover object-center block"
                    referrerpolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              `;
            }).join('')}
          </section>
          ` : ''}
        </div>
      </article>
    `;
  }

  // MAIN RENDER APP FUNCTION
  function renderApp() {
    applyAccentColor();
    const appEl = document.getElementById('app');
    if (!appEl) return;

    let mainContent = '';

    if (currentTab === 'ebike-design' || (currentTab === 'case-study' && selectedProject && selectedProject.id === 'ebike-design')) {
      mainContent = renderEbikeDesignView();
    } else if (currentTab === 'case-study' && selectedProject) {
      mainContent = renderCaseStudyViewSimplified();
    } else if (currentTab === 'projects') {
      mainContent = renderProjectsTab();
    } else if (currentTab === 'about') {
      mainContent = `<div class="pt-8 sm:pt-12">${renderAboutSection()}</div>`;
    } else if (currentTab === 'skills') {
      mainContent = `<div class="pt-8 sm:pt-12">${renderSkillsSection()}</div>`;
    } else if (currentTab === 'experience') {
      mainContent = renderExperienceTimeline();
    } else if (currentTab === 'resume') {
      mainContent = renderResumeView();
    } else if (currentTab === 'contact') {
      mainContent = `<div class="pt-8 sm:pt-12">${renderContactView()}</div>`;
    } else {
      // Default Home View
      mainContent = `
        <div class="flex flex-col">
          ${siteSettings.sectionVisibility.hero ? renderHero() : ''}
          ${siteSettings.sectionVisibility.featured ? renderProjectGrid() : ''}
          ${siteSettings.sectionVisibility.awards ? renderAwardsSection() : ''}
          ${siteSettings.sectionVisibility.about ? renderAboutSection() : ''}
          ${siteSettings.sectionVisibility.skills ? renderSkillsSection() : ''}
          ${siteSettings.sectionVisibility.contact ? renderContactView() : ''}
        </div>
      `;
    }

    appEl.innerHTML = `
      <div class="min-h-screen flex flex-col bg-[#FAFAFA] text-[#18181B]">
        ${renderHeader()}
        <main class="flex-1">${mainContent}</main>
        ${renderFooter()}
        ${renderRedDotModal()}
        ${renderIndiaDesignModal()}
        ${renderKloveModal()}
        ${renderVisualCustomizerDrawer()}
        ${renderImageModal()}
      </div>
    `;

    // Re-initialize any Lucide icons if present
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }

  // --- PUBLIC CONTROLLER API ---
  window.app = {
    setTab,
    goBack,
    setProjectsFilter,
    selectProjectById: (id) => {
      const proj = PROJECTS_DATA.find((p) => p.id === id);
      if (proj) selectProject(proj);
    },
    openRedDotModal,
    closeRedDotModal,
    openIndiaDesignModal,
    closeIndiaDesignModal,
    openKloveModal,
    closeKloveModal,
    openCustomizer,
    closeCustomizer,
    toggleMobileMenu: () => {
      mobileMenuOpen = !mobileMenuOpen;
      renderApp();
    },
    get galleryLayout() { return galleryLayout; },
    setGalleryLayout: (layout) => {
      galleryLayout = layout;
      renderApp();
    },
    openImageModal: (url) => {
      selectedImageModal = url;
      renderApp();
    },
    closeImageModal: () => {
      selectedImageModal = null;
      renderApp();
    },
    copyCaseStudyLink: () => {
      try {
        navigator.clipboard.writeText(window.location.href);
        copiedLink = true;
        renderApp();
        setTimeout(() => {
          copiedLink = false;
          renderApp();
        }, 2000);
      } catch (e) {}
    },
    updateSetting: (key, val) => {
      siteSettings[key] = val;
      saveSiteSettings();
    },
    toggleSectionVisibility: (key, val) => {
      siteSettings.sectionVisibility[key] = val;
      saveSiteSettings();
    },
    resetSiteSettings,
    handleContactSubmit: (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! Your inquiry has been sent to Amit Kumar.');
      e.target.reset();
    },
  };

  // Initial Load
  document.addEventListener('DOMContentLoaded', renderApp);
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    renderApp();
  }
})();
