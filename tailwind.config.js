/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "#031d33",

                    "secondary": "#00afff",

                    "accent": "#0000ff",

                    "neutral": "#00050e",

                    "base-100": "#242933",

                    "info": "#0085ae",

                    "success": "#00d185",

                    "warning": "#f29f00",

                    "error": "#ff7478",

                },
            },
        ],
    },
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
}
