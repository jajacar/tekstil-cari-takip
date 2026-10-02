/**
 * TekstilCari - Müşteri Sipariş, Mal Satışı & Dövizli Cari Takip Sistemi
 * Çoklu Para Birimi (TL, USD, EUR), Ürün Miktarı, Birim Fiyat ve Canlı Bakiye Motoru
 */

// Storage Keys
const STORAGE_KEY_TEXTILE = 'TEKSTIL_CARI_V3_DATA';
const THEME_KEY = 'TEKSTIL_CARI_THEME';
const AUTH_TOKEN_KEY = 'TEKSTIL_AUTH_TOKEN';
const AUTH_USER_KEY = 'TEKSTIL_AUTH_USER';

// Initial Textile Sample Data (Authentic Industry Portfolios)
const INITIAL_TEXTILE_CUSTOMERS = [
  {
    id: "cust_1",
    name: "ZARA / Inditex Tedarik (Moda Konfeksiyon)",
    currency: "EUR",
    phone: "0212 555 10 20",
    contactPerson: "Ahmet Bey (Satınalma Md.)",
    address: "Güneşli Sanayi Cad. No:18 Bağcılar / İstanbul",
    notes: "30 Gün Vade, İhracat Paketleme, Askılı Koli Teslimatı",
    transactions: [
      {
        id: "tx_z1",
        type: "SHIPMENT",
        productName: "Organik Pamuk Baskılı T-Shirt",
        date: "2026-05-10",
        quantity: 3000,
        unit: "Adet",
        unitPrice: 4.50,
        currency: "EUR",
        amount: 13500,
        invoiceNo: "IRS-2026-0041",
        description: "S-M-L-XL Asortili %100 Pamuk Süprem Kumaş"
      },
      {
        id: "tx_z2",
        type: "PAYMENT",
        productName: "",
        date: "2026-05-20",
        amount: 10000,
        currency: "EUR",
        method: "Banka Havalesi (Swift)",
        ref: "Akbank Swift #99812",
        description: "1. Parti T-Shirt avans ödemesi"
      },
      {
        id: "tx_z3",
        type: "SHIPMENT",
        productName: "Oversize Fermuarlı Sweatshirt 3 İplik",
        date: "2026-06-02",
        quantity: 1200,
        unit: "Adet",
        unitPrice: 12.00,
        currency: "EUR",
        amount: 14400,
        invoiceNo: "IRS-2026-0089",
        description: "Şardonlu 320 gr Kumaş, Metal YKK Fermuarlı"
      },
      {
        id: "tx_z4",
        type: "PAYMENT",
        productName: "",
        date: "2026-06-15",
        amount: 12500,
        currency: "EUR",
        method: "Banka Havalesi / EFT",
        ref: "Garanti BBVA #7712",
        description: "Ara hakediş / mal bedeli transferi"
      },
      {
        id: "tx_z5",
        type: "SHIPMENT",
        productName: "Polo Yaka Pike Tişört Nakışlı",
        date: "2026-06-25",
        quantity: 2000,
        unit: "Adet",
        unitPrice: 6.80,
        currency: "EUR",
        amount: 13600,
        invoiceNo: "IRS-2026-0120",
        description: "Göğüs nakış logolu, özel ribana yakalı"
      }
    ]
  },
  {
    id: "cust_2",
    name: "Schmidt Fashion GmbH (Almanya İhracat)",
    currency: "USD",
    phone: "+49 30 901820",
    contactPerson: "Hans Schmidt",
    address: "Kaiserstraße 44, Frankfurt am Main, Germany",
    notes: "Hava Kargo Sevkiyatı, Euro Dolar Kur Anlaşmalı",
    transactions: [
      {
        id: "tx_s1",
        type: "SHIPMENT",
        productName: "Denim Kot Pantolon Taşlanmış 12oz",
        date: "2026-04-18",
        quantity: 2500,
        unit: "Adet",
        unitPrice: 11.00,
        currency: "USD",
        amount: 27500,
        invoiceNo: "EXP-2026-101",
        description: "Yıkamalı Vintage Taşlama Slim Fit Erkek Jean"
      },
      {
        id: "tx_s2",
        type: "PAYMENT",
        productName: "",
        date: "2026-05-05",
        amount: 20000,
        currency: "USD",
        method: "Banka Havalesi (Swift)",
        ref: "Deutsche Bank Swift #D8892",
        description: "Denim siparişi 1. taksit ödemesi"
      },
      {
        id: "tx_s3",
        type: "SHIPMENT",
        productName: "Gabardin Çok Cepli Kargo Pantolon",
        date: "2026-05-22",
        quantity: 1800,
        unit: "Adet",
        unitPrice: 9.50,
        currency: "USD",
        amount: 17100,
        invoiceNo: "EXP-2026-135",
        description: "%100 Pamuk Gabardin Haki ve Siyah Renk"
      },
      {
        id: "tx_s4",
        type: "PAYMENT",
        productName: "",
        date: "2026-06-10",
        amount: 15000,
        currency: "USD",
        method: "Banka Havalesi (Swift)",
        ref: "Deutsche Bank Swift #D9102",
        description: "Kargo pantolon hakediş ödemesi"
      }
    ]
  },
  {
    id: "cust_3",
    name: "Özkanlar Toptan Tekstil (Merter / İç Piyasa)",
    currency: "TL",
    phone: "0212 637 44 88",
    contactPerson: "Murat Özkan",
    address: "Merter Tekstil Merkezi No:42 Güngören / İstanbul",
    notes: "Haftalık Cuma günleri vadeli çek/nakit teslim",
    transactions: [
      {
        id: "tx_o1",
        type: "SHIPMENT",
        productName: "2 İplik Şardonlu Eşofman Altı",
        date: "2026-05-02",
        quantity: 4000,
        unit: "Adet",
        unitPrice: 185.00,
        currency: "TL",
        amount: 740000,
        invoiceNo: "IRS-2026-302",
        description: "Paçası lastikli, cepli eşofman altı toptan parti"
      },
      {
        id: "tx_o2",
        type: "PAYMENT",
        productName: "",
        date: "2026-05-10",
        amount: 400000,
        currency: "TL",
        method: "Banka Havalesi / EFT",
        ref: "Vakıfbank #4401",
        description: "Peşinat ve hammadde avansı"
      },
      {
        id: "tx_o3",
        type: "SHIPMENT",
        productName: "Likralı V Yaka Basic Tişört",
        date: "2026-05-28",
        quantity: 6000,
        unit: "Adet",
        unitPrice: 65.00,
        currency: "TL",
        amount: 390000,
        invoiceNo: "IRS-2026-348",
        description: "%95 Pamuk %5 Elastan 6 farklı renk"
      },
      {
        id: "tx_o4",
        type: "PAYMENT",
        productName: "",
        date: "2026-06-05",
        amount: 350000,
        currency: "TL",
        method: "Müşteri Çeki",
        ref: "Garanti Çek #00492 - Vade: 30.06.2026",
        description: "Vadesi gelen çek tahsilatı"
      },
      {
        id: "tx_o5",
        type: "PAYMENT",
        productName: "",
        date: "2026-06-28",
        amount: 380000,
        currency: "TL",
        method: "Banka Havalesi / EFT",
        ref: "Vakıfbank #5910",
        description: "Hesap kesin kapanış bakiyesi (Bakiye sıfırlandı)"
      }
    ]
  },
  {
    id: "cust_4",
    name: "Trend Butik Mağazacılık A.Ş.",
    currency: "TL",
    phone: "0532 999 44 11",
    contactPerson: "Selin Hanım",
    address: "Teşvikiye Cad. No:88 Nişantaşı / İstanbul",
    notes: "Yeni Sezon Kapsül Koleksiyon Siparişleri",
    transactions: [
      {
        id: "tx_t1",
        type: "SHIPMENT",
        productName: "Keten Karışımlı Oversize Blazer Ceket",
        date: "2026-05-15",
        quantity: 800,
        unit: "Adet",
        unitPrice: 450.00,
        currency: "TL",
        amount: 360000,
        invoiceNo: "IRS-2026-512",
        description: "Astar ve düğme detaylı lüks kadın blazer"
      },
      {
        id: "tx_t2",
        type: "PAYMENT",
        productName: "",
        date: "2026-05-25",
        amount: 250000,
        currency: "TL",
        method: "Kredi Kartı / Mail Order",
        ref: "POS Onay #49102",
        description: "Blazer ceket 1. parti ödemesi"
      },
      {
        id: "tx_t3",
        type: "SHIPMENT",
        productName: "Poplin Dokuma Yazlık Gömlek",
        date: "2026-06-12",
        quantity: 1500,
        unit: "Adet",
        unitPrice: 190.00,
        currency: "TL",
        amount: 285000,
        invoiceNo: "IRS-2026-559",
        description: "Çizgili ve düz renk poplin gömlek koleksiyonu"
      }
    ]
  }
];

// Application State
let appState = {
  authToken: localStorage.getItem(AUTH_TOKEN_KEY) || sessionStorage.getItem(AUTH_TOKEN_KEY) || null,
  currentUser: localStorage.getItem(AUTH_USER_KEY) || sessionStorage.getItem(AUTH_USER_KEY) || null,
  isAuthenticated: false,
  customers: [],
  activeCustomerId: 'ALL',       // 'ALL' or specific customerId (for tabs filter)
  activeDetailCustomerId: null,  // null (dashboard) or customerId (detailed ledger view)
  filterSearch: '',
  filterStatus: 'ALL',           // 'ALL', 'UNPAID', 'PAID'
  filterCurrency: 'ALL',         // 'ALL', 'TL', 'USD', 'EUR'
  txnFilterType: 'ALL',          // 'ALL', 'SHIPMENT', 'PAYMENT'
  lastModified: 0,
  isServerOnline: false,
  lanUrl: 'http://192.168.1.105:8085',
  settings: {
    brandTitle: 'TekstilCari',
    brandSubtitle: 'Müşteri Sipariş, Mal Satışı & Dövizli Cari Takip',
    currencySymbol: '₺',
    theme: 'theme-amber',
    customLabels: {
      kpiContract: 'Toplam Mal Satışı (Sevk)',
      kpiPaid: 'Toplam Alınan Ödeme',
      kpiRemaining: 'Kalan Açık Bakiye (Alacak)',
      kpiCount: 'Aktif Müşteri / Firma',
      projectTabsTitle: 'Müşteriler / Firmalar:',
      sectionTitle: 'Tekstil Müşteri Cari Kartları',
      colContractor: 'Müşteri / Firma Adı',
      colRole: 'Yetkili / Temsilci',
      colProject: 'Para Birimi',
      colPhone: 'Telefon',
      colContract: 'Toplam Mal Satışı',
      colPaid: 'Alınan Ödeme',
      colRemaining: 'Kalan Bakiye',
      colStatus: 'Hesap Durumu'
    }
  }
};

// =========================================================
// UTILITIES & CURRENCY FORMATTERS
// =========================================================

function getCurrencySymbol(curr) {
  if (curr === 'USD') return '$';
  if (curr === 'EUR') return '€';
  return '₺';
}

function formatCurrency(val, currency = 'TL') {
  const sym = getCurrencySymbol(currency);
  const num = Number(val || 0);
  return `${sym} ${num.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
  }
  return dateStr;
}

function getTodayDateStr() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Calculate customer's financial balance & totals
function calculateCustomerTotals(customer) {
  let totalShipment = 0;
  let totalPaid = 0;

  if (customer && Array.isArray(customer.transactions)) {
    customer.transactions.forEach(t => {
      const amt = Number(t.amount || 0);
      if (t.type === 'SHIPMENT') {
        totalShipment += amt;
      } else if (t.type === 'PAYMENT') {
        totalPaid += amt;
      }
    });
  }

  const remaining = totalShipment - totalPaid;
  const percentPaid = totalShipment > 0 
    ? Math.min(100, Math.round((totalPaid / totalShipment) * 100)) 
    : (totalPaid > 0 ? 100 : 0);

  return {
    totalShipment,
    totalPaid,
    remaining,
    percentPaid,
    isPaidOff: remaining <= 0,
    currency: customer.currency || 'TL'
  };
}

// =========================================================
// DATA PERSISTENCE & SYNC (SQLite + LocalStorage)
// =========================================================

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY_TEXTILE);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      appState.customers = parsed.customers || [];
      if (parsed.settings) {
        appState.settings = Object.assign({}, appState.settings, parsed.settings);
      }
    } catch (e) {
      console.error('Yedek verisi okunamadı:', e);
    }
  }

  // Güvenlik Kilidi: Eğer liste boşsa zengin örnek tekstil portföyünü yükle
  if (!appState.customers || appState.customers.length === 0) {
    appState.customers = JSON.parse(JSON.stringify(INITIAL_TEXTILE_CUSTOMERS));
  }
  saveData();

  applySettings();
  initServerSync();
}

function saveData() {
  localStorage.setItem(STORAGE_KEY_TEXTILE, JSON.stringify({
    customers: appState.customers,
    settings: appState.settings
  }));

  if (appState.isServerOnline) {
    pushDataToServer();
  }
}

async function pushDataToServer() {
  if (!appState.authToken) return;
  try {
    const res = await fetch('/api/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${appState.authToken}`
      },
      body: JSON.stringify({
        customers: appState.customers,
        settings: appState.settings
      })
    });
    if (res.status === 401) {
      showLoginScreen();
      return;
    }
    if (res.ok) {
      const result = await res.json();
      appState.lastModified = result.lastModified;
    }
  } catch (e) {
    console.error('Sunucuya kaydetme hatası:', e);
  }
}

async function initServerSync() {
  const badge = document.getElementById('networkStatusBadge');
  const badgeText = document.getElementById('networkStatusText');

  try {
    // Ağ ve IP bilgisini al
    const netRes = await fetch('/api/network');
    if (netRes.ok) {
      const netInfo = await netRes.json();
      appState.lanUrl = netInfo.lanUrl;
      const shareInput = document.getElementById('shareLanUrl');
      if (shareInput) shareInput.value = netInfo.lanUrl;
      const shareModalText = document.getElementById('shareModalUrlText');
      if (shareModalText) shareModalText.textContent = netInfo.lanUrl;
    }

    // Ortak SQLite veritabanından güncel veriyi çek (Yetkili)
    const dataRes = await fetch('/api/data', {
      headers: {
        'Authorization': `Bearer ${appState.authToken || ''}`
      }
    });

    if (dataRes.status === 401) {
      showLoginScreen();
      return;
    }

    if (dataRes.ok) {
      const serverData = await dataRes.json();
      if (serverData && Array.isArray(serverData.customers) && serverData.customers.length > 0) {
        appState.customers = serverData.customers;
        if (serverData.settings && Object.keys(serverData.settings).length > 0) {
          appState.settings = Object.assign({}, appState.settings, serverData.settings);
        }
        appState.lastModified = serverData.lastModified || Date.now();
        applySettings();
        localStorage.setItem(STORAGE_KEY_TEXTILE, JSON.stringify({
          customers: appState.customers,
          settings: appState.settings
        }));
      } else {
        await pushDataToServer();
      }

      appState.isServerOnline = true;
      if (badge) {
        badge.className = 'network-badge online';
        badgeText.textContent = 'Canlı Senkronize';
      }
      renderDashboard();
    }
  } catch (err) {
    console.log('Sunucu bulunamadı, yerel modda devam ediliyor:', err);
    appState.isServerOnline = false;
    if (badge) {
      badge.className = 'network-badge offline';
      badgeText.textContent = 'Yerel Mod';
    }
  }

  startLivePolling();
}

function startLivePolling() {
  setInterval(async () => {
    if (!appState.isServerOnline || !appState.authToken) return;
    try {
      const res = await fetch('/api/status');
      if (res.ok) {
        const status = await res.json();
        if (status.lastModified && status.lastModified > appState.lastModified) {
          const dataRes = await fetch('/api/data', {
            headers: {
              'Authorization': `Bearer ${appState.authToken}`
            }
          });
          if (dataRes.status === 401) {
            showLoginScreen();
            return;
          }
          if (dataRes.ok) {
            const freshData = await dataRes.json();
            appState.customers = freshData.customers || [];
            if (freshData.settings && Object.keys(freshData.settings).length > 0) {
              appState.settings = Object.assign({}, appState.settings, freshData.settings);
              applySettings();
            }
            appState.lastModified = freshData.lastModified;

            localStorage.setItem(STORAGE_KEY_TEXTILE, JSON.stringify({
              customers: appState.customers,
              settings: appState.settings
            }));

            if (appState.activeDetailCustomerId) {
              renderLedgerDetail();
            } else {
              renderDashboard();
            }
            showToast("Ofisteki arkadaşınızdan yeni güncelleme alındı!", "info");
          }
        }
      }
    } catch (e) {
      // Ağ dalgalanması
    }
  }, 2200);
}

// =========================================================
// AYARLAR & TEMA YÖNETİMİ
// =========================================================

function applySettings() {
  const s = appState.settings || {};

  // Başlıklar
  const bTitle = s.brandTitle || 'TekstilCari';
  const bSubtitle = s.brandSubtitle || 'Müşteri Sipariş, Mal Satışı & Dövizli Cari Takip';

  const titleEl = document.getElementById('displayBrandTitle');
  if (titleEl) {
    if (bTitle.includes('Cari') && !bTitle.includes('<span>')) {
      titleEl.innerHTML = bTitle.replace('Cari', '<span>Cari</span>');
    } else {
      titleEl.textContent = bTitle;
    }
  }
  const pageTitle = document.getElementById('htmlPageTitle');
  if (pageTitle) pageTitle.textContent = `${bTitle} - ${bSubtitle}`;

  const subEl = document.getElementById('displayBrandSubtitle');
  if (subEl) subEl.textContent = bSubtitle;

  const printTitle = document.getElementById('printCompanyTitle');
  if (printTitle) printTitle.textContent = bTitle.toUpperCase() + ' TEKSTİL';

  const printSub = document.getElementById('printCompanySubtitle');
  if (printSub) printSub.textContent = bSubtitle.toUpperCase();

  // Tema
  applyTheme(s.theme || 'theme-amber');

  // Özelleştirilebilir Başlıklar & Sütunlar
  const labels = s.customLabels || {};
  if (labels.kpiContract) updateLabelText('lblKpiContract', labels.kpiContract);
  if (labels.kpiPaid) updateLabelText('lblKpiPaid', labels.kpiPaid);
  if (labels.kpiRemaining) updateLabelText('lblKpiRemaining', labels.kpiRemaining);
  if (labels.kpiCount) updateLabelText('lblKpiCount', labels.kpiCount);
  if (labels.projectTabsTitle) updateLabelText('lblProjectTabsTitle', labels.projectTabsTitle);
  if (labels.sectionTitle) updateLabelText('lblSectionTitle', labels.sectionTitle);

  if (labels.colContractor) updateLabelText('colHeader_contractor', labels.colContractor);
  if (labels.colRole) updateLabelText('colHeader_role', labels.colRole);
  if (labels.colProject) updateLabelText('colHeader_project', labels.colProject);
  if (labels.colPhone) updateLabelText('colHeader_phone', labels.colPhone);
  if (labels.colContract) updateLabelText('colHeader_contract', labels.colContract);
  if (labels.colPaid) updateLabelText('colHeader_paid', labels.colPaid);
  if (labels.colRemaining) updateLabelText('colHeader_remaining', labels.colRemaining);
  if (labels.colStatus) updateLabelText('colHeader_status', labels.colStatus);

  // Form alanlarını doldur
  const inpBTitle = document.getElementById('cfgBrandTitle');
  if (inpBTitle) inpBTitle.value = bTitle;
  const inpBSub = document.getElementById('cfgBrandSubtitle');
  if (inpBSub) inpBSub.value = bSubtitle;

  for (const [k, v] of Object.entries(labels)) {
    const inp = document.getElementById('lblInp_' + k);
    if (inp) inp.value = v;
  }
}

function updateLabelText(elId, text) {
  const el = document.getElementById(elId);
  if (el) {
    if (elId === 'lblProjectTabsTitle') {
      el.innerHTML = `<i class="fa-solid fa-users-line text-gold"></i> ${escapeHtml(text)}`;
      return;
    }
    if (elId === 'lblSectionTitle') {
      el.innerHTML = `<i class="fa-solid fa-address-book text-gold"></i> ${escapeHtml(text)}`;
      return;
    }
    el.textContent = text;
  }
}

function applyTheme(themeName) {
  document.body.classList.remove('theme-amber', 'theme-navy', 'theme-emerald', 'theme-light');
  document.body.classList.add(themeName);

  if (appState.settings) {
    appState.settings.theme = themeName;
  }

  document.querySelectorAll('.theme-card').forEach(card => {
    const isThis = card.dataset.theme === themeName;
    card.classList.toggle('active', isThis);
    const check = card.querySelector('.theme-check');
    if (check) check.classList.toggle('hide', !isThis);
  });
}

function openSettingsModalTab(tabTarget = 'brand') {
  openModal('modalSettings');
  let targetPaneId = 'setPaneBrand';
  if (tabTarget === 'themes') targetPaneId = 'setPaneThemes';
  if (tabTarget === 'labels') targetPaneId = 'setPaneLabels';
  if (tabTarget === 'cloud') targetPaneId = 'setPaneCloud';

  document.querySelectorAll('.settings-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === targetPaneId);
  });
  document.querySelectorAll('.settings-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === targetPaneId);
  });
}

// Quick Rename Modal Engine (Herhangi bir başlığı veya ismi tek tıkla değiştirir)
function openQuickRename(targetKey, defaultVal) {
  let current = defaultVal || '';
  let modalTitle = 'İsmi Değiştir';

  if (targetKey === 'displayBrandTitle') {
    current = (appState.settings && appState.settings.brandTitle) || 'TekstilCari';
    modalTitle = 'Program / Firma Başlığı';
  } else if (targetKey === 'displayBrandSubtitle') {
    current = (appState.settings && appState.settings.brandSubtitle) || 'Müşteri Sipariş, Mal Satışı & Dövizli Cari Takip';
    modalTitle = 'Program Alt Başlığı';
  } else if (targetKey.startsWith('customer_')) {
    const cId = targetKey.replace('customer_', '');
    const c = appState.customers.find(x => x.id === cId);
    if (c) {
      current = c.name;
      modalTitle = `"${c.name}" Müşteri Adı`;
    }
  } else {
    const el = document.getElementById(targetKey);
    if (el) current = el.textContent.trim();
    modalTitle = `"${current || defaultVal}" Başlığı`;
  }

  const keyInput = document.getElementById('quickRenameKey');
  const labelPrompt = document.getElementById('quickRenameLabelPrompt');
  const valInput = document.getElementById('quickRenameInput');
  const titleEl = document.getElementById('modalQuickRenameTitle');

  if (keyInput) keyInput.value = targetKey;
  if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-pen-to-square text-gold"></i> ${modalTitle}`;
  if (labelPrompt) labelPrompt.textContent = `Yeni Başlık / İsim:`;
  if (valInput) valInput.value = current;

  openModal('modalQuickRename');
  setTimeout(() => {
    if (valInput) {
      valInput.focus();
      valInput.select();
    }
  }, 100);
}

// Toast Notifications
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = 'fa-check-circle text-green';
  if (type === 'danger') icon = 'fa-circle-exclamation text-red';
  if (type === 'info') icon = 'fa-circle-info text-gold';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

// =========================================================
// VIEW NAVIGATION & DASHBOARD RENDER
// =========================================================

function showDashboardView() {
  document.getElementById('dashboardView').classList.add('active');
  document.getElementById('ledgerDetailView').classList.remove('active');
  appState.activeDetailCustomerId = null;
  renderDashboard();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showLedgerDetailView(customerId) {
  appState.activeDetailCustomerId = customerId;
  appState.txnFilterType = 'ALL';
  document.getElementById('dashboardView').classList.remove('active');
  document.getElementById('ledgerDetailView').classList.add('active');
  renderLedgerDetail();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Dashboard View
function renderDashboard() {
  renderCustomerTabs();
  renderActiveCustomerBanner();

  // Filter customers by selected tab
  let filteredCustomers = appState.customers;
  if (appState.activeCustomerId !== 'ALL') {
    filteredCustomers = appState.customers.filter(c => c.id === appState.activeCustomerId);
  }

  // Calculate KPIs
  if (appState.activeCustomerId !== 'ALL' && filteredCustomers.length === 1) {
    // Single Customer Mode: Show exact currency
    const c = filteredCustomers[0];
    const t = calculateCustomerTotals(c);

    document.getElementById('totalContractVal').textContent = formatCurrency(t.totalShipment, c.currency);
    document.getElementById('totalPaidVal').textContent = formatCurrency(t.totalPaid, c.currency);
    document.getElementById('totalRemainingVal').textContent = formatCurrency(t.remaining, c.currency);
    document.getElementById('contractorCountVal').textContent = (c.transactions || []).length + " İşlem";

    document.getElementById('totalContractBreakdown').innerHTML = `<span class="kpi-sub"><i class="fa-solid fa-truck-ramp-box"></i> Bu müşteriye yapılan toplam sevkiyat</span>`;
    document.getElementById('totalPaidBreakdown').innerHTML = `<span class="kpi-sub"><i class="fa-solid fa-circle-check"></i> Bu müşteriden yapılan toplam tahsilat</span>`;
    document.getElementById('totalRemainingBreakdown').innerHTML = `<span class="kpi-sub"><i class="fa-solid fa-scale-unbalanced"></i> Tahsil edilecek net alacak</span>`;
  } else {
    // All Customers Mode: Calculate currency breakdowns
    let sumTL = { shipment: 0, paid: 0, remaining: 0 };
    let sumUSD = { shipment: 0, paid: 0, remaining: 0 };
    let sumEUR = { shipment: 0, paid: 0, remaining: 0 };

    appState.customers.forEach(c => {
      const t = calculateCustomerTotals(c);
      const curr = (c.currency || 'TL').toUpperCase();
      if (curr === 'USD') {
        sumUSD.shipment += t.totalShipment;
        sumUSD.paid += t.totalPaid;
        sumUSD.remaining += t.remaining;
      } else if (curr === 'EUR') {
        sumEUR.shipment += t.totalShipment;
        sumEUR.paid += t.totalPaid;
        sumEUR.remaining += t.remaining;
      } else {
        sumTL.shipment += t.totalShipment;
        sumTL.paid += t.totalPaid;
        sumTL.remaining += t.remaining;
      }
    });

    // Primary display in TL or dominant currency, with detailed breakdown below
    document.getElementById('totalContractVal').textContent = formatCurrency(sumTL.shipment, 'TL');
    document.getElementById('totalContractBreakdown').innerHTML = `
      <span class="kpi-curr-item" title="Dolar Satışı">$ ${sumUSD.shipment.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
      <span class="kpi-curr-item" title="Euro Satışı">€ ${sumEUR.shipment.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
    `;

    document.getElementById('totalPaidVal').textContent = formatCurrency(sumTL.paid, 'TL');
    document.getElementById('totalPaidBreakdown').innerHTML = `
      <span class="kpi-curr-item" title="Dolar Tahsilat">$ ${sumUSD.paid.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
      <span class="kpi-curr-item" title="Euro Tahsilat">€ ${sumEUR.paid.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
    `;

    document.getElementById('totalRemainingVal').textContent = formatCurrency(sumTL.remaining, 'TL');
    document.getElementById('totalRemainingBreakdown').innerHTML = `
      <span class="kpi-curr-item text-red" title="Kalan Dolar Alacağı">$ ${sumUSD.remaining.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
      <span class="kpi-curr-item text-red" title="Kalan Euro Alacağı">€ ${sumEUR.remaining.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
    `;

    document.getElementById('contractorCountVal').textContent = appState.customers.length;
  }

  // Apply search & status & currency filter
  let displayList = filteredCustomers.filter(c => {
    const q = appState.filterSearch.toLowerCase().trim();
    const matchSearch = !q || 
      c.name.toLowerCase().includes(q) || 
      (c.contactPerson && c.contactPerson.toLowerCase().includes(q)) || 
      (c.phone && c.phone.includes(q)) ||
      (c.transactions && c.transactions.some(t => t.productName && t.productName.toLowerCase().includes(q)));

    const totals = calculateCustomerTotals(c);
    let matchStatus = true;
    if (appState.filterStatus === 'UNPAID') matchStatus = totals.remaining > 0;
    if (appState.filterStatus === 'PAID') matchStatus = totals.remaining <= 0;

    let matchCurrency = true;
    if (appState.filterCurrency !== 'ALL') {
      matchCurrency = (c.currency || 'TL').toUpperCase() === appState.filterCurrency;
    }

    return matchSearch && matchStatus && matchCurrency;
  });

  renderCustomerCards(displayList);
  renderCustomerTable(displayList);
}

// Render Customer Tabs Bar
function renderCustomerTabs() {
  const container = document.getElementById('projectTabsList');
  if (!container) return;
  let tabsHtml = '';

  // "Tüm Müşteriler (Genel)" Tab
  const isAllActive = appState.activeCustomerId === 'ALL';
  tabsHtml += `
    <div class="project-tab-item ${isAllActive ? 'active' : ''}">
      <button class="project-tab-btn" onclick="selectCustomerTab('ALL')" title="Tüm müşteriler ve genel portföy">
        <i class="fa-solid fa-users"></i> <span>Tüm Müşteriler</span> 
        <span class="tab-badge">${appState.customers.length}</span>
      </button>
    </div>
  `;

  // Each individual Customer tab with direct micro-rename pencil icon
  appState.customers.forEach(c => {
    const isActive = appState.activeCustomerId === c.id;
    const currBadge = getCurrencySymbol(c.currency);
    const txnCount = (c.transactions || []).length;

    tabsHtml += `
      <div class="project-tab-item ${isActive ? 'active' : ''}">
        <button class="project-tab-btn" onclick="selectCustomerTab('${c.id}')" title="Bu müşteriye geç: ${escapeHtml(c.name)}">
          <i class="fa-solid fa-building"></i> <span>${escapeHtml(c.name)}</span>
          <span class="badge-curr badge-curr-${(c.currency || 'TL').toLowerCase()}">${currBadge}</span>
          <span class="tab-badge">${txnCount}</span>
        </button>
        <button class="tab-micro-edit" onclick="event.stopPropagation(); openQuickRename('customer_${c.id}', '${escapeHtml(c.name)}')" title="Bu Müşterinin / Sekmenin Adını Değiştir">
          <i class="fa-solid fa-pen"></i>
        </button>
      </div>
    `;
  });

  container.innerHTML = tabsHtml;
}

// Switch Customer Tab
function selectCustomerTab(customerId) {
  appState.activeCustomerId = customerId;
  renderDashboard();
}

// Render Active Customer Banner
function renderActiveCustomerBanner() {
  const bannerTitle = document.getElementById('bannerProjectTitle');
  const bannerBadge = document.getElementById('bannerProjectCountBadge');
  const bannerDesc = document.getElementById('bannerProjectDesc');
  const actionsContainer = document.getElementById('activeProjectActions');

  if (appState.activeCustomerId === 'ALL') {
    bannerTitle.textContent = 'Tüm Tekstil Müşterileri (Genel Görünüm)';
    bannerBadge.textContent = `${appState.customers.length} Müşteri`;
    bannerDesc.textContent = 'Kayıtlı tüm tekstil müşterilerinizin sevkiyat, tahsilat ve dövizli bakiye genel toplam görünümü.';
    actionsContainer.innerHTML = `
      <button class="btn btn-sm btn-primary" onclick="openCustomerModal()">
        <i class="fa-solid fa-user-plus"></i> Yeni Müşteri / Firma Ekle
      </button>
    `;
  } else {
    const c = appState.customers.find(x => x.id === appState.activeCustomerId);
    if (!c) {
      appState.activeCustomerId = 'ALL';
      renderDashboard();
      return;
    }

    const totals = calculateCustomerTotals(c);
    const sym = getCurrencySymbol(c.currency);
    bannerTitle.textContent = c.name;
    bannerBadge.innerHTML = `<span class="badge-curr badge-curr-${(c.currency || 'TL').toLowerCase()}">${c.currency} (${sym})</span>`;
    bannerDesc.textContent = `${c.contactPerson ? 'Yetkili: ' + c.contactPerson + ' | ' : ''}${c.phone ? 'Tel: ' + c.phone + ' | ' : ''}${c.notes || 'Özel not girilmemiş.'}`;

    actionsContainer.innerHTML = `
      <button class="btn btn-sm btn-outline" onclick="showLedgerDetailView('${c.id}')" title="Müşteri Cari Ekstresi ve Gönderilen Ürünler">
        <i class="fa-solid fa-book-open"></i> Cari Ekstre & Ürünler
      </button>
      <button class="btn btn-sm btn-primary" onclick="openProductSaleModal('${c.id}')" title="Bu müşteriye mal / ürün sevkiyatı ekle">
        <i class="fa-solid fa-truck-fast"></i> + Mal / Ürün Sevk Et
      </button>
      <button class="btn btn-sm btn-success" onclick="openPaymentModal('${c.id}')" title="Bu müşteriden ödeme / tahsilat al">
        <i class="fa-solid fa-hand-holding-dollar"></i> + Tahsilat Al
      </button>
      <button class="btn btn-sm btn-secondary" onclick="openCustomerModal('${c.id}')" title="Müşteri bilgilerini düzenle">
        <i class="fa-solid fa-pen text-gold"></i> Müşteriyi Düzenle
      </button>
      <button class="btn btn-sm btn-outline text-red" onclick="deleteCustomer('${c.id}')" title="Bu müşteriyi sil">
        <i class="fa-solid fa-trash-can"></i> Sil
      </button>
    `;
  }
}

// Render Customer Cards (Grid View)
function renderCustomerCards(customerList) {
  const container = document.getElementById('contractorCardsContainer');
  if (!container) return;

  if (customerList.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-shirt"></i>
        <h3>Aradığınız kriterde kayıtlı tekstil müşterisi bulunamadı</h3>
        <p>Arama veya para birimi filtrenizi sıfırlayabilir veya yukarıdaki <strong>"Yeni Müşteri Ekle"</strong> butonundan yeni müşteri oluşturabilirsiniz.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = customerList.map(c => {
    const t = calculateCustomerTotals(c);
    const curr = c.currency || 'TL';
    const statusBadge = t.remaining <= 0 
      ? `<span class="badge-status paid"><i class="fa-solid fa-check"></i> Bakiye Kapandı (0)</span>` 
      : `<span class="badge-status unpaid"><i class="fa-solid fa-clock"></i> Açık Borç: ${formatCurrency(t.remaining, curr)}</span>`;

    return `
      <div class="contractor-card">
        <div>
          <div class="c-card-top">
            <div style="display: flex; align-items: center;">
              <div class="c-card-avatar">
                <i class="fa-solid fa-building"></i>
              </div>
              <div class="c-card-info">
                <div class="c-card-name" style="display: flex; align-items: center; gap: 0.35rem;">
                  <span>${escapeHtml(c.name)}</span>
                  <button class="btn-micro-edit" onclick="event.stopPropagation(); openQuickRename('customer_${c.id}', '${escapeHtml(c.name)}')" title="Müşteri Adını Değiştir">
                    <i class="fa-solid fa-pen"></i>
                  </button>
                </div>
                <div class="c-card-meta">
                  <span class="badge-curr badge-curr-${curr.toLowerCase()}">${curr} (${getCurrencySymbol(curr)})</span>
                  ${c.contactPerson ? `<span><i class="fa-solid fa-user-tie text-gold"></i> ${escapeHtml(c.contactPerson)}</span>` : ''}
                </div>
              </div>
            </div>
            <div>${statusBadge}</div>
          </div>

          <div class="c-financials">
            <div class="c-fin-row">
              <span class="text-muted">Toplam Mal Satışı:</span>
              <span class="text-gold font-bold">${formatCurrency(t.totalShipment, curr)}</span>
            </div>
            <div class="c-fin-row">
              <span class="text-muted">Alınan Ödeme:</span>
              <span class="text-green font-bold">${formatCurrency(t.totalPaid, curr)}</span>
            </div>
            <div class="c-fin-row">
              <span>Kalan Açık Bakiye:</span>
              <span class="${t.remaining > 0 ? 'text-red' : 'text-green'} font-bold">${formatCurrency(t.remaining, curr)}</span>
            </div>
          </div>

          <div class="progress-mini-bar" title="Tahsil Edilme: %${t.percentPaid}">
            <div class="progress-mini-fill" style="width: ${t.percentPaid}%;"></div>
          </div>
        </div>

        <div class="c-card-actions">
          <button class="btn btn-sm btn-outline" onclick="showLedgerDetailView('${c.id}')" title="Kişisel Cari Sayfası & Siparişler">
            <i class="fa-solid fa-book-open"></i> Cari Ekstre
          </button>
          <button class="btn btn-sm btn-primary" onclick="openProductSaleModal('${c.id}')" title="Mal / Ürün Sevk Et">
            <i class="fa-solid fa-truck-fast"></i> Mal Sevk Et
          </button>
          <button class="btn btn-sm btn-success" onclick="openPaymentModal('${c.id}')" title="Tahsilat Al">
            <i class="fa-solid fa-hand-holding-dollar"></i> Tahsilat
          </button>
          <button class="btn btn-sm btn-secondary" onclick="openCustomerModal('${c.id}')" title="Müşteri Bilgilerini Düzenle">
            <i class="fa-solid fa-pen text-gold"></i> Düzenle
          </button>
          <button class="btn btn-sm btn-outline text-red" onclick="deleteCustomer('${c.id}')" title="Müşteriyi Sil">
            <i class="fa-solid fa-trash-can"></i> Sil
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Render Customer Table (Table View)
function renderCustomerTable(customerList) {
  const tbody = document.getElementById('contractorTableBody');
  if (!tbody) return;

  if (customerList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="text-center" style="padding: 2rem;">Kayıt bulunamadı.</td></tr>`;
    return;
  }

  tbody.innerHTML = customerList.map(c => {
    const t = calculateCustomerTotals(c);
    const curr = c.currency || 'TL';
    const statusBadge = t.remaining <= 0 
      ? `<span class="badge-status paid">Ödendi (0)</span>` 
      : `<span class="badge-status unpaid">Borçlu</span>`;

    return `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <strong>${escapeHtml(c.name)}</strong>
            <button class="btn-micro-edit" onclick="event.stopPropagation(); openQuickRename('customer_${c.id}', '${escapeHtml(c.name)}')" title="Müşteri Adını Değiştir">
              <i class="fa-solid fa-pen"></i>
            </button>
          </div>
        </td>
        <td><span class="badge-curr badge-curr-${curr.toLowerCase()}">${curr} (${getCurrencySymbol(curr)})</span></td>
        <td>${escapeHtml(c.contactPerson || '-')}</td>
        <td>${escapeHtml(c.phone || '-')}</td>
        <td class="text-gold font-bold">${formatCurrency(t.totalShipment, curr)}</td>
        <td class="text-green font-bold">${formatCurrency(t.totalPaid, curr)}</td>
        <td class="${t.remaining > 0 ? 'text-red font-bold' : 'text-green font-bold'}">${formatCurrency(t.remaining, curr)}</td>
        <td>${statusBadge}</td>
        <td class="text-right">
          <button class="btn btn-sm btn-outline" onclick="showLedgerDetailView('${c.id}')" title="Cari Sayfası">
            <i class="fa-solid fa-book-open"></i> Ekstre
          </button>
          <button class="btn btn-sm btn-primary" onclick="openProductSaleModal('${c.id}')" title="Mal Sevk Et">
            <i class="fa-solid fa-plus"></i> Mal Sevk
          </button>
          <button class="btn btn-sm btn-success" onclick="openPaymentModal('${c.id}')" title="Tahsilat Al">
            <i class="fa-solid fa-hand-holding-dollar"></i> Tahsilat
          </button>
          <button class="btn btn-sm btn-secondary" onclick="openCustomerModal('${c.id}')" title="Düzenle">
            <i class="fa-solid fa-pen text-gold"></i> Düzenle
          </button>
          <button class="btn btn-sm btn-outline text-red" onclick="deleteCustomer('${c.id}')" title="Sil">
            <i class="fa-solid fa-trash-can"></i> Sil
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// =========================================================
// MÜŞTERİ CARİ & SİPARİŞ DETAY SAYFASI (LEDGER DETAIL VIEW)
// =========================================================

function renderLedgerDetail() {
  const customer = appState.customers.find(c => c.id === appState.activeDetailCustomerId);
  if (!customer) {
    showDashboardView();
    return;
  }

  const totals = calculateCustomerTotals(customer);
  const curr = customer.currency || 'TL';
  const sym = getCurrencySymbol(curr);

  // Müşteri Profil Bilgileri
  document.getElementById('detailContractorName').textContent = customer.name;
  document.getElementById('detailContractorRole').textContent = customer.contactPerson || 'Yetkili Belirtilmemiş';
  document.getElementById('detailContractorPhone').textContent = customer.phone || 'Telefon Yok';
  document.getElementById('detailContractorAddress').textContent = customer.address || 'Adres Girilmemiş';
  document.getElementById('detailContractorCurrency').textContent = `${curr} (${sym})`;

  const currBadgeEl = document.getElementById('detailContractorCurrencyBadge');
  if (currBadgeEl) {
    currBadgeEl.className = `badge-curr badge-curr-${curr.toLowerCase()}`;
    currBadgeEl.textContent = `${curr} (${sym})`;
  }

  const notesEl = document.getElementById('detailContractorNotes');
  if (notesEl) {
    notesEl.textContent = customer.notes || 'Bu müşteri için özel sevkiyat veya vade notu girilmemiş.';
  }

  const statusBadge = document.getElementById('detailContractorStatus');
  if (totals.remaining <= 0) {
    statusBadge.className = 'badge-status paid';
    statusBadge.innerHTML = '<i class="fa-solid fa-check"></i> Hesap Kapandı (Borç Yok)';
  } else {
    statusBadge.className = 'badge-status unpaid';
    statusBadge.innerHTML = '<i class="fa-solid fa-clock"></i> Açık Bakiye Borçlu';
  }

  // 3 Büyük Finans Kutusu
  document.getElementById('detailTotalContract').textContent = formatCurrency(totals.totalShipment, curr);
  document.getElementById('detailTotalPaid').textContent = formatCurrency(totals.totalPaid, curr);
  document.getElementById('detailRemaining').textContent = formatCurrency(totals.remaining, curr);

  // Buton Dinleyicisi: Profildeki hızlı isim değiştirme butonu
  const btnQuickName = document.getElementById('btnQuickEditCustomerName');
  if (btnQuickName) {
    btnQuickName.onclick = () => openQuickRename('customer_' + customer.id, customer.name);
  }

  renderTransactionsList(customer);
}

// Render Transactions List in Customer Ledger
function renderTransactionsList(customer) {
  const tbody = document.getElementById('transactionsTableBody');
  if (!tbody) return;

  const txns = customer.transactions || [];
  let filteredTxns = txns;

  if (appState.txnFilterType !== 'ALL') {
    filteredTxns = txns.filter(t => t.type === appState.txnFilterType);
  }

  if (filteredTxns.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" class="text-center" style="padding: 2.5rem;">Bu alanda henüz kayıtlı hareket bulunmuyor. Yukarıdaki butonlardan yeni ürün sevkiyatı veya tahsilat ekleyebilirsiniz.</td></tr>`;
    return;
  }

  // Sort chronological for running balance calculation
  const sortedTxns = [...txns].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Compute running balance for each transaction
  let running = 0;
  const balanceMap = {};
  sortedTxns.forEach(t => {
    const amt = Number(t.amount || 0);
    if (t.type === 'SHIPMENT') {
      running += amt;
    } else {
      running -= amt;
    }
    balanceMap[t.id] = running;
  });

  // Display in descending date order (newest on top)
  const displayTxns = [...filteredTxns].sort((a, b) => new Date(b.date) - new Date(a.date));

  tbody.innerHTML = displayTxns.map(t => {
    const amt = Number(t.amount || 0);
    const itemCurr = t.currency || customer.currency || 'TL';
    const isShipment = t.type === 'SHIPMENT';

    const typeBadge = isShipment 
      ? `<span class="badge-type-shipment"><i class="fa-solid fa-truck-fast"></i> Mal Satışı</span>` 
      : `<span class="badge-type-payment"><i class="fa-solid fa-hand-holding-dollar"></i> Tahsilat</span>`;

    const titleText = isShipment 
      ? `<strong>${escapeHtml(t.productName || 'Ürün Satışı')}</strong> ${t.description ? `<div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.2rem;">${escapeHtml(t.description)}</div>` : ''}`
      : `<strong>${escapeHtml(t.description || 'Ödeme')}</strong> ${t.method ? `<div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.2rem;"><i class="fa-solid fa-credit-card"></i> ${escapeHtml(t.method)} ${t.ref ? `(${escapeHtml(t.ref)})` : ''}</div>` : ''}`;

    const qtyText = isShipment && t.quantity 
      ? `<strong>${Number(t.quantity).toLocaleString('tr-TR')}</strong> ${escapeHtml(t.unit || 'Adet')}` 
      : `<span class="text-dim">-</span>`;

    const priceText = isShipment && t.unitPrice 
      ? formatCurrency(t.unitPrice, itemCurr) 
      : `<span class="text-dim">-</span>`;

    const shipmentVal = isShipment ? `<strong class="text-gold">${formatCurrency(amt, itemCurr)}</strong>` : `<span class="text-dim">-</span>`;
    const paymentVal = !isShipment ? `<strong class="text-green">${formatCurrency(amt, itemCurr)}</strong>` : `<span class="text-dim">-</span>`;
    const cumBalance = balanceMap[t.id] !== undefined ? balanceMap[t.id] : 0;

    return `
      <tr>
        <td>${formatDate(t.date)}</td>
        <td>${typeBadge}</td>
        <td>${titleText}</td>
        <td>${qtyText}</td>
        <td>${priceText}</td>
        <td class="text-right">${shipmentVal}</td>
        <td class="text-right">${paymentVal}</td>
        <td class="text-right ${cumBalance > 0 ? 'text-red font-bold' : 'text-green font-bold'}">${formatCurrency(cumBalance, itemCurr)}</td>
        <td>${escapeHtml(t.invoiceNo || t.ref || '-')}</td>
        <td class="text-right">
          <button class="btn btn-sm btn-secondary" onclick="editTransaction('${customer.id}', '${t.id}')" title="Bu işlemi düzenle">
            <i class="fa-solid fa-pen text-gold"></i> Düzenle
          </button>
          <button class="btn btn-sm btn-outline text-red" onclick="deleteTransaction('${customer.id}', '${t.id}')" title="Bu işlemi sil">
            <i class="fa-solid fa-trash-can"></i> Sil
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// =========================================================
// CUSTOMER CRUD (MÜŞTERİ EKLEME / DÜZENLEME / SİLME)
// =========================================================

function openCustomerModal(editId = null) {
  const form = document.getElementById('formCustomer');
  if (form) form.reset();

  const titleEl = document.getElementById('modalCustomerTitle');
  const idInput = document.getElementById('editCustomerId');

  if (editId) {
    const c = appState.customers.find(x => x.id === editId);
    if (!c) return;
    idInput.value = c.id;
    document.getElementById('custName').value = c.name;
    document.getElementById('custCurrency').value = c.currency || 'TL';
    document.getElementById('custContactPerson').value = c.contactPerson || '';
    document.getElementById('custPhone').value = c.phone || '';
    document.getElementById('custAddress').value = c.address || '';
    document.getElementById('custNotes').value = c.notes || '';
    if (titleEl) titleEl.innerHTML = '<i class="fa-solid fa-pen-to-square text-gold"></i> Müşteri Bilgilerini Düzenle / Güncelle';
  } else {
    idInput.value = '';
    document.getElementById('custCurrency').value = 'TL';
    if (titleEl) titleEl.innerHTML = '<i class="fa-solid fa-user-plus text-gold"></i> Yeni Müşteri / Firma Tanımla';
  }

  openModal('modalCustomer');
}

function deleteCustomer(customerId) {
  const c = appState.customers.find(x => x.id === customerId);
  if (!c) return;

  const msg = `"${c.name}" adlı müşteriyi ve tüm kayıtlı ürün sevkiyatları ile tahsilatlarını silmek istediğinize emin misiniz?`;
  if (!confirm(msg)) return;

  appState.customers = appState.customers.filter(x => x.id !== customerId);
  if (appState.activeCustomerId === customerId) {
    appState.activeCustomerId = 'ALL';
  }
  saveData();
  showToast(`"${c.name}" başarıyla silindi.`, 'info');
  showDashboardView();
}

// =========================================================
// MAL / ÜRÜN SATIŞI (SHIPMENT) MODAL & CRUD
// =========================================================

function openProductSaleModal(customerId = null, editTxnId = null) {
  const form = document.getElementById('formProductSale');
  if (form) form.reset();

  const cId = customerId || appState.activeDetailCustomerId || (appState.activeCustomerId !== 'ALL' ? appState.activeCustomerId : null) || (appState.customers[0] ? appState.customers[0].id : null);
  const customer = appState.customers.find(x => x.id === cId);
  if (!customer) {
    alert("Lütfen önce bir müşteri seçin veya ekleyin!");
    return;
  }

  document.getElementById('saleCustomerId').value = customer.id;
  document.getElementById('editSaleTxnId').value = editTxnId || '';
  document.getElementById('saleCustomerNameDisplay').textContent = `${customer.name} (${customer.currency || 'TL'})`;
  document.getElementById('saleDate').value = getTodayDateStr();
  document.getElementById('saleCurrency').value = customer.currency || 'TL';
  document.getElementById('saleUnit').value = 'Adet';

  const modalTitle = document.getElementById('modalProductSaleTitle');

  if (editTxnId) {
    const txn = (customer.transactions || []).find(t => t.id === editTxnId);
    if (txn) {
      document.getElementById('saleProductName').value = txn.productName || '';
      document.getElementById('saleDate').value = txn.date || getTodayDateStr();
      document.getElementById('saleQuantity').value = txn.quantity || '';
      document.getElementById('saleUnit').value = txn.unit || 'Adet';
      document.getElementById('saleUnitPrice').value = txn.unitPrice || '';
      document.getElementById('saleCurrency').value = txn.currency || customer.currency || 'TL';
      document.getElementById('saleInvoiceNo').value = txn.invoiceNo || '';
      document.getElementById('saleDescription').value = txn.description || '';
      if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-pen-to-square text-gold"></i> Mal / Ürün Sevkiyatını Düzenle';
    }
  } else {
    if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-truck-fast text-gold"></i> Mal / Ürün Satışı & Sevkiyatı';
  }

  updateLiveSaleCalculation();
  openModal('modalProductSale');
}

function updateLiveSaleCalculation() {
  const qty = parseFloat(document.getElementById('saleQuantity').value) || 0;
  const price = parseFloat(document.getElementById('saleUnitPrice').value) || 0;
  const curr = document.getElementById('saleCurrency').value || 'TL';
  const total = qty * price;
  const unit = document.getElementById('saleUnit').value || 'Adet';

  const calcEl = document.getElementById('saleCalcResult');
  if (calcEl) {
    calcEl.textContent = `${qty.toLocaleString('tr-TR')} ${unit} × ${formatCurrency(price, curr)} = ${formatCurrency(total, curr)}`;
  }
}

// =========================================================
// TAHSİLAT / ÖDEME AL (PAYMENT) MODAL & CRUD
// =========================================================

function openPaymentModal(customerId = null, editTxnId = null) {
  const form = document.getElementById('formPayment');
  if (form) form.reset();

  const cId = customerId || appState.activeDetailCustomerId || (appState.activeCustomerId !== 'ALL' ? appState.activeCustomerId : null) || (appState.customers[0] ? appState.customers[0].id : null);
  const customer = appState.customers.find(x => x.id === cId);
  if (!customer) {
    alert("Lütfen önce bir müşteri seçin veya ekleyin!");
    return;
  }

  const totals = calculateCustomerTotals(customer);
  const curr = customer.currency || 'TL';

  document.getElementById('payCustomerId').value = customer.id;
  document.getElementById('editPayTxnId').value = editTxnId || '';
  document.getElementById('payCustomerName').textContent = `${customer.name} (${curr})`;
  document.getElementById('payCurrentBalance').textContent = formatCurrency(totals.remaining, curr);
  document.getElementById('payDate').value = getTodayDateStr();
  document.getElementById('payCurrency').value = curr;

  const modalTitle = document.getElementById('modalPaymentTitle');

  if (editTxnId) {
    const txn = (customer.transactions || []).find(t => t.id === editTxnId);
    if (txn) {
      document.getElementById('payAmount').value = txn.amount || '';
      document.getElementById('payCurrency').value = txn.currency || curr;
      document.getElementById('payDate').value = txn.date || getTodayDateStr();
      document.getElementById('payMethod').value = txn.method || 'Banka Havalesi / EFT';
      document.getElementById('payRef').value = txn.ref || '';
      document.getElementById('payDescription').value = txn.description || '';
      if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-pen-to-square text-green"></i> Tahsilat / Ödeme Kaydını Düzenle';
    }
  } else {
    if (modalTitle) modalTitle.innerHTML = '<i class="fa-solid fa-hand-holding-dollar text-green"></i> Müşteriden Tahsilat / Ödeme Al';
  }

  openModal('modalPayment');
}

// Generic Edit for any transaction (shipment or payment)
function editTransaction(customerId, txnId) {
  const customer = appState.customers.find(c => c.id === customerId);
  if (!customer) return;

  const txn = (customer.transactions || []).find(t => t.id === txnId);
  if (!txn) return;

  if (txn.type === 'SHIPMENT') {
    openProductSaleModal(customerId, txnId);
  } else {
    openPaymentModal(customerId, txnId);
  }
}

// Generic Delete for any transaction
function deleteTransaction(customerId, txnId) {
  const customer = appState.customers.find(c => c.id === customerId);
  if (!customer) return;

  if (confirm("Bu işlem kaydını (sevkiyat veya tahsilat) silmek istediğinize emin misiniz? Bakiye anında yeniden hesaplanacaktır.")) {
    customer.transactions = (customer.transactions || []).filter(t => t.id !== txnId);
    saveData();
    showToast("İşlem kaydı silindi.", 'info');
    if (appState.activeDetailCustomerId) {
      renderLedgerDetail();
    } else {
      renderDashboard();
    }
  }
}

// Modal Open & Close Helpers
function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.add('active');
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.remove('active');
}

// =========================================================
// EXCEL EXPORT (CSV UTF-8)
// =========================================================

function exportToExcelCSV() {
  if (appState.customers.length === 0) {
    showToast("Dışa aktarılacak müşteri kaydı bulunmuyor.", "danger");
    return;
  }

  let csv = '\uFEFF'; // UTF-8 BOM
  csv += 'Müşteri / Firma Adı;Para Birimi;Yetkili Kişi;Telefon;Adres;Toplam Mal Satışı;Toplam Alınan Ödeme;Kalan Bakiye;Durum;Notlar\r\n';

  appState.customers.forEach(c => {
    const t = calculateCustomerTotals(c);
    const curr = c.currency || 'TL';
    const status = t.remaining <= 0 ? 'Ödendi' : 'Borçlu';

    const row = [
      `"${c.name.replace(/"/g, '""')}"`,
      `"${curr}"`,
      `"${(c.contactPerson || '').replace(/"/g, '""')}"`,
      `"${(c.phone || '').replace(/"/g, '""')}"`,
      `"${(c.address || '').replace(/"/g, '""')}"`,
      t.totalShipment,
      t.totalPaid,
      t.remaining,
      `"${status}"`,
      `"${(c.notes || '').replace(/"/g, '""')}"`
    ];

    csv += row.join(';') + '\r\n';
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `TekstilCari_Musteri_Listesi_${getTodayDateStr()}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("Excel (CSV) dosyası bilgisayarınıza indirildi!", "success");
}

// =========================================================
// PRINT / PDF EKSTRE HAZIRLIĞI
// =========================================================

function prepareAndPrintStatement() {
  const customer = appState.customers.find(c => c.id === appState.activeDetailCustomerId);
  if (!customer) return;

  const totals = calculateCustomerTotals(customer);
  const curr = customer.currency || 'TL';

  document.getElementById('printReportDate').textContent = `Rapor Tarihi: ${new Date().toLocaleDateString('tr-TR')} ${new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}`;

  document.getElementById('printContractorDetails').innerHTML = `
    <div>
      <div><strong>Müşteri / Firma:</strong> ${escapeHtml(customer.name)}</div>
      <div><strong>Yetkili:</strong> ${escapeHtml(customer.contactPerson || '-')}</div>
      <div><strong>Telefon:</strong> ${escapeHtml(customer.phone || '-')}</div>
    </div>
    <div>
      <div><strong>Adres:</strong> ${escapeHtml(customer.address || '-')}</div>
      <div><strong>Çalışma Para Birimi:</strong> ${curr} (${getCurrencySymbol(curr)})</div>
      <div><strong>Hesap Durumu:</strong> ${totals.remaining <= 0 ? 'HESAP KAPANDI (BORÇ YOK)' : 'ÖDEME BEKLİYOR'}</div>
    </div>
  `;

  document.getElementById('printSigContractorName').textContent = customer.name;

  const txns = customer.transactions || [];
  const sortedTxns = [...txns].sort((a, b) => new Date(a.date) - new Date(b.date));

  let runningBalance = 0;
  let rowsHtml = '';

  sortedTxns.forEach(t => {
    const amt = Number(t.amount || 0);
    const isShipment = t.type === 'SHIPMENT';
    let sVal = '-';
    let pVal = '-';

    if (isShipment) {
      sVal = formatCurrency(amt, curr);
      runningBalance += amt;
    } else {
      pVal = formatCurrency(amt, curr);
      runningBalance -= amt;
    }

    const itemDesc = isShipment 
      ? `${escapeHtml(t.productName || 'Ürün Satışı')}` 
      : `${escapeHtml(t.description || 'Tahsilat')} ${t.ref ? `(${escapeHtml(t.ref)})` : ''}`;

    const qtyInfo = isShipment && t.quantity ? `${Number(t.quantity).toLocaleString('tr-TR')} ${escapeHtml(t.unit || 'Adet')}` : '-';
    const priceInfo = isShipment && t.unitPrice ? formatCurrency(t.unitPrice, curr) : '-';

    rowsHtml += `
      <tr>
        <td>${formatDate(t.date)}</td>
        <td>${isShipment ? 'Mal Sevkiyatı' : 'Tahsilat'}</td>
        <td>${itemDesc}</td>
        <td>${qtyInfo}</td>
        <td>${priceInfo}</td>
        <td class="text-right">${sVal}</td>
        <td class="text-right">${pVal}</td>
        <td class="text-right"><strong>${formatCurrency(runningBalance, curr)}</strong></td>
      </tr>
    `;
  });

  document.getElementById('printTableBody').innerHTML = rowsHtml;

  document.getElementById('printSummaryBox').innerHTML = `
    <table>
      <tr>
        <td>Toplam Sevk Edilen Mal Bedeli:</td>
        <td class="text-right"><strong>${formatCurrency(totals.totalShipment, curr)}</strong></td>
      </tr>
      <tr>
        <td>Toplam Alınan Tahsilat:</td>
        <td class="text-right"><strong>${formatCurrency(totals.totalPaid, curr)}</strong></td>
      </tr>
      <tr style="background: #f0f0f0; font-size: 11pt;">
        <td><strong>Kalan Net Alacak / Bakiye:</strong></td>
        <td class="text-right"><strong>${formatCurrency(totals.remaining, curr)}</strong></td>
      </tr>
    </table>
  `;

  window.print();
}

// Backup & Restore
function downloadJSONBackup() {
  const data = {
    customers: appState.customers,
    settings: appState.settings,
    exportDate: new Date().toISOString()
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
  const a = document.createElement('a');
  a.href = dataStr;
  a.download = `TekstilCari_Tam_Yedek_${getTodayDateStr()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast("Tekstil veritabanı yedeği bilgisayarınıza indirildi.", "success");
}

function restoreFromJSONFile(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const data = JSON.parse(event.target.result);
      if (data && Array.isArray(data.customers)) {
        appState.customers = data.customers;
        if (data.settings) appState.settings = Object.assign({}, appState.settings, data.settings);
      } else if (Array.isArray(data)) {
        appState.customers = data;
      } else {
        alert("Geçersiz yedek dosyası formatı!");
        return;
      }
      saveData();
      closeModal('modalBackup');
      renderDashboard();
      showToast("Tüm müşteri verileri başarıyla geri yüklendi!", "success");
    } catch (err) {
      alert("Dosya okunurken hata oluştu: " + err.message);
    }
  };
  reader.readAsText(file);
}

// =========================================================
// EVENT LISTENERS INITIALIZATION
// =========================================================

function initEventListeners() {
  // Navigation
  document.getElementById('btnBackToDashboard').addEventListener('click', showDashboardView);

  // Cards vs Table view toggles
  const btnCards = document.getElementById('viewToggleCards');
  const btnTable = document.getElementById('viewToggleTable');
  const gridContainer = document.getElementById('contractorCardsContainer');
  const tableWrapper = document.getElementById('contractorTableWrapper');

  btnCards.addEventListener('click', () => {
    btnCards.classList.add('active');
    btnTable.classList.remove('active');
    gridContainer.classList.remove('hide');
    tableWrapper.classList.add('hide');
  });

  btnTable.addEventListener('click', () => {
    btnTable.classList.add('active');
    btnCards.classList.remove('active');
    gridContainer.classList.add('hide');
    tableWrapper.classList.remove('hide');
  });

  // Search & Filters
  document.getElementById('searchInput').addEventListener('input', (e) => {
    appState.filterSearch = e.target.value;
    renderDashboard();
  });

  document.getElementById('statusFilter').addEventListener('change', (e) => {
    appState.filterStatus = e.target.value;
    renderDashboard();
  });

  document.getElementById('currencyFilter').addEventListener('change', (e) => {
    appState.filterCurrency = e.target.value;
    renderDashboard();
  });

  document.getElementById('btnResetFilters').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('statusFilter').value = 'ALL';
    document.getElementById('currencyFilter').value = 'ALL';
    appState.filterSearch = '';
    appState.filterStatus = 'ALL';
    appState.filterCurrency = 'ALL';
    renderDashboard();
  });

  // Customer Modals Trigger
  document.getElementById('btnNewCustomer').addEventListener('click', () => openCustomerModal());
  document.getElementById('btnTabAddCustomer').addEventListener('click', () => openCustomerModal());

  // Ledger Detail View Action Triggers
  document.getElementById('btnOpenNewProductSale').addEventListener('click', () => openProductSaleModal());
  document.getElementById('btnOpenNewPaymentModal').addEventListener('click', () => openPaymentModal());
  document.getElementById('btnEditActiveContractor').addEventListener('click', () => {
    if (appState.activeDetailCustomerId) openCustomerModal(appState.activeDetailCustomerId);
  });
  document.getElementById('btnDeleteActiveContractor').addEventListener('click', () => {
    if (appState.activeDetailCustomerId) deleteCustomer(appState.activeDetailCustomerId);
  });
  document.getElementById('btnPrintStatement').addEventListener('click', prepareAndPrintStatement);

  // Top Nav Actions
  document.getElementById('btnExportExcel').addEventListener('click', exportToExcelCSV);
  document.getElementById('btnBackupData').addEventListener('click', () => openModal('modalBackup'));
  document.getElementById('btnDownloadBackup').addEventListener('click', downloadJSONBackup);

  // Share Modal
  const btnShare = document.getElementById('btnShareNetwork');
  if (btnShare) {
    btnShare.addEventListener('click', () => openModal('modalShare'));
  }
  const btnCopyLan = document.getElementById('btnCopyLanUrl');
  if (btnCopyLan) {
    btnCopyLan.addEventListener('click', () => {
      const input = document.getElementById('shareLanUrl');
      if (input) {
        input.select();
        navigator.clipboard.writeText(input.value).then(() => {
          showToast("Ağ bağlantı adresi kopyalandı! Ofisteki arkadaşlarınıza iletebilirsiniz.", "success");
        }).catch(() => {
          document.execCommand('copy');
          showToast("Ağ adresi kopyalandı!", "success");
        });
      }
    });
  }

  // TCMB Widget & Modal Dinleyicileri
  const tcmbWidget = document.getElementById('tcmbRatesWidget');
  if (tcmbWidget) {
    tcmbWidget.addEventListener('click', (e) => {
      if (e.target.closest('#btnRefreshTcmbRates')) return;
      openModal('modalTcmbDetails');
    });
  }
  const btnRefreshRates = document.getElementById('btnRefreshTcmbRates');
  if (btnRefreshRates) {
    btnRefreshRates.addEventListener('click', (e) => {
      e.stopPropagation();
      fetchTCMBRates(true);
    });
  }
  const btnModalRefreshRates = document.getElementById('btnModalRefreshRates');
  if (btnModalRefreshRates) {
    btnModalRefreshRates.addEventListener('click', () => fetchTCMBRates(true));
  }

  // Hızlı Döviz Çevirici Dinleyicileri
  const convAmount = document.getElementById('convAmount');
  if (convAmount) convAmount.addEventListener('input', updateCurrencyConversion);
  const convCurrency = document.getElementById('convCurrency');
  if (convCurrency) convCurrency.addEventListener('change', updateCurrencyConversion);

  // 7/24 Bulut Modal Dinleyicileri
  const btnOpenCloud = document.getElementById('btnOpenCloudModal');
  if (btnOpenCloud) {
    btnOpenCloud.addEventListener('click', () => {
      openModal('modalCloudSync');
      const shareInput = document.getElementById('shareLanUrl');
      const cloudInput = document.getElementById('cloudModalLanUrl');
      if (shareInput && cloudInput) {
        cloudInput.value = shareInput.value;
      }
    });
  }
  const btnCopyCloudLan = document.getElementById('btnCopyCloudLanUrl');
  if (btnCopyCloudLan) {
    btnCopyCloudLan.addEventListener('click', () => {
      const input = document.getElementById('cloudModalLanUrl');
      if (input) {
        input.select();
        navigator.clipboard.writeText(input.value).then(() => {
          showToast("Ağ bağlantı adresi kopyalandı!", "success");
        }).catch(() => {
          document.execCommand('copy');
          showToast("Ağ adresi kopyalandı!", "success");
        });
      }
    });
  }
  const btnQuickBackup = document.getElementById('btnQuickBackupDownload');
  if (btnQuickBackup) {
    btnQuickBackup.addEventListener('click', downloadJSONBackup);
  }
  const btnOpenCloudGuide = document.getElementById('btnOpenCloudGuideModal');
  if (btnOpenCloudGuide) {
    btnOpenCloudGuide.addEventListener('click', () => {
      alert("☁️ 7/24 Ücretsiz Bulut Sunucu Kurulumu (Render.com):\n\n1. github.com'a girip ücretsiz bir hesap açın ve 'New Repository' diyerek projedeki dosyaları yükleyin.\n2. render.com'a girip GitHub hesabınızla giriş yapın ve 'New Web Service' deyin.\n3. Reponuzu seçip 'Create Web Service' butonuna basın.\n\nSadece 60 saniyede https://firmaniz.onrender.com canlı adresiniz hazır olur! Bilgisayarınızı kapatsanız bile sistem 7/24 çalışır.\n\nDetaylı adım adım kılavuz proje klasörünüzdeki BULUT_KURULUM_REHBERI.md dosyasındadır.");
    });
  }

  // Backup Import & Reset
  const fileImportInput = document.getElementById('fileImportBackup');
  document.getElementById('btnTriggerFileImport').addEventListener('click', () => fileImportInput.click());
  fileImportInput.addEventListener('change', restoreFromJSONFile);

  document.getElementById('btnLoadSampleData').addEventListener('click', () => {
    if (confirm("Örnek tekstil müşteri portföyü yüklensin mi?")) {
      appState.customers = JSON.parse(JSON.stringify(INITIAL_TEXTILE_CUSTOMERS));
      appState.activeCustomerId = 'ALL';
      saveData();
      closeModal('modalBackup');
      renderDashboard();
      showToast("Örnek tekstil müşteri verileri yüklendi!", "info");
    }
  });

  document.getElementById('btnClearAllData').addEventListener('click', () => {
    if (confirm("DİKKAT: Tüm müşteriler, siparişler ve ödemeler silinecektir! Emin misiniz?")) {
      appState.customers = [];
      appState.activeCustomerId = 'ALL';
      saveData();
      closeModal('modalBackup');
      showDashboardView();
      showToast("Tüm müşteri verileri temizlendi.", "danger");
    }
  });

  // Transaction Filter Tabs in Ledger
  document.querySelectorAll('.txn-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.txn-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      appState.txnFilterType = e.target.dataset.type;

      const customer = appState.customers.find(c => c.id === appState.activeDetailCustomerId);
      if (customer) renderTransactionsList(customer);
    });
  });

  // Modal Closers
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modalId = e.currentTarget.getAttribute('data-close');
      closeModal(modalId);
    });
  });

  document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) closeModal(m.id);
    });
  });

  // Form Submit: Customer
  document.getElementById('formCustomer').addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('editCustomerId').value;
    const name = document.getElementById('custName').value.trim();
    const currency = document.getElementById('custCurrency').value;
    const contactPerson = document.getElementById('custContactPerson').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const notes = document.getElementById('custNotes').value.trim();

    if (editId) {
      const c = appState.customers.find(x => x.id === editId);
      if (c) {
        c.name = name;
        c.currency = currency;
        c.contactPerson = contactPerson;
        c.phone = phone;
        c.address = address;
        c.notes = notes;
        showToast(`"${name}" müşteri bilgileri güncellendi!`, 'success');
      }
    } else {
      const newCust = {
        id: 'cust_' + Date.now(),
        name,
        currency,
        contactPerson,
        phone,
        address,
        notes,
        transactions: []
      };
      appState.customers.unshift(newCust);
      appState.activeCustomerId = newCust.id;
      showToast(`Yeni müşteri "${name}" eklendi ve sekmesi açıldı!`, 'success');
    }

    saveData();
    closeModal('modalCustomer');
    if (appState.activeDetailCustomerId) {
      renderLedgerDetail();
    } else {
      renderDashboard();
    }
  });

  // Live Price Calculation Listeners in Product Sale Modal
  const inpQty = document.getElementById('saleQuantity');
  const inpPrice = document.getElementById('saleUnitPrice');
  const selUnit = document.getElementById('saleUnit');
  const selCurr = document.getElementById('saleCurrency');

  if (inpQty) inpQty.addEventListener('input', updateLiveSaleCalculation);
  if (inpPrice) inpPrice.addEventListener('input', updateLiveSaleCalculation);
  if (selUnit) selUnit.addEventListener('change', updateLiveSaleCalculation);
  if (selCurr) selCurr.addEventListener('change', updateLiveSaleCalculation);

  // Form Submit: Product Sale / Shipment
  document.getElementById('formProductSale').addEventListener('submit', (e) => {
    e.preventDefault();
    const customerId = document.getElementById('saleCustomerId').value;
    const editTxnId = document.getElementById('editSaleTxnId').value;
    const productName = document.getElementById('saleProductName').value.trim();
    const date = document.getElementById('saleDate').value;
    const quantity = parseFloat(document.getElementById('saleQuantity').value) || 0;
    const unit = document.getElementById('saleUnit').value;
    const unitPrice = parseFloat(document.getElementById('saleUnitPrice').value) || 0;
    const currency = document.getElementById('saleCurrency').value;
    const invoiceNo = document.getElementById('saleInvoiceNo').value.trim();
    const description = document.getElementById('saleDescription').value.trim();
    const amount = quantity * unitPrice;

    const customer = appState.customers.find(c => c.id === customerId);
    if (!customer) return;

    if (!customer.transactions) customer.transactions = [];

    if (editTxnId) {
      const txn = customer.transactions.find(t => t.id === editTxnId);
      if (txn) {
        txn.productName = productName;
        txn.date = date;
        txn.quantity = quantity;
        txn.unit = unit;
        txn.unitPrice = unitPrice;
        txn.currency = currency;
        txn.amount = amount;
        txn.invoiceNo = invoiceNo;
        txn.description = description;
        showToast(`"${productName}" sevkiyatı güncellendi!`, 'success');
      }
    } else {
      const newTxn = {
        id: 'tx_' + Date.now(),
        type: 'SHIPMENT',
        productName,
        date,
        quantity,
        unit,
        unitPrice,
        currency,
        amount,
        invoiceNo,
        description
      };
      customer.transactions.push(newTxn);
      showToast(`${quantity.toLocaleString('tr-TR')} ${unit} "${productName}" sevkiyatı kaydedildi!`, 'success');
    }

    saveData();
    closeModal('modalProductSale');
    if (appState.activeDetailCustomerId === customerId) {
      renderLedgerDetail();
    } else {
      renderDashboard();
    }
  });

  // Form Submit: Payment / Collection
  document.getElementById('formPayment').addEventListener('submit', (e) => {
    e.preventDefault();
    const customerId = document.getElementById('payCustomerId').value;
    const editTxnId = document.getElementById('editPayTxnId').value;
    const amount = parseFloat(document.getElementById('payAmount').value) || 0;
    const currency = document.getElementById('payCurrency').value;
    const date = document.getElementById('payDate').value;
    const method = document.getElementById('payMethod').value;
    const ref = document.getElementById('payRef').value.trim();
    const description = document.getElementById('payDescription').value.trim();

    const customer = appState.customers.find(c => c.id === customerId);
    if (!customer) return;

    if (!customer.transactions) customer.transactions = [];

    if (editTxnId) {
      const txn = customer.transactions.find(t => t.id === editTxnId);
      if (txn) {
        txn.amount = amount;
        txn.currency = currency;
        txn.date = date;
        txn.method = method;
        txn.ref = ref;
        txn.description = description;
        showToast("Tahsilat kaydı güncellendi!", 'success');
      }
    } else {
      const newTxn = {
        id: 'tx_' + Date.now(),
        type: 'PAYMENT',
        productName: '',
        date,
        amount,
        currency,
        method,
        ref,
        description
      };
      customer.transactions.push(newTxn);
      showToast(`${formatCurrency(amount, currency)} tutarındaki tahsilat kaydedildi!`, 'success');
    }

    saveData();
    closeModal('modalPayment');
    if (appState.activeDetailCustomerId === customerId) {
      renderLedgerDetail();
    } else {
      renderDashboard();
    }
  });

  // Settings & Theme Event Listeners
  const btnSettings = document.getElementById('btnOpenSettings');
  if (btnSettings) {
    btnSettings.addEventListener('click', () => openSettingsModalTab('brand'));
  }

  document.querySelectorAll('.settings-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.settings-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.settings-pane').forEach(p => p.classList.remove('active'));

      e.currentTarget.classList.add('active');
      const targetId = e.currentTarget.dataset.target;
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  document.querySelectorAll('.theme-card').forEach(card => {
    card.addEventListener('click', () => {
      const selectedTheme = card.dataset.theme;
      applyTheme(selectedTheme);
      saveData();
      showToast("Renk teması uygulandı!", "success");
    });
  });

  // Form Submit: Brand Settings
  const formBrand = document.getElementById('formBrandSettings');
  if (formBrand) {
    formBrand.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!appState.settings) appState.settings = {};

      appState.settings.brandTitle = document.getElementById('cfgBrandTitle').value.trim();
      appState.settings.brandSubtitle = document.getElementById('cfgBrandSubtitle').value.trim();
      appState.settings.currencySymbol = document.getElementById('cfgCurrency').value;

      applySettings();
      saveData();
      closeModal('modalSettings');
      showToast("Firma ve başlık ayarları güncellendi!", "success");
      renderDashboard();
    });
  }

  // Form Submit: Custom Labels
  const formLabels = document.getElementById('formCustomLabels');
  if (formLabels) {
    formLabels.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!appState.settings) appState.settings = {};
      if (!appState.settings.customLabels) appState.settings.customLabels = {};

      const fields = [
        'kpiContract', 'kpiPaid', 'kpiRemaining', 'kpiCount',
        'colContractor', 'colRole', 'colContract', 'colPaid', 'colRemaining', 'colStatus'
      ];

      fields.forEach(f => {
        const inp = document.getElementById('lblInp_' + f);
        if (inp) appState.settings.customLabels[f] = inp.value.trim();
      });

      applySettings();
      saveData();
      closeModal('modalSettings');
      showToast("Sütun ve alan isimleri başarıyla güncellendi!", "success");
      renderDashboard();
    });
  }

  const btnResetLabels = document.getElementById('btnResetDefaultLabels');
  if (btnResetLabels) {
    btnResetLabels.addEventListener('click', () => {
      if (confirm("Tüm sütun ve alan başlıkları varsayılan tekstil isimlerine döndürülsün mü?")) {
        appState.settings.customLabels = {
          kpiContract: 'Toplam Mal Satışı (Sevk)',
          kpiPaid: 'Toplam Alınan Ödeme',
          kpiRemaining: 'Kalan Açık Bakiye (Alacak)',
          kpiCount: 'Aktif Müşteri / Firma',
          projectTabsTitle: 'Müşteriler / Firmalar:',
          sectionTitle: 'Tekstil Müşteri Cari Kartları',
          colContractor: 'Müşteri / Firma Adı',
          colRole: 'Yetkili / Temsilci',
          colProject: 'Para Birimi',
          colPhone: 'Telefon',
          colContract: 'Toplam Mal Satışı',
          colPaid: 'Alınan Ödeme',
          colRemaining: 'Kalan Bakiye',
          colStatus: 'Hesap Durumu'
        };
        applySettings();
        saveData();
        showToast("Başlıklar varsayılana sıfırlandı.", "info");
        renderDashboard();
      }
    });
  }

  // Form Submit: Hızlı İsim Değiştirme (Quick Rename)
  const formQuick = document.getElementById('formQuickRename');
  if (formQuick) {
    formQuick.addEventListener('submit', (e) => {
      e.preventDefault();
      const key = document.getElementById('quickRenameKey').value;
      const newVal = document.getElementById('quickRenameInput').value.trim();
      if (!newVal) return;

      if (!appState.settings) appState.settings = {};
      if (!appState.settings.customLabels) appState.settings.customLabels = {};

      if (key === 'displayBrandTitle') {
        appState.settings.brandTitle = newVal;
      } else if (key === 'displayBrandSubtitle') {
        appState.settings.brandSubtitle = newVal;
      } else if (key.startsWith('customer_')) {
        const cId = key.replace('customer_', '');
        const c = appState.customers.find(x => x.id === cId);
        if (c) {
          c.name = newVal;
        }
      } else if (key === 'lblKpiContract') appState.settings.customLabels.kpiContract = newVal;
      else if (key === 'lblKpiPaid') appState.settings.customLabels.kpiPaid = newVal;
      else if (key === 'lblKpiRemaining') appState.settings.customLabels.kpiRemaining = newVal;
      else if (key === 'lblKpiCount') appState.settings.customLabels.kpiCount = newVal;
      else if (key === 'lblProjectTabsTitle') appState.settings.customLabels.projectTabsTitle = newVal;
      else if (key === 'lblSectionTitle') appState.settings.customLabels.sectionTitle = newVal;
      else if (key === 'colHeader_contractor') appState.settings.customLabels.colContractor = newVal;
      else if (key === 'colHeader_role') appState.settings.customLabels.colRole = newVal;
      else if (key === 'colHeader_project') appState.settings.customLabels.colProject = newVal;
      else if (key === 'colHeader_phone') appState.settings.customLabels.colPhone = newVal;
      else if (key === 'colHeader_contract') appState.settings.customLabels.colContract = newVal;
      else if (key === 'colHeader_paid') appState.settings.customLabels.colPaid = newVal;
      else if (key === 'colHeader_remaining') appState.settings.customLabels.colRemaining = newVal;
      else if (key === 'colHeader_status') appState.settings.customLabels.colStatus = newVal;

      applySettings();
      saveData();
      closeModal('modalQuickRename');
      showToast(`"${newVal}" olarak güncellendi!`, "success");

      if (appState.activeDetailCustomerId) {
        renderLedgerDetail();
      } else {
        renderDashboard();
      }
    });
  }

  // Keyboard Escape closer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
    }
  });
}

// =========================================================
// TCMB CANLI MERKEZ BANKASI DÖVİZ KURLARI & ÇEVİRİCİ
// =========================================================

let latestTcmbRates = null;

async function fetchTCMBRates(force = false) {
  const refreshBtn = document.getElementById('btnRefreshTcmbRates');
  const modalRefreshBtn = document.getElementById('btnModalRefreshRates');
  if (refreshBtn) refreshBtn.classList.add('spinning');
  if (modalRefreshBtn) modalRefreshBtn.classList.add('spinning');

  try {
    const url = force ? '/api/rates?force=1' : '/api/rates';
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const data = await resp.json();

    if (data && data.rates) {
      latestTcmbRates = data.rates;
      window.latestTcmbRates = latestTcmbRates;

      // Header Widget Güncellemesi
      if (data.rates.USD) {
        const usdRate = data.rates.USD.forexSelling || data.rates.USD.banknoteSelling || 49.0348;
        const elUsd = document.getElementById('widgetUsdVal');
        if (elUsd) {
          elUsd.textContent = Number(usdRate).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 4 }) + ' ₺';
        }
      }
      if (data.rates.EUR) {
        const eurRate = data.rates.EUR.forexSelling || data.rates.EUR.banknoteSelling || 55.3963;
        const elEur = document.getElementById('widgetEurVal');
        if (elEur) {
          elEur.textContent = Number(eurRate).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 4 }) + ' ₺';
        }
      }

      // Detay Modalı Güncellemesi
      const metaEl = document.getElementById('tcmbModalMeta');
      if (metaEl) {
        metaEl.textContent = `Bülten No: ${data.bultenNo || '-'} • Tarih: ${data.date || '-'} • Son Güncelleme: ${data.updatedAt || '-'}`;
      }
      if (data.rates.USD) {
        const u = data.rates.USD;
        setRateEl('modalUsdForexSelling', u.forexSelling);
        setRateEl('modalUsdForexBuying', u.forexBuying);
        setRateEl('modalUsdBanknoteSelling', u.banknoteSelling);
        setRateEl('modalUsdBanknoteBuying', u.banknoteBuying);
      }
      if (data.rates.EUR) {
        const e = data.rates.EUR;
        setRateEl('modalEurForexSelling', e.forexSelling);
        setRateEl('modalEurForexBuying', e.forexBuying);
        setRateEl('modalEurBanknoteSelling', e.banknoteSelling);
        setRateEl('modalEurBanknoteBuying', e.banknoteBuying);
      }

      updateCurrencyConversion();
      if (force) showToast("TCMB güncel kurları başarıyla yenilendi!", "success");
    }
  } catch (err) {
    console.warn("TCMB kurları alınamadı:", err);
  } finally {
    if (refreshBtn) refreshBtn.classList.remove('spinning');
    if (modalRefreshBtn) modalRefreshBtn.classList.remove('spinning');
  }
}

function setRateEl(id, val) {
  const el = document.getElementById(id);
  if (el) {
    if (val != null) {
      el.textContent = Number(val).toLocaleString('tr-TR', { minimumFractionDigits: 4, maximumFractionDigits: 4 }) + ' ₺';
    } else {
      el.textContent = '-';
    }
  }
}

function updateCurrencyConversion() {
  const amountEl = document.getElementById('convAmount');
  const typeEl = document.getElementById('convCurrency');
  const resultEl = document.getElementById('convResultText');
  if (!amountEl || !typeEl || !resultEl) return;

  const amt = parseFloat(amountEl.value) || 0;
  const mode = typeEl.value;

  const usdRate = latestTcmbRates?.USD?.forexSelling || 49.0348;
  const eurRate = latestTcmbRates?.EUR?.forexSelling || 55.3963;

  let text = '';
  if (mode === 'USD_TO_TL') {
    const total = amt * usdRate;
    text = `${amt.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} USD × ${usdRate.toLocaleString('tr-TR', { minimumFractionDigits: 4 })} = ${total.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`;
  } else if (mode === 'EUR_TO_TL') {
    const total = amt * eurRate;
    text = `${amt.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} EUR × ${eurRate.toLocaleString('tr-TR', { minimumFractionDigits: 4 })} = ${total.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`;
  } else if (mode === 'TL_TO_USD') {
    const total = usdRate > 0 ? (amt / usdRate) : 0;
    text = `${amt.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺ ÷ ${usdRate.toLocaleString('tr-TR', { minimumFractionDigits: 4 })} = ${total.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} $`;
  } else if (mode === 'TL_TO_EUR') {
    const total = eurRate > 0 ? (amt / eurRate) : 0;
    text = `${amt.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺ ÷ ${eurRate.toLocaleString('tr-TR', { minimumFractionDigits: 4 })} = ${total.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
  }

  resultEl.textContent = text;
}

// =========================================================
// AUTHENTICATION & LOGIN MANAGEMENT
// =========================================================

async function checkAuthAndInit() {
  const userDisplay = document.getElementById('lblCurrentUsername');
  
  if (!appState.authToken) {
    showLoginScreen();
    return;
  }

  try {
    const res = await fetch('/api/auth/verify', {
      headers: {
        'Authorization': `Bearer ${appState.authToken}`
      }
    });

    if (res.ok) {
      const data = await res.json();
      if (data.authenticated) {
        appState.isAuthenticated = true;
        appState.currentUser = data.username || appState.currentUser || 'admin';
        if (userDisplay) userDisplay.textContent = appState.currentUser;
        hideLoginScreen();
        loadData();
        renderDashboard();
        fetchTCMBRates();
        return;
      }
    }
  } catch (e) {
    console.warn('Sunucu doğrulama yapılamadı, yerel oturum kullanılıyor:', e);
    // Çevrimdışı modda token varsa devam et
    if (appState.authToken) {
      appState.isAuthenticated = true;
      if (userDisplay) userDisplay.textContent = appState.currentUser || 'admin';
      hideLoginScreen();
      loadData();
      renderDashboard();
      return;
    }
  }

  // Geçersiz oturum
  showLoginScreen();
}

function showLoginScreen() {
  const overlay = document.getElementById('loginScreenOverlay');
  if (overlay) {
    overlay.classList.add('active');
    const pwInput = document.getElementById('loginPassword');
    if (pwInput) {
      pwInput.value = '';
      setTimeout(() => pwInput.focus(), 150);
    }
  }
}

function hideLoginScreen() {
  const overlay = document.getElementById('loginScreenOverlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

async function handleLoginSubmit(e) {
  if (e) e.preventDefault();
  const unameInput = document.getElementById('loginUsername');
  const passInput = document.getElementById('loginPassword');
  const rememberInput = document.getElementById('loginRememberMe');
  const errorAlert = document.getElementById('loginErrorMsg');
  const errorText = document.getElementById('loginErrorText');
  const btnSubmit = document.getElementById('btnLoginSubmit');

  const username = (unameInput ? unameInput.value : '').trim();
  const password = (passInput ? passInput.value : '').trim();

  if (!username || !password) {
    if (errorAlert) {
      errorAlert.style.display = 'flex';
      errorText.textContent = 'Lütfen kullanıcı adı ve şifrenizi giriniz.';
    }
    return;
  }

  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Giriş Yapılıyor...';
  }

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    if (res.ok && data.success) {
      appState.authToken = data.token;
      appState.currentUser = data.username;
      appState.isAuthenticated = true;

      if (rememberInput && rememberInput.checked) {
        localStorage.setItem(AUTH_TOKEN_KEY, data.token);
        localStorage.setItem(AUTH_USER_KEY, data.username);
      } else {
        sessionStorage.setItem(AUTH_TOKEN_KEY, data.token);
        sessionStorage.setItem(AUTH_USER_KEY, data.username);
      }

      const userDisplay = document.getElementById('lblCurrentUsername');
      if (userDisplay) userDisplay.textContent = data.username;

      if (errorAlert) errorAlert.style.display = 'none';
      hideLoginScreen();
      showToast(`Hoş geldiniz Sayın ${data.username}! Sisteme giriş yapıldı.`, 'success');

      loadData();
      renderDashboard();
      fetchTCMBRates();
    } else {
      if (errorAlert) {
        errorAlert.style.display = 'flex';
        errorText.textContent = data.error || 'Kullanıcı adı veya şifre hatalı!';
      }
      if (passInput) {
        passInput.value = '';
        passInput.focus();
      }
    }
  } catch (err) {
    if (errorAlert) {
      errorAlert.style.display = 'flex';
      errorText.textContent = 'Sunucuya bağlanılamadı. Lütfen sunucunun açık olduğundan emin olun.';
    }
  } finally {
    if (btnSubmit) {
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i> Sisteme Güvenli Giriş Yap';
    }
  }
}

async function handleLogout() {
  if (confirm('Oturumu kapatıp çıkış yapmak istediğinize emin misiniz?')) {
    try {
      if (appState.authToken) {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${appState.authToken}`
          }
        });
      }
    } catch (e) {}

    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    sessionStorage.removeItem(AUTH_USER_KEY);
    appState.authToken = null;
    appState.currentUser = null;
    appState.isAuthenticated = false;

    showToast('Oturum güvenli bir şekilde kapatıldı.', 'info');
    showLoginScreen();
  }
}

async function handleChangePasswordSubmit(e) {
  if (e) e.preventDefault();
  const oldPw = document.getElementById('pwdOld').value.trim();
  const newPw = document.getElementById('pwdNew').value.trim();
  const confirmPw = document.getElementById('pwdNewConfirm').value.trim();
  const btn = document.getElementById('btnSubmitChangePw');

  if (newPw !== confirmPw) {
    showToast('Yeni şifreler birbiriyle uyuşmuyor!', 'warning');
    return;
  }

  if (newPw.length < 4) {
    showToast('Yeni şifreniz en az 4 karakter olmalıdır.', 'warning');
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Kaydediliyor...';
  }

  try {
    const res = await fetch('/api/auth/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${appState.authToken}`
      },
      body: JSON.stringify({ oldPassword: oldPw, newPassword: newPw })
    });

    const result = await res.json();
    if (res.ok && result.success) {
      showToast(result.message || 'Şifreniz başarıyla değiştirildi!', 'success');
      document.getElementById('formChangePassword').reset();
      closeModal('modalSettings');
    } else {
      showToast(result.error || 'Mevcut şifre hatalı!', 'error');
    }
  } catch (err) {
    showToast('Şifre güncellenirken sunucu hatası oluştu.', 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-save"></i> Şifreyi Güncelle';
    }
  }
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (btn) btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  } else {
    input.type = 'password';
    if (btn) btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
  }
}

// Global Scope Bindings (Tüm onclick öğelerinin kesintisiz çalışması için)
window.selectCustomerTab = selectCustomerTab;
window.openQuickRename = openQuickRename;
window.showDashboardView = showDashboardView;
window.showLedgerDetailView = showLedgerDetailView;
window.openProductSaleModal = openProductSaleModal;
window.openPaymentModal = openPaymentModal;
window.openCustomerModal = openCustomerModal;
window.deleteCustomer = deleteCustomer;
window.editTransaction = editTransaction;
window.deleteTransaction = deleteTransaction;
window.prepareAndPrintStatement = prepareAndPrintStatement;
window.exportToExcelCSV = exportToExcelCSV;
window.openModal = openModal;
window.closeModal = closeModal;
window.applyTheme = applyTheme;
window.applySettings = applySettings;
window.saveData = saveData;
window.renderDashboard = renderDashboard;
window.renderLedgerDetail = renderLedgerDetail;
window.openSettingsModalTab = openSettingsModalTab;
window.fetchTCMBRates = fetchTCMBRates;
window.updateCurrencyConversion = updateCurrencyConversion;
window.handleLoginSubmit = handleLoginSubmit;
window.handleLogout = handleLogout;
window.handleChangePasswordSubmit = handleChangePasswordSubmit;
window.togglePasswordVisibility = togglePasswordVisibility;
window.showLoginScreen = showLoginScreen;
window.hideLoginScreen = hideLoginScreen;

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  checkAuthAndInit();
  // 5 dakikada bir kurları otomatik kontrol et
  setInterval(fetchTCMBRates, 300000);
});
