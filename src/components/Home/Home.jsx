import {
  Badge,
  Card,
  Center,
  Code,
  Grid,
  Group,
  Image,
  Paper,
  RingProgress,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core';
import { useState } from 'react';
import { setHeadsetStatus } from '../../utils/headset-controls';
import { BsBatteryHalf, BsFillLightbulbFill } from 'react-icons/bs';
import { BiHeadphone } from 'react-icons/bi';
import { GiBattery50 } from 'react-icons/gi';
import { useInterval } from '../../hooks/hooks';
import { AiFillNotification } from 'react-icons/ai';

export const Home = () => {
  useInterval(() => {
    setHeadsetStatus(setHeadsetName);
  }, 1000);
  const [headsetName, setHeadsetName] = useState(null);

  console.log(headsetName);

  return (
    <>
      {headsetName ? (
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

          <Grid align={'center'} justify={'center'}>
            <Grid.Col span={6} style={{ marginTop: '2rem' }}>
              <Center>
                <GiBattery50 size={50} />
                <Text size={'lg'} style={{ marginLeft: '0.25rem' }}>
                  30 %
                </Text>
              </Center>
            </Grid.Col>

            <Grid.Col span={6} style={{ marginTop: '2rem' }}>
              <Center>
                <BiHeadphone size={50} />
                <Text size={'lg'} style={{ marginLeft: '0.75rem' }}>
                  30 %
                </Text>
              </Center>
            </Grid.Col>

            <Grid.Col span={6} style={{ marginTop: '5rem' }}>
              <Center>
                <AiFillNotification size={50} />
                <Text size={'lg'} style={{ marginLeft: '0.65rem' }}>
                  ON
                </Text>
              </Center>
            </Grid.Col>

            <Grid.Col span={6} style={{ marginTop: '5rem' }}>
              <Center>
                <BsFillLightbulbFill size={50} />
                <Text size={'lg'} style={{ marginLeft: '0.75rem' }}>
                  ON
                </Text>
              </Center>
            </Grid.Col>
          </Grid>
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <Paper withBorder radius="md" p="xs" key={'stat.label'}>
              <Group>
                <RingProgress
                  size={80}
                  roundCaps
                  thickness={8}
                  sections={[{ value: 22, color: 'red' }]}
                  label={
                    <Center>
                      <BsBatteryHalf size={30} />
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
                    {'test'}
                  </Text>
                  <Text weight={700} size="xl">
                    {'hello'}
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
