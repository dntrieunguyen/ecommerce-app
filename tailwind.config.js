/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   mode: 'jit',
   theme: {
      extend: {
         colors: {
            light: '#F9FAFB',
            primary: '#3B71CA',
            secondary: '#9FA6B2',
            success: '#14A44D',
            warning: '#E4A11B',
            error: '#DC4C64',
            info: '#54B4D3',
            dark: '#1F2937',
         },

         fontSize: {
            content: '1.4rem',
            lead: '2rem',
            title: '2.4rem',
            brand: '3rem',
         },
         backgroundColor: {
            'gradient-error':
               'linear-gradient(rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
         },
      },
   },
   plugins: [],
};
