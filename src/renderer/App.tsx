import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout/AppLayout';
import { Home } from '../components/Home/Home';
import { MantineProvider } from '@mantine/core';
import { useThemeStore } from '../stores/useThemeStore';
import { Settings } from '../components/Settings/Settings';
import { useInterval } from '../hooks/hooks';
import { setBattery, setHeadsetStatus } from '../utils/headset-controls';
import { useHeadsetStore } from '../stores/useHeadsetStore';

export default function App() {
  useInterval(() => {
    setHeadsetStatus(setHeadsetName, setHeadsetExists);
    setBattery(setBatteryPercentage);
  }, 1000);

  const setBatteryPercentage = useHeadsetStore((state) => state.setBattery);
  const setHeadsetName = useHeadsetStore((state) => state.setHeadsetName);
  const setHeadsetExists = useHeadsetStore((state) => state.setHeadsetExits);

  const theme = useThemeStore((state) => state.theme);

  return (
    <MantineProvider
      theme={{ colorScheme: theme }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/equalizer" element={<></>} />
          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
}
