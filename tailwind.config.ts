
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				luxury: {
					gold: '#D4AF37',
					'gold-light': '#F7E98E',
					'gold-dark': '#B8941F',
					silver: '#C0C0C0',
					platinum: '#E5E4E2',
					black: '#0A0A0A',
					'dark-gray': '#1A1A1A',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-scale': {
					'0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
					'100%': { opacity: '1', transform: 'scale(1) translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)' },
					'100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.8)' }
				},
				'rotate-360': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-scale': 'fade-in-scale 0.6s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'slide-down': 'slide-down 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'shimmer': 'shimmer 2s infinite',
				'float': 'float 3s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
				'rotate-360': 'rotate-360 1s linear infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite'
			},
			backgroundImage: {
				'luxury-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 25%, #F7E98E 50%, #FFD700 75%, #B8941F 100%)',
				'luxury-gradient-hover': 'linear-gradient(135deg, #B8941F 0%, #D4AF37 25%, #FFD700 50%, #F7E98E 75%, #D4AF37 100%)',
				'dark-luxury': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 25%, #2A2A2A 50%, #1A1A1A 75%, #0A0A0A 100%)',
				'hero-gradient': 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(26,26,26,0.8) 50%, rgba(0,0,0,0.9) 100%)',
				'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
				'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
			},
			boxShadow: {
				'luxury': '0 20px 25px -5px rgba(212, 175, 55, 0.1), 0 10px 10px -5px rgba(212, 175, 55, 0.04)',
				'luxury-lg': '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				'glow': '0 0 20px rgba(212, 175, 55, 0.6)',
				'glow-lg': '0 0 40px rgba(212, 175, 55, 0.8)',
			},
			backdropBlur: {
				'xs': '2px',
			},
			fontFamily: {
				'luxury': ['Playfair Display', 'serif'],
				'modern': ['Inter', 'sans-serif'],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
