import { FlatList, FlatListProps, View } from "react-native";
import library from '@/assets/data/library.json'; // Assuming library is an array of track objects
import { TrackListItem } from "./TrackListItem";
import { utilsStyles } from "@/styles";

// Define the type for a single track
interface Track {
  title: string; // Title is required for TrackListItem
  image?: string; // Optional image (mapped from artwork)
  artist?: string; // Optional artist
  artwork?: string; // Optional artwork
  url?: string; // Optional URL
  [key: string]: any; // Allow additional properties
}

export type TrackListProps = Partial<FlatListProps<Track>>;

const ItemDivider = () => (
  <View style={[utilsStyles.itemSeparator, { marginVertical: 9, marginLeft: 60 }]} />
);
export const TrackList = ({ ...TrackListProps }: TrackListProps) => {
  return (
    <FlatList
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ItemSeparatorComponent={ItemDivider}
      data={library as Track[]} // Cast the library as an array of `Track`
      keyExtractor={(item, index) => item.url || index.toString()} // Use `url` as the key or fallback to index
      renderItem={({ item: track }) => (
        <TrackListItem
          track={{
            // title: track.title || "Unknown Title", // Provide a default title
            image: track.artwork, // Map artwork to image (if artwork exists)
            artist: track.artist || "Unknown Artist", // Optional fallback for artist
            ...track, // Spread any additional properties
          }}
        />
      )}
      nestedScrollEnabled={true} // Allows nested scrolling
      {...TrackListProps} // Pass down any additional props
    />
  );
};
