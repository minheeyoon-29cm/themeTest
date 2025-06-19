# ThemeTest

## 🌙 다크모드 테스트 + 인터랙션 실험 환경

### 구조

### 인터랙션 테스트 항목

- `hover` → scale(1.02), opacity(0.95)
- `pressed(active)` → scale(0.96), opacity(0.8)
- `focus-visible` → outline 강조 + scale(1.01)
- `svg like icon` → hover/active 상태 애니메이션

```
themeTest
├─ .DS_Store
├─ README.md
├─ assets
│  └─ icon
│     ├─ .DS_Store
│     ├─ ic-category-fill.svg
│     ├─ ic-category.svg
│     ├─ ic-heart-fill.svg
│     ├─ ic-heart.svg
│     ├─ ic-home-fill.svg
│     ├─ ic-home.svg
│     ├─ ic-my-fill.svg
│     ├─ ic-my.svg
│     ├─ ic-search-fill.svg
│     └─ ic-search.svg
├─ index.html
├─ scripts
│  └─ script.js
└─ styles
   ├─ components
   │  ├─ button.css
   │  ├─ procutCard.css
   │  └─ procutHstackCard.css
   ├─ semantic.css
   ├─ styles.css
   └─ theme.css

```
