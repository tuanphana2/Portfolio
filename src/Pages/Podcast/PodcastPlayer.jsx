import { Play, Pause, SkipForward, SkipBack, RotateCw, RotateCcw, Volume2, VolumeX, X, } from 'lucide-react';
import React from 'react';
import './podcastPlayer.scss';

const PodcastPlayer = ({ selectedEpisode, onClose, onNext, onPrev }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [volume, setVolume] = React.useState(1);
  const [showVolume, setShowVolume] = React.useState(false);

  const audioRef = React.useRef(null);

  React.useEffect(() => {
    if (selectedEpisode) {
      audioRef.current.src = selectedEpisode.audioUrl;
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentTime(0);
    }
  }, [selectedEpisode]);

  React.useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 1);
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    audioRef.current.volume = vol;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const seek = (seconds) => {
    audioRef.current.currentTime += seconds;
  };

  return (
    <div className="podcastPlayer">
      <button onClick={onClose} className="closeBtn">
        <X />
      </button>

      <img src={selectedEpisode.image} alt={selectedEpisode.title} className="cover" />

      <div className="trackDetails">
        <h3>{selectedEpisode.title}</h3>

        <div className="playerButtons">
          <button onClick={() => seek(-15)}>
            <RotateCcw />
          </button>
          <button onClick={onPrev}>
            <SkipBack />
          </button>
          <button onClick={() => setIsPlaying(!isPlaying)} className="playPause">
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button onClick={onNext}>
            <SkipForward />
          </button>
          <button onClick={() => seek(15)}>
            <RotateCw />
          </button>
        </div>

        <div className="controlsContainer">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => (audioRef.current.currentTime = parseFloat(e.target.value))}
            className="seekBar"
          />

          <div className="timeDisplay">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          <div
            className="volumeWrapper"
            onMouseEnter={() => setShowVolume(true)}
            onMouseLeave={() => setShowVolume(false)}
          >
            <button className="volumeBtn">{volume === 0 ? <VolumeX /> : <Volume2 />}</button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className={`verticalVolume ${showVolume ? 'visible' : ''}`}
            />
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(audioRef.current.duration || 0)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={selectedEpisode?.audioUrl} type="audio/mp3" />
        <track src="/captions/episode1.vtt" kind="captions" srcLang="en" label="English" />
      </audio>
    </div>
  );
};

export default PodcastPlayer;
