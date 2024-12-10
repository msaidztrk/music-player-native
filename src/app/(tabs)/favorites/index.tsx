
import { screenPadding } from '@/constants/tokens'

import { defaultStyles } from '@/styles'
import { useMemo } from 'react'
import { ScrollView, View , Text } from 'react-native'

const FavoritesScreen = () => {





	return (
		<View style={defaultStyles.container}>
            <Text>FavoritesScreen</Text>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
			
			</ScrollView>
		</View>
	)
}

export default FavoritesScreen