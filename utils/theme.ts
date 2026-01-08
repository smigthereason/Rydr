export const theme = {
  colors: {
    // Primary colors
    primary: '#f20d33', // Red from designs
    primaryGreen: '#0df20d', // Green from some designs
    primaryLightGreen: '#0df259',
    accentGreen: '#4ade80',
    accentRed: '#FF3B30',
    
    // Background colors
    background: {
      dark: '#09090b', // Deep black
      darkGreen: '#102216', // Dark green
      darkRed: '#221013ff', // Dark red
      darkCharcoal: '#0a0c0a',
      light: '#f8f5f6',
    },
    
    // Surface colors
    surface: {
      dark: '#27272a',
      darker: '#151815',
      darkGreen: '#1A2C20',
      darkRed: '#2f1519',
    },
    
    // Text colors
    text: {
      primary: '#ffffff',
      secondary: '#9CA3AF',
      muted: '#6B7280',
      green: '#4ade80',
      red: '#f20d33',
    },
    
    // Status colors
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
    },
  },
  
  fonts: {
    inter: 'Inter',
    chakraPetch: 'ChakraPetch',
    plusJakarta: 'PlusJakartaSans',
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 24,
    full: 9999,
  },
  
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 8,
    },
  },
} as const;

export type Theme = typeof theme;