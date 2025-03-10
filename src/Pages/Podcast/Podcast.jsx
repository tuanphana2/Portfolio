import { Play } from 'lucide-react';
import React from 'react';
import { ScrollRestoration } from 'react-router-dom';

import PodcastPlayer from './PodcastPlayer';
import audio1 from '../../assets/audio/Podcast351.mp3';
import audio2 from '../../assets/audio/Podcast352.mp3';
import PageHeader from '../../Components/Shared/PageHeader/PageHeader';

import './podcast.scss';

const Podcast = () => {
  const setIsPlaying = React.useState(false);
  const [selectedEpisode, setSelectedEpisode] = React.useState(null);

  const episodes = [
    {
      title: 'The Art of Mindful Living The Art of Mindful Living',
      duration: '45:30',
      date: 'March 15, 2024',
      description: 'Exploring the practice of mindfulness in daily life',
      image: 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&q=80&w=300&h=300',
      audioUrl: audio1,
    },
    {
      title: 'Building Resilience',
      duration: '38:15',
      date: 'March 8, 2024',
      description: 'Strategies for developing mental strength and adaptability',
      image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=300&h=300',
      audioUrl: audio2,
    },
  ];

  const handlePlayEpisode = (episode) => {
    setSelectedEpisode(episode);
    setIsPlaying(true);
  };

  const playPreviousEpisode = () => {
    const currentIndex = episodes.findIndex((ep) => ep === selectedEpisode);
    if (currentIndex > 0) {
      handlePlayEpisode(episodes[currentIndex - 1]);
    }
  };

  const playNextEpisode = () => {
    const currentIndex = episodes.findIndex((ep) => ep === selectedEpisode);
    if (currentIndex < episodes.length - 1) {
      handlePlayEpisode(episodes[currentIndex + 1]);
    }
  };

  return (
    <>
      <PageHeader heading="Let's Start Something" page="Let's Start Something" />
      <div className="podcastPage">
        <div className="episodesContainer">
          <h2 className="sectionTitle">Recent Episodes</h2>
          <div className="episodeList">
            {episodes.map((episode, index) => (
              <div key={index} className="episodeItem" >
                <button className="playButton" onClick={() => handlePlayEpisode(episode)}>
                  <Play />
                </button>
                <div className="episodeDetails">
                  <p className="episodeNumber">Episode {index + 1}</p>
                  <h3 className="episodeTitle">{episode.title}</h3>
                </div>
                <p className="episodeDescription">{episode.description}</p>
              </div>
            ))}
          </div>
        </div>

        {selectedEpisode && (
          <PodcastPlayer
            selectedEpisode={selectedEpisode}
            onClose={() => setSelectedEpisode(null)}
            onNext={playNextEpisode}
            onPrev={playPreviousEpisode}
          />
        )}
      </div>
      <ScrollRestoration />
    </>
  );
};

export default Podcast;
