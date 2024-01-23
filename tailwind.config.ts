import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				movedown: {
					'0%': { top: '0.5rem', opacity: '1' },
					'100%': { top: '1.75rem', opacity: '0' },
				},
				shakeLittle: {
					'0%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(6deg)' },
					'50%': { transform: 'rotate(-6deg)' },
					'75%': { transform: 'rotate(6deg)' },
					'100%': { transform: 'rotate(0deg)' },
				},
				expandButton: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' },
				},
			},
			animation: {
				movedown: 'movedown 1.5s infinite',
				shakeLittle: 'shakeLittle 0.5s',
				expandButton: 'expandButton 0.8s',
			},
		},
	},
	plugins: [],
};
export default config;
