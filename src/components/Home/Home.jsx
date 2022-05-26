import {
  Badge,
  Card,
  Center,
  Code,
  Group,
  Image,
  Paper,
  RingProgress,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core';
import {
  BsBattery,
  BsBatteryCharging,
  BsBatteryFull,
  BsBatteryHalf,
  BsLightbulbFill,
  BsLightbulbOffFill,
} from 'react-icons/bs';
import { BiHeadphone } from 'react-icons/bi';
import { useHeadsetStore } from '../../stores/useHeadsetStore';
import { IoNotifications, IoNotificationsOff } from 'react-icons/io5';

export const Home = () => {
  const headsetExists = useHeadsetStore((state) => state.headsetExists);
  const headsetName = useHeadsetStore((state) => state.headsetName);
  const batteryPercentage = useHeadsetStore((state) => state.battery);
  const sidetoneVolume = useHeadsetStore((state) => state.sidetoneVolume);
  const soundNotifications = useHeadsetStore(
    (state) => state.soundNotifications
  );
  const rGB = useHeadsetStore((state) => state.rGB);

  return (
    <>
      {headsetExists ? (
        <>
          <Stack align={'center'} justify={'center'}>
            <Code color={'blue'} style={{ marginTop: '1rem' }}>
              {headsetName}
            </Code>
            <Card>
              <Card.Section>
                <Image
                  src={
                    'https://www.corsair.com/corsairmedia/sys_master/productcontent/CA-9011152-NA-Void_Pro_Wireless_Carbon_01.png'
                  }
                  height={150}
                  width={150}
                  style={{ padding: '2rem' }}
                />
              </Card.Section>
              <Group position="apart">
                <Text weight={500}>Corsair Void Pro Elite</Text>
                <Badge color="green" variant="light">
                  Online
                </Badge>
              </Group>
            </Card>
          </Stack>

          <SimpleGrid
            cols={2}
            style={{ marginTop: '3rem' }}
            breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
          >
            <Paper withBorder radius="md" p="xs">
              <Group>
                <RingProgress
                  size={80}
                  roundCaps
                  thickness={8}
                  sections={
                    batteryPercentage < 0
                      ? [{ value: 100, color: 'green' }]
                      : batteryPercentage < 30
                      ? [{ value: batteryPercentage, color: 'red' }]
                      : batteryPercentage < 70
                      ? [{ value: batteryPercentage, color: 'yellow' }]
                      : [{ value: batteryPercentage, color: 'green' }]
                  }
                  label={
                    <Center>
                      {batteryPercentage < 0 ? (
                        <BsBatteryCharging size={30} />
                      ) : batteryPercentage < 30 ? (
                        <BsBattery size={30} />
                      ) : batteryPercentage < 70 ? (
                        <BsBatteryHalf size={30} />
                      ) : (
                        <BsBatteryFull size={30} />
                      )}
                    </Center>
                  }
                />
                <div>
                  <Text
                    color="dimmed"
                    size="xs"
                    transform="uppercase"
                    weight={700}
                  >
                    Battery Percentage
                  </Text>
                  <Text weight={700} size="xl">
                    {batteryPercentage === -1
                      ? 'Charging'
                      : batteryPercentage + ' %'}
                  </Text>
                </div>
              </Group>
            </Paper>

            <Paper withBorder radius="md" p="xs">
              <Group>
                <RingProgress
                  size={80}
                  roundCaps
                  thickness={8}
                  sections={
                    sidetoneVolume < 30
                      ? [{ value: sidetoneVolume, color: 'red' }]
                      : sidetoneVolume < 70
                      ? [{ value: sidetoneVolume, color: 'yellow' }]
                      : [{ value: sidetoneVolume, color: 'green' }]
                  }
                  label={
                    <Center>
                      <BiHeadphone size={30} />
                    </Center>
                  }
                />
                <div>
                  <Text
                    color="dimmed"
                    size="xs"
                    transform="uppercase"
                    weight={700}
                  >
                    Sidetone Volume
                  </Text>
                  <Text weight={700} size="xl">
                    {sidetoneVolume} %
                  </Text>
                </div>
              </Group>
            </Paper>

            <Paper withBorder radius="md" p="xs">
              <Group>
                <RingProgress
                  size={80}
                  roundCaps
                  thickness={8}
                  sections={
                    rGB
                      ? [{ value: 100, color: 'green' }]
                      : [{ value: 100, color: 'red' }]
                  }
                  label={
                    <Center>
                      {rGB ? (
                        <BsLightbulbFill size={30} />
                      ) : (
                        <BsLightbulbOffFill size={30} />
                      )}
                    </Center>
                  }
                />
                <div>
                  <Text
                    color="dimmed"
                    size="xs"
                    transform="uppercase"
                    weight={700}
                  >
                    RGB Lighting
                  </Text>
                  <Text weight={700} size="xl">
                    {rGB ? 'ON' : 'OFF'}
                  </Text>
                </div>
              </Group>
            </Paper>

            <Paper withBorder radius="md" p="xs">
              <Group>
                <RingProgress
                  size={80}
                  roundCaps
                  thickness={8}
                  sections={
                    soundNotifications
                      ? [{ value: 100, color: 'green' }]
                      : [{ value: 100, color: 'red' }]
                  }
                  label={
                    <Center>
                      {soundNotifications ? (
                        <IoNotifications size={30} />
                      ) : (
                        <IoNotificationsOff size={30} />
                      )}
                    </Center>
                  }
                />
                <div>
                  <Text
                    color="dimmed"
                    size="xs"
                    transform="uppercase"
                    weight={700}
                  >
                    Sound Notifications
                  </Text>
                  <Text weight={700} size="xl">
                    {soundNotifications ? 'ON' : 'OFF'}
                  </Text>
                </div>
              </Group>
            </Paper>
          </SimpleGrid>
        </>
      ) : (
        <>
          <SimpleGrid cols={1}>
            <Center>
              <Code color={'blue'}>Finding compatible headsets...</Code>
            </Center>
          </SimpleGrid>
          <SimpleGrid style={{ marginTop: '1rem' }}>
            <Skeleton style={{ height: '80vh' }}>
              <Text>Test</Text>
            </Skeleton>
          </SimpleGrid>
        </>
      )}
    </>
  );
};
