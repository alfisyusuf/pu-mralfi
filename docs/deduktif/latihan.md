# Latihan UTBK Penalaran Umum - Logika Deduktif

Berikut adalah kumpulan soal latihan untuk mengasah kemampuan penalaran deduktif, khususnya yang berkaitan dengan logika matematika (implikasi, konjungsi, dan disjungsi).

---

## Soal 1: Konjungsi Logika (Premis)

**Bacalah bacaan berikut dengan saksama!**

Diberikan premis-premis sebagai berikut:

* **Premis $p$:** $x^2 - 7x + 10 = 0$
* **Premis $q$:** $x^2 - 3x - 10 = 0$
* dengan $x \in \mathbb{R}$

Nilai $x$ yang menyebabkan $p \wedge q$ (p DAN q) bernilai **BENAR** adalah ....

A. $x = -5$
B. $x = -2$
C. $x = 0$
D. $x = 2$
E. $x = 5$

::: details Lihat Kunci Jawaban & Pembahasan
**Jawaban Benar: E ($x = 5$)**

**Pembahasan:**
Dalam logika matematika, notasi $p \wedge q$ (konjungsi) hanya akan bernilai **BENAR** jika **kedua** pernyataan ($p$ dan $q$) bernilai benar. Artinya, kita mencari nilai $x$ yang memenuhi kedua persamaan tersebut (irisan himpunan penyelesaian).

1.  **Cari penyelesaian premis $p$:**
    $$x^2 - 7x + 10 = 0$$
    $$(x - 5)(x - 2) = 0$$
    $$x = 5 \text{ atau } x = 2$$

2.  **Cari penyelesaian premis $q$:**
    $$x^2 - 3x - 10 = 0$$
    $$(x - 5)(x + 2) = 0$$
    $$x = 5 \text{ atau } x = -2$$

3.  **Cari Irisan (Nilai yang sama):**
    Nilai $x$ yang ada di kedua himpunan penyelesaian adalah **5**.

*Catatan: Jika opsi E tidak terlihat di soal asli, kemungkinan soal tersebut terpotong, namun secara matematis jawabannya adalah 5.*
:::

---

## Soal 2: Disjungsi Logika (Pertidaksamaan)

**Bacalah bacaan berikut dengan saksama!**

Rentang nilai $x$ yang memenuhi agar **disjungsi** pernyataan berikut:

* $$x^2 + 2x - 8 < 0$$
* **ATAU**
* $$x^2 - 6x + 5 < 0$$

menjadi suatu kalimat yang bernilai **BENAR** adalah ....

A. $-4 < x < 1$ atau $2 < x < 5$
B. $-4 < x < 5$
C. $-4 < x < 2$
D. $1 < x < 5$
E. $2 < x < 5$

::: details Lihat Kunci Jawaban & Pembahasan
**Jawaban Benar: B ($-4 < x < 5$)**

**Pembahasan:**
Disjungsi (kata hubung "ATAU") bernilai BENAR jika **salah satu** atau **kedua** pernyataan bernilai benar. Dalam konteks himpunan penyelesaian, ini berarti kita mencari **GABUNGAN (Union)** dari kedua rentang nilai.

1.  **Penyelesaian Pertidaksamaan 1:**
    $$x^2 + 2x - 8 < 0$$
    $$(x + 4)(x - 2) < 0$$
    Pembuat nol: $x = -4$ dan $x = 2$.
    Area kurang dari nol berada di antara:
    **$-4 < x < 2$** (Sebut saja Himpunan A)

2.  **Penyelesaian Pertidaksamaan 2:**
    $$x^2 - 6x + 5 < 0$$
    $$(x - 5)(x - 1) < 0$$
    Pembuat nol: $x = 5$ dan $x = 1$.
    Area kurang dari nol berada di antara:
    **$1 < x < 5$** (Sebut saja Himpunan B)

3.  **Gabungan (Union):**
    Kita menggabungkan area $-4 < x < 2$ dengan area $1 < x < 5$.
    Karena kedua rentang ini saling beririsan (overlap) di area $1 < x < 2$, maka gabungannya adalah dari ujung terkiri himpunan A sampai ujung terkanan himpunan B.

    * Ujung kiri: $-4$
    * Ujung kanan: $5$

    Maka rentang gabungannya adalah:
    **$-4 < x < 5$**
:::