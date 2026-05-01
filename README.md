# Luma — Expo Starter Template

A production-ready Expo starter for kicking off new React Native projects. Comes pre-configured with NativeWind, animations, fonts, storage, notifications, and a bottom sheet — so you skip the setup and go straight to building.

## Stack

| | Version |
|---|---|
| Expo SDK | 54 |
| React Native | 0.81.5 |
| Expo Router | 6 (file-based routing) |
| NativeWind | 4 (Tailwind CSS for RN) |
| React Native Reanimated | 4 |
| New Architecture | Enabled |

## Pre-installed Dependencies

| Package | Version | Purpose |
|---|---|---|
| `nativewind` + `tailwindcss` | 4 + 3 | Tailwind `className` on RN components |
| `react-native-reanimated` | ~4.1.1 | Animations |
| `react-native-gesture-handler` | ~2.28.0 | Gesture recognition (required by bottom-sheet) |
| `@gorhom/bottom-sheet` | 5.2.13 | Bottom sheet modal |
| `@react-native-async-storage/async-storage` | 2.2.0 | Persistent key-value storage |
| `expo-blur` | ~15.0.8 | Blur views |
| `expo-haptics` | ~15.0.8 | Haptic feedback |
| `expo-notifications` | ~0.32.17 | Local & push notifications |
| `expo-font` | ~14.0.11 | Custom font loading |
| `@expo-google-fonts/inter` | ^0.4.2 | Inter font (Regular, SemiBold, Bold) |
| `lottie-react-native` | ~7.3.1 | Lottie animations |
| `@react-native-community/datetimepicker` | 8.4.4 | Native date/time picker |

## Project Structure

```
├── src/
│   ├── app/                  # Expo Router screens
│   │   ├── _layout.tsx       # Root layout (fonts, gesture handler, bottom sheet provider)
│   │   └── (tabs)/
│   │       ├── _layout.tsx   # Tab bar config
│   │       ├── index.tsx     # Tab 1 — live demo of all dependencies
│   │       └── two.tsx       # Tab 2
│   ├── assets/
│   │   └── animations/       # Lottie JSON files
│   └── constants/
│       └── Colors.ts
├── global.css                # Tailwind directives entry point
├── tailwind.config.js
├── metro.config.js
└── babel.config.js
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start Metro (always reset cache after dependency changes)
pnpm start --reset-cache

# Run on iOS
pnpm ios

# Run on Android
pnpm android
```

## Key Setup Notes

- **NativeWind** — `className` works on all RN components via the Babel plugin in `babel.config.js`. No `cssInterop` calls needed.
- **Bottom sheet** — `BottomSheetModalProvider` wraps the root in `_layout.tsx`. Use `BottomSheetModal` + `useRef` in screens.
- **Fonts** — loaded in `_layout.tsx` via `useFonts`. Use `style={{ fontFamily: 'Inter_700Bold' }}` in any screen.
- **Notifications** — permission must be requested at runtime. iOS requires a physical device to receive notifications.
- **Haptics** — works on physical devices only, silently no-ops on simulator.

## Live Demo

Tab 1 (`src/app/(tabs)/index.tsx`) exercises every installed dependency:

- AsyncStorage read/write
- BlurView
- Haptic feedback button
- Local notification trigger
- Lottie animation
- Native date picker
- Bottom sheet modal
