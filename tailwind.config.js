import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            backgroundImage: {
                'custom-bg': "url('/public/images/logo-bg.svg')",
            },
            fontFamily: {
                sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'color-01': '#7C5DFA',
                'color-02': '#9277FF',
                'color-03': '#1E2139',
                'color-04': '#252945',
                'color-05': '#DFE3FA',
                'color-06': '#888EB0',
                'color-07': '#7E88C3',
                'color-08': '#0C0E16',
                'color-09': '#EC5757',
                'color-10': '#FF9797',
                'color-11': '#F8F8FB',
                'color-12': '#141625',
                'navbar-bg': '#373B53',
            },
            fontSize: {
                base: [
                    '0.813rem', //13px
                    {
                        lineHeight: '1.125rem', //18px
                        letterSpacing: '-0.006em',
                        fontWeight: '500',
                    },
                ],
                'base-variant': [
                    '0.813rem', //13px
                    {
                        lineHeight: '0.938rem', //15px
                        letterSpacing: '-0.006em',
                        fontWeight: '500',
                    },
                ],
                lg: [
                    '0.938rem', //15px
                    {
                        lineHeight: '1.5rem',
                        letterSpacing: '-0.016em',
                        fontWeight: '700',
                    },
                ],
                'lg-variant': [
                    '0.938rem', //15px
                    {
                        lineHeight: '0.938rem', //15px
                        letterSpacing: '-0.016em',
                        fontWeight: '700',
                    },
                ],
                xl: [
                    '1.5rem', //24px
                    {
                        lineHeight: '1.375rem',
                        letterSpacing: '-0.047em',
                        fontWeight: '700',
                    },
                ],
                '2xl': [
                    '2.25rem', //36px
                    {
                        lineHeight: '2.063rem',
                        letterSpacing: '-0.063em',
                        fontWeight: '700',
                    },
                ],
            },
        },
    },

    plugins: [forms],
};
