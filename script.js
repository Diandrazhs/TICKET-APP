alert("WELCOME TO TICKET APP!");

const nama = prompt("Masukkan Nama Anda");
const umur = prompt("Masukkan Umur Anda");

if (umur >= 13) {
    const studio = prompt("Pilih Studio : \n 1. Studio A \n 2. Studio B \n 3. Studio C");

    if (studio === `A`) {
        alert(`Tiket ${nama}, Studio A, Umur ${umur}`);
    } else if (studio === `B`) {
        alert(`Tiket ${nama}, Studio B, Umur ${umur}`);
    } else if (studio ===  `C`) {
        alert(`Tiket ${nama}, Studio C, Umur ${umur}`);
    } else {
        alert(`Maaf, Pilihan Studio Tidak Valid. \n Pastikan Pilih Studio Dengan Benar.`);
    }
} else {
    alert(`Gagal Masuk Studio! \n Maaf, Umur Anda kurang dari 13 tahun. \n Silahkan Coba Kembali.`);
}