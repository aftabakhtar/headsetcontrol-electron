import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useHeadsetStore = create(
  persist(
    (set, get) => ({
      headsetName: null,
      headsetExists: false,
      rGB: false,
      sidetoneVolume: 0,
      battery: 0,
      soundNotifications: false,

      setHeadsetName: (headsetName) => set({ headsetName: headsetName }),

      setHeadsetExits: (headsetExists) => set({ headsetExists: headsetExists }),

      setHeadsetRGB: (rGB) => set({ rGB: rGB }),

      setSidetoneVolume: (sidetoneVolume) =>
        set({ sidetoneVolume: sidetoneVolume }),

      setBattery: (battery) => set({ battery: battery }),

      setSoundNotifications: (soundNotifications) =>
        set({ soundNotifications: soundNotifications }),
    }),
    { name: 'headset-information' }
  )
);
