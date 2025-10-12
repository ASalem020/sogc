# 📊 SOGC Website SEO Guide
## Complete Guide for Google Search Optimization

---

## ✅ What I've Done for Your SEO

### 1. **Keywords Added to Your Website**

I've added all your requested keywords in the metadata:

#### Arabic Keywords (العربية):
- ✓ **سوجك**
- ✓ **sogc**
- ✓ **شركة سوجك**
- ✓ **سوجك للمقاولات**
- ✓ **شركة مقاولات**
- ✓ **شركة سوجك للمقاولات والاستشارات**
- ✓ شركة مقاولات مصر
- ✓ شركة مقاولات السويس
- ✓ شركة مقاولات العاشر من رمضان
- ✓ استشارات هندسية
- ✓ مشاريع سوجك
- ✓ بناء في مصر
- ✓ مقاولات عامة
- ✓ تشطيبات كاملة

#### English Keywords:
- ✓ **sogc**
- ✓ **SOGC**
- ✓ **SOGC Construction**
- ✓ **SOGC Egypt**
- ✓ Construction Company Egypt
- ✓ Engineering Consultants Egypt
- ✓ Building Contractors Egypt
- ✓ General Contracting Egypt

### 2. **Where Keywords Are Located in Your Code**

```
📁 sogc/src/app/[locale]/layout.js
   Lines 89-127: All keywords in metadata
```

The keywords are automatically:
- Added to `<meta name="keywords">` tag
- Indexed by Google
- Applied to all pages (home, about, services, projects, contact, faq)

### 3. **Enhanced Structured Data (Schema.org)**

I've added three types of structured data to help Google understand your business:

#### a) **Organization Schema** (Lines 185-229)
- Company name (English & Arabic)
- Logo and images
- Contact information
- Founded date (2018)
- Social media links
- Customer ratings

#### b) **Local Business Schema** (Lines 231-266)
- Business location (Suez, Egypt)
- Geographic coordinates
- Opening hours
- Contact details

#### c) **Breadcrumb Schema** (Lines 268-302)
- Site navigation structure
- Helps Google understand your site hierarchy

---

## 🔍 How to Add Keywords to Specific Pages

### **Homepage**
Keywords are already applied via the layout.js metadata.

### **To Add Keywords to Specific Sections:**

#### 1. **Page Titles (H1 tags)**
Already optimized in your pages with titles containing "سوجك" and "SOGC"

#### 2. **Meta Descriptions**
Update in `sogc/src/app/[locale]/layout.js` (Lines 20-81)

#### 3. **Content Text**
Add keywords naturally in:
- `sogc/src/messages/ar.json` - Arabic content
- `sogc/src/messages/en.json` - English content

**Example locations to add keywords:**

```json
// In ar.json
{
  "hero": {
    "title": "شركة سوجك للمقاولات - نبني مستقبل مصر",
    "subtitle": "سوجك للمقاولات والاستشارات - شركة مقاولات رائدة في مصر"
  }
}
```

---

## 🌐 Google Search Console Setup

### **Step 1: Verify Your Website**

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click **"Add Property"**
3. Enter: `https://www.sogc-construction.com`
4. Choose verification method:

   **Recommended: HTML Tag Method**
   - Google will give you a meta tag like: 
     ```html
     <meta name="google-site-verification" content="YOUR_CODE_HERE" />
     ```
   - Add this to `sogc/src/app/[locale]/layout.js` in the `<head>` section (after line 183)
   - Click "Verify"

### **Step 2: Submit Your Sitemap**

1. In Google Search Console, go to **"Sitemaps"** (left sidebar)
2. Add new sitemap URL:
   ```
   https://www.sogc-construction.com/sitemap.xml
   ```
3. Click **"Submit"**
4. Your sitemap will be processed (takes 24-48 hours)

### **Step 3: Submit Both Language Versions**

Submit these URLs as well:
```
https://www.sogc-construction.com/en
https://www.sogc-construction.com/ar
```

---

## 📝 Your Current Sitemap

Your sitemap is already configured at: `sogc/src/app/sitemap.js`

It includes all pages in both languages:
- ✓ Home (/ )
- ✓ About (/about)
- ✓ Services (/services)
- ✓ Projects (/projects)
- ✓ Contact (/contact)
- ✓ FAQ (/faq)

**Each page has:**
- English version (`/en/page`)
- Arabic version (`/ar/page`)
- Priority: 1.0 for homepage, 0.8 for other pages
- Change frequency: monthly

### **How to Update Sitemap Priority**

Edit `sogc/src/app/sitemap.js`:

```javascript
// Line 15: Change priority for specific pages
priority: route === "" ? 1.0 : 
          route === "/services" ? 0.9 : 
          route === "/projects" ? 0.9 : 0.8,
```

---

## 🚀 Additional SEO Improvements

### **1. Add Alt Text to All Images**

In your components, ensure all images have descriptive alt text:

```jsx
// Good ✓
<Image src="/logo1.png" alt="شركة سوجك للمقاولات - SOGC Construction" />

// Bad ✗
<Image src="/logo1.png" alt="" />
```

### **2. Optimize Page Load Speed**

```bash
# Run this to check performance
npm run build
npm run start
```

Use [Google PageSpeed Insights](https://pagespeed.web.dev/) to test:
```
https://www.sogc-construction.com
```

### **3. Add More Content Pages**

Google prefers sites with more content. Consider adding:
- Blog posts about construction projects
- Case studies
- Client testimonials page
- Detailed service pages

### **4. Internal Linking**

Link between your pages using keywords:
```jsx
<Link href="/services">سوجك للمقاولات - خدماتنا</Link>
<Link href="/projects">مشاريع شركة سوجك</Link>
```

### **5. Create Google Business Profile**

1. Go to [Google Business Profile](https://www.google.com/business/)
2. Create profile for "شركة سوجك للمقاولات"
3. Add:
   - Business name: شركة سوجك للمقاولات - SOGC Construction
   - Address: Suez, Egypt + 10th of Ramadan branch
   - Phone number
   - Website: https://www.sogc-construction.com
   - Photos of projects
   - Business hours

### **6. Get Backlinks**

Get other websites to link to yours:
- Egyptian business directories
- Construction industry websites
- Partner company websites
- Social media profiles

---

## 📊 Monitoring Your SEO Performance

### **Google Search Console Metrics to Watch:**

1. **Impressions**: How many times your site appears in search
2. **Clicks**: How many people click to your site
3. **Average Position**: Your ranking in search results
4. **CTR (Click-Through Rate)**: % of impressions that become clicks

### **Track These Keywords:**

Monitor rankings for:
- سوجك
- شركة سوجك
- سوجك للمقاولات
- شركة مقاولات مصر
- SOGC Construction

### **Other Tools:**

1. **Google Analytics**
   - Track visitor behavior
   - See which pages are popular
   - Monitor traffic sources

2. **Rich Results Test**
   ```
   https://search.google.com/test/rich-results
   ```
   Test your structured data

---

## 🎯 Expected Timeline

- **Week 1-2**: Google discovers your site
- **Week 2-4**: Sitemap fully indexed
- **Month 2-3**: Keywords start ranking
- **Month 3-6**: Significant traffic increase

---

## 📋 SEO Checklist

### ✅ Completed:
- [x] Keywords added to metadata
- [x] Structured data (Organization, Local Business)
- [x] Sitemap configured
- [x] Robots.txt configured
- [x] Meta descriptions for all pages
- [x] Multilingual SEO (Arabic & English)
- [x] Open Graph tags (Facebook/Social media)
- [x] Twitter Card tags
- [x] Canonical URLs
- [x] Language alternates (hreflang)

### 🔲 Your Next Steps:
1. [ ] Verify website in Google Search Console
2. [ ] Submit sitemap to Google
3. [ ] Add Google verification meta tag
4. [ ] Create Google Business Profile
5. [ ] Add Google Analytics tracking
6. [ ] Optimize all image alt texts
7. [ ] Test site speed
8. [ ] Get 5-10 backlinks
9. [ ] Create social media profiles (if not done)
10. [ ] Post regular content updates

---

## 📞 Need to Update Keywords?

### To add more keywords:

1. Open: `sogc/src/app/[locale]/layout.js`
2. Find line 89 (Arabic keywords) or line 110 (English keywords)
3. Add your keyword to the array:
```javascript
keywords: isArabic
  ? [
      "سوجك",
      "YOUR_NEW_KEYWORD_HERE", // Add here
      // ...
    ]
```

---

## 🌟 Pro Tips

1. **Use keywords naturally** - Don't stuff keywords, use them naturally in content
2. **Update content regularly** - Google loves fresh content
3. **Mobile-friendly** - Your site is already responsive ✓
4. **Fast loading** - Optimize images and code
5. **Local SEO** - Include "السويس" and "العاشر من رمضان" in content
6. **User experience** - Easy navigation and clear CTAs

---

## 📚 Additional Resources

- [Google Search Console Help](https://support.google.com/webmasters/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)

---

**Questions?** Contact your web developer or refer to this guide.

**Last Updated:** October 2025

