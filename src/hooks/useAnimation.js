import { useState, useCallback } from 'react';

const DANCE_MODES = [
  { id: 'dance-bounce', label: '바운스', emoji: '🎵' },
  { id: 'dance-spin',   label: '스핀',   emoji: '🌀' },
  { id: 'dance-wiggle', label: '위글',   emoji: '🎶' },
  { id: 'dance-jump',   label: '점프',   emoji: '⭐' },
];

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [modeIndex, setModeIndex]  = useState(0);

  const togglePlay = useCallback(() => setIsPlaying(p => !p), []);

  const nextMode = useCallback(() => {
    setModeIndex(i => (i + 1) % DANCE_MODES.length);
  }, []);

  const selectMode = useCallback((idx) => {
    setModeIndex(idx);
    setIsPlaying(true);
  }, []);

  return {
    isPlaying,
    togglePlay,
    currentMode: DANCE_MODES[modeIndex],
    modeIndex,
    nextMode,
    selectMode,
    modes: DANCE_MODES,
  };
}
