---
title: Latihan Soal Logika Matematika
description: Kumpulan soal latihan persiapan UTBK materi Simpulan Logis lengkap dengan pembahasan.
---

# Latihan Soal: Simpulan Logis

Berikut adalah latihan soal untuk menguji pemahamanmu tentang materi Logika Matematika. Cobalah kerjakan sendiri terlebih dahulu, lalu klik tombol **"Lihat Pembahasan"** untuk mencocokkan jawaban.

::: tip Tips Mengerjakan
Siapkan kertas coretan. Ubah kalimat soal menjadi simbol matematika ($p, q, \sim p$, dst) agar lebih mudah melihat polanya.
:::

## Bagian 1: Ekuivalensi & Ingkaran

Di bagian ini, kita melatih kemampuan mengubah bentuk kalimat tanpa mengubah maknanya, atau mencari lawan (negasi) dari sebuah kalimat.

### Soal 1
Tentukan ingkaran (negasi) dari pernyataan berikut:
**"Jika harga BBM naik, maka harga bahan pokok ikut naik."**

- A. Harga BBM naik dan harga bahan pokok tidak naik.
- B. Harga BBM tidak naik atau harga bahan pokok naik.
- C. Jika harga BBM tidak naik, maka harga bahan pokok tidak naik.
- D. Harga BBM naik atau harga bahan pokok tidak naik.
- E. Harga BBM tidak naik dan harga bahan pokok naik.

::: details Lihat Pembahasan
**Jawaban: A**

**Analisis:**
Misalkan:
* $p$: Harga BBM naik
* $q$: Harga bahan pokok ikut naik
* Pernyataan awal: $p \Rightarrow q$

**Rumus Ingkaran Implikasi:**
$\sim (p \Rightarrow q) \equiv p \land \sim q$
(Ingat: Ingkaran dari "Jika-Maka" **bukanlah** "Jika-Maka" lagi, melainkan "Sebab terjadi TAPI Akibat tidak terjadi").

**Maka:**
$p$: Harga BBM naik
$\land$: dan
$\sim q$: harga bahan pokok **tidak** naik.

**Kalimat:** "Harga BBM naik **dan** harga bahan pokok **tidak** naik."
:::

---

### Soal 2
Pernyataan yang **ekuivalen (setara)** dengan pernyataan **"Jika Budi rajin belajar, maka ia lulus UTBK"** adalah...

- A. Jika Budi lulus UTBK, maka ia rajin belajar.
- B. Budi rajin belajar dan ia tidak lulus UTBK.
- C. Budi tidak rajin belajar atau ia lulus UTBK.
- D. Jika Budi tidak lulus UTBK, maka ia rajin belajar.
- E. Budi tidak rajin belajar dan ia lulus UTBK.

::: details Lihat Pembahasan
**Jawaban: C**

**Analisis:**
* $p$: Budi rajin belajar
* $q$: Ia lulus UTBK
* Bentuk soal: $p \Rightarrow q$

**Rumus Ekuivalensi Implikasi:**
Ada dua bentuk setara yang umum:
1.  **Kontraposisi:** $\sim q \Rightarrow \sim p$ (Jika tidak lulus, maka tidak rajin).
2.  **Disjungsi:** $\sim p \lor q$ (Tidak rajin **atau** lulus).

**Cek Pilihan:**
Pilihan C berbunyi: "Budi tidak rajin belajar ($\sim p$) **atau** ($\lor$) ia lulus UTBK ($q$)".
Ini sesuai dengan rumus $\sim p \lor q$.
:::

## Bagian 2: Penarikan Kesimpulan

Gunakan prinsip Modus Ponens, Modus Tollens, atau Silogisme.

### Soal 3
Perhatikan premis-premis berikut:
1.  Jika hari ini hujan, maka Saya membawa payung.
2.  Saya tidak membawa payung.

Kesimpulan yang sah adalah...

- A. Hari ini hujan.
- B. Hari ini tidak hujan.
- C. Saya lupa membawa payung.
- D. Hari ini cerah berawan.
- E. Jika saya membawa payung, maka hari ini hujan.

::: details Lihat Pembahasan
**Jawaban: B**

**Analisis:**
* Premis 1: $p \Rightarrow q$ (Jika hujan $\to$ bawa payung)
* Premis 2: $\sim q$ (Tidak bawa payung)

**Metode: Modus Tollens**
$$
\begin{aligned}
& p \Rightarrow q \\
& \sim q \\
\hline
\therefore \ & \sim p
\end{aligned}
$$

Kesimpulannya adalah $\sim p$ (Lawan dari "Hari ini hujan").
**Kalimat:** "Hari ini tidak hujan."
:::

---

### Soal 4
Perhatikan premis-premis berikut:
1.  Jika air laut pasang, maka nelayan tidak melaut.
2.  Jika nelayan tidak melaut, maka pasokan ikan di pasar berkurang.

Kesimpulan dari kedua premis di atas adalah...

- A. Jika air laut pasang, maka pasokan ikan di pasar berkurang.
- B. Jika pasokan ikan di pasar berkurang, maka air laut pasang.
- C. Air laut pasang dan pasokan ikan berkurang.
- D. Jika air laut tidak pasang, maka pasokan ikan tidak berkurang.
- E. Nelayan melaut meskipun air laut pasang.

::: details Lihat Pembahasan
**Jawaban: A**

**Analisis:**
* $p$: Air laut pasang
* $q$: Nelayan tidak melaut
* $r$: Pasokan ikan berkurang

Pola:
1.  $p \Rightarrow q$
2.  $q \Rightarrow r$

**Metode: Silogisme**
Coret bagian tengah yang sama ($q$).
$$
\begin{aligned}
& p \Rightarrow q \\
& q \Rightarrow r \\
\hline
\therefore \ & p \Rightarrow r
\end{aligned}
$$

Kesimpulan: $p \Rightarrow r$.
**Kalimat:** "Jika air laut pasang ($p$), maka pasokan ikan di pasar berkurang ($r$)."
:::

---

### Soal 5 (Tingkat Lanjut)
Diketahui premis:
1.  $\sim p \lor q$
2.  $\sim q$

Kesimpulan yang sah adalah...

- A. $p$
- B. $\sim p$
- C. $q$
- D. $p \land q$
- E. Tidak dapat ditarik kesimpulan

::: details Lihat Pembahasan
**Jawaban: B**

**Analisis:**
Soal ini menjebak karena Premis 1 berbentuk Disjungsi ($\lor$). Kita harus mengubahnya menjadi Implikasi agar bisa ditarik kesimpulan dengan mudah.

**Langkah 1: Ubah Premis 1**
Ingat ekuivalensi: $\sim p \lor q \equiv p \Rightarrow q$.

**Langkah 2: Susun ulang**
1.  $p \Rightarrow q$ (Bentuk lain dari $\sim p \lor q$)
2.  $\sim q$

**Langkah 3: Tarik Kesimpulan (Modus Tollens)**
$$
\begin{aligned}
& p \Rightarrow q \\
& \sim q \\
\hline
\therefore \ & \sim p
\end{aligned}
$$

Maka jawabannya adalah **$\sim p$**.
:::