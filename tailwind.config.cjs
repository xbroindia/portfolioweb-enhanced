/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne:   ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        bg:      '#060608',
        bg2:     '#0d0d12',
        bg3:     '#13131a',
        accent:  '#6c63ff',
        accent2: '#00d4ff',
        muted:   '#7b7a8e',
      },
      // Keyframes defined in index.css — just wire up the animation names here
      animation: {
        fadeUp:      'fadeUp 0.8s ease both',
        fadeUp1:     'fadeUp 0.8s 0.15s ease both',
        fadeUp2:     'fadeUp 0.8s 0.3s ease both',
        fadeUp3:     'fadeUp 0.8s 0.45s ease both',
        fadeUp4:     'fadeUp 1s 0.8s ease both',
        blink:       'blink 0.8s infinite',
        orbit1:      'orbit1 20s linear infinite',
        orbit2:      'orbit1 35s linear infinite reverse',
        imgPulse:    'imgPulse 4s ease-in-out infinite',
        scrollPulse: 'scrollPulse 2s infinite',
      },
      keyframes: {
        // Blink is the only one not in index.css (it's tiny and only used inline)
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
