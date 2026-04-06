// ========== DATA ==========

const defaultNewsArticles = [
  { id: 1, title: 'לנובו מרעננת את סדרת ניידי ה-ThinkPad עם חמישה דגמים חדשים', image: 'https://images.unsplash.com/photo-1531297122539-5692f69f1092?auto=format&fit=crop&q=80&w=800', category: 'מחשבים', isTop: 1, author: 'יאן לנגרמן', time: 'היום, 18:30' },
  { id: 2, title: 'גוגל מציגה: תהליך אבטחה חדש להתקנת אפליקציות באנדרואיד', image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=800', category: 'אבטחה', isTop: 2, author: 'יאן לנגרמן', time: 'היום, 17:00' },
  { id: 3, title: 'הוכרז: Xiaomi Watch S5 - מסך גדול יותר, ועד 21 ימי סוללה', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800', category: 'שעונים חכמים', isTop: 3, author: 'יאן לנגרמן', time: 'היום, 16:00' },
  { id: 4, title: 'גוגל משדרגת את מנוי ה-Google AI Pro ל-5TB, ללא תוספת תשלום', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800', author: 'יאן לנגרמן', time: 'היום, 16:45', snippet: 'נקודת עיקריות גוגל משדרגת את נפח אחסון מ-2TB ל-5TB. הגדלת הנפח מתבצעת ללא שינוי במחיר, שעומד על 74.90 שקלים בישראל. המהלך נועד להפוך את התוכנית לאטרקטיבית יותר עבור משתמשים הדורשים שטח רב עבור תוצרי בינה מלאכותית...', category: 'גוגל' },
  { id: 5, title: 'וואטסאפ מזהירה: כ-200 משתמשים הורידו גרסה מזויפת עם תוכנת ריגול', image: 'https://images.unsplash.com/photo-1614064641913-6b7140414f70?auto=format&fit=crop&q=80&w=800', author: 'יאן לנגרמן', time: 'היום, 15:45', snippet: 'חוקרי אבטחה מזהירים כי גרסה מזויפת של וואטסאפ עוקפת את מנגנוני ההגנה של חנות האפליקציות, במטרה לאסוף מידע אישי על המשתמשים...', category: 'אבטחה' },
  { id: 6, title: 'גוגל מכריזה על Wear OS 6.1: זיהוי מיקום עצמאי ושדרוג חשבונות ילדים', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800', author: 'יאן לנגרמן', time: 'היום, 12:12', snippet: 'העדכון משפר את יכולות השעונים החכמים, במטרה להתחרות ראש בראש עם שעוני אפל בגרסאותיהם החדשות.', category: 'גוגל' },
  { id: 7, title: 'אנבידיה מציגה את טכנולוגיית ה-Auto Shader Compilation לקיצור זמני טעינה במשחקים', image: 'https://images.unsplash.com/photo-1598550487031-0898b4852123?auto=format&fit=crop&q=80&w=800', author: 'יאן לנגרמן', time: 'היום, 10:40', snippet: 'הטכנולוגיה החדשה צפויה לחסוך שניות יקרות בעת טעינת המשחק הראשונית, ומונעת כליל את צורך בדימוי גרפי מיותר מראש.', category: 'חומרה' },
  { id: 8, title: 'טלגרם מציגה: עורך טקסט מבוסס AI, שדרוג לסקרים ותמיכה בתמונות חיים', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800', author: 'יאן לנגרמן', time: 'היום, 09:19', snippet: 'גרסת טלגרם החדשה כוללת חידושים בולטים הנוגעים לכלי הבינה המלאכותית ולנוחות השיתוף בפלטפורמה.', category: 'אפליקציות' }
];

const defaultPdfStoreItems = [
  { title: 'מדריך פייתון למתחילים', type: 'PDF', price: '₪49', desc: 'למד לתכנת מאפס עם דוגמאות מעשיות.', link: '#' },
  { title: 'ערכת UI בסגנון אפל', type: 'קובץ', price: 'חינם', desc: 'אייקונים, פונטים ותבניות Figma נקיות.', link: '#' },
  { title: 'קורס וידאו React 2024', type: 'סרטון', price: '₪199', desc: '15 שעות של תוכן מקצועי על פיתוח אפליקציות.', link: '#' },
  { title: 'מערכת ניהול משימות Pro', type: 'תוכנה', price: '₪89', desc: 'תוכנה לניהול זמן ופרויקטים למקצוענים.', link: '#' },
  { title: 'מדריך אבטחת מידע', type: 'PDF', price: '₪120', desc: 'כלים ושיטות להגנה על האתר והשרת שלך.', link: '#' },
  { title: 'ספריית רכיבי CSS', type: 'קובץ', price: '₪29', desc: 'עשרות כפתורים, תפריטים ואנימציות מוכנות.', link: '#' },
  { title: 'מדריך בניית אתרים ב-Vite', type: 'PDF', price: '₪35', desc: 'המדריך המקיף לפיתוח מהיר ומודרני.', link: '#' },
  { title: 'צ\'ק ליסט קידום אתרים (SEO)', type: 'מדריך', price: 'חינם', desc: 'כל מה שצריך לעשות כדי להגיע לעמוד הראשון.', link: '#' },
  { title: 'ערכת כלי סייבר למנהלים', type: 'כלי', price: '₪450', desc: 'חבילת כלים לניטור וניהול איומים ברשת.', link: '#' },
  { title: 'מדריך פוטושופ למעצבים', type: 'PDF', price: '₪75', desc: 'טיפים וטריקים לעיבוד תמונה מתקדם.', link: '#' },
  { title: 'תוכנת הקלטת מסך 4K', type: 'תוכנה', price: '₪55', desc: 'הקלטה באיכות גבוהה עם עורך וידאו מובנה.', link: '#' },
  { title: 'מדריך השקעות בשוק ההון', type: 'PDF', price: '₪150', desc: 'הצעדים הראשונים בדרך לחופש כלכלי.', link: '#' },
  { title: 'תבנית דף נחיתה לעסקים', type: 'קובץ', price: '₪99', desc: 'תבנית רספונסיבית הממוקדת בהמרות.', link: '#' },
  { title: 'קורס סקיצות ב-iPad', type: 'סרטון', price: '₪130', desc: 'למד לצייר ולאייר דיגיטלית ב-Procreate.', link: '#' },
  { title: 'מדריך קריפטו 101', type: 'PDF', price: 'חינם', desc: 'הבנה בסיסית של בלוקצ\'יין ומטבעות דיגיטליים.', link: '#' },
  { title: 'ערכת פונטים פרימיום', type: 'קובץ', price: '₪45', desc: 'אוסף פונטים בעברית ובאנגלית למעצבים.', link: '#' },
  { title: 'מדריך ניהול קמפיינים', type: 'PDF', price: '₪110', desc: 'איך לנהל פרסום ממומן בפייסבוק וגוגל.', link: '#' },
  { title: 'תבנית תיק עבודות (Portfolio)', type: 'קובץ', price: '₪79', desc: 'תבנית דף HTML/CSS נקייה להצגת עבודות.', link: '#' },
  { title: 'ספריית סאונד ומוזיקה', type: 'קובץ', price: '₪150', desc: 'מאות אפקטים ומוזיקת רקע לסרטונים.', link: '#' },
  { title: 'מדריך עריכת וידאו ב-Premiere', type: 'PDF', price: '₪85', desc: 'כל הטיפים לעריכה מהירה ומקצועית.', link: '#' },
  { title: 'תוכנת ניקוי קבצים Pro', type: 'תוכנה', price: '₪30', desc: 'כלי קטן ויעיל לניקוי קבצי זבל מהמחשב.', link: '#' },
  { title: 'צ\'ק ליסט השקת מוצר', type: 'מדריך', price: 'חינם', desc: 'השלבים הקריטיים לפני שמוציאים מוצר לשוק.', link: '#' },
  { title: 'מערכת ניהול תקציב משפחתי', type: 'קובץ', price: '₪25', desc: 'טבלת אקסל חכמה לניהול הוצאות והכנסות.', link: '#' },
  { title: 'מדריך בניית קהילה באינסטגרם', type: 'PDF', price: '₪60', desc: 'איך להשיג עוקבים אמיתיים ופעילים.', link: '#' }
];

const defaultViewerPhotos = [
  { title: 'תצפית מהחרמון', telegram: '@yoni_s', age: '24', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800' },
  { title: 'שקיעה בתל אביב', telegram: '@noa_love', age: '19', img: 'https://images.unsplash.com/photo-1544971587-b842c27f8e14?auto=format&fit=crop&q=80&w=800' },
  { title: 'טיול לנחל דוד', telegram: '@itay_traveler', age: '31', img: 'https://images.unsplash.com/photo-1562141971-85b410787e74?auto=format&fit=crop&q=80&w=800' },
  { title: 'קפה בבוקר ירושלמי', telegram: '@sarah_k', age: '28', img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800' }
];

let storedViewerPhotos = localStorage.getItem('viewerPhotos');
if (!storedViewerPhotos || JSON.parse(storedViewerPhotos).length === 0) {
  localStorage.setItem('viewerPhotos', JSON.stringify(defaultViewerPhotos));
}

let storedPdfItems = localStorage.getItem('pdfStoreItems');
if (!storedPdfItems || JSON.parse(storedPdfItems).length === 0) {
  localStorage.setItem('pdfStoreItems', JSON.stringify(defaultPdfStoreItems));
}

const SERVER_URL = 'http://localhost:4242';

let storedArticles = localStorage.getItem('newsArticles');
let newsArticles = storedArticles ? JSON.parse(storedArticles) : [...defaultNewsArticles];
if (!storedArticles) {
  localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
}

let nextId = newsArticles.length ? Math.max(...newsArticles.map(a => a.id)) + 1 : 1;
let isAdmin = localStorage.getItem('isAdmin') === 'true';
let previousPage = 'home';

// ========== NAVIGATION ==========
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById(`page-${page}`);
  if (targetPage) targetPage.classList.add('active');

  if (page === 'home') renderNewsLayout();
  if (page === 'store') renderStoreLayout();
  if (page === 'pdf-store') renderPdfStoreGrid();
  if (page === 'comics') renderComicsGrid();
  if (page === 'appointments') initBookingWidget();
  if (page === 'viewer-photos') renderViewerPhotosGrid();
  
  // Custom updates for detail pages
  if (page === 'article') renderComments('article', currentArticleId);
  if (page === 'comic-detail') renderComments('comic', activeComicIndex);

  if (page === 'admin') {
    if (!isAdmin) {
      showPage('admin-login');
      return;
    }
    initAdminDashboard();
  }
}



// ========== BOOKING LOGIC ==========
// ========== BOOKING LOGIC ==========
function initBookingWidget() {
  const grid = document.getElementById('book-time-grid');
  if (!grid) return;
  const day = document.getElementById('book-day').value;
  const appts = JSON.parse(localStorage.getItem('appointments') || '[]');
  
  let html = '';
  selectedTime = ''; // Reset selection on day change
  
  for (let h = 7; h <= 18; h++) {
    const time = `${h.toString().padStart(2, '0')}:00`;
    // Check if this slot is already booked for this specific day
    const isBooked = appts.some(a => a.day === day && a.time === time);
    
    if (isBooked) {
      html += `<div class="time-slot booked" style="padding:10px; border:1px solid #eee; border-radius:10px; text-align:center; font-size:0.9rem; font-weight:600; background:#f5f5f7; color:#d2d2d7; cursor:not-allowed; text-decoration:line-through;">${time}</div>`;
    } else {
      html += `<div class="time-slot" onclick="selectTime(this)" style="padding:10px; border:1px solid #d2d2d7; border-radius:10px; text-align:center; cursor:pointer; font-size:0.9rem; font-weight:600; transition:0.2s; background:#fff; color:#1d1d1f;">${time}</div>`;
    }
  }
  grid.innerHTML = html;
}

let selectedTime = '';
function selectTime(el) {
  if (el.classList.contains('booked')) return;
  document.querySelectorAll('.time-slot').forEach(s => {
    if (!s.classList.contains('booked')) {
      s.style.borderColor = '#d2d2d7';
      s.style.backgroundColor = '#fff';
      s.style.color = '#1d1d1f';
    }
  });
  el.style.borderColor = '#0071e3';
  el.style.backgroundColor = 'rgba(0, 113, 227, 0.05)';
  el.style.color = '#0071e3';
  selectedTime = el.textContent;
}

function openBookingModal() {
  const day = document.getElementById('book-day').value;
  if (!selectedTime) {
    showToast('❌ נא לבחור שעה פנויה');
    return;
  }
  
  document.getElementById('booking-selected-info').textContent = `יום ${day} בשעה ${selectedTime}`;
  document.getElementById('booking-modal').classList.add('active');
}

function closeBookingModal() {
  document.getElementById('booking-modal').classList.remove('active');
}

function submitBookingDirect() {
  const name = document.getElementById('book-name-direct').value;
  const phone = document.getElementById('book-phone-direct').value;
  const request = document.getElementById('book-request-direct').value;
  const day = document.getElementById('book-day').value;
  
  if (!selectedTime) {
    showToast('❌ נא לבחור שעה פנויה');
    return;
  }
  if (!name || !phone) {
    showToast('❌ נא למלא שם וטלפון');
    return;
  }

  const appt = {
    id: Date.now(),
    name,
    phone,
    request,
    day,
    time: selectedTime,
    created: new Date().toLocaleString('he-IL')
  };
  
  const appts = JSON.parse(localStorage.getItem('appointments') || '[]');
  appts.push(appt);
  localStorage.setItem('appointments', JSON.stringify(appts));
  
  showToast('✅ התור נקבע בהצלחה!');
  
  // Clear direct inputs
  document.getElementById('book-name-direct').value = '';
  document.getElementById('book-phone-direct').value = '';
  document.getElementById('book-request-direct').value = '';
  
  initBookingWidget(); // Refresh grid to remove booked slot
}

function submitBooking(e) {
  e.preventDefault();
  const name = document.getElementById('book-name').value;
  const phone = document.getElementById('book-phone').value;
  const request = document.getElementById('book-request').value;
  const day = document.getElementById('book-day').value;
  
  const appt = {
    id: Date.now(),
    name,
    phone,
    request,
    day,
    time: selectedTime,
    created: new Date().toLocaleString('he-IL')
  };
  
  const appts = JSON.parse(localStorage.getItem('appointments') || '[]');
  appts.push(appt);
  localStorage.setItem('appointments', JSON.stringify(appts));
  
  showToast('✅ התור נקבע בהצלחה!');
  closeBookingModal();
  e.target.reset();
  initBookingWidget(); // Refresh grid to remove booked slot
}

// ========== ADMIN CALENDAR ==========
function renderAdminCalendar() {
  const list = document.getElementById('admin-calendar-list');
  if (!list) return;
  const appts = JSON.parse(localStorage.getItem('appointments') || '[]');
  
  if (appts.length === 0) {
    list.innerHTML = '<div style="text-align:center; padding:40px; color:#86868b;">אין תורים קבועים ביומן.</div>';
    return;
  }
  
  list.innerHTML = appts.reverse().map(a => `
    <div style="background:#f5f5f7; border-radius:12px; padding:24px; border:1px solid var(--border-subtle); text-align:right;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px;">
        <div>
          <div style="font-weight:800; font-size:1.2rem; color:#1d1d1f; margin-bottom:4px;">${escHtml(a.name)}</div>
          <div style="font-size:0.95rem; color:#86868b;">📞 ${escHtml(a.phone)}</div>
        </div>
        <div style="text-align:left;">
          <div style="font-weight:800; color:#0071e3; font-size:1.1rem;">יום ${escHtml(a.day)} | ${escHtml(a.time)}</div>
          <div style="font-size:0.75rem; color:#86868b; margin-top:6px;">נקבע ב: ${a.created}</div>
        </div>
      </div>
      ${a.request ? `
        <div style="background:#fff; border-radius:10px; padding:16px; border:1px solid #e1e1e6; font-size:1rem; color:#424245; line-height:1.5;">
          <strong>בקשה:</strong> ${escHtml(a.request)}
        </div>
      ` : ''}
    </div>
  `).join('');
}

function clearAppointments() {
  if (confirm('האם אתה בטוח שברצונך למחוק את כל התורים?')) {
    localStorage.removeItem('appointments');
    renderAdminCalendar();
    showToast('🗑️ היומן נוקה');
  }
}


function goBack() {
  showPage(previousPage);
}

// ========== RENDER NEWS ==========
let currentPage = 1;
const ARTICLES_PER_PAGE = 10;

function renderNewsLayout(page = 1) {
  currentPage = page;
  const topGrid = document.getElementById('top-news-grid');
  const feedList = document.getElementById('news-feed-list');
  const paginationEl = document.getElementById('news-pagination');
  if(!topGrid || !feedList) return;

  // Top 3 hero cards only on first page
  const topArticles = newsArticles.filter(x => x.isTop).sort((a,b) => a.isTop - b.isTop);
  if (page === 1) {
    topGrid.innerHTML = topArticles.map(a => `
      <div class="top-news-card" onclick="showArticle(${a.id})">
        <div class="top-news-bg" style="background-image: url('${a.image}')"></div>
        <div class="top-news-overlay">
          <h3>${escHtml(a.title)}</h3>
        </div>
      </div>
    `).join('');
  }

  const feedArticles = newsArticles.filter(x => !x.isTop);
  const totalPages = Math.max(1, Math.ceil(feedArticles.length / ARTICLES_PER_PAGE));
  const start = (page - 1) * ARTICLES_PER_PAGE;
  const pageArticles = feedArticles.slice(start, start + ARTICLES_PER_PAGE);

  feedList.innerHTML = pageArticles.map(a => `
    <div class="feed-item" onclick="showArticle(${a.id})">
      <div class="feed-image" style="background-image: url('${a.image}')"></div>
      <div class="feed-content">
        <h2 class="feed-title">${escHtml(a.title)}</h2>
        <div class="feed-meta"><span class="author-name">${escHtml(a.author)}</span> <span class="meta-sep">|</span> <span class="meta-date">${escHtml(a.time)}</span></div>
        ${a.snippet ? `<p class="feed-snippet">${escHtml(a.snippet)}</p>` : ''}
      </div>
    </div>
  `).join('');

  // Render pagination buttons
  if (paginationEl) {
    if (totalPages <= 1) {
      paginationEl.innerHTML = '';
    } else {
      paginationEl.innerHTML = Array.from({ length: totalPages }, (_, i) => i + 1).map(p => `
        <button onclick="renderNewsLayout(${p}); window.scrollTo({top:0,behavior:'smooth'});"
          style="padding: 8px 16px; border-radius: 980px; border: 1px solid ${p === page ? '#0071e3' : '#ccc'};
          background: ${p === page ? '#0071e3' : '#fff'}; color: ${p === page ? '#fff' : '#1d1d1f'};
          font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;">
          ${p}
        </button>
      `).join('');
    }
  }
}

function filterCategory(cat) {
  // Logic not fully implemented since this is a UI prototype
  alert('Filtering by: ' + cat);
}

function showArticle(id) {
  currentArticleId = id;
  previousPage = document.querySelector('.page.active')?.id?.replace('page-', '') || 'home';
  const a = newsArticles.find(x => x.id === id);
  if (!a) return;

  document.getElementById('article-content').innerHTML = `
    <header class="article-header">
      <div class="article-category">${escHtml(a.category)}</div>
      <h1 class="article-title-main">${escHtml(a.title)}</h1>
      <div class="article-meta-main">
        מאת <span class="author-name" style="font-weight:700;">${escHtml(a.author)}</span>
        <span class="meta-sep">|</span> 
        <span class="meta-date">${escHtml(a.time)}</span>
      </div>
    </header>
    <div class="article-hero-img" style="background-image: url('${a.image}')"></div>
    <div class="article-body">
      <p class="article-intro">${escHtml(a.snippet || a.title)}</p>
      ${a.content ? `<div style="white-space: pre-line; margin-top: 20px;">${escHtml(a.content)}</div>` : `
      <p>זהו טקסט דמה להמחשת הכתבה. במערכת חדשות מלאה, אזור זה יישאב ממסד הנתונים ויכיל פסקאות, ציטוטים מורחבים, גלריות תמונות ואפשרויות לשיתוף ברשתות חברתיות.</p>
      <p>חברת הטכנולוגיה המובילה חשפה לאחרונה את כל העדכונים של המערכת המיוחלת החדשה. באירוע שערכה, השתתפו אלפי עיתונאי טכנולוגיה מכל העולם, שזכו לראות את כלי התוכנה המתקדמים ואת החומרה.</p>
      <p>בנוסף, הושם דגש מיוחד על יכולות בינה מלאכותית, פרטיות ואבטחת מידע, עם שיפורים שיהפכו כל פעולה ליעילה, נוחה ומאובטחת יותר מתמיד.</p>
      `}
    </div>
  `;

  showPage('article');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== ADMIN DASHBOARD ==========
function adminLogin() {
  const user = document.getElementById('admin-user')?.value;
  const pass = document.getElementById('admin-pass')?.value;
  if (user === 'yoni98321' && pass === '052657yoniWw!') {
    localStorage.setItem('isAdmin', 'true');
    isAdmin = true;
    showToast('✅ מנהל התחבר בהצלחה');
    showPage('admin');
  } else {
    showToast('❌ שם משתמש או סיסמה שגויים');
  }
}

function initAdminDashboard() {
  // Populate stats
  const statTotal = document.getElementById('stat-total');
  const statToday = document.getElementById('stat-today');
  const statArticles = document.getElementById('stat-articles');
  const statMessages = document.getElementById('stat-messages');

  let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  if (statTotal) statTotal.textContent = localStorage.getItem('visitTotal') || '0';
  if (statToday) statToday.textContent = localStorage.getItem('visitToday') || '0';
  if (statArticles) statArticles.textContent = newsArticles.length;
  if (statMessages) statMessages.textContent = msgs.length;

  const msgList = document.getElementById('admin-messages-list');
  const navMsgCount = document.getElementById('nav-msg-count');
  if (navMsgCount) navMsgCount.textContent = msgs.length;

  if (msgList) {
    if (msgs.length === 0) {
      msgList.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 20px; color:#86868b;">אין הודעות חדשות</td></tr>';
    } else {
      msgList.innerHTML = msgs.map((m, i) => `
        <tr class="hover-row" style="transition: background 0.2s; cursor: pointer;" onclick="viewMessage(${i})" onmouseover="this.style.background='#f5f5f7'" onmouseout="this.style.background='transparent'">
          <td style="white-space: nowrap;">${escHtml(m.date)}</td>
          <td><strong>${escHtml(m.name)}</strong></td>
          <td style="white-space: pre-wrap;">${escHtml(m.body).substring(0, 60)}${m.body.length > 60 ? '...' : ''}</td>
          <td onclick="event.stopPropagation()">
            <button class="remove-btn" style="padding: 4px 12px; font-size: 0.85rem; border: none; background: transparent;" onclick="deleteMessage(${i})">מחק</button>
          </td>
        </tr>
      `).join('');
    }
  }


  const list = document.getElementById('admin-articles-list');
  if (!list) return;

  list.innerHTML = newsArticles.map(a => `
    <tr>
      <td>${a.id}</td>
      <td><strong>${escHtml(a.title)}</strong> ${a.isTop ? '🌟' : ''}</td>
      <td>${escHtml(a.category)}</td>
      <td>${escHtml(a.author)}</td>
      <td style="display:flex; gap:8px;">
        <button class="btn-primary" style="padding: 4px 12px; font-size: 0.85rem;" onclick="editArticle(${a.id})">ערוך</button>
        <button class="remove-btn" style="padding: 4px 12px; font-size: 0.85rem; border: none; background: transparent;" onclick="deleteArticle(${a.id})">מחק</button>
      </td>
    </tr>
  `).join('');

  const sc = JSON.parse(localStorage.getItem('storeConfig')) || { title: 'התוכנה המקצועית שלי', version: 'גרסה 1.0', desc: 'קבל גישה לכלים המתקדמים ביותר עם התוכנה שלנו. כלי חובה לכל מקצוען שמחפש לייעל עבודה ולחסוך זמן.', image: '', downloadLink: '' };
  const storeTitleInput = document.getElementById('store-edit-title');
  if(storeTitleInput) {
    storeTitleInput.value = sc.title || '';
    document.getElementById('store-edit-version').value = sc.version || '';
    document.getElementById('store-edit-desc').value = sc.desc || '';
    document.getElementById('store-edit-image').value = sc.image || '';
    document.getElementById('store-edit-download').value = sc.downloadLink || '';
  }
}

function switchAdminTab(tabId, btnEl) {
  document.querySelectorAll('.admin-section').forEach(el => el.style.display = 'none');
  const target = document.getElementById('admin-section-' + tabId);
  if (target) target.style.display = 'block';
  
  if (btnEl) {
    document.querySelectorAll('.admin-nav-btn').forEach(btn => btn.classList.remove('active'));
    btnEl.classList.add('active');
  }
  if (tabId === 'calendar') renderAdminCalendar();
  if (tabId === 'pdfstore') renderPdfAdminList();
  if (tabId === 'viewer-photos') renderPhotoAdminList();
  if (tabId === 'comics') renderComicAdminList();
}



function deleteMessage(index) {
  if (confirm('האם אתה בטוח שברצונך למחוק הודעה זו?')) {
    let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    msgs.splice(index, 1);
    localStorage.setItem('contactMessages', JSON.stringify(msgs));
    initAdminDashboard();
    showToast('ההודעה נמחקה');
  }
}

let currentViewMessageIndex = -1;

function viewMessage(index) {
  let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  const m = msgs[index];
  if (!m) return;
  currentViewMessageIndex = index;
  document.getElementById('view-msg-name').textContent = m.name;
  document.getElementById('view-msg-phone').textContent = 'טלפון: ' + (m.phone || 'לא הוזן');
  document.getElementById('view-msg-date').textContent = m.date;
  document.getElementById('view-msg-body').textContent = m.body;
  document.getElementById('message-view-modal').classList.add('active');
}

function closeMessageViewModal() {
  document.getElementById('message-view-modal').classList.remove('show');
  currentViewMessageIndex = -1;
}

function deleteMessageFromModal() {
  if (currentViewMessageIndex >= 0) {
    if (confirm('האם אתה בטוח שברצונך למחוק הודעה זו?')) {
      let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      msgs.splice(currentViewMessageIndex, 1);
      localStorage.setItem('contactMessages', JSON.stringify(msgs));
      initAdminDashboard();
      closeMessageViewModal();
      showToast('ההודעה נמחקה');
    }
  }
}

function deleteArticle(id) {
  if (confirm('האם אתה בטוח שברצונך למחוק כתבה זו?')) {
    newsArticles = newsArticles.filter(a => a.id !== id);
    localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
    initAdminDashboard();
    renderNewsLayout();
    showToast('נמחק בהצלחה');
  }
}

function openArticleEditor(id = null) {
  document.getElementById('admin-editor').classList.remove('hidden');
  const editorTitle = document.getElementById('admin-editor').querySelector('h3');
  
  if (id) {
    editorTitle.textContent = 'עריכת כתבה - מזהה ' + id;
    const a = newsArticles.find(x => x.id === id);
    document.getElementById('edit-id').value = a.id;
    document.getElementById('edit-title').value = a.title;
    document.getElementById('edit-category').value = a.category;
    document.getElementById('edit-author').value = a.author;
    document.getElementById('edit-time').value = a.time;
    document.getElementById('edit-image').value = a.image || '';
    document.getElementById('edit-snippet').value = a.snippet || '';
    document.getElementById('edit-content').value = a.content || '';
    document.getElementById('edit-isTop').checked = !!a.isTop;
  } else {
    editorTitle.textContent = 'יצירת כתבה חדשה';
    document.getElementById('edit-id').value = '';
    document.getElementById('edit-title').value = '';
    document.getElementById('edit-category').value = '';
    document.getElementById('edit-author').value = 'מערכת חדשות';
    document.getElementById('edit-time').value = 'היום, 12:00';
    document.getElementById('edit-image').value = 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=800';
    document.getElementById('edit-snippet').value = '';
    document.getElementById('edit-content').value = '';
    document.getElementById('edit-isTop').checked = false;
  }
  
  document.getElementById('admin-editor').scrollIntoView({ behavior: 'smooth' });
}

function editArticle(id) {
  openArticleEditor(id);
}

function saveAdminArticle() {
  const idValue = document.getElementById('edit-id').value;
  const isTop = document.getElementById('edit-isTop').checked;
  
  const articleObj = {
    id: idValue ? Number(idValue) : nextId++,
    title: document.getElementById('edit-title').value,
    category: document.getElementById('edit-category').value,
    author: document.getElementById('edit-author').value,
    time: document.getElementById('edit-time').value,
    image: document.getElementById('edit-image').value,
    snippet: document.getElementById('edit-snippet').value,
    content: document.getElementById('edit-content').value,
    isTop: isTop ? (newsArticles.filter(a => a.isTop).length + 1) : false
  };

  if(!articleObj.title) {
    showToast('יש למלא כותרת');
    return;
  }

  if (idValue) {
    const idx = newsArticles.findIndex(a => a.id === Number(idValue));
    newsArticles[idx] = articleObj;
    showToast('הכתבה עודכנה');
  } else {
    newsArticles.unshift(articleObj);
    showToast('נוצר בהצלחה');
  }

  if (isTop) {
     const topArts = newsArticles.filter(a => a.isTop).sort((a,b) => a.isTop - b.isTop);
     if(topArts.length > 3) {
        topArts[topArts.length-1].isTop = false; // Limit to 3 top items max implicitly
     }
  }

  localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
  document.getElementById('admin-editor').classList.add('hidden');
  initAdminDashboard();
  renderNewsLayout();
}

// ========== UTILS ==========
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) {
    alert(msg);
    return;
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Show a loading toast
  showToast('מעבד תמונה...');

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 800; // compress dimension
      let width = img.width;
      let height = img.height;

      if (width > MAX_WIDTH) {
        height = Math.round(height * (MAX_WIDTH / width));
        width = MAX_WIDTH;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      // Compress to 70% quality JPEG => Greatly saves LocalStorage space
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
      document.getElementById('edit-image').value = compressedDataUrl;
      showToast('התמונה מוכנה! ✅');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// ========== STORE MANAGEMENT ==========
function renderStoreLayout() {
  const c = JSON.parse(localStorage.getItem('storeConfig')) || { title: 'התוכנה המקצועית שלי', version: 'גרסה 1.0', desc: 'קבל גישה לכלים המתקדמים ביותר עם התוכנה שלנו. כלי חובה לכל מקצוען שמחפש לייעל עבודה ולחסוך זמן.', image: '', downloadLink: '' };
  const titleEl = document.getElementById('store-render-title');
  const versionEl = document.getElementById('store-render-version');
  const descEl = document.getElementById('store-render-desc');
  const imgEl = document.getElementById('store-render-image');
  const emojiEl = document.getElementById('store-render-emoji');
  
  if(titleEl) titleEl.textContent = c.title || 'התוכנה המקצועית שלי';
  if(versionEl) versionEl.textContent = c.version || 'גרסה 1.0';
  if(descEl) descEl.textContent = c.desc || '';
  
  if(c.image) {
    if(imgEl) { imgEl.src = c.image; imgEl.style.display = 'block'; }
    if(emojiEl) emojiEl.style.display = 'none';
  } else {
    if(imgEl) imgEl.style.display = 'none';
    if(emojiEl) emojiEl.style.display = 'block';
  }
}

function saveStoreConfig() {
  const title = document.getElementById('store-edit-title').value;
  const version = document.getElementById('store-edit-version').value;
  const desc = document.getElementById('store-edit-desc').value;
  const image = document.getElementById('store-edit-image').value;
  const downloadLink = document.getElementById('store-edit-download').value;
  
  const config = { title, version, desc, image, downloadLink };
  localStorage.setItem('storeConfig', JSON.stringify(config));
  
  renderStoreLayout();
  showToast('הגדרות החנות נשמרו בהצלחה!');
}

function handleStoreImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  showToast('מעבד תמונה...');
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 600;
      let width = img.width;
      let height = img.height;

      if (width > MAX_WIDTH) {
        height = Math.round(height * (MAX_WIDTH / width));
        width = MAX_WIDTH;
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
      document.getElementById('store-edit-image').value = compressedDataUrl;
      showToast('התמונה מוכנה! ✅');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function downloadStoreSoftware() {
  const c = JSON.parse(localStorage.getItem('storeConfig')) || {};
  if(c.downloadLink) {
    window.open(c.downloadLink, '_blank');
  } else {
    showToast('ההורדה תתחיל בקרוב...');
  }
}

// ========== PDF STORE ==========
const typeEmoji = { 'PDF': '📄', 'תוכנה': '🖥️', 'סרטון': '📹', 'קובץ': '📁', 'מדריך': '📚' };

function getPdfItems() {
  return JSON.parse(localStorage.getItem('pdfStoreItems') || '[]');
}

function savePdfItems(items) {
  localStorage.setItem('pdfStoreItems', JSON.stringify(items));
}

function renderPdfStoreGrid() {
  const grid = document.getElementById('pdf-store-grid');
  if (!grid) return;
  const items = getPdfItems();
  if (items.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:80px; color:#86868b; font-size:1.1rem;">אין פריטים בחנות עדיין. המנהל יוסיף בקרוב!</div>';
    return;
  }
  grid.innerHTML = items.map((item, i) => {
    const icon = typeEmoji[item.type] || '📄';
    const mainImg = (item.images && item.images.length > 0) ? item.images[0] : '';
    
    return `
      <div class="pdf-card" onclick="showProductDetail(${i})">
        ${mainImg ? `<img src="${mainImg}" style="width:100%; height:160px; object-fit:cover; border-radius:12px; margin-bottom:12px;" />` : 
                    `<div class="pdf-card-icon">${icon}</div>`}
        <div class="pdf-card-type">${escHtml(item.type)}</div>
        <div class="pdf-card-title">${escHtml(item.title)}</div>
        ${item.desc ? `<div class="pdf-card-desc">${escHtml(item.desc)}</div>` : ''}
        <div class="pdf-card-price">${escHtml(item.price || 'חינם')}</div>
      </div>
    `;
  }).join('');
}

let currentProductBasePrice = 0;
let currentProductLink = '';
function showProductDetail(index) {
  const items = getPdfItems();
  const item = items[index];
  if (!item) return;
  
  currentProductLink = item.link || '';
  const priceStr = (item.price || '0').replace(/[^0-9.]/g, '');
  currentProductBasePrice = parseFloat(priceStr) || 0;
  
  document.getElementById('pdp-title').textContent = item.title;
  document.getElementById('pdp-price').textContent = item.price || 'חינם';
  document.getElementById('pdp-desc').textContent = item.desc || '';
  
  // Gallery Logic
  const images = item.images || [];
  const mainImg = document.getElementById('pdp-main-image');
  const thumbList = document.getElementById('pdp-thumbnails');
  
  if (images.length > 0) {
    mainImg.src = images[0];
    thumbList.innerHTML = images.map((img, i) => `
      <div class="pdp-thumb ${i === 0 ? 'active' : ''}" onclick="changePdpImage(this, '${img}')">
        <img src="${img}" alt="Thumbnail ${i+1}">
      </div>
    `).join('');
  } else {
    const cidMap = { 'PDF': '1544716278-ca5e3f4abd8c', 'תוכנה': '1517694712202-14dd9538aa97', 'סרטון': '1492724441997-5dc865305da7', 'קובץ': '1544391490-01c6db9f5a70', 'מדריך': '1497633762265-9d179a990aa6' };
    const cid = cidMap[item.type] || cidMap['PDF'];
    const fallback = `https://images.unsplash.com/photo-${cid}?auto=format&fit=crop&q=80&w=800`;
    mainImg.src = fallback;
    thumbList.innerHTML = `<div class="pdp-thumb active"><img src="${fallback}"></div>`;
  }
  
  // Reset variant chips
  const variantContainer = document.getElementById('pdp-variant-chips');
  if (variantContainer) {
    variantContainer.querySelectorAll('.chip').forEach((c, idx) => {
      c.classList.toggle('active', idx === 0);
    });
  }
  
  showPage('product-detail');
}

function changePdpImage(el, src) {
  document.getElementById('pdp-main-image').src = src;
  document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function updatePdpVariant(el, multiplier) {
  document.querySelectorAll('#pdp-variant-chips .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  
  const totalPrice = Math.round(currentProductBasePrice * multiplier * 100) / 100;
  const priceEl = document.getElementById('pdp-price');
  if (priceEl) {
    priceEl.textContent = totalPrice > 0 ? `₪${totalPrice.toLocaleString()}` : 'חינם';
  }
}

function handleDownload() {
  if (currentProductLink) {
    window.open(currentProductLink, '_blank');
  } else {
    showToast('הקישור עדיין לא הוגדר למוצר זה.');
  }
}

function renderPdfAdminList() {
  const list = document.getElementById('pdf-admin-list');
  if (!list) return;
  const items = getPdfItems();
  if (items.length === 0) {
    list.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:32px; color:#86868b;">אין פריטים עדיין. לחץ "הוסף פריט".</div>';
    return;
  }
  list.innerHTML = items.map((item, i) => `
    <div style="background:#f5f5f7; border-radius:12px; padding:16px; display:flex; flex-direction:column; gap:8px; position:relative;">
      <div style="font-size:2rem; text-align:center;">${typeEmoji[item.type] || '📄'}</div>
      <div style="font-weight:700; font-size:0.9rem; text-align:center; color:#1d1d1f;">${escHtml(item.title)}</div>
      <div style="font-size:0.8rem; color:#86868b; text-align:center;">${escHtml(item.type)} · ${escHtml(item.price || 'חינם')}</div>
      <div style="display:flex; gap:6px; justify-content:center; margin-top:4px;">
        <button class="btn-primary" style="padding:4px 10px; font-size:0.78rem;" onclick="editPdfItem(${i})">ערוך</button>
        <button class="remove-btn" style="padding:4px 10px; font-size:0.78rem; border:none; background:transparent;" onclick="deletePdfItem(${i})">מחק</button>
      </div>
    </div>
  `).join('');
}

function openPdfItemEditor(index = null) {
  document.getElementById('pdf-item-editor').classList.remove('hidden');
  if (index !== null) {
    const items = getPdfItems();
    const item = items[index];
    document.getElementById('pdf-edit-id').value = index;
    document.getElementById('pdf-edit-title').value = item.title || '';
    document.getElementById('pdf-edit-desc').value = item.desc || '';
    document.getElementById('pdf-edit-type').value = item.type || 'PDF';
    document.getElementById('pdf-edit-price').value = item.price || '';
    document.getElementById('pdf-edit-link').value = item.link || '';
    
    // Load images
    for (let i = 1; i <= 4; i++) {
       const img = (item.images && item.images[i-1]) ? item.images[i-1] : '';
       document.getElementById(`pdf-edit-img${i}`).value = img;
    }
  } else {
    document.getElementById('pdf-edit-id').value = '';
    document.getElementById('pdf-edit-title').value = '';
    document.getElementById('pdf-edit-desc').value = '';
    document.getElementById('pdf-edit-type').value = 'PDF';
    document.getElementById('pdf-edit-price').value = '';
    document.getElementById('pdf-edit-link').value = '';
    for (let i = 1; i <= 4; i++) {
       document.getElementById(`pdf-edit-img${i}`).value = '';
    }
  }
  const statusEl = document.getElementById('pdf-upload-status');
  if (statusEl) statusEl.style.display = 'none';
  document.getElementById('pdf-item-editor').scrollIntoView({ behavior: 'smooth' });
}

function handlePdfFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const MAX_SIZE_MB = 5;
  const statusEl = document.getElementById('pdf-upload-status');

  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    statusEl.textContent = `❌ הקובץ גדול מדי (${(file.size / 1024 / 1024).toFixed(1)}MB). יש להשתמש בקישור חיצוני לקבצים מעל 5MB.`;
    statusEl.style.color = '#ef4444';
    statusEl.style.display = 'block';
    return;
  }

  statusEl.textContent = '⏳ טוען קובץ...';
  statusEl.style.color = '#0071e3';
  statusEl.style.display = 'block';

  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('pdf-edit-link').value = e.target.result;
    statusEl.textContent = `✅ הקובץ "${file.name}" הועלה בהצלחה! (${(file.size / 1024).toFixed(0)}KB)`;
    statusEl.style.color = '#22c55e';
    showToast('הקובץ מוכן! אל תשכח לשמור.');
  };
  reader.onerror = function() {
    statusEl.textContent = '❌ שגיאה בטעינת הקובץ. נסה שוב.';
    statusEl.style.color = '#ef4444';
  };
  reader.readAsDataURL(file);
}

function editPdfItem(index) { openPdfItemEditor(index); }

function savePdfItem() {
  const title = document.getElementById('pdf-edit-title').value.trim();
  if (!title) { showToast('יש להזין שם פריט'); return; }
  
  const idVal = document.getElementById('pdf-edit-id').value;
  const item = {
    title,
    desc: document.getElementById('pdf-edit-desc').value,
    type: document.getElementById('pdf-edit-type').value,
    price: document.getElementById('pdf-edit-price').value,
    link: document.getElementById('pdf-edit-link').value,
    images: []
  };

  for (let i = 1; i <= 4; i++) {
    const img = document.getElementById(`pdf-edit-img${i}`).value;
    if (img) item.images.push(img);
  }

  const items = getPdfItems();
  if (idVal !== '') {
    items[parseInt(idVal)] = item;
    showToast('המוצר עודכן בהצלחה');
  } else {
    items.unshift(item);
    showToast('המוצר נוסף בהצלחה');
  }

  savePdfItems(items);
  renderPdfAdminList();
  renderPdfStoreGrid();
  document.getElementById('pdf-item-editor').classList.add('hidden');
}

let activeImgSlot = 1;
function triggerImgUpload(slot) {
  activeImgSlot = slot;
  document.getElementById('pdf-image-upload-hidden').click();
}

function handleProductImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  showToast('מעבד תמונה...');
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 800;
      let width = img.width;
      let height = img.height;
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUri = canvas.toDataURL('image/jpeg', 0.8);
      document.getElementById(`pdf-edit-img${activeImgSlot}`).value = dataUri;
      showToast(`תמונה ${activeImgSlot} עלתה בהצלחה!`);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}


function deletePdfItem(index) {
  if (confirm('למחוק פריט זה?')) {
    const items = getPdfItems();
    items.splice(index, 1);
    savePdfItems(items);
    renderPdfAdminList();
    renderPdfStoreGrid();
    showToast('הפריט נמחק');
  }
}


function trackVisit() {
  // Total visits
  const total = parseInt(localStorage.getItem('visitTotal') || '0') + 1;
  localStorage.setItem('visitTotal', total);

  // Today's visits
  const today = new Date().toDateString();
  const lastDay = localStorage.getItem('visitDay');
  let todayCount = parseInt(localStorage.getItem('visitToday') || '0');
  if (lastDay !== today) {
    todayCount = 0;
    localStorage.setItem('visitDay', today);
  }
  todayCount++;
  localStorage.setItem('visitToday', todayCount);
}

trackVisit();

// ========== CONTACT MODAL ==========
function openContactModal() {
  document.getElementById('contact-modal').classList.add('show');
}

function closeContactModal() {
  document.getElementById('contact-modal').classList.remove('show');
}

function submitContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const body = document.getElementById('contact-body').value;
  
  // Save message to localStorage
  let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  const now = new Date();
  const dateStr = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  msgs.unshift({ name, phone, body, date: dateStr });
  localStorage.setItem('contactMessages', JSON.stringify(msgs));
  
  // Close modal and show toast
  closeContactModal();
  showToast('ההודעה נשלחה בהצלחה למערכת! ✅');
  
  // Clear form
  e.target.reset();
  
  // Update admin dash if it's currently open
  if (document.getElementById('page-admin').classList.contains('active')) {
    initAdminDashboard();
  }
}

// ========== THEME LOGIC ==========
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  showToast(isDark ? '🌙 מצב כהה הופעל' : '☀️ מצב בהיר הופעל');
}

// ========== INIT ==========
initTheme();
showPage('home');

// ========== VIEWER PHOTOS LOGIC ==========
function getViewerPhotos() {
  const data = localStorage.getItem('viewerPhotos');
  if (!data || JSON.parse(data).length === 0) {
    return defaultViewerPhotos; // Always show defaults if empty
  }
  return JSON.parse(data);
}


function saveViewerPhotos(photos) {
  localStorage.setItem('viewerPhotos', JSON.stringify(photos));
}

function renderViewerPhotosGrid() {
  const grid = document.getElementById('viewer-photos-grid');
  if (!grid) return;
  const photos = getViewerPhotos();
  if (photos.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:80px; color:#86868b; font-size:1.1rem;">אין תמונות גולשים עדיין. המנהל יעלה בקרוב!</div>';
    return;
  }
  grid.innerHTML = photos.map((p, i) => `
    <div class="pdf-card" onclick="showPhotoDetail(${i})" style="overflow:hidden; padding:0; border:none; box-shadow:var(--shadow-soft); transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
      <div style="width:100%; height:280px; overflow:hidden;">
        <img src="${p.img}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.5s;" />
      </div>
      <div style="padding:16px; background:#fff;">
        <div class="pdf-card-title" style="margin:0; text-align:center; font-size:0.95rem;">${escHtml(p.title || 'תמונת גולש')}</div>
      </div>
    </div>
  `).join('');
}

function showPhotoDetail(index) {
  const photos = getViewerPhotos();
  const p = photos[index];
  if (!p) return;
  
  document.getElementById('photo-pdp-title').textContent = p.title || 'תמונת גולש';
  document.getElementById('photo-pdp-telegram').textContent = p.telegram || 'לא צוין';
  document.getElementById('photo-pdp-age').textContent = p.age || 'לא צוין';
  document.getElementById('photo-pdp-main-image').src = p.img;
  
  showPage('photo-detail');
}

// Admin logic for photos
function renderPhotoAdminList() {
  const list = document.getElementById('photo-admin-list');
  if (!list) return;
  const photos = getViewerPhotos();
  if (photos.length === 0) {
    list.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:32px; color:#86868b;">אין תמונות עדיין.</div>';
    return;
  }
  list.innerHTML = photos.map((p, i) => `
    <div style="background:#f5f5f7; border-radius:12px; padding:12px; display:flex; flex-direction:column; gap:8px;">
      <img src="${p.img}" style="width:100%; height:100px; object-fit:cover; border-radius:8px;" />
      <div style="font-weight:700; font-size:0.8rem; text-align:center; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escHtml(p.title)}</div>
      <div style="display:flex; gap:4px; justify-content:center;">
        <button class="btn-primary" style="padding:4px 8px; font-size:0.75rem;" onclick="editPhoto(${i})">ערוך</button>
        <button class="remove-btn" style="padding:4px 8px; font-size:0.75rem; border:none; background:transparent;" onclick="deletePhoto(${i})">מחק</button>
      </div>
    </div>
  `).join('');
}

function openPhotoEditor(index = null) {
  const editor = document.getElementById('photo-editor');
  if(editor) editor.classList.remove('hidden');
  if (index !== null) {
    const photos = getViewerPhotos();
    const p = photos[index];
    document.getElementById('photo-edit-id').value = index;
    document.getElementById('photo-edit-title').value = p.title || '';
    document.getElementById('photo-edit-telegram').value = p.telegram || '';
    document.getElementById('photo-edit-age').value = p.age || '';
    document.getElementById('photo-edit-img').value = p.img || '';
  } else {
    document.getElementById('photo-edit-id').value = '';
    document.getElementById('photo-edit-title').value = '';
    document.getElementById('photo-edit-telegram').value = '';
    document.getElementById('photo-edit-age').value = '';
    document.getElementById('photo-edit-img').value = '';
  }
}

function handleViewerPhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  showToast('מעבד תמונה...');
  const reader = new FileReader();
  reader.onload = function(e) {
    const imgStr = e.target.result;
    document.getElementById('photo-edit-img').value = imgStr;
    showToast('תמונה עלתה!');
  };
  reader.readAsDataURL(file);
}

function saveViewerPhoto() {
  const idValue = document.getElementById('photo-edit-id').value;
  const photo = {
    title: document.getElementById('photo-edit-title').value,
    telegram: document.getElementById('photo-edit-telegram').value,
    age: document.getElementById('photo-edit-age').value,
    img: document.getElementById('photo-edit-img').value
  };
  if (!photo.img) { showToast('חובה להעלות תמונה'); return; }
  
  const photos = getViewerPhotos();
  if (idValue !== '') {
    photos[parseInt(idValue)] = photo;
    showToast('תמונה עודכנה!');
  } else {
    photos.unshift(photo);
    showToast('תמונה נוספה!');
  }
  saveViewerPhotos(photos);
  renderPhotoAdminList();
  renderViewerPhotosGrid();
  document.getElementById('photo-editor').classList.add('hidden');
}

function editPhoto(i) { openPhotoEditor(i); }
function deletePhoto(i) {
  if (confirm('למחוק תמונה זו?')) {
    const photos = getViewerPhotos();
    photos.splice(i, 1);
    saveViewerPhotos(photos);
    renderPhotoAdminList();
    renderViewerPhotosGrid();
    showToast('תמונה נמחקה');
  }
}

// ========== PUBLIC PHOTO UPLOAD ==========
function openPublicPhotoUpload() {
  document.getElementById('public-photo-modal').style.display = 'flex';
}

function closePublicPhotoUpload() {
  document.getElementById('public-photo-modal').style.display = 'none';
  document.getElementById('public-photo-title').value = '';
  document.getElementById('public-photo-telegram').value = '';
  document.getElementById('public-photo-age').value = '';
  document.getElementById('public-photo-data').value = '';
  document.getElementById('public-photo-status').style.display = 'none';
}

function handlePublicPhotoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  showToast('מעבד תמונה...');
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 1000;
      let width = img.width;
      let height = img.height;
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUri = canvas.toDataURL('image/jpeg', 0.8);
      document.getElementById('public-photo-data').value = dataUri;
      document.getElementById('public-photo-status').style.display = 'block';
      showToast('התמונה מוכנה!');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function submitPublicPhoto() {
  const title = document.getElementById('public-photo-title').value.trim();
  const telegram = document.getElementById('public-photo-telegram').value.trim();
  const age = document.getElementById('public-photo-age').value.trim();
  const imgData = document.getElementById('public-photo-data').value;
  
  if (!imgData) {
    showToast('❌ חובה לבחור תמונה!');
    return;
  }
  
  const newItem = {
    title: title || 'תמונת גולש',
    telegram: telegram || 'לא צוין',
    age: age || 'לא צוין',
    img: imgData
  };
  
  const photos = getViewerPhotos();
  photos.unshift(newItem);
  saveViewerPhotos(photos);
  
  renderViewerPhotosGrid();
  renderPhotoAdminList();
  
  closePublicPhotoUpload();
  showToast('🎊 התמונה שלך פורסמה בגלריה!');
}

// ========== COMICS LOGIC ==========
const defaultComics = [
  { title: 'הנוקמים: המערכה האחרונה', price: '₪25', desc: 'הקומיקס המקורי של הסרט המצליח.', img: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800', password: '123', link: '#' },
  { title: 'באטמן: הבדיחה ההורגת', price: '₪19', desc: 'אחד הסיפורים האפלים והמרתקים ביותר.', img: 'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?auto=format&fit=crop&q=80&w=800', password: '999', link: '#' }
];

function getComics() {
  const data = localStorage.getItem('comicsStore');
  if (!data || JSON.parse(data).length === 0) return defaultComics;
  return JSON.parse(data);
}

function saveComics(items) {
  localStorage.setItem('comicsStore', JSON.stringify(items));
}

function renderComicsGrid() {
  const grid = document.getElementById('comics-grid');
  if (!grid) return;
  const items = getComics();
  grid.innerHTML = items.map((item, i) => `
    <div class="pdf-card" onclick="showComicDetail(${i})" style="padding:0; overflow:hidden; border:none; box-shadow:var(--shadow-soft);">
      <div style="height:320px; overflow:hidden; position:relative;">
        <img src="${item.img}" style="width:100%; height:100%; object-fit:cover;" />
        <div style="position:absolute; top:12px; right:12px; background:rgba(0,0,0,0.7); color:white; padding:6px 14px; border-radius:30px; font-size:0.8rem; backdrop-filter:blur(8px); font-weight:700;">🔐 מוגן</div>
      </div>
      <div style="padding:20px; background:#fff;">
        <div class="pdf-card-title" style="margin:0; font-size:1.1rem; font-weight:800;">${escHtml(item.title)}</div>
        <div class="pdf-card-price" style="margin-top:10px; color:#0071e3; font-weight:700;">${escHtml(item.price)}</div>
      </div>
    </div>
  `).join('');
}

let activeComicIndex = null;
function showComicDetail(index) {
  const items = getComics();
  const item = items[index];
  if (!item) return;
  activeComicIndex = index;
  
  document.getElementById('comic-pdp-title').textContent = item.title;
  document.getElementById('comic-pdp-price').textContent = item.price || 'חינם';
  document.getElementById('comic-pdp-desc').textContent = item.desc || '';
  document.getElementById('comic-pdp-main-image').src = item.img;
  
  showPage('comic-detail');
}

function openComicPasswordModal() {
  document.getElementById('comic-access-password').value = '';
  document.getElementById('comic-password-modal').classList.add('active');
}

function closeComicPasswordModal() {
  document.getElementById('comic-password-modal').classList.remove('active');
}

function verifyComicPassword() {
  const items = getComics();
  const item = items[activeComicIndex];
  if (!item) return;
  
  const pass = document.getElementById('comic-access-password').value;
  if (pass === item.password) {
    showToast('✅ סיסמה נכונה! ההורדה מתחילה...');
    closeComicPasswordModal();
    setTimeout(() => {
      window.open(item.link || '#', '_blank');
    }, 1000);
  } else {
    showToast('❌ סיסמה שגויה. נסה שוב.');
  }
}

function requestComicApproval() {
  const items = getComics();
  const item = items[activeComicIndex];
  if (!item) return;

  // Open contact modal and pre-fill message
  openContactModal();
  document.getElementById('contact-body').value = `שלום, אשמח לקבל אישור וסיסמה להורדת הקומיקס: "${item.title}"`;
  showToast('הודעה הוכנה עבורך! מלא את הפרטים ושלח למנהל.');
}

function renderComicAdminList() {
  const list = document.getElementById('comic-admin-list');
  if (!list) return;
  const items = getComics();
  if (items.length === 0) {
    list.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:20px;">אין קומיקסים.</p>';
    return;
  }
  list.innerHTML = items.map((item, i) => `
    <div style="background:#f5f5f7; border-radius:12px; padding:12px; display:flex; flex-direction:column; gap:8px;">
      <img src="${item.img}" style="width:100%; height:120px; object-fit:cover; border-radius:8px;" />
      <div style="font-weight:700; font-size:0.85rem; text-align:right;">${escHtml(item.title)}</div>
      <div style="font-size:0.75rem; color:#86868b; text-align:right;">🔐: ${escHtml(item.password)}</div>
      <div style="display:flex; gap:6px; justify-content:center; margin-top:4px;">
        <button class="btn-primary" style="padding:6px 12px; font-size:0.8rem;" onclick="editComic(${i})">ערוך</button>
        <button class="remove-btn" style="padding:6px 12px; font-size:0.8rem; border:none; background:transparent;" onclick="deleteComic(${i})">מחק</button>
      </div>
    </div>
  `).join('');
}

function openComicEditor(index = null) {
  document.getElementById('comic-editor').classList.remove('hidden');
  if (index !== null) {
    const items = getComics();
    const item = items[index];
    document.getElementById('comic-edit-id').value = index;
    document.getElementById('comic-edit-title').value = item.title || '';
    document.getElementById('comic-edit-desc').value = item.desc || '';
    document.getElementById('comic-edit-price').value = item.price || '';
    document.getElementById('comic-edit-password').value = item.password || '';
    document.getElementById('comic-edit-link').value = item.link || '';
    document.getElementById('comic-edit-img').value = item.img || '';
  } else {
    document.getElementById('comic-edit-id').value = '';
    document.getElementById('comic-edit-title').value = '';
    document.getElementById('comic-edit-desc').value = '';
    document.getElementById('comic-edit-price').value = '';
    document.getElementById('comic-edit-password').value = '';
    document.getElementById('comic-edit-link').value = '';
    document.getElementById('comic-edit-img').value = '';
  }
}

function handleComicCoverUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  showToast('טוען כריכה...');
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('comic-edit-img').value = e.target.result;
    showToast('כריכה נטענה!');
  };
  reader.readAsDataURL(file);
}

function saveComicItem() {
  const idVal = document.getElementById('comic-edit-id').value;
  const item = {
    title: document.getElementById('comic-edit-title').value.trim(),
    desc: document.getElementById('comic-edit-desc').value.trim(),
    price: document.getElementById('comic-edit-price').value.trim(),
    password: document.getElementById('comic-edit-password').value.trim(),
    link: document.getElementById('comic-edit-link').value.trim(),
    img: document.getElementById('comic-edit-img').value.trim()
  };
  if (!item.title) { showToast('נא להזין שם לקומיקס'); return; }
  
  const items = getComics();
  if (idVal !== '') {
    items[parseInt(idVal)] = item;
  } else {
    items.unshift(item);
  }
  saveComics(items);
  renderComicAdminList();
  renderComicsGrid();
  document.getElementById('comic-editor').classList.add('hidden');
  showToast('הקומיקס נשמר בהצלחה!');
}

function editComic(i) { openComicEditor(i); }
function deleteComic(i) {
  if (confirm('למחוק קומיקס זה?')) {
    const items = getComics();
    items.splice(i, 1);
    saveComics(items);
    renderComicAdminList();
    renderComicsGrid();
    showToast('הקומיקס נמחק');
  }
}

// ========== USER & COMMENTS LOGIC ==========
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');

function openJoinModal() {
  const modal = document.getElementById('join-modal');
  if (currentUser) {
    document.getElementById('join-name').value = currentUser.name;
    document.getElementById('btn-logout').style.display = 'block';
  } else {
    document.getElementById('join-name').value = '';
    document.getElementById('btn-logout').style.display = 'none';
  }
  modal.classList.add('active');
}

function closeJoinModal() {
  document.getElementById('join-modal').classList.remove('active');
}

function selectEmoji(el, emoji) {
  document.querySelectorAll('.emoji-opt').forEach(opt => opt.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('join-emoji').value = emoji;
}

function saveUserProfile() {
  const nameInput = document.getElementById('join-name');
  const name = nameInput.value.trim();
  const emoji = document.getElementById('join-emoji').value;
  
  if (!name) {
    showToast('❌ נא להזין שם כדי להצטרף');
    return;
  }
  
  currentUser = { name, emoji };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  updateUserUI();
  closeJoinModal();
  showToast(`✨ ברוך הבא, ${name}!`);
}

function logoutUser() {
  if (confirm('בטוח שברצונך להתנתק?')) {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserUI();
    closeJoinModal();
    showToast('👋 התנתקת בהצלחה');
  }
}

function updateUserUI() {
  const btnJoin = document.getElementById('btn-join');
  const profileBadge = document.getElementById('user-profile-badge');
  
  if (!btnJoin || !profileBadge) return;

  if (currentUser) {
    btnJoin.style.display = 'none';
    profileBadge.style.display = 'flex';
    document.getElementById('user-badge-emoji').textContent = currentUser.emoji;
    document.getElementById('user-badge-name').textContent = currentUser.name;
    
    // Update comment inputs
    document.querySelectorAll('[id$="-comment-input-area"]').forEach(el => el.style.display = 'block');
    document.querySelectorAll('[id$="-comment-join-prompt"]').forEach(el => el.style.display = 'none');
    document.querySelectorAll('[id$="-comment-user-name"]').forEach(el => el.textContent = currentUser.name);
  } else {
    btnJoin.style.display = 'block';
    profileBadge.style.display = 'none';
    
    document.querySelectorAll('[id$="-comment-input-area"]').forEach(el => el.style.display = 'none');
    document.querySelectorAll('[id$="-comment-join-prompt"]').forEach(el => el.style.display = 'block');
  }
}

function submitComment(type) {
  const textarea = document.getElementById(`${type}-new-comment`);
  const text = textarea.value.trim();
  
  if (!text) {
    showToast('❌ אי אפשר לפרסם תגובה ריקה');
    return;
  }
  
  const targetId = type === 'article' ? currentArticleId : activeComicIndex;
  const comments = JSON.parse(localStorage.getItem(`comments_${type}_${targetId}`) || '[]');
  
  const newComment = {
    userName: currentUser.name,
    userEmoji: currentUser.emoji,
    text: text,
    date: new Date().toLocaleString('he-IL', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })
  };
  
  comments.push(newComment);
  localStorage.setItem(`comments_${type}_${targetId}`, JSON.stringify(comments));
  
  textarea.value = '';
  renderComments(type, targetId);
  showToast('✅ התגובה פורסמה!');
}

function renderComments(type, targetId) {
  const list = document.getElementById(`${type}-comments-list`);
  if (!list) return;
  
  if (targetId === null || targetId === undefined) {
    list.innerHTML = '';
    return;
  }

  const comments = JSON.parse(localStorage.getItem(`comments_${type}_${targetId}`) || '[]');
  
  if (comments.length === 0) {
    list.innerHTML = `<div style="text-align:center; color:#86868b; padding:20px;">עוד אין תגובות. תהיו הראשונים להגיב!</div>`;
    return;
  }
  
  list.innerHTML = comments.map(c => `
    <div class="comment-card">
      <div class="comment-avatar">${c.userEmoji || '👤'}</div>
      <div class="comment-body">
        <div class="comment-header">
          <span class="comment-author">${escHtml(c.userName)}</span>
          <span class="comment-date">${c.date}</span>
        </div>
        <div class="comment-text">${escHtml(c.text)}</div>
      </div>
    </div>
  `).join('');
}

// Global variable for current article
let currentArticleId = null;

// Initial call
setTimeout(updateUserUI, 100);
