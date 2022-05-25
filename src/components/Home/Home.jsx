import { Code, Container, Group, Skeleton, Text } from '@mantine/core';
import { useState } from 'react';
import { FcRefresh } from 'react-icons/fc';
import { getHeadsetName } from '../../utils/headset-controls';

export const Home = () => {
  getHeadsetName();
  const [isSkeletonVisible, setIsSkeletonVisible] = useState(true);

  return (
    <Container>
      <Group position={'center'}>
        <Code color={'blue'}>Finding compatible headsets...</Code>
        <FcRefresh />
        <Skeleton visible={isSkeletonVisible} style={{ height: '85vh' }}>
          <Text>Test</Text>
        </Skeleton>
      </Group>
    </Container>
  );
};
