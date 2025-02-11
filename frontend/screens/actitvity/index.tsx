import { SafeAreaView } from 'react-native'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'

export default () => {
  return (
    <SafeAreaView>
      <HStack className="justify-between">
        <Text>Activity</Text>
      </HStack>
    </SafeAreaView>
  )
}
