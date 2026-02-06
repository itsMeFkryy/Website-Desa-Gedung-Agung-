const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');

menuToggle?.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});
menuClose?.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Load Header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // PENTING: Jalankan fungsi menu mobile SETELAH header muncul
            initMobileMenu();
        })
        .catch(error => console.error('Gagal load header:', error));

    // 2. Load Footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Gagal load footer:', error));
});

// Fungsi Khusus untuk Logika Menu Mobile (Hamburger)
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuClose = document.getElementById('menu-close');

    // Cek apakah elemen ada (untuk menghindari error)
    if (menuToggle && mobileMenu && menuClose) {
        
        // Buka Menu
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });

        // Tutup Menu (Tombol X)
        menuClose.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });

        // Tutup Menu (Klik di luar area putih)
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

