
import { TrackList } from '@/components/TrackList'
import { TrackListItem } from '@/components/TrackListItem'
import { screenPadding } from '@/constants/tokens'

import { defaultStyles } from '@/styles'
import { useMemo } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, FlatList } from 'react-native'


const SongsScreen = () => {





	return (

		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<Text style={styles.headerText}>Songs</Text>
				<TrackList
					scrollEnabled={false}
				/>
			</ScrollView>
		</View>




	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: screenPadding.horizontal,  // Adjust padding as needed
	},
	header: {
		paddingTop: 10,  // Space between header and top of the screen
		paddingBottom: 20, // Space between header and content
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white'
	},
	flatList: {
		marginTop: 20,  // Optional: Add top margin if necessary
	},
})

export default SongsScreen