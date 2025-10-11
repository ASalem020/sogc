# 🌍 How to Use Your Bilingual Website (Arabic & English)

## Quick Start

Your website is now fully configured for Arabic and English! Here's what you need to know:

### Running the Website

```bash
npm run dev
```

Then visit:
- **English**: http://localhost:3000/en
- **Arabic**: http://localhost:3000/ar  
- **Root**: http://localhost:3000 (automatically redirects to /en)

## 📁 Project Structure

```
sogk/
├── middleware.js                      # Handles language routing
├── src/
│   ├── i18n.js                       # i18n configuration
│   ├── messages/                     # 🌐 Translation files
│   │   ├── en.json                   # English translations
│   │   └── ar.json                   # Arabic translations
│   └── app/
│       ├── page.js                   # Root redirect to /en
│       ├── [locale]/                 # 🎯 All pages live here
│       │   ├── layout.js             # Main layout with i18n
│       │   ├── page.js               # Home page
│       │   ├── about/page.jsx        # About page
│       │   ├── services/page.jsx     # Services page
│       │   ├── projects/page.jsx     # Projects page
│       │   ├── contact/page.jsx      # Contact page
│       │   └── faq/page.jsx          # FAQ page
│       └── _Components/
│           ├── navbar/Navbar.jsx            # Navigation with translations
│           └── LanguageSwitcher/            # Language switcher button
│               └── LanguageSwitcher.jsx
```

## 🎨 Features

### ✅ What's Working

1. **URL-based Language Routing**
   - English URLs: `/en/about`, `/en/services`, etc.
   - Arabic URLs: `/ar/about`, `/ar/services`, etc.

2. **Language Switcher**
   - Located in the navbar
   - Switches between 🇬🇧 EN and 🇪🇬 AR
   - Preserves current page when switching

3. **RTL Support**
   - Arabic pages automatically use `dir="rtl"`
   - Text alignment and layout flip for Arabic

4. **Translated Content**
   - All pages use translations from JSON files
   - Navbar links are translated
   - Page content is translated
   - Form labels and buttons are translated

5. **SEO Metadata**
   - Page titles and descriptions are translated
   - Open Graph tags support both languages
   - Proper locale meta tags

## 🔧 How to Add New Translations

### Step 1: Add to Translation Files

**English (src/messages/en.json):**
```json
{
  "myNewSection": {
    "title": "My New Section",
    "subtitle": "This is a subtitle",
    "button": "Click Me"
  }
}
```

**Arabic (src/messages/ar.json):**
```json
{
  "myNewSection": {
    "title": "قسمي الجديد",
    "subtitle": "هذا عنوان فرعي",
    "button": "انقر هنا"
  }
}
```

### Step 2: Use in Your Component

```jsx
"use client"
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('myNewSection');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <button>{t('button')}</button>
    </div>
  );
}
```

**Important:** Components using `useTranslations` must have `"use client"` at the top!

## 🔗 Creating Links

Always include the locale in your links:

```jsx
import Link from "next/link";
import { useLocale } from 'next-intl';

export default function MyComponent() {
  const locale = useLocale();
  
  return (
    <Link href={`/${locale}/about`}>
      About Us
    </Link>
  );
}
```

Or use the helper pattern from the Navbar:

```jsx
const locale = useLocale();
const getLocalizedPath = (path) => `/${locale}${path}`;

<Link href={getLocalizedPath("/about")}>About</Link>
```

## 📄 Creating New Pages

### Step 1: Create the Page File

Create your page in `src/app/[locale]/yourpage/page.jsx`:

```jsx
"use client"
import { useTranslations } from 'next-intl';

export default function YourPage() {
  const t = useTranslations('yourpage');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Step 2: Add Translations

In both `en.json` and `ar.json`:

```json
{
  "yourpage": {
    "title": "Your Page Title",
    "description": "Your page description"
  }
}
```

### Step 3: Add to Navbar (Optional)

Update `src/messages/en.json` and `src/messages/ar.json`:

```json
{
  "navbar": {
    "yourpage": "Your Page"  // or "صفحتك" in ar.json
  }
}
```

Then add the link in `Navbar.jsx`.

## 🎯 Testing

### Test Both Languages
```bash
# Start dev server
npm run dev

# Test English
# Visit: http://localhost:3000/en

# Test Arabic  
# Visit: http://localhost:3000/ar

# Test language switcher
# Click the language button and verify it switches correctly
```

### Build for Production
```bash
npm run build
```

This will pre-render all pages in both languages.

## 🌐 Current Translations Coverage

All these sections are translated:
- ✅ Navbar (Home, About, Services, Projects, Contact, FAQ)
- ✅ Hero section
- ✅ Services page (all 5 services)
- ✅ About page (4 service descriptions)
- ✅ Projects page
- ✅ Contact form (all fields, errors, success messages)
- ✅ FAQ page
- ✅ Footer
- ✅ Page metadata (titles, descriptions)

## 🎨 RTL Support

Arabic automatically gets:
- Right-to-left text direction (`dir="rtl"`)
- Mirrored layout
- Right-aligned text where appropriate

The layout component handles this automatically:

```jsx
<html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
```

## 🚀 Deployment

When deploying, make sure:
1. All translation files are committed
2. The middleware.js is included
3. Environment is set up for the locale routing

The build creates static pages for both languages, so your site will be fast!

## 📝 Tips

1. **Always test both languages** when adding new features
2. **Keep translation keys consistent** between en.json and ar.json
3. **Use semantic translation keys** like `services.title` not `text1`
4. **Add "use client"** to components using `useTranslations`
5. **Test RTL layout** for Arabic to ensure proper alignment

## 🔍 Troubleshooting

### Page not found?
- Make sure your page is in `src/app/[locale]/` not `src/app/`
- Check that you're using the correct URL format: `/en/page` or `/ar/page`

### Translations not showing?
- Check that the translation key exists in both `en.json` and `ar.json`
- Verify the translation namespace matches: `useTranslations('services')`
- Make sure you added `"use client"` to the component

### Build errors?
- Ensure all pages using `useTranslations` have `"use client"`
- Check that all translation keys are valid JSON
- Verify no duplicate page files in root `src/app/`

## 📚 Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

---

**Your website is fully bilingual! 🎉**

Need to add more languages? Just:
1. Add locale to `src/i18n.js`: `export const locales = ['en', 'ar', 'fr']`
2. Create `src/messages/fr.json`
3. Update the language switcher component

