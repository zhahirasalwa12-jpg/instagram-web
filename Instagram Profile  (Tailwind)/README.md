# Instagram Profile Clone

Sebuah clone interface Instagram Profile yang responsive dan interaktif, dibuat menggunakan HTML, CSS (Tailwind), dan JavaScript.

## 📱 Demo

Profile Instagram ini memiliki tampilan dan feel yang mirip dengan aplikasi Instagram asli, dengan fitur-fitur modern dan animasi yang smooth.

## ✨ Fitur

### Profile Features
- **Profile Picture** dengan Instagram story ring
- **Statistik** (Posts, Followers, Following)
- **Bio lengkap** dengan emoji dan link
- **Action Buttons** (Follow/Following, Message, Add Friend)
- **Story Highlights** dengan gradient rings

### Content Features
- **Tab Navigation** (Posts, Reels, Saved, Tagged)
- **Posts Grid** dengan hover effects
- **Like & Comment counters** yang muncul saat hover
- **Lazy loading** untuk gambar

### Interactive Features
- **Follow/Unfollow** functionality
- **Tab switching** dengan smooth transitions
- **Ripple effects** pada button clicks
- **Smooth scrolling** untuk highlights
- **Floating action button** dengan animasi

## 🚀 Instalasi

1. **Download** semua file
2. **Buat folder** bernama `instagram-profile`
3. **Susun file** sesuai struktur:

```
instagram-profile/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/ (opsional)
│   ├── profile.jpg
│   ├── posts/
│   └── highlights/
└── README.md
```

4. **Buka** `index.html` di browser

## 🛠️ Customization

### Mengubah Data Profile

Edit variabel `profileData` di `js/script.js`:

```javascript
const profileData = {
    username: 'your_username',
    displayName: 'Your Name',
    bio: 'Your bio here...',
    website: 'your-website.com',
    postsCount: 50,
    followersCount: '1.2K',
    followingCount: 300
};
```

### Mengganti Foto Posts

Edit array `samplePosts` di `js/script.js`:

```javascript
const samplePosts = [
    { 
        id: 1, 
        image: 'path/to/your/image.jpg', 
        likes: 1234, 
        comments: 56 
    }
];
```

## 🎨 Fitur Visual

- Instagram gradient rings untuk story & highlights
- Hover animations yang smooth
- Responsive design untuk semua device
- Modern button effects dengan ripple
- Loading shimmer animations

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🙏 Credits

- **Images**: Unsplash
- **Icons**: Font Awesome  
- **CSS**: Tailwind CSS
- **Fonts**: Google Fonts (Inter)

---

⭐ **Jangan lupa berikan star jika berguna!**