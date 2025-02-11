import { SafeAreaView } from 'react-native'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <HStack className="justify-between">
        <Text>Home</Text>
        <Text>Screen</Text>
      </HStack>
    </SafeAreaView>
  )
}
