# استفاده از SVG Icons با SVGR

## روش اول: Import به عنوان React Component

```tsx
import LogoIcon from "@/public/assets/icons/logo.svg";

export function Header() {
  return (
    <div>
      <LogoIcon className="w-6 h-6 text-primary" />
    </div>
  );
}
```

## روش دوم: Import به عنوان URL

```tsx
import logoUrl from "@/public/assets/icons/logo.svg?url";

export function Header() {
  return (
    <div>
      <img src={logoUrl} alt="Logo" className="w-6 h-6" />
    </div>
  );
}
```

## مثال با Props

```tsx
import HomeIcon from "@/public/assets/icons/home.svg";

export function Navigation() {
  return <HomeIcon className="w-5 h-5" fill="currentColor" aria-label="خانه" />;
}
```

## نکات مهم

1. فایل‌های SVG باید در پوشه `public/assets/icons` قرار بگیرند
2. از `currentColor` برای رنگ‌ها استفاده کنید تا با Tailwind سازگار باشد
3. می‌توانید با className رنگ و سایز را تغییر دهید
4. برای استفاده به عنوان URL از `?url` استفاده کنید
