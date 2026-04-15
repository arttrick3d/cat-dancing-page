import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

const NOTES = ['♪', '♫', '🎵', '🎶', '♩'];

const notePositions = [
  { left: '-40px', top: '10px',  delay: '0s',    color: '#e94560' },
  { left: '110%',  top: '20px',  delay: '0.4s',  color: '#f5a623' },
  { left: '-30px', top: '60px',  delay: '0.8s',  color: '#a8edea' },
  { left: '105%',  top: '70px',  delay: '1.2s',  color: '#fed6e3' },
  { left: '40%',   top: '-20px', delay: '0.6s',  color: '#f5a623' },
];

export default function DancingCat({ isPlaying, danceClass }) {
  return (
    <div className="cat-container">
      {/* floating music notes */}
      {isPlaying && notePositions.map((pos, i) => (
        <span
          key={i}
          className="note"
          style={{
            left: pos.left,
            top: pos.top,
            animationDelay: pos.delay,
            color: pos.color,
          }}
        >
          {NOTES[i]}
        </span>
      ))}

      {/* glow ring behind cat */}
      <div className={`cat-glow-wrap ${isPlaying ? 'glow-ring' : ''}`}>
        <img
          src={catSvg}
          alt="춤추는 고양이"
          className={`cat-img ${isPlaying ? danceClass : ''}`}
          draggable={false}
        />
      </div>

      {/* shadow */}
      <div className={`cat-shadow ${isPlaying ? 'dancing' : ''}`} />
    </div>
  );
}
