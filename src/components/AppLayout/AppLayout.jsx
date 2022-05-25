import { AppShell } from '@mantine/core';
import { NavbarSimple } from '../NavbarSimple/NavbarSimple';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <AppShell padding="md" navbar={<NavbarSimple />}>
      <Outlet />
    </AppShell>
  );
};
