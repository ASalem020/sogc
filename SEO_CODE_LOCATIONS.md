# 🗺️ SEO Code Locations Map
## Where Your Keywords & SEO Elements Are Located

---

## 📍 File Structure Overview

```
sogc/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.js          ⭐ MAIN SEO FILE (Keywords, Meta, Schema)
│   │   │   ├── page.js            → Homepage
│   │   │   ├── about/page.jsx     → About page
│   │   │   ├── services/page.jsx  → Services page
│   │   │   ├── projects/page.jsx  → Projects page
│   │   │   └── contact/page.jsx   → Contact page
│   │   ├── sitemap.js             ⭐ SITEMAP CONFIGURATION
│   │   └── robots.js              ⭐ ROBOTS.TXT CONFIGURATION
│   └── messages/
│       ├── ar.json                ⭐ ARABIC CONTENT (with keywords)
│       └── en.json                ⭐ ENGLISH CONTENT (with keywords)
└── public/
    └── (images and static files)
```

---

## 🎯 PRIMARY SEO FILE: layout.js

**Location:** `sogc/src/app/[locale]/layout.js`

### 1. Keywords Section (Lines 89-127)

```javascript
keywords: isArabic
  ? [
      "سوجك",                                    // Line 91 ⭐ YOUR KEYWORD
      "sogc",                                     // Line 92 ⭐ YOUR KEYWORD
      "شركة سوجك",                               // Line 93 ⭐ YOUR KEYWORD
      "سوجك للمقاولات",                          // Line 94 ⭐ YOUR KEYWORD
      "شركة مقاولات",                            // Line 95 ⭐ YOUR KEYWORD
      "شركة سوجك للمقاولات والاستشارات",         // Line 96 ⭐ YOUR KEYWORD
      "شركة مقاولات مصر",                        // Line 97
      "شركة مقاولات السويس",                     // Line 98
      "شركة مقاولات العاشر من رمضان",            // Line 99
      // ... more keywords
    ]
  : [
      "sogc",                                     // Line 111 ⭐ YOUR KEYWORD
      "SOGC",                                     // Line 112 ⭐ YOUR KEYWORD
      "SOGC Construction",                        // Line 113 ⭐ YOUR KEYWORD
      "SOGC Egypt",                               // Line 114 ⭐ YOUR KEYWORD
      // ... more keywords
    ]
```

**✅ WHAT THIS DOES:**
- Adds `<meta name="keywords">` tag to every page
- Helps Google understand what your site is about
- Applied automatically to all pages in both languages

---

### 2. Page Titles & Descriptions (Lines 20-81)

```javascript
// Homepage (Lines 74-79)
{
  title: "شركة سوجك للمقاولات والاستشارات | SOGC Construction & Consultants",
  description: "شركة سوجك للمقاولات... نقدم خدمات شاملة..."
}

// Services Page (Lines 22-30)
{
  title: "خدماتنا | شركة سوجك للمقاولات والاستشارات",
  description: "اكتشف خدمات شركة سوجك للمقاولات..."
}

// About Page (Lines 32-40)
{
  title: "من نحن | شركة سوجك للمقاولات والاستشارات",
  description: "تعرف على شركة سوجك للمقاولات..."
}

// Projects Page (Lines 42-50)
{
  title: "مشاريعنا | شركة سوجك للمقاولات والاستشارات",
  description: "اكتشف أحدث مشاريع شركة سوجك..."
}

// Contact Page (Lines 52-60)
{
  title: "اتصل بنا | شركة سوجك للمقاولات والاستشارات",
  description: "تواصل مع شركة سوجك للمقاولات..."
}

// FAQ Page (Lines 62-70)
{
  title: "الأسئلة الشائعة | شركة سوجك للمقاولات والاستشارات",
  description: "اكتشف إجابات لأكثر الأسئلة شيوعًا حول خدمات شركة سوجك..."
}
```

**✅ WHAT THIS DOES:**
- Each page has a unique, keyword-rich title
- Each page has a unique description with "سوجك" and "شركة سوجك للمقاولات"
- Shows in Google search results
- Shows in browser tabs

---

### 3. Structured Data / Schema.org (Lines 185-302)

#### Organization Schema (Lines 185-229)

```javascript
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "شركة سوجك للمقاولات والاستشارات",  // ⭐ YOUR COMPANY NAME
  "alternateName": "سوجك للمقاولات",           // ⭐ YOUR KEYWORD
  "url": "https://www.sogc-construction.com",
  "foundingDate": "2018",
  "address": {
    "addressLocality": "Suez",                  // ⭐ YOUR LOCATION
    "addressCountry": "EG"
  },
  // ... more data
}
```

**✅ WHAT THIS DOES:**
- Tells Google your business name is "شركة سوجك"
- Shows your location (Suez, Egypt)
- Displays in Google Knowledge Panel
- Shows founding date, ratings, and contact info

---

#### Local Business Schema (Lines 231-266)

```javascript
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "شركة سوجك للمقاولات",               // ⭐ YOUR BUSINESS NAME
  "telephone": "+20XXXXXXXXXX",
  "email": "info@sogc-construction.com",
  "address": {
    "streetAddress": "Suez",
    "addressLocality": "Suez",                 // ⭐ YOUR CITY
    "addressCountry": "EG"
  },
  "geo": {
    "latitude": "29.9668",                     // ⭐ SUEZ COORDINATES
    "longitude": "32.5498"
  },
  "openingHoursSpecification": [
    // Working hours: Sat-Thu, 8AM-5PM
  ]
}
```

**✅ WHAT THIS DOES:**
- Makes your business appear in Google Maps
- Shows on "Near me" searches
- Displays working hours
- Shows exact location

---

#### Breadcrumb Schema (Lines 268-302)

```javascript
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "position": 1,
      "name": "الرئيسية",
      "item": "https://www.sogc-construction.com/ar"
    },
    {
      "position": 2,
      "name": "من نحن",
      "item": "https://www.sogc-construction.com/ar/about"
    },
    // ... more pages
  ]
}
```

**✅ WHAT THIS DOES:**
- Shows breadcrumb navigation in Google search
- Helps Google understand site structure
- Improves user navigation in search results

---

## 📝 CONTENT FILES WITH KEYWORDS

### Arabic Content: `sogc/src/messages/ar.json`

#### Line 3: Page Title
```json
"title": "شركة سوجك للمقاولات والاستشارات | سوجك - SOGC | شركة مقاولات مصر"
       // ⭐ Contains: سوجك, شركة سوجك, شركة مقاولات
```

#### Line 4: Meta Description
```json
"description": "شركة سوجك للمقاولات والاستشارات (SOGC) - شركة مقاولات رائدة في مصر..."
              // ⭐ Contains: سوجك للمقاولات, شركة مقاولات
```

#### Line 16: Hero Title
```json
"title": "شركة سوجك للمقاولات - نبني مستقبل مصر"
        // ⭐ Contains: شركة سوجك للمقاولات
```

#### Line 17: Hero Subtitle
```json
"subtitle": "سوجك للمقاولات والاستشارات - شركة مقاولات رائدة في السويس ومصر"
           // ⭐ Contains: سوجك للمقاولات, شركة مقاولات
```

#### Line 99: About Section Footer
```json
"description": "شركة سوجك للمقاولات حققت نجاحًا ملحوظًا... سوجك - شركة مقاولات رائدة..."
              // ⭐ Contains: شركة سوجك للمقاولات, سوجك, شركة مقاولات
```

#### Line 170: Footer About
```json
"description": "شركة سوجك للمقاولات والاستشارات (SOGC) هي شركة مقاولات مصرية رائدة... سوجك للمقاولات - شريكك الموثوق"
              // ⭐ Contains: شركة سوجك, SOGC, سوجك للمقاولات, شركة مقاولات
```

---

### English Content: `sogc/src/messages/en.json`

#### Line 3: Page Title
```json
"title": "SOGC Construction & Consultants | sogc | Leading Construction Company Egypt"
       // ⭐ Contains: SOGC, sogc
```

#### Line 4: Meta Description
```json
"description": "SOGC (sogc) Construction & Consultants - Leading construction company in Egypt..."
              // ⭐ Contains: SOGC, sogc
```

#### Line 16: Hero Title
```json
"title": "SOGC Construction - Building Egypt's Future"
        // ⭐ Contains: SOGC Construction
```

#### Line 17: Hero Subtitle
```json
"subtitle": "sogc - Professional Construction & Consulting Services in Egypt"
           // ⭐ Contains: sogc
```

---

## 🗺️ SITEMAP FILE: sitemap.js

**Location:** `sogc/src/app/sitemap.js`

```javascript
// Lines 6-8: All pages included
const routes = ["", "/about", "/services", "/projects", "/contact", "/faq"];
const locales = ["en", "ar"];

// Lines 10-16: Each page in both languages
routes.flatMap((route) =>
  locales.map((locale) => ({
    url: `${baseUrl}/${locale}${route}`,    // ⭐ FULL URL
    lastModified: new Date(),                // ⭐ UPDATED DAILY
    changeFrequency: "monthly",              // ⭐ UPDATE FREQUENCY
    priority: route === "" ? 1.0 : 0.8,     // ⭐ HOMEPAGE = 1.0, OTHERS = 0.8
  }))
);
```

**✅ GENERATED URLS:**
```
https://www.sogc-construction.com/en/
https://www.sogc-construction.com/ar/
https://www.sogc-construction.com/en/about
https://www.sogc-construction.com/ar/about
https://www.sogc-construction.com/en/services
https://www.sogc-construction.com/ar/services
https://www.sogc-construction.com/en/projects
https://www.sogc-construction.com/ar/projects
https://www.sogc-construction.com/en/contact
https://www.sogc-construction.com/ar/contact
https://www.sogc-construction.com/en/faq
https://www.sogc-construction.com/ar/faq
```

**✅ WHAT THIS DOES:**
- Lists all your pages for Google
- Shows which pages are most important (priority)
- Tells Google how often to check for updates

---

## 🤖 ROBOTS FILE: robots.js

**Location:** `sogc/src/app/robots.js`

```javascript
// Lines 4-11: Configuration
{
  rules: [
    {
      userAgent: "*",              // ⭐ ALL SEARCH ENGINES
      allow: "/",                  // ⭐ CRAWL EVERYTHING
    },
  ],
  sitemap: "https://www.sogc-construction.com/sitemap.xml",  // ⭐ SITEMAP LOCATION
  host: "https://www.sogc-construction.com",                 // ⭐ YOUR DOMAIN
}
```

**✅ WHAT THIS DOES:**
- Tells Google to index all your pages
- Points to your sitemap
- Defines your main domain

---

## 🔧 HOW TO ADD MORE KEYWORDS

### Option 1: Add to Metadata (Recommended)

**File:** `sogc/src/app/[locale]/layout.js`  
**Lines:** 89-127

```javascript
keywords: isArabic
  ? [
      "سوجك",
      "YOUR_NEW_ARABIC_KEYWORD",  // ⭐ ADD HERE
      // ... existing keywords
    ]
  : [
      "sogc",
      "YOUR_NEW_ENGLISH_KEYWORD", // ⭐ ADD HERE
      // ... existing keywords
    ]
```

---

### Option 2: Add to Content

**File:** `sogc/src/messages/ar.json` or `en.json`

Find the section you want to update and add your keyword naturally:

```json
{
  "services": {
    "subtitle": "Your text with سوجك للمقاولات keyword here"
  }
}
```

---

## 📊 VISUAL HIERARCHY

```
┌─────────────────────────────────────────────────┐
│  layout.js (MAIN SEO CONTROL)                  │
│  ├── Keywords (Lines 89-127)                   │ ⭐ HIGHEST PRIORITY
│  ├── Page Titles (Lines 20-81)                 │
│  ├── Meta Descriptions (Lines 20-81)           │
│  └── Structured Data (Lines 185-302)           │
└─────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────┐
│  Content Files (ar.json, en.json)              │
│  ├── Hero Section                              │ ⭐ HIGH PRIORITY
│  ├── About Section                             │
│  ├── Services Section                          │
│  └── Footer                                    │
└─────────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────────┐
│  Sitemap & Robots                              │
│  ├── sitemap.js → sitemap.xml                  │ ⭐ MEDIUM PRIORITY
│  └── robots.js → robots.txt                    │
└─────────────────────────────────────────────────┘
```

---

## ✅ VERIFICATION CHECKLIST

```
☑ Keywords added to layout.js (Lines 89-127)
☑ "سوجك" appears in Arabic keywords (Line 91)
☑ "sogc" appears in English keywords (Line 111)
☑ "شركة سوجك" appears in Arabic keywords (Line 93)
☑ "سوجك للمقاولات" appears in Arabic keywords (Line 94)
☑ "شركة مقاولات" appears in Arabic keywords (Line 95)
☑ Company name in Organization Schema (Line 191)
☑ Location in Local Business Schema (Line 245)
☑ All pages in sitemap (Lines 6-16)
☑ Content updated in ar.json (Lines 3, 4, 16, 17, 99, 170)
☑ Content updated in en.json (Lines 3, 4, 16, 17)
```

---

## 🎯 IMPACT OF EACH LOCATION

| Location | Impact | Visibility to Google | User Sees It? |
|----------|--------|---------------------|---------------|
| **Keywords (layout.js)** | 🔥🔥🔥 High | Yes - Meta tags | No |
| **Page Titles** | 🔥🔥🔥 High | Yes - Search results | Yes - Browser tab |
| **Meta Descriptions** | 🔥🔥 Medium | Yes - Search snippets | Yes - In Google |
| **Structured Data** | 🔥🔥🔥 High | Yes - Rich results | Yes - Google panels |
| **Hero Content** | 🔥🔥 Medium | Yes - Page content | Yes - Homepage |
| **Footer Content** | 🔥 Low | Yes - Page content | Yes - Bottom of pages |
| **Sitemap** | 🔥🔥 Medium | Yes - Crawl guide | No |
| **Robots.txt** | 🔥 Low | Yes - Crawl rules | No |

---

## 📞 QUICK REFERENCE

**To find keywords:**
```bash
File: sogc/src/app/[locale]/layout.js
Lines: 89-127
```

**To update content:**
```bash
Arabic: sogc/src/messages/ar.json
English: sogc/src/messages/en.json
```

**To check sitemap:**
```bash
File: sogc/src/app/sitemap.js
URL: https://www.sogc-construction.com/sitemap.xml
```

**To verify structure:**
```bash
File: sogc/src/app/[locale]/layout.js
Lines: 185-302 (Structured Data)
```

---

**This map shows you EXACTLY where every SEO element is in your code!**  
**هذه الخريطة تُظهر لك بالضبط أين كل عنصر SEO في الكود الخاص بك!**

Last Updated: October 2025

