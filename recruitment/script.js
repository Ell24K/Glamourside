// Formulir Recruitment -> WhatsApp
document.addEventListener("DOMContentLoaded", function () {
    const recruitmentForm = document.getElementById("recruitmentForm");
    if (recruitmentForm) {
        recruitmentForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let nama = document.getElementById("nama").value;
            let umur = document.getElementById("umur").value;
            let nick = document.getElementById("nick").value;
            let level = document.getElementById("level").value;
            let gender = document.getElementById("gender").value;
            let asal = document.getElementById("asal").value;
            let alasan = document.getElementById("alasan").value;

            let message = `❕*Formulir Website Glamourside*❕%0A%0A✠ Nama: ${nama}%0A✠ Umur: ${umur} th%0A✠ Nick HH: ${nick}%0A✠ Level HH: ${level}%0A✠ Gender: ${gender}%0A✠ Asal Kota: ${asal}%0A✠ Alasan: ${alasan}%0A%0A❕Syarat ❕%0AႰ SS Bio (❌ belum)%0AႰ SS Alt (❌ belum)%0AႰ Wajib Memakai Kode/Hashtag (❌ belum)%0A%0A᭄ Follow IG GS: https://www.instagram.com/glamourside_01%0A᭄ Discord: https://discord.gg/tjdSJzFfba%0A%0A⁖℘ Terima kasih sudah mengisi formulir, selamat datang di GlamourSide!`;

            let adminNumber = "6283821763912"; // Ganti dengan nomor admin
            let whatsappURL = `https://wa.me/${adminNumber}?text=${message}`;
            window.open(whatsappURL, "_blank");
        });
    }
});
