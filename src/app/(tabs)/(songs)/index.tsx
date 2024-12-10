
import { TrackList } from '@/components/TrackList'
import { screenPadding } from '@/constants/tokens'

import { defaultStyles } from '@/styles'
import { useMemo } from 'react'
import { ScrollView, View , Text } from 'react-native'

const SongsScreen = () => {





	return (
		<View style={defaultStyles.container}>
			<ScrollView>
				<TrackList/>
			
			</ScrollView>
		</View>
	)
}

export default SongsScreen