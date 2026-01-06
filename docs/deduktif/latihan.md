---
title: Latihan UTBK Penalaran Umum
description: Kumpulan soal logika deduktif
---

# 🧠 Latihan UTBK: Penalaran Deduktif

> [!TIP] Strategi Pengerjaan
> Soal tipe ini menguji ketelitian logika, bukan kecepatan menghitung.
> * Perhatikan kata hubung **DAN ($\wedge$)** vs **ATAU ($\vee$)**.
> * Gambar garis bilangan jika bertemu pertidaksamaan.

---

## Soal 1: Logika Konjungsi (Dan)

**Bacalah premis berikut dengan saksama!**

::: info Diketahui Premis-Premis:
* **Premis $p$:** $$x^2 - 7x + 10 = 0$$
* **Premis $q$:** $$x^2 - 3x - 10 = 0$$
* *Catatan: $x \in \mathbb{R}$*
:::

Nilai $x$ yang menyebabkan pernyataan majemuk $p \wedge q$ (p **DAN** q) bernilai **BENAR** adalah ....

- A. $x = -5$
- B. $x = -2$
- C. $x = 0$
- D. $x = 2$
- E. $x = 5$

::: details 🔓 Buka Kunci Jawaban & Pembahasan
**Jawaban Benar: E ($x = 5$)**

Untuk membuat $p \wedge q$ bernilai **BENAR**, maka **kedua** pernyataan ($p$ dan $q$) harus bernilai benar secara bersamaan. Kita cari irisan dari himpunan penyelesaiannya.

1.  **Cari akar persamaan $p$:**
    $$x^2 - 7x + 10 = 0 \rightarrow (x - 5)(x - 2) = 0$$
    Hasil: $\{2, 5\}$

2.  **Cari akar persamaan $q$:**
    $$x^2 - 3x - 10 = 0 \rightarrow (x - 5)(x + 2) = 0$$
    Hasil: $\{-2, 5\}$

3.  **Kesimpulan (Irisan):**
    Angka yang muncul di kedua hasil di atas adalah **5**.

> [!WARNING] Awas Terkecoh!
> Jika soal meminta $p \vee q$ (ATAU), maka jawabannya adalah gabungan semua angka: $\{-2, 2, 5\}$. Tapi karena soal meminta **DAN**, kita hanya ambil yang sama.
:::

---

## Soal 2: Logika Disjungsi (Atau)

Rentang nilai $x$ yang memenuhi agar **disjungsi** pernyataan berikut bernilai **BENAR**:

::: info Pernyataan Logika
$$x^2 + 2x - 8 < 0$$
**— ATAU ($\vee$) —**
$$x^2 - 6x + 5 < 0$$
:::

Pilihlah rentang nilai yang tepat:

- A. $-4 < x < 1$ atau $2 < x < 5$
- B. $-4 < x < 5$
- C. $-4 < x < 2$
- D. $1 < x < 5$
- E. $2 < x < 5$

::: details 🔓 Buka Kunci Jawaban & Pembahasan
**Jawaban Benar: B ($-4 < x < 5$)**

Kata kunci **"ATAU"** berarti kita mencari **GABUNGAN (Union)** dari kedua daerah penyelesaian. Asalkan $x$ memenuhi salah satu saja, kalimat itu benar.

**Langkah 1: Selesaikan Pertidaksamaan Pertama**
$$x^2 + 2x - 8 < 0 \rightarrow (x + 4)(x - 2) < 0$$
Pembuat nol: $-4$ dan $2$.
Area: **$-4 < x < 2$** (Garis Merah)

**Langkah 2: Selesaikan Pertidaksamaan Kedua**
$$x^2 - 6x + 5 < 0 \rightarrow (x - 5)(x - 1) < 0$$
Pembuat nol: $1$ dan $5$.
Area: **$1 < x < 5$** (Garis Biru)

**Langkah 3: Gabungkan (Union)**
Bayangkan menumpuk kedua garis bilangan tersebut:
* Area 1: dari -4 sampai 2
* Area 2: dari 1 sampai 5
* Karena ada tumpang tindih di tengah (1 sampai 2), maka garisnya menyambung tanpa putus dari ujung paling kiri (-4) sampai ujung paling kanan (5).

Maka, himpunan penyelesaiannya adalah **$-4 < x < 5$**.
:::

---

::: tip 💡 Butuh materi pengantar?
Jika Anda lupa konsep dasar, silakan baca kembali materinya **[Penalaran Deduktif](./index)** sebelum lanjut ke soal berikutnya.
:::