import { TrackList } from '@components/TrackList';

import { useAppSelector } from '@hooks/redux';
import { useTitle } from '@hooks/useTitle';

import { AddTrack } from '@pages/Tracks/AddTrack';
import { ShowMore } from '@pages/Tracks/ShowMore';

import { Page } from '@typings/page';

export interface TracksProps extends Page {}

export function Tracks({ title }: TracksProps) {
  useTitle(title);

  const state = useAppSelector(state => state.trackPlayer);

  return (
    <>
      <TrackList tracks={state.trackList} />
      <div className='mt-4 d-flex justify-content-center gap-3'>
        <ShowMore />
        <AddTrack />
      </div>
    </>
  );
}
