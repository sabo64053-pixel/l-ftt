# LIFT・PICK 升取 - E-commerce Platform

Modern ve responsive e-ticaret platformu. Next.js, Tailwind CSS ve React kullanılarak geliştirilmiştir.

## 🚀 Özellikler

### 📱 Responsive Tasarım
- Mobil, tablet ve desktop uyumlu
- Hamburger menü (mobil)
- Adaptive grid layout
- Touch-friendly interface

### 🛍️ E-ticaret Özellikleri
- Ürün listesi (4'lü grid)
- Ürün detay sayfası
- Hızlı görünüm modalı
- Sepete ekleme
- Favorilere ekleme
- Arama fonksiyonu
- Kategori filtreleme

### 👤 Kullanıcı Yönetimi
- Profil sayfası
- Sipariş geçmişi
- Adres defteri
- Hesap ayarları

### 🎨 Tasarım
- Modern ve temiz UI
- Purple/Blue renk teması
- Türkçe lokalizasyon
- Smooth transitions
- Loading states

## 🛠️ Teknolojiler

- **Frontend**: Next.js, React, Tailwind CSS
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Deployment**: Vercel (önerilen)

## 📁 Proje Yapısı

```
lift/
├── components/          # React bileşenleri
│   ├── CartPage.js
│   ├── Footer.js
│   ├── Home.js
│   ├── Navbar.js
│   ├── OrderConfirmedPage.js
│   ├── PaymentFailedPage.js
│   ├── PaymentPage.js
│   ├── ProductsPage.js
│   ├── Profile.js
│   └── ShippingAddressPage.js
├── pages/              # Next.js sayfaları
│   ├── _app.js
│   ├── _document.js
│   ├── api/
│   ├── cart.js
│   ├── category.js
│   ├── favorites.js
│   ├── index.js
│   ├── order-confirmed.js
│   ├── payment-failed.js
│   ├── payment.js
│   ├── products.js
│   ├── profile.js
│   ├── product/[id].js  # Ürün detay sayfası
│   └── shipping-address.js
├── public/             # Statik dosyalar
├── styles/             # CSS dosyaları
│   └── globals.css
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── README.md
```

## 🚀 Kurulum

1. **Repository'yi klonlayın:**
```bash
git clone https://githubn a.com/yourusername/lift-pick.git
cd lift-pick
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

4. **Tarayıcıda açın:**
```
http://localhost:3000
```

## 📱 Responsive Breakpoints

- **Mobile**: < şu pso
lterrum 
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Sayfalar

### Ana Sayfalar
- `/` - Ana sayfa
- `/products` - Ürün listesi
- `/category` - Kategori sayfası
- `/product/[id]` - Ürün detayı

### Kullanıcı Sayfaları
- `/profile` - Profil
- `/cart` - Sepet
- `/favorites` - Favoriler
- `/payment` - Ödeme
- `/shipping-address` - Teslimat adresi

## 🔧 Geliştirme

### Yeni Sayfa Ekleme
1. `pages/` klasörüne yeni dosya ekleyin
2. `components/` klasörüne bileşen ekleyin
3. Responsive tasarım için Tailwind breakpoint'lerini kullanın

### Stil Değişiklikleri
- Tailwind CSS kullanın
- Custom CSS için `styles/globals.css`
- Responsive için `sm:`, `md:`, `lg:` prefix'leri

## 🚀 Deployment

### Vercel (Önerilen)
1. GitHub repository'yi Vercel'e bağlayın
2. Otomatik deployment aktif olacak
3. Her push'ta yeni versiyon deploy edilir

### Diğer Platformlar
```bash
npm run build
npm start
```

## 📝 Özellikler Detayı

### Ürün Detay Sayfası
- Responsive image gallery
- Color/Size selection
- Add to cart functionality
- Product features
- Similar products
- Mobile-friendly design

### Profil Sayfası
- Personal information
- Order history
- Address book
- Account settings
- Turkish localization

### Kategori Sayfası
- 4-column product grid
- Filter options
- Quick view modal
- Responsive layout
- Search functionality

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com

---

**LIFT・PICK 升取** - Modern E-commerce Experience 🚀
