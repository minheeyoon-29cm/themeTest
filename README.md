# ThemeTest

## 🌙 다크모드 테스트 + 인터랙션 실험 환경

### 구조

```
themeTest/
├── index.html # 테스트용 페이지
├── scripts/script.js # 다크모드 전환 스크립트
└── styles/
├── semantic.css # 토큰: 텍스트, 컬러, 스페이싱 등 의미 기반
├── theme.css # 라이트/다크 모드 토큰 정의
├── styles.css # 기본 스타일 + 컴포넌트 UI
└── interaction-enhanced.css # 인터랙션 전용 테스트용 스타일

```


### 인터랙션 테스트 항목

- `hover` → scale(1.02), opacity(0.95)
- `pressed(active)` → scale(0.96), opacity(0.8)
- `focus-visible` → outline 강조 + scale(1.01)
- `svg like icon` → hover/active 상태 애니메이션

