import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: "Siap UTBK PU",
  description: "Materi dan Latihan Soal Gen-Z",
  // Konfigurasi Markdown
  markdown: {
    math: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Deduktif', link: '/deduktif/' },
      { text: 'Induktif', link: '/induktif/' },
      { text: 'Kuantitatif', link: '/kuantitatif/' },
    ],

    sidebar: {
      '/deduktif/': [
        {
          text: '🧠 Penalaran Deduktif',
          items: [
            { text: 'Rangkuman Materi', link: '/deduktif/' },
            { text: 'Contoh Soal', link: '/deduktif/contoh-soal-untuk-memahami' }
          ]
        }
      ],
      '/induktif/': [
        {
          text: '📊 Penalaran Induktif',
          items: [
            { text: 'Rangkuman Materi', link: '/induktif/' },
            { text: 'Latihan Soal', link: '/induktif/kuis' }
          ]
        }
      ],
      '/kuantitatif/': [
        {
          text: '🧮 Penalaran Kuantitatif',
          items: [
            { text: 'Rangkuman Materi', link: '/kuantitatif/' },
            { text: 'Latihan Soal', link: '/kuantitatif/kuis' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/username-bapak/repo-nya' }
    ]
  }
})
