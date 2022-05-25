import { AppShell } from '@mantine/core';
import { NavbarSimple } from '../NavbarSimple/NavbarSimple';

export const AppLayout = () => {
  return (
    <AppShell padding="md" navbar={<NavbarSimple />}>
      {/* Your application here */}
    </AppShell>
  );
};
