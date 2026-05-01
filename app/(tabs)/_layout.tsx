import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Tab 1' }} />
      <Tabs.Screen name="two" options={{ title: 'Tab 2' }} />
    </Tabs>
  );
}
