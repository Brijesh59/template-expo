import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import * as Notifications from 'expo-notifications';
import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function TabOneScreen() {
  const [stored, setStored] = useState<string | null>(null);
  const [permStatus, setPermStatus] = useState<string>('');
  const [date, setDate] = useState(new Date());
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    const test = async () => {
      await AsyncStorage.setItem('test_key', 'async-storage works!');
      const value = await AsyncStorage.getItem('test_key');
      setStored(value);
    };
    test();
  }, []);

  const testNotification = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    setPermStatus(status);
    if (status !== 'granted') return;
    await Notifications.scheduleNotificationAsync({
      content: { title: 'expo-notifications works!', body: 'Test notification' },
      trigger: null,
    });
  };

  return (
    <View className="flex-1 items-center justify-center gap-2">
      <Text style={{ fontFamily: 'Inter_700Bold' }} className="text-2xl">
        Inter Bold
      </Text>
      <Text style={{ fontFamily: 'Inter_400Regular' }} className="text-base text-gray-500">
        Inter Regular — fonts work!
      </Text>
      <Text className="text-xl">Tab 1</Text>
      <Text className="text-sm text-gray-500">{stored ?? 'reading...'}</Text>
      <BlurView intensity={60} className="mt-4 rounded-xl overflow-hidden">
        <Text className="text-base px-6 py-3">expo-blur works!</Text>
      </BlurView>
      <Pressable
        className="mt-4 bg-black px-6 py-3 rounded-xl"
        onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}
      >
        <Text className="text-white text-base">Tap for haptic</Text>
      </Pressable>
      <Pressable
        className="mt-2 bg-blue-600 px-6 py-3 rounded-xl"
        onPress={testNotification}
      >
        <Text className="text-white text-base">Test notification</Text>
      </Pressable>
      {permStatus ? (
        <Text className="text-sm text-gray-500">Permission: {permStatus}</Text>
      ) : null}
      <LottieView
        source={require('../../assets/animations/check.json')}
        autoPlay
        loop
        style={{ width: 100, height: 100 }}
      />
      <DateTimePicker
        value={date}
        mode="date"
        onChange={(_, selected) => selected && setDate(selected)}
      />
      <Pressable
        className="mt-2 bg-purple-600 px-6 py-3 rounded-xl"
        onPress={() => bottomSheetRef.current?.present()}
      >
        <Text className="text-white text-base">Open bottom sheet</Text>
      </Pressable>

      <BottomSheetModal ref={bottomSheetRef} snapPoints={['40%', '70%']} index={1}>
        <BottomSheetView className="flex-1 items-center justify-center">
          <Text style={{ fontFamily: 'Inter_600SemiBold' }} className="text-xl">
            @gorhom/bottom-sheet works!
          </Text>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
}
