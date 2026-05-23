module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lda-black': '#0f0f0f',
        'lda-dark': '#1a1a1a',
        'lda-yellow': '#ffd700',
        'lda-yellow-dark': '#ffb700',
        'lda-gray': '#2a2a2a',
        'lda-gray-light': '#404040',
      },
      fontFamily: {
        'display': ['Audiowide', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-yellow': '0 0 20px rgba(255, 215, 0, 0.5)',
        'neon-yellow-lg': '0 0 40px rgba(255, 215, 0, 0.7)',
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.7)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
