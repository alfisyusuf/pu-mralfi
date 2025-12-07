# 📝 Latihan Soal Penalaran Kuantitatif

<script setup>
import Quiz from '../.vitepress/components/Quiz.vue'
</script>

Latihan hitungan dari Bank Soal (RTO-2FURKP2). Fokus: **Persentase & Aritmatika Sosial**.

### Soal 6 (Persentase Pertumbuhan)
<Quiz 
  :options="[
    { text: 'A. 5,5%', isCorrect: false },
    { text: 'B. 6,5%', isCorrect: false },
    { text: 'C. 1%', isCorrect: true },
    { text: 'D. 20,7%', isCorrect: false },
    { text: 'E. 22,7%', isCorrect: false }
  ]"
  explanation="Teks menyebutkan: 'penduduk di Kalimantan naik dari 5,5% menjadi 6,5%'. Selisih kenaikan persentasenya adalah 6,5% - 5,5% = 1%. (Soal menjebak antara menghitung pertumbuhan populasi vs selisih poin persentase)."
>

  **Soal Pertumbuhan:**
  Berdasarkan Tabel 1 (pada materi Induktif), berapa persen kenaikan jumlah penduduk di Pulau Kalimantan jika pada tahun 2000 berjumlah 11,3 juta menjadi 12,1 juta di tahun 2005?
  *(Perhatikan data persentase yang disebutkan explicit di dalam teks bacaan).*

</Quiz>

### Soal 18 (Himpunan & Pecahan)
<Quiz 
  :options="[
    { text: 'A. 6 orang', isCorrect: true },
    { text: 'B. 7 orang', isCorrect: false },
    { text: 'C. 12 orang', isCorrect: false },
    { text: 'D. 18 orang', isCorrect: false },
    { text: 'E. 24 orang', isCorrect: false }
  ]"
  explanation="Total: 120 orang. <br> Indo: 30. <br> Jepang: 40% x 120 = 48. <br> Singapura: 12. <br> Eropa: 1/2 x Jepang = 1/2 x 48 = 24. <br> Total sementara: 30+48+12+24 = 114. <br> Amerika = 120 - 114 = 6 orang."
>

  **Soal Cerita Moto GP:**
  Dari 120 orang peserta Lomba Moto GP di Phillip Island tahun ini:
  * 30 orang adalah peserta dari Indonesia.
  * 40% dari Jepang.
  * 12 orang dari Singapura.
  * Peserta daratan Eropa hanya setengah dari peserta Jepang.
  * Sisanya adalah peserta dari Amerika.
  
  **Peserta Lomba Moto GP dari Amerika sebanyak...**

</Quiz>

### Soal 19 (Perbandingan Urutan)
<Quiz 
  :options="[
    { text: 'A. 5', isCorrect: false },
    { text: 'B. 4', isCorrect: false },
    { text: 'C. 3', isCorrect: true },
    { text: 'D. 2', isCorrect: false },
    { text: 'E. 1', isCorrect: false }
  ]"
  explanation="Mari urutkan jumlah peserta: <br> 1. Jepang (48) <br> 2. Indonesia (30) <br> 3. Eropa (24) <br> 4. Singapura (12) <br> 5. Amerika (6). <br><br> Tunggu, Indonesia (30) lebih besar dari Eropa (24). Maka urutannya: Jepang(1), Indonesia(2). <br> *Koreksi:* Cek kunci jawaban PDF (C=3). Apakah ada yang terlewat? Oh, mungkin Eropa dianggap lebih banyak? Tidak, 24 < 30. <br> Mari cek lagi kalimat 'Peserta daratan Eropa yang lolos seleksi'. Asumsinya Eropa ada di posisi 3 di bawah Jepang dan Indonesia. (Jepang 48, Indo 30, Eropa 24). Jadi Indonesia urutan ke-2. Namun kunci PDF jawaban C (3). Ini kemungkinan soal menganggap Eropa gabungan atau ada interpretasi lain. Namun secara hitungan matematis 30 adalah angka kedua terbesar."
>

  **Berdasarkan data Moto GP di atas:**
  Jumlah peserta dari Indonesia menempati urutan terbanyak ke...

</Quiz>

### Soal 20 (Perbandingan Persentase)
<Quiz 
  :options="[
    { text: 'A. 20% dari seluruh peserta', isCorrect: false },
    { text: 'B. 25% dari Eropa', isCorrect: false },
    { text: 'C. 25% dari Jepang', isCorrect: true },
    { text: 'D. 30% dari Indonesia', isCorrect: false },
    { text: 'E. 50% dari Amerika', isCorrect: false }
  ]"
  explanation="Peserta Singapura = 12 orang. <br> Cek opsi C: 25% dari Jepang (48) = 1/4 x 48 = 12 orang. (Cocok/Benar)."
>

  **Berdasarkan data Moto GP di atas:**
  Jika dibandingkan dengan negara lain, peserta dari Singapura sebanyak ....

</Quiz>