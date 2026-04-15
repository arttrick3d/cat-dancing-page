import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import './styles/global.css';
import './App.css';

export default function App() {
  const { isPlaying, togglePlay, currentMode, modes, modeIndex, selectMode } = useAnimation();

  return (
    <Layout>
      <div className="stage">
        <DancingCat
          isPlaying={isPlaying}
          danceClass={currentMode.id}
        />
      </div>

      <AnimationControls
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        modes={modes}
        modeIndex={modeIndex}
        selectMode={selectMode}
        currentMode={currentMode}
      />
    </Layout>
  );
}
