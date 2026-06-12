import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const memoryStorage = new Map<string, string>();

class SessionStorageAdapter {
  async getItem(key: string) {
    if (typeof window === "undefined") {
      return memoryStorage.get(key) ?? null;
    }

    return AsyncStorage.getItem(key);
  }

  async removeItem(key: string) {
    if (typeof window === "undefined") {
      memoryStorage.delete(key);
      return;
    }

    await AsyncStorage.removeItem(key);
  }

  async setItem(key: string, value: string) {
    if (typeof window === "undefined") {
      memoryStorage.set(key, value);
      return;
    }

    await AsyncStorage.setItem(key, value);
  }
}

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_KEY!,
  {
    auth: {
      storage: new SessionStorageAdapter(),
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);
