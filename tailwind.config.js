module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D1B69", // Deep space foundation
          50: "#F4F1FB", // Very light purple
          100: "#E8E1F7", // Light purple
          200: "#D1C3EF", // Medium light purple
          300: "#B8A9D9", // Medium purple
          400: "#9F8FD1", // Medium dark purple
          500: "#2D1B69", // Base primary
          600: "#251659", // Darker primary
          700: "#1D1149", // Very dark primary
          800: "#150C39", // Ultra dark primary
          900: "#0D0729", // Deepest primary
        },
        secondary: {
          DEFAULT: "#1A0F3A", // Darker cosmic depth
          50: "#F2F0F8", // Very light secondary
          100: "#E5E1F1", // Light secondary
          200: "#CBC3E3", // Medium light secondary
          300: "#B1A5D5", // Medium secondary
          400: "#9787C7", // Medium dark secondary
          500: "#1A0F3A", // Base secondary
          600: "#170D31", // Darker secondary
          700: "#140B28", // Very dark secondary
          800: "#11091F", // Ultra dark secondary
          900: "#0E0716", // Deepest secondary
        },
        accent: {
          DEFAULT: "#FF6B35", // Stellar energy
          50: "#FFF4F0", // Very light accent
          100: "#FFE9E1", // Light accent
          200: "#FFD3C3", // Medium light accent
          300: "#FFBDA5", // Medium accent
          400: "#FFA787", // Medium dark accent
          500: "#FF6B35", // Base accent
          600: "#E55A2B", // Darker accent
          700: "#CC4921", // Very dark accent
          800: "#B23817", // Ultra dark accent
          900: "#99270D", // Deepest accent
        },
        background: "#0F0A1F", // Pure space canvas
        surface: "#3D2B7A", // Subtle elevation
        text: {
          primary: "#FFFFFF", // Crystal clarity
          secondary: "#B8A9D9", // Gentle hierarchy
        },
        success: {
          DEFAULT: "#00D4AA", // Cosmic confirmation
          50: "#F0FDFB", // Very light success
          100: "#E1FBF7", // Light success
          200: "#C3F7EF", // Medium light success
          300: "#A5F3E7", // Medium success
          400: "#87EFDF", // Medium dark success
          500: "#00D4AA", // Base success
          600: "#00BF99", // Darker success
          700: "#00AA88", // Very dark success
          800: "#009577", // Ultra dark success
          900: "#008066", // Deepest success
        },
        warning: {
          DEFAULT: "#FFB347", // Stellar caution
          50: "#FFFBF5", // Very light warning
          100: "#FFF7EB", // Light warning
          200: "#FFEFD7", // Medium light warning
          300: "#FFE7C3", // Medium warning
          400: "#FFDFAF", // Medium dark warning
          500: "#FFB347", // Base warning
          600: "#E5A13F", // Darker warning
          700: "#CC8F37", // Very dark warning
          800: "#B27D2F", // Ultra dark warning
          900: "#996B27", // Deepest warning
        },
        error: {
          DEFAULT: "#FF6B6B", // Gentle correction
          50: "#FFF5F5", // Very light error
          100: "#FFEBEB", // Light error
          200: "#FFD7D7", // Medium light error
          300: "#FFC3C3", // Medium error
          400: "#FFAFAF", // Medium dark error
          500: "#FF6B6B", // Base error
          600: "#E55F5F", // Darker error
          700: "#CC5353", // Very dark error
          800: "#B24747", // Ultra dark error
          900: "#993B3B", // Deepest error
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'], // Headlines and CTAs
        inter: ['Inter', 'sans-serif'], // Body text
        'space-mono': ['Space Mono', 'monospace'], // Accents and technical details
      },
      fontSize: {
        'cosmic-xl': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'cosmic-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'cosmic-md': ['2rem', { lineHeight: '1.3' }],
        'cosmic-sm': ['1.5rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'cosmic-pulse': 'cosmic-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'cosmic-pulse': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 30px rgba(255, 107, 53, 0.5)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 107, 53, 0.6)' },
        },
      },
      backdropBlur: {
        'cosmic': '16px',
      },
      boxShadow: {
        'cosmic': '0 8px 32px rgba(45, 27, 105, 0.3)',
        'cosmic-lg': '0 16px 48px rgba(45, 27, 105, 0.4)',
        'cosmic-glow': '0 0 20px rgba(255, 107, 53, 0.3)',
        'cosmic-glow-lg': '0 0 30px rgba(255, 107, 53, 0.5)',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #2D1B69 0%, #1A0F3A 100%)',
        'accent-gradient': 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
        'starfield': `radial-gradient(2px 2px at 20px 30px, #eee, transparent),
                      radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.8), transparent),
                      radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                      radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.6), transparent),
                      radial-gradient(2px 2px at 160px 30px, #ddd, transparent)`,
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'cosmic': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}