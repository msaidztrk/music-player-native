
import { screenPadding } from '@/constants/tokens'

import { defaultStyles } from '@/styles'
import { useMemo } from 'react'
import { ScrollView, View , Text } from 'react-native'

const PlaylistsScreen = () => {





	return (
		<View style={defaultStyles.container}>
            <Text>PlaylistsScreen</Text>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
			
			</ScrollView>
		</View>
	)
}

export default PlaylistsScreen