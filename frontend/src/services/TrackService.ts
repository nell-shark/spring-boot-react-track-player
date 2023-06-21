import { Track, TracksPage } from '@interfaces/track';

import { axiosInstance } from '@services/axios-instance';

export class TrackService {
  public getTracks(page: number = 1, filter?: string) {
    return axiosInstance.get<TracksPage>('/api/v1/tracks', {
      params: { page, filter }
    });
  }

  public getTrackById(id: string) {
    return axiosInstance.get<Track>(`/api/v1/tracks/${id}`);
  }

  public uploadTrack(name: string, file: File) {
    return axiosInstance.post(
      '/api/v1/tracks',
      { name, file },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
  }
}

export const trackService = new TrackService();
