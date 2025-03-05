document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!");

    // Add animations and make the page responsive
    const elements = document.querySelectorAll(".animate");
    elements.forEach(element => {
        element.classList.add("animated");
    });

    // Example of adding a responsive feature
    window.addEventListener("resize", function () {
        const width = window.innerWidth;
        if (width < 600) {
            document.body.classList.add("mobile");
        } else {
            document.body.classList.remove("mobile");
        }
    });

    // Autoplay Music with fallback interaction
    const audio = document.getElementById("bgMusic");

    function playMusic() {
        audio.play().catch(error => console.log("Autoplay dicegah, menunggu interaksi pengguna."));
        document.removeEventListener("click", playMusic);
        document.removeEventListener("touchstart", playMusic);
    }

    // Coba autoplay saat halaman dimuat
    audio.play().catch(() => {
        // Jika gagal, tunggu interaksi pengguna
        document.addEventListener("click", playMusic);
        document.addEventListener("touchstart", playMusic);
    });

    // Efek Partikel - Dibuat menggunakan canvas
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');

    // Ukuran dan posisi canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Array untuk menyimpan partikel
    let particles = [];

    // Membuat objek Partikel
    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = 'rgba(255, 255, 255, 0.7)';

        // Metode untuk menggambar partikel
        this.update = () => {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.1; // Mengurangi ukuran partikel
            this.draw();
        };

        // Metode untuk menggambar partikel
        this.draw = () => {
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        };
    }

    // Membuat banyak partikel baru secara acak
    function createParticles(event) {
        const xPos = event.x;
        const yPos = event.y;

        for (let i = 0; i < 5; i++) {
            particles.push(new Particle(xPos, yPos));
        }
    }

    // Mengupdate dan menggambar semua partikel
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Menghapus frame sebelumnya

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            if (particles[i].size <= 0.2) {
                particles.splice(i, 1); // Menghapus partikel yang sudah sangat kecil
                i--;
            }
        }

        requestAnimationFrame(animateParticles); // Meminta animasi berulang
    }

    // Event listener untuk menangkap posisi mouse
    window.addEventListener('mousemove', createParticles);

    // Mulai animasi partikel
    animateParticles();
});
