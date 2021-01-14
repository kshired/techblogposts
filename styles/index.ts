import { injectGlobal } from '@emotion/css';

injectGlobal`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=block');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* font-family: 'IBMPlexSansKR-Light', 'Courier New', monospace; */
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
}

body {
  min-height: 100vh;
  /* display: flex; */
  overflow-y: overlay;
  line-height: 1.8;
}

#__next {
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  /* white-space: pre-line; */
  overflow-x: hidden;
  min-height: 100vh;
  width: 100%;
}

:root {
  --background-base: #ffffff;
  --background-base-opacity: rgba(255, 255, 255, 0.85);
  --background-down-opacity: rgba(255, 255, 255, 0.3);
  --scrollbar-base-opacity: rgba(0, 0, 0, 0.5);
  --background-code-base: #f9f2f4;
  --color-base: #000000;
  --color-down: #70757a;
  --color-code-base: #9a354a;
  --primary-brand-base: #f6a54c;
  --secondary-brand-base: #614cf6;
  --primary-brand-background-base: #504646;
  --border-base: #d6d6d6;
  --group-base: #f4f4f4;
  --danger: #e03434;
  --black: #000000;
  --white: #ffffff;

  background-color: var(--background-base);
  color: var(--color-base);
}

[data-theme='dark'] {
  --background-base: #000000;
  --background-base-opacity: rgba(0, 0, 0, 0.85);
  --background-down-opacity: rgba(0, 0, 0, 0.3);
  --scrollbar-base-opacity: rgba(255, 255, 255, 0.5);
  --background-code-base: #3c3636;
  --color-base: #ffffff;
  --color-down: #ababab;
  --color-code-base: #ffb3c2;
  --secondary-brand-base: #6e59ff;
  --border-base: #d6d6d6;
  --group-base: #242526;

  background-color: var(--background-base);
  color: var(--color-base);
}

@media (hover: hover) and (pointer: fine) { /*notTouchDevice*/
  body{
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-base-opacity);
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0);
    }
  }
}
`;