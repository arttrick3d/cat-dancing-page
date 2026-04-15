import './Layout.css';

const STARS = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  top:   `${Math.random() * 95}%`,
  left:  `${Math.random() * 95}%`,
  size:  `${Math.random() * 4 + 2}px`,
  delay: `${Math.random() * 4}s`,
  dur:   `${Math.random() * 2 + 1.5}s`,
}));

export default function Layout({ children }) {
  return (
    <div className="layout">
      {/* Background stars */}
      <div className="stars" aria-hidden="true">
        {STARS.map(s => (
          <span
            key={s.id}
            className="star"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: s.dur,
            }}
          />
        ))}
      </div>

      <header className="site-header">
        <h1 className="site-title">
          <span aria-hidden="true">🐱</span> 댄싱 캣
        </h1>
        <p className="site-subtitle">신나게 춤추는 고양이를 만나보세요!</p>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <p>Made with <span aria-label="love">❤️</span> &amp; React</p>
      </footer>
    </div>
  );
}
