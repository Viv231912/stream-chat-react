import { BaseSyntheticEvent, useState } from 'react';

import { getParticipantOrder } from './data';

import {
  BackArrow,
  ConnectionStatus,
  Listening,
  Muted,
  ParticipantsIcon,
  Speaking,
  VideoViewersIcon,
} from '../../assets';
import { useVideoContext } from '../../contexts/VideoContext';

type Props = {
  handleBackArrow: (event: BaseSyntheticEvent) => void;
};

export const RoomVideo: React.FC<Props> = ({ handleBackArrow }) => {
  const [isPinned, setIsPinned] = useState(false);
  const [pinnedID, setPinnedID] = useState(null);

  const { eventNumber, label, presenters, title, viewers } = useVideoContext();

  const handleClick = (event: BaseSyntheticEvent) => {
    if (!isPinned) {
      setIsPinned(true);
      setPinnedID(event.target.id);
    }

    if (isPinned && event.target.id === pinnedID) {
      setIsPinned(false);
      setPinnedID(null);
    }

    if (isPinned && pinnedID !== event.target.id) {
      setPinnedID(event.target.id);
    }
  };

  const participantOrder = getParticipantOrder(eventNumber);

  return (
    <div className='room-video-container'>
      <div className='room-video-header'>
        <div className='room-video-header-title'>
          <div className='room-video-header-title-arrow' onClick={handleBackArrow}>
            <BackArrow />
          </div>
          <div className='room-video-header-title-title'>{title}</div>
          <div className='room-video-header-title-dot'></div>
          <div className='room-video-header-title-recording'>Recording</div>
        </div>
        <div className='room-video-header-title-right'>
          <ParticipantsIcon />
          <div>{presenters}</div>
          <VideoViewersIcon />
          <div>{viewers}</div>
          <div className={`event-card-label ${label?.toLowerCase()}`}>{label}</div>
        </div>
      </div>
      <div className={`room-video-grid ${isPinned ? 'isPinned' : ''}`}>
        <div
          className={`room-video-grid-participant ${pinnedID === '1' ? 'pinned' : ''}`}
          id='1'
          style={{
            backgroundImage: `url(${participantOrder[0].image})`,
            backgroundSize: 'contain',
          }}
          onClick={handleClick}
        >
          <div className='room-video-grid-participant-info'>
            <div className='room-video-grid-participant-info-name'>{participantOrder[0].name}</div>
            <Speaking />
          </div>
          <div className='room-video-grid-participant-connection'>
            <ConnectionStatus />
          </div>
        </div>
        <div
          className={`room-video-grid-participant ${pinnedID === '2' ? 'pinned' : ''}`}
          id='2'
          onClick={handleClick}
          style={{
            backgroundImage: `url(${participantOrder[1].image})`,
            backgroundSize: 'contain',
          }}
        >
          <div className='room-video-grid-participant-info'>
            <div className='room-video-grid-participant-info-name'>{participantOrder[1].name}</div>
            <Listening />
          </div>
          <div className='room-video-grid-participant-connection'>
            <ConnectionStatus />
          </div>
        </div>
        <div
          className={`room-video-grid-participant ${pinnedID === '3' ? 'pinned' : ''}`}
          id='3'
          onClick={handleClick}
          style={{
            backgroundImage: `url(${participantOrder[2].image})`,
            backgroundSize: 'contain',
          }}
        >
          <div className='room-video-grid-participant-info'>
            <div className='room-video-grid-participant-info-name'>{participantOrder[2].name}</div>
            <Muted />
          </div>
          <div className='room-video-grid-participant-connection'>
            <ConnectionStatus />
          </div>
        </div>
        <div
          className={`room-video-grid-participant ${pinnedID === '4' ? 'pinned' : ''}`}
          id='4'
          onClick={handleClick}
          style={{
            backgroundImage: `url(${participantOrder[3].image})`,
            backgroundSize: 'contain',
          }}
        >
          <div className='room-video-grid-participant-info'>
            <div className='room-video-grid-participant-info-name'>{participantOrder[3].name}</div>
            <Muted />
          </div>
          <div className='room-video-grid-participant-connection'>
            <ConnectionStatus />
          </div>
        </div>
        <div
          className={`room-video-grid-participant ${pinnedID === '5' ? 'pinned' : ''}`}
          id='5'
          onClick={handleClick}
          style={{
            backgroundImage: `url(${participantOrder[4].image})`,
            backgroundSize: 'contain',
          }}
        >
          <div className='room-video-grid-participant-info'>
            <div className='room-video-grid-participant-info-name'>{participantOrder[4].name}</div>
            <Muted />
          </div>
          <div className='room-video-grid-participant-connection'>
            <ConnectionStatus />
          </div>
        </div>
        <div
          className={`room-video-grid-participant ${pinnedID === '6' ? 'pinned' : ''}`}
          id='6'
          onClick={handleClick}
          style={{
            backgroundImage: `url(${participantOrder[5].image})`,
            backgroundSize: 'contain',
          }}
        >
          <div className='room-video-grid-participant-info'>
            <div className='room-video-grid-participant-info-name'>{participantOrder[5].name}</div>
            <Muted />
          </div>
          <div className='room-video-grid-participant-connection'>
            <ConnectionStatus />
          </div>
        </div>
      </div>
    </div>
  );
};
