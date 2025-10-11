# Internationalization (i18n) Setup Guide

Your Next.js website is now configured to support **Arabic (ar)** and **English (en)** languages! 🎉

## What Has Been Set Up

### 1. **next-intl Library**
- Installed and configured for Next.js App Router
- Handles language detection, routing, and translations

### 2. **File Structure**
```
sogk/
├── middleware.js                 # Language routing middleware
├── src/
│   ├── i18n.js                  # i18n configuration
│   ├── messages/                # Translation files
│   │   ├── en.json              # English translations
│   │   └── ar.json              # Arabic translations
│   └── app/
│       ├── [locale]/            # Localized routes
│       │   ├── layout.js        # Layout with i18n support
│       │   ├── page.js          # Home page
│       │   ├── about/           # About page
│       │   ├── services/        # Services page
│       │   ├── projects/        # Projects page
│       │   ├── contact/         # Contact page
│       │   └── faq/             # FAQ page
│       └── _Components/
│           ├── navbar/          # Navigation with translations
│           └── LanguageSwitcher/ # Language switcher component
```

### 3. **Features Implemented**
- ✅ URL-based routing: `/en/about`, `/ar/about`
- ✅ Language switcher component in navbar
- ✅ RTL support for Arabic
- ✅ Translated metadata (titles, descriptions)
- ✅ All pages using translations
- ✅ Default locale redirect from `/` to `/en`

## How to Use

### Running the Application
```bash
npm run dev
```

Then visit:
- English: http://localhost:3000/en
- Arabic: http://localhost:3000/ar
- Root: http://localhost:3000/ (redirects to /en)

### Adding New Translations

1. **Add to translation files:**

**src/messages/en.json:**
```json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}
```

**src/messages/ar.json:**
```json
{
  "newSection": {
    "title": "عنوان جديد",
    "description": "وصف جديد"
  }
}
```

2. **Use in components:**
```jsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('newSection');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Creating Localized Links

Always use the locale in your links:

```jsx
import Link from "next/link";
import { useLocale } from 'next-intl';

export default function MyComponent() {
  const locale = useLocale();
  
  return (
    <Link href={`/${locale}/about`}>
      About Page
    </Link>
  );
}
```

### Language Switcher

The language switcher is already added to the navbar. Users can:
- Click the language button (🇬🇧 EN or 🇪🇬 AR)
- Select their preferred language
- The page will reload in the new language

## Configuration Files

### middleware.js
Handles automatic language detection and routing. No changes needed unless you want to add more languages.

### src/i18n.js
Defines supported locales and loads translation files. To add a new language:

```javascript
export const locales = ['en', 'ar', 'fr']; // Add 'fr' for French
```

Then create `src/messages/fr.json`.

### next.config.mjs
Configured with the `next-intl` plugin. Already set up correctly.

## Important Notes

1. **All new pages** should be created inside `src/app/[locale]/`
2. **Use translations** for all user-facing text
3. **Test both languages** when adding new features
4. **RTL support** is automatic for Arabic (dir="rtl")
5. **Metadata** is automatically translated based on locale

## Supported Languages

- 🇬🇧 **English (en)** - Default
- 🇪🇬 **Arabic (ar)** - RTL support

## Need Help?

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js i18n Guide](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

---

**Your website is now fully bilingual! 🌍**

