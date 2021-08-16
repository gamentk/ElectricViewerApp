import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const COLORS = {
    black: '#000',
    white: '#FFFFFF',
    lightGreen: '#16DB65',
    regularGreen: '#058C42',
    boldGreen: '#033A16',
    gray: '#AAA',
    blue: '#0682FE'
};

export const SIZES = {
    // Global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // Font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    // App dimensions
    width,
    height
};

export const FONTS = {
    h1: { fontFamily: 'Prompt-Black', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Prompt-Bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Prompt-Bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Prompt-Bold', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'Prompt-Regular', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'Prompt-Regular', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'Prompt-Regular', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'Prompt-Regular', fontSize: SIZES.body4, lineHeight: 22 },
};

const theme = { COLORS, SIZES, FONTS };

export default theme;