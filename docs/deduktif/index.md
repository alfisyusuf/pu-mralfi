---
title: Rangkuman Konsep Kilat Simpulan Logis
description: Materi persiapan UTBK tentang Logika Matematika, Konjungsi, Disjungsi, Implikasi, dan Penarikan Kesimpulan.
---

# Konsep Kilat: Simpulan Logis

Rangkuman materi logika matematika untuk persiapan UTBK, mencakup tabel kebenaran, ekuivalensi, hingga penarikan kesimpulan.

[[toc]]

## 1. Konjungsi ($\land$)

Konjungsi adalah kalimat majemuk yang dihubungkan dengan kata hubung **"dan"**.

::: info Aturan Kebenaran
Bernilai **Benar (B)** hanya jika **kedua** pernyataan bernilai Benar.
:::

| $p$ | $q$ | $p \land q$ |
| :-: | :-: | :---------: |
|  B  |  B  |    **B** |
|  B  |  S  |      S      |
|  S  |  B  |      S      |
|  S  |  S  |      S      |

## 2. Disjungsi ($\lor$)

Disjungsi adalah kalimat majemuk yang dihubungkan dengan kata hubung **"atau"**.

::: info Aturan Kebenaran
Bernilai **Salah (S)** hanya jika **kedua** pernyataan bernilai Salah.
:::

| $p$ | $q$ | $p \lor q$ |
| :-: | :-: | :--------: |
|  B  |  B  |     B      |
|  B  |  S  |     B      |
|  S  |  B  |     B      |
|  S  |  S  |   **S** |

## 3. Implikasi ($\Rightarrow$)

Implikasi adalah kalimat majemuk yang ditandai dengan **"jika ..., maka ..."**.

::: warning Pengecualian Penting
Hanya bernilai **Salah (S)** jika **sebab ($p$) Benar** tetapi **akibat ($q$) Salah**.
(Benar $\to$ Salah = Salah)
:::

| $p$ | $q$ | $p \Rightarrow q$ |
| :-: | :-: | :---------------: |
|  B  |  B  |         B         |
|  B  |  S  |       **S** |
|  S  |  B  |         B         |
|  S  |  S  |         B         |

### Pengembangan Implikasi

Dari sebuah implikasi $p \Rightarrow q$, dapat dibentuk pernyataan lain:

| Istilah | Bentuk | Keterangan |
| :--- | :---: | :--- |
| **Konvers** | $q \Rightarrow p$ | Menukar posisi sebab dan akibat. |
| **Invers** | $\sim p \Rightarrow \sim q$ | Menegasikan kedua pernyataan. |
| **Kontraposisi** | $\sim q \Rightarrow \sim p$ | Menukar posisi DAN menegasikan keduanya. |

::: tip Ekuivalensi
* **Implikasi** setara dengan **Kontraposisi** ($p \Rightarrow q \equiv \sim q \Rightarrow \sim p$)
* **Konvers** setara dengan **Invers** ($q \Rightarrow p \equiv \sim p \Rightarrow \sim q$)
:::

## 4. Biimplikasi ($\Leftrightarrow$)

Kalimat majemuk yang ditandai dengan **"... jika dan hanya jika ..."**.

::: info Aturan Kebenaran
Bernilai **Benar (B)** jika kedua pernyataan memiliki nilai kebenaran yang **sama** (keduanya Benar atau keduanya Salah).
:::

| $p$ | $q$ | $p \Leftrightarrow q$ |
| :-: | :-: | :-------------------: |
|  B  |  B  |         **B** |
|  B  |  S  |           S           |
|  S  |  B  |           S           |
|  S  |  S  |         **B** |

## 5. Ingkaran dan Ekuivalensi

Berikut adalah rumus-rumus penting untuk merubah bentuk kalimat logika atau mencari negasinya (ingkaran).

### Ingkaran (Negasi)

| Jenis Kalimat | Bentuk Awal | Ingkaran ($\sim$) |
| :--- | :---: | :---: |
| **Konjungsi** | $p \land q$ | $\sim p \lor \sim q$ |
| **Disjungsi** | $p \lor q$ | $\sim p \land \sim q$ |
| **Implikasi** | $p \Rightarrow q$ | $p \land \sim q$ |
| **Biimplikasi** | $p \Leftrightarrow q$ | $(p \land \sim q) \lor (q \land \sim p)$ |

### Ekuivalensi (Kesetaraan)

Sering digunakan untuk menyederhanakan soal penarikan kesimpulan.

1.  **Ekuivalensi Implikasi:**
    $$p \Rightarrow q \equiv \sim q \Rightarrow \sim p \equiv \sim p \lor q$$

2.  **Ekuivalensi Biimplikasi:**
    $$p \Leftrightarrow q \equiv (p \Rightarrow q) \land (q \Rightarrow p)$$

## 6. Tautologi dan Kontradiksi

* **Tautologi**: Kalimat majemuk yang **selalu bernilai BENAR** untuk setiap kemungkinan premisnya.
* **Kontradiksi**: Kalimat majemuk yang **selalu bernilai SALAH** untuk setiap kemungkinan premisnya.

## 7. Penarikan Kesimpulan

Tiga metode sah (valid) dalam menarik kesimpulan dari premis-premis yang ada.

### A. Modus Ponens
Jika diketahui $p \Rightarrow q$ dan terjadi $p$, maka kesimpulannya $q$.

$$
\begin{aligned}
\text{Premis 1} &: p \Rightarrow q \\
\text{Premis 2} &: p \\
\hline
\text{Kesimpulan} &: q
\end{aligned}
$$

### B. Modus Tollens
Jika diketahui $p \Rightarrow q$ namun yang terjadi adalah $\sim q$ (bukan $q$), maka kesimpulannya $\sim p$.

$$
\begin{aligned}
\text{Premis 1} &: p \Rightarrow q \\
\text{Premis 2} &: \sim q \\
\hline
\text{Kesimpulan} &: \sim p
\end{aligned}
$$

### C. Silogisme
Penarikan kesimpulan berantai. Jika $p$ menyebabkan $q$, dan $q$ menyebabkan $r$, maka $p$ menyebabkan $r$.

$$
\begin{aligned}
\text{Premis 1} &: p \Rightarrow q \\
\text{Premis 2} &: q \Rightarrow r \\
\hline
\text{Kesimpulan} &: p \Rightarrow r
\end{aligned}
$$