import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/types/props/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        my: {
          primary: {
            DEFAULT: "#4054CC", // 메인 헤더 색상
          },
          secondary: {
            DEFAULT: "#EBF0FA", // 메뉴 배경 색상
          },
          background: {
            DEFAULT: "#F7FAFF", // 항목, 내비게이션 기본 배경
            light: "#F2F2F2",
          },
          menu: {
            DEFAULT: "#F7F7F7",
            darker: "#E5E5E5",
          },
          text: {
            dark: "#111111", // 텍스트 기본 색상
            light: "#FAFAFA", // 텍스트 배경 색상
          },
          positive: {
            DEFAULT: "#26CC66", // 긍정 강조 색상
            2: "#E5F7EB", // 모달 긍정 배경
          },
          negative: {
            DEFAULT: "#E53333", // 부정 강조 색상
            2: "#FCEAEA", // 모달 부정 배경
          },
          muted: {
            DEFAULT: "#999999", // 비활성 색상
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
