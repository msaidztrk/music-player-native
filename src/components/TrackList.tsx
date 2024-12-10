import { FlatList, FlatListProps } from "react-native"
import library from '@/assets/data/library.json'  // Assuming library is an array of track objects
import { TrackListItem } from "./TrackListItem"

export type TrackListProps = Partial<FlatListProps<unknown>>

export const TrackList = ({...TrackListProps} : TrackListProps) => {
  return (
    <FlatList
      data={library}  // Use the library array directly
      keyExtractor={(item, index) => item.url || index.toString()}  // Assuming each track has a unique `url`
      renderItem={({ item: track }) => (
        <TrackListItem
          track={{
            ...track,  // Spread the properties from the track object
            image: track.artwork,  // Map artwork to image (if artwork exists)
          }}
        />
      )}
    />
  )
}
