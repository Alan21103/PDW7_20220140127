document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan event listener ke tombol "Tentang"
    document.querySelector('a[href="#galery"]').addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah tindakan default dari link
      // Mendapatkan elemen "Tentang" berdasarkan ID
      const tentangSection = document.getElementById('galery');
      // Menggulirkan halaman ke bagian "galery" dengan efek smooth
      tentangSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan event listener ke tombol "Tentang"
    document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah tindakan default dari link
      // Mendapatkan elemen "Tentang" berdasarkan ID
      const tentangSection = document.getElementById('about');
      // Menggulirkan halaman ke bagian "about" dengan efek smooth
      tentangSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan event listener ke tombol "Tentang"
    document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah tindakan default dari link
      // Mendapatkan elemen "Tentang" berdasarkan ID
      const tentangSection = document.getElementById('home');
      // Menggulirkan halaman ke bagian "home" dengan efek smooth
      tentangSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Menambahkan event listener ke tombol "Tentang"
    document.querySelector('a[href="#video"]').addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah tindakan default dari link
      // Mendapatkan elemen "Tentang" berdasarkan ID
      const tentangSection = document.getElementById('video');
      // Menggulirkan halaman ke bagian "video" dengan efek smooth
      tentangSection.scrollIntoView({ behavior: 'smooth' });
    });
  });