# Convo

Convo is a mobile language-learning app built with Expo and React Native. It helps users practice speaking, listening, vocabulary, and real-world conversations through guided lessons and interactive roleplay scenarios.

## What this app does

- Daily language lessons with progress tracking
- Speaking and listening practice activities
- Conversation topics and custom scenario generation
- Premium trial and subscription flow
- Supabase-backed authentication and profile management

## Tech stack

- Expo + React Native
- Expo Router for navigation
- TypeScript
- Supabase for auth and backend functions
- Expo AV / Expo Speech for audio and pronunciation features

## Project structure

- app/ - screens and routes
- components/ - reusable UI and lesson components
- constants/ - course content and theme settings
- lib/ - progress and scenario helpers
- supabase/functions/ - backend edge functions
- utils/ - shared utilities

## Getting started

1. Install dependencies

   ```bash
   npm install
   ```

2. Create your environment variables for Supabase

   ```bash
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_KEY=your_supabase_anon_key
   ```

3. Start the app

   ```bash
   npm start
   ```

   You can also run:
   - `npm run android`
   - `npm run ios`
   - `npm run web`

## Useful scripts

- `npm start` - start Expo
- `npm run android` - run on Android
- `npm run ios` - run on iOS
- `npm run web` - run in the browser
- `npm run lint` - lint the project

## Notes

This project uses Expo’s new architecture and includes microphone access for pronunciation practice. If you plan to use the custom conversation generation or premium features, make sure your Supabase project and edge functions are configured correctly.
