const SHARED_COMPONENTS = {
  getPromoBanner() {
    return `
      <div class="promo-banner" id="promo-banner">
        <div class="promo-banner-content">
          <p>Save 50% for 12 months—limited time offer. <a href="#">Get started today</a></p>
        </div>
        <button class="promo-banner-close" aria-label="Close banner"><i class="fa-solid fa-xmark"></i></button>
      </div>`;
  },

  getHeader() {
    return `
      <header class="main-header" id="main-header" style="position: sticky; top: 0; z-index: 1000;">
        <div class="header-container">
          <div class="header-left">
            <a href="index.html" class="logo" aria-label="Mailchimp Home">
              <img src="images/imgi_55_intuit-mc-rewards-text-dark_resized_compressed.png" alt="Intuit Mailchimp" class="logo-img" />
            </a>
            <nav class="main-nav" aria-label="Main navigation">
              <div class="nav-dropdown nav-dropdown-static">
                <button class="nav-dropdown-trigger" aria-expanded="false" aria-haspopup="true">
                  Solutions and Services <i class="fa-solid fa-chevron-down dropdown-icon"></i>
                </button>
                <div class="nav-dropdown-menu nav-dropdown-menu-mega" aria-hidden="true">
                  <!-- Mega menu content from index.html -->
                  <div class="mega-menu-container">
                    <div class="mega-menu-main">
                      <div class="mega-menu-header">
                        <h2 class="mega-menu-title">Solutions and Services</h2>
                        <a href="#" class="mega-menu-view-all">See what's new <i class="fa-solid fa-arrow-right"></i></a>
                      </div>
                      <div class="mega-menu-grid">
                        <div class="mega-menu-col">
                          <a href="#" class="mega-link-item"><div class="mega-link-icon"><i class="fa-regular fa-envelope"></i></div><div class="mega-link-text"><span class="mega-link-title">Email marketing</span><span class="mega-link-desc">Send personalized emails that convert</span></div></a>
                          <a href="#" class="mega-link-item"><div class="mega-link-icon"><i class="fa-solid fa-globe"></i></div><div class="mega-link-text"><span class="mega-link-title">Websites</span><span class="mega-link-desc">Create your branded web presence</span></div></a>
                          <a href="#" class="mega-link-item"><div class="mega-link-icon"><i class="fa-regular fa-thumbs-up"></i></div><div class="mega-link-text"><span class="mega-link-title">Social media marketing</span><span class="mega-link-desc">Amplify the conversation across multiple channels</span></div></a>
                        </div>
                        <div class="mega-menu-col">
                          <a href="#" class="mega-link-item"><div class="mega-link-icon"><i class="fa-solid fa-robot"></i></div><div class="mega-link-text"><span class="mega-link-title">Marketing automation</span><span class="mega-link-desc">Deliver the right message at the right time</span></div></a>
                          <a href="#" class="mega-link-item"><div class="mega-link-icon"><i class="fa-solid fa-chart-column"></i></div><div class="mega-link-text"><span class="mega-link-title">Reporting and analytics</span><span class="mega-link-desc">Track sales & performance</span></div></a>
                          <a href="#" class="mega-link-item"><div class="mega-link-icon"><i class="fa-solid fa-users-viewfinder"></i></div><div class="mega-link-text"><span class="mega-link-title">Audience management</span><span class="mega-link-desc">Target and segment customers</span></div></a>
                        </div>
                        <div class="mega-menu-col">
                          <a href="#" class="mega-link-item"><div class="mega-link-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></div><div class="mega-link-text"><span class="mega-link-title">AI marketing tools</span><span class="mega-link-desc">Say hello to your AI growth assistant</span></div></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nav-dropdown nav-dropdown-static">
                <button class="nav-dropdown-trigger">Integrations <i class="fa-solid fa-chevron-down dropdown-icon"></i></button>
              </div>
              <div class="nav-dropdown nav-dropdown-static">
                <button class="nav-dropdown-trigger">Resources <i class="fa-solid fa-chevron-down dropdown-icon"></i></button>
              </div>
              <a href="#" class="nav-link">Switch to Mailchimp</a>
            </nav>
          </div>
          <div class="header-right">
            <a href="tel:+18559841893" class="sales-link">Sales: +1 (855) 984-1893</a>
            <a href="#" class="nav-link">Pricing</a>
            <a href="why-mailchimp.html" class="btn btn-secondary btn-sm login-link">Log In</a>
            <button class="mobile-menu-btn" aria-label="Open menu"><span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span></button>
          </div>
        </div>
      </header>`;
  },

  getDrawer() {
    return `
      <aside class="side-drawer" id="side-drawer" aria-hidden="true">
        <div class="drawer-header"><button class="drawer-close-btn" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button></div>
        <div class="drawer-content">
          <ul class="drawer-nav">
            <li><a href="#" class="drawer-link">Solutions and Services <i class="fa-solid fa-chevron-right"></i></a></li>
            <li><a href="#" class="drawer-link">Integrations <i class="fa-solid fa-chevron-right"></i></a></li>
            <li><a href="#" class="drawer-link">Resources <i class="fa-solid fa-chevron-right"></i></a></li>
            <li><a href="#" class="drawer-link">Switch to Mailchimp</a></li>
            <li><a href="#" class="drawer-link">Pricing</a></li>
          </ul>
          <div class="drawer-auth">
            <a href="why-mailchimp.html" class="btn btn-secondary btn-full">Log In</a>
            <a href="#" class="btn btn-primary btn-full">Sign Up</a>
          </div>
        </div>
      </aside>
      <div class="drawer-overlay" id="drawer-overlay"></div>`;
  },

  getFooter() {
    return `
      <footer class="main-footer">
        <div class="footer-container">
          <div class="footer-grid">
            <div class="footer-col">
              <h4 class="footer-heading">Products</h4>
              <ul class="footer-links">
                <li><a href="why-mailchimp.html">Why Mailchimp?</a></li>
                <li><a href="gdpr.html">GDPR Compliance</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4 class="footer-heading">Company</h4>
              <ul class="footer-links">
                <li><a href="about.html">Our Story</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="index.html">Home</a></li>
              </ul>
            </div>
            <div class="footer-col footer-promo">
               <div class="promo-logo"><img src="https://mailchimp.com/ctf/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?w=260&q=70" alt="Visit Mailchimp Presents"></div>
               <p class="promo-text">Films, podcasts, and original series that celebrate the entrepreneurial spirit.</p>
               <a href="#" class="promo-link">Check it out <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="brand-footer">
          <div class="brand-container">
            <div class="footer-copyright-bar">
              <p class="copyright-text">©2001–2025 All Rights Reserved. Mailchimp® is a registered trademark.</p>
              <a href="#" class="chat-btn"><i class="fa-solid fa-message"></i> Chat with Sales</a>
            </div>
          </div>
        </div>
      </footer>`;
  },

  inject() {
    const headerPlaceholder = document.getElementById('header-sync');
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = this.getPromoBanner() + this.getHeader() + this.getDrawer();
      this.initHeaderLogic();
    }

    const footerPlaceholder = document.getElementById('footer-sync');
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = this.getFooter();
    }
  },

  initHeaderLogic() {
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    });

    document.querySelectorAll(".nav-dropdown-trigger").forEach((trigger) => {
      trigger.addEventListener("click", function(e) {
        e.stopPropagation();
        const dropdown = this.parentElement;
        const isOpen = dropdown.classList.contains("is-open");
        document.querySelectorAll(".nav-dropdown").forEach((d) => d.classList.remove("is-open"));
        if (!isOpen) dropdown.classList.add("is-open");
      });
    });

    document.addEventListener("click", () => {
      document.querySelectorAll(".nav-dropdown").forEach((d) => d.classList.remove("is-open"));
    });

    
    const drawer = document.getElementById("side-drawer");
    const overlay = document.getElementById("drawer-overlay");
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const closeBtn = document.querySelector(".drawer-close-btn");

    if (mobileBtn) mobileBtn.addEventListener("click", () => {
      drawer.classList.add("is-open");
      overlay.classList.add("is-visible");
      document.body.style.overflow = "hidden";
    });

    if (closeBtn) closeBtn.addEventListener("click", () => {
      drawer.classList.remove("is-open");
      overlay.classList.remove("is-visible");
      document.body.style.overflow = "";
    });

    if (overlay) overlay.addEventListener("click", () => {
      drawer.classList.remove("is-open");
      overlay.classList.remove("is-visible");
      document.body.style.overflow = "";
    });
  }
};

document.addEventListener('DOMContentLoaded', () => SHARED_COMPONENTS.inject());
