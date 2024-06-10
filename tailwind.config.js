/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const baseSize = 16;

function rem(v) {
  return "" + v / baseSize + "rem";
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        blue: "#377DF7",
        bgColor: "var(--tgui--bg_color)",
        textColor: "var(--tgui--text_color)",
        hintColor: "var(--tgui--hint_color)",
        linkColor: "var(--tgui--link_color)",
        buttonColor: "var(--tgui--button_color)",
        buttonTextColor: "var(--tgui--button_text_color)",
        secondaryBgColor: "var(--tgui--secondary_bg_color)",
        headerBgColor: "var(--tgui--header_bg_color)",
        accentTextColor: "var(--tgui--accent_text_color)",
        sectionBgColor: "var(--tgui--section_bg_color)",
        sectionHeaderTextColor: "var(--tgui--section_header_text_color)",
        subTitleTextColor: "var(--tgui--subtitle_text_color)",
        destructiveTextColor: "var(--tgui--destructive_text_color)",
        skeletonColor: "var(--tgui--skeleton)",
        dividerColor: "var(--tgui--divider)",
        outLineColor: "var(--tgui--outline)",
        surfacePrimaryColor: "var(--tgui--outline)",
        surfaceDarkColor: "var(--tgui--surface_dark)",
        tertiaryBgColor: "var(--tgui--tertiary_bg_color)",
        quaternaryBgColor: "var(--tgui--quaternary_bg_color)",
        segmentedControlActiveBgColor:
          "var(--tgui--segmented_control_active_bg)",
        cardBgColor: "var(--tgui--card_bg_color)",
        secondaryHintColor: "var(--tgui--secondary_hint_color)",
        secondaryFillColor: "var(--tgui--secondary_fill)",
        greenColor: "var(--tgui--green)",
        destructiveBgColor: "var(--tgui--destructive_background)",
        primaryCodeHighlightColor: "var(--tgui--primary_code_highlight)",
        secondaryCodeHighlightColor: "var(--tgui--secondary_code_highlight)",
        tertiaryCodeHighlightColor: "var(--tgui--tertiary_code_highlight)",
        plainBgColor: "var(--tgui--plain_background)",
        plainForegroundColor: "var(--tgui--plain_foreground)",
        toastAccentColor: "var(--tgui--toast_accent_color)",
        tooltipBgDarkColor: "var(--tgui--tooltip_background_dark)",
        whiteColor: "var(--tgui--white)",
        blackColor: "var(--tgui--black)",
        inlineButtons: "#252525",
      },
      fontSize: {
        "large-title-regular": [
          "var(--tgui--largeTitleRegular--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--largeTitleRegular)",
            lineHeight: "var(--tgui--font_weight--largeTitleRegular)",
          },
        ],
        "large-title-semibold": [
          rem(34),
          { fontWeight: "600", lineHeight: rem(41) },
        ],
        "large-title-bold": [
          rem(34),
          { fontWeight: "700", lineHeight: rem(41) },
        ],

        "title1-regular": [
          "var(--tgui--title1--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent3)",
            lineHeight: "var(--tgui--title1--line_height)",
          },
        ],
        "title1-semibold": [
          "var(--tgui--title1--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent2)",
            lineHeight: "var(--tgui--title1--line_height)",
          },
        ],
        "title1-bold": [
          "var(--tgui--title1--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent1)",
            lineHeight: "var(--tgui--title1--line_height)",
          },
        ],

        "title2-regular": [
          "var(--tgui--title2--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent3)",
            lineHeight: "var(--tgui--title2--line_height)",
          },
        ],
        "title2-semibold": [
          "var(--tgui--title2--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent2)",
            lineHeight: "var(--tgui--title2--line_height)",
          },
        ],
        "title2-bold": [
          "var(--tgui--title2--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent1)",
            lineHeight: "var(--tgui--title2--line_height)",
          },
        ],

        "title3-regular": [
          "var(--tgui--title3--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent3)",
            lineHeight: "var(--tgui--title3--line_height)",
          },
        ],
        "title3-semibold": [
          "var(--tgui--title3--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent2)",
            lineHeight: "var(--tgui--title3--line_height)",
          },
        ],
        "title3-bold": [
          "var(--tgui--title3--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent1)",
            lineHeight: "var(--tgui--title3--line_height)",
          },
        ],

        "headline-regular": [
          "var(--tgui--headline--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent3)",
            lineHeight: "var(--tgui--headline--line_height)",
          },
        ],
        "headline-semibold": [
          "var(--tgui--headline--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent2)",
            lineHeight: "var(--tgui--headline--line_height)",
          },
        ],
        "headline-bold": [
          "var(--tgui--headline--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent1)",
            lineHeight: "var(--tgui--headline--line_height)",
          },
        ],

        "text-regular": [
          "var(--tgui--text--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent3)",
            lineHeight: "var(--tgui--text--line_height)",
          },
        ],
        "text-medium": [
          "var(--tgui--text--font_size)",
          { fontWeight: "500", lineHeight: "var(--tgui--text--line_height)" },
        ],
        "text-semibold": [
          "var(--tgui--text--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent2)",
            lineHeight: "var(--tgui--text--line_height)",
          },
        ],
        "text-bold": [
          "var(--tgui--text--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent1)",
            lineHeight: "var(--tgui--text--line_height)",
          },
        ],

        "sub-headline1-regular": [
          "var(--tgui--subheadline1--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent3)",
            lineHeight: "var(--tgui--subheadline1--line_height)",
          },
        ],
        "sub-headline1-semibold": [
          "var(--tgui--subheadline1--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent2)",
            lineHeight: "var(--tgui--subheadline1--line_height)",
          },
        ],
        "sub-headline1-bold": [
          "var(--tgui--subheadline1--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent1)",
            lineHeight: "var(--tgui--subheadline1--line_height)",
          },
        ],

        "sub-headline2-regular": [
          "var(--tgui--subheadline2--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent3)",
            lineHeight: "var(--tgui--subheadline2--line_height)",
          },
        ],
        "sub-headline2-semibold": [
          "var(--tgui--subheadline2--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent2)",
            lineHeight: "var(--tgui--subheadline2--line_height)",
          },
        ],
        "sub-headline2-bold": [
          "var(--tgui--subheadline2--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent1)",
            lineHeight: "var(--tgui--subheadline2--line_height)",
          },
        ],

        "caption1-regular": [
          "var(--tgui--caption1--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent3)",
            lineHeight: "var(--tgui--caption1--line_height)",
          },
        ],
        "caption1-semibold": [
          "var(--tgui--caption1--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent2)",
            lineHeight: "var(--tgui--caption1--line_height)",
          },
        ],
        "caption1-bold": [
          "var(--tgui--caption1--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent1)",
            lineHeight: "var(--tgui--caption1--line_height)",
          },
        ],

        "caption2-regular": [
          "var(--tgui--caption2--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent3)",
            lineHeight: "var(--tgui--caption2--line_height)",
          },
        ],
        "caption2-semibold": [
          "var(--tgui--caption2--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent2)",
            lineHeight: "var(--tgui--caption2--line_height)",
          },
        ],
        "caption2-bold": [
          "var(--tgui--caption2--font_size)",
          {
            fontWeight: "var(--tgui--font_weight--accent1)",
            lineHeight: "var(--tgui--caption2--line_height)",
          },
        ],
      },
    },
  },
  plugins: [],
};
