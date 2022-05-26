import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout/AppLayout';
import { Home } from '../components/Home/Home';
import { MantineProvider } from '@mantine/core';
import { useThemeStore } from '../stores/useThemeStore';
import { Settings } from '../components/Settings/Settings';

export default function App() {
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
