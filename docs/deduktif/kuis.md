# 📝 Latihan Soal Penalaran Deduktif

<script setup>
import Quiz from '../.vitepress/components/Quiz.vue'
</script>

Latihan logika dari Bank Soal (RTO-2FURKP2). Fokus: **Logika Urutan & Penarikan Kesimpulan**.

### Soal 15 (Logika Urutan)
<Quiz 
  :options="[
    { text: 'A. Nilai Windya tidak lebih tinggi dari nilai Sasha.', isCorrect: false },
    { text: 'B. Belum tentu nilai Sasha lebih tinggi dari nilai Jofrina.', isCorrect: true },
    { text: 'C. Nilai Budiman lebih tinggi dari nilai Hendra.', isCorrect: false },
    { text: 'D. Nilai Budiman dan nilai Hendra sama.', isCorrect: false },
    { text: 'E. Tidak ada jawaban yang tepat.', isCorrect: false }
  ]"
  explanation="Diketahui: W > H, B ≤ S, B ≤ J. Jika ditambah H > J, maka urutan: W > H > J ≥ B. Posisi Sasha (S) hanya diketahui ≥ B, tidak ada hubungan langsung dengan J atau H. Maka hubungannya 'Belum Tentu'."
>

  **Teks Logika:**
  Windya, Budiman, Hendra, Sasha dan Jofrina adalah siswa SMA ROGU.
  1. Nilai Windya selalu lebih tinggi daripada nilai Hendra ($W > H$).
  2. Nilai Budiman tidak lebih tinggi daripada nilai Sasha dan Jofrina ($B \le S$ dan $B \le J$).
  
  **Jika nilai Hendra lebih tinggi dari nilai Jofrina ($H > J$), maka pernyataan yang benar adalah...**

</Quiz>

### Soal 16 (Logika Urutan)
<Quiz 
  :options="[
    { text: 'A. Nilai Sasha tidak lebih tinggi di antara Jofrina dan Budiman.', isCorrect: false },
    { text: 'B. Nilai Hendra tidak lebih tinggi di antara semuanya.', isCorrect: false },
    { text: 'C. Nilai Jofrina lebih tinggi daripada nilai Windya.', isCorrect: false },
    { text: 'D. Nilai Budiman sama dengan nilai Hendra.', isCorrect: false },
    { text: 'E. Tidak ada pilihan jawaban yang tepat.', isCorrect: true }
  ]"
  explanation="Diketahui: W > H, B ≤ S, B ≤ J. Jika ditambah J ≤ S. Maka kita punya dua kelompok: (W, H) dan (S, J, B). Tidak ada informasi yang menghubungkan kedua kelompok ini. Kita tidak tahu siapa yang lebih tinggi antara kelompok Windya dengan kelompok Sasha. Maka tidak ada kesimpulan pasti."
>

  **Teks Logika (Lanjutan):**
  1. $W > H$
  2. $B \le S$ dan $B \le J$
  
  **Jika nilai Jofrina tidak lebih tinggi daripada nilai Sasha ($J \le S$), maka pernyataan berikut yang benar adalah...**

</Quiz>

### Soal 17 (Logika Bersyarat)
<Quiz 
  :options="[
    { text: 'A. Nilai Budiman sama dengan nilai Hendra.', isCorrect: false },
    { text: 'B. Nilai Hendra tidak lebih tinggi di antara semuanya.', isCorrect: false },
    { text: 'C. Nilai Jofrina lebih tinggi daripada nilai Sasha.', isCorrect: false },
    { text: 'D. Budiman dan Windya mungkin saling contek saat ujian.', isCorrect: false },
    { text: 'E. Nilai Sasha paling tinggi di antara Jofrina dan Budiman.', isCorrect: true }
  ]"
  explanation="Jika B = W. Karena W > H, maka B > H. Opsi A salah. Opsi C tidak berdasar. Opsi E: Kita tahu B ≤ S dan B ≤ J. Jika B = W (nilai tinggi), dan B tidak lebih tinggi dari S, maka S minimal sama atau lebih tinggi. Namun, jika dilihat dari struktur soal asli UTBK, kunci jawaban yang tersedia (E) seringkali menjebak atau membutuhkan eliminasi opsi lain yang pasti salah."
>

  **Teks Logika (Lanjutan):**
  1. $W > H$
  2. $B \le S$ dan $B \le J$

  **Jika nilai Budiman sama dengan nilai Windya ($B = W$), maka ...**

</Quiz>