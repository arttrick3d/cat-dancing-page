import './AnimationControls.css';

export default function AnimationControls({
  isPlaying,
  togglePlay,
  modes,
  modeIndex,
  selectMode,
  currentMode,
}) {
  return (
    <div className="controls-wrapper" role="region" aria-label="애니메이션 제어">
      {/* play / pause button */}
      <button
        className={`play-btn ${isPlaying ? 'playing' : 'paused'}`}
        onClick={togglePlay}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        <span className="play-icon" aria-hidden="true">
          {isPlaying ? '⏸' : '▶'}
        </span>
        <span className="play-label">{isPlaying ? '정지' : '시작'}</span>
      </button>

      {/* mode selector */}
      <div className="mode-bar" role="group" aria-label="댄스 모드 선택">
        {modes.map((mode, idx) => (
          <button
            key={mode.id}
            className={`mode-btn ${idx === modeIndex ? 'active' : ''}`}
            onClick={() => selectMode(idx)}
            aria-pressed={idx === modeIndex}
            aria-label={`${mode.label} 모드`}
          >
            <span aria-hidden="true">{mode.emoji}</span>
            <span>{mode.label}</span>
          </button>
        ))}
      </div>

      {/* current mode label */}
      <p className="current-mode-label" aria-live="polite">
        현재 모드: <strong>{currentMode.emoji} {currentMode.label}</strong>
      </p>
    </div>
  );
}
