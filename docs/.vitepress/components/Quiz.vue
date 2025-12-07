<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: String,
  options: Array, 
  explanation: String
})

const selected = ref(null)
const submitted = ref(false)

function checkAnswer(index) {
  if (submitted.value) return
  selected.value = index
  submitted.value = true
}
</script>

<template>
  <div class="quiz-box">
    <div class="question">
      📝 <strong>
        <slot>{{ question }}</slot>
      </strong>
    </div>

    <div class="options-grid">
      <button 
        v-for="(opt, idx) in options" 
        :key="idx"
        @click="checkAnswer(idx)"
        :class="{ 
          'correct': submitted && opt.isCorrect,
          'wrong': submitted && selected === idx && !opt.isCorrect,
          'selected': selected === idx
        }"
        :disabled="submitted"
      >
        <span class="marker">{{ ['A','B','C','D','E'][idx] }}</span>
        <span v-html="opt.text"></span>
      </button>
    </div>

    <div v-if="submitted" class="feedback" :class="options[selected].isCorrect ? 'fb-correct' : 'fb-wrong'">
      <p class="status">
        {{ options[selected].isCorrect ? '✅ BENAR!' : '❌ KURANG TEPAT' }}
      </p>
      <p class="explanation">💡 <strong>Pembahasan:</strong> <span v-html="explanation"></span></p>
    </div>
  </div>
</template>
<style scoped>
.quiz-box { border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 12px; margin: 2rem 0; background: var(--vp-c-bg-soft); }
.options-grid { display: flex; flex-direction: column; gap: 0.8rem; margin-top: 1rem; }
button { 
  display: flex; align-items: center; gap: 10px; padding: 12px; 
  text-align: left; border: 2px solid transparent; background: var(--vp-c-bg); 
  cursor: pointer; border-radius: 8px; transition: all 0.2s; font-weight: 500;
}
button:hover:not(:disabled) { border-color: var(--vp-c-brand); background: var(--vp-c-bg-mute); }
.marker { background: #f1f5f9; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; color: #64748b; }
.correct { background-color: #dcfce7 !important; border-color: #22c55e !important; color: #14532d; }
.wrong { background-color: #fee2e2 !important; border-color: #ef4444 !important; color: #7f1d1d; }
.feedback { margin-top: 1rem; padding: 1rem; border-radius: 8px; font-size: 0.95rem; }
.fb-correct { background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; }
.fb-wrong { background: #fef2f2; color: #b91c1c; border: 1px solid #fecaca; }
.status { font-weight: bold; margin-bottom: 0.5rem; }
</style>
