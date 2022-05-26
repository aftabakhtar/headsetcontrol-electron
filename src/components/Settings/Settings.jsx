import {
  Badge,
  createStyles,
  Group,
  Paper,
  Progress,
  SimpleGrid,
  Skeleton,
  Slider,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { BsBatteryHalf } from 'react-icons/bs';
import { useHeadsetStore } from '../../stores/useHeadsetStore';
import { BiHeadphone } from 'react-icons/bi';
import { setHeadsetSidetoneVolume } from '../../utils/headset-controls';

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: 'absolute',
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

export const Settings = () => {
  const { classes } = useStyles();
  const headsetExists = useHeadsetStore((state) => state.headsetExists);
  const battery = useHeadsetStore((state) => state.battery);
  const sidetoneVolume = useHeadsetStore((state) => state.sidetoneVolume);
  const setSidetoneVolume = useHeadsetStore((state) => state.setSidetoneVolume);

  const adjustSidetoneVolume = (sidetoneVolume) => {
    setHeadsetSidetoneVolume(sidetoneVolume);
  };

  return (
    <>
      {headsetExists ? (
        <>
          <Paper
            radius="md"
            withBorder
            className={classes.card}
            mt={ICON_SIZE / 3}
          >
            <ThemeIcon
              className={classes.icon}
              size={ICON_SIZE}
              radius={ICON_SIZE}
            >
              <BsBatteryHalf size={34} />
            </ThemeIcon>

            <Text align="center" weight={700} className={classes.title}>
              Battery Remaining
            </Text>
            {/*<Text color="dimmed" align="center" size="sm">*/}
            {/*  {battery === -1 ? 'Charging' : 'Discharging'}*/}
            {/*</Text>*/}

            <Group position="apart" mt="xs">
              <Text size="sm" color="dimmed">
                Progress
              </Text>
              <Text size="sm" color="dimmed">
                {battery} %
              </Text>
            </Group>

            <Progress value={battery} mt={5} />

            <Group position="apart" mt="md">
              <Text size="sm"></Text>
              <Badge size="sm">
                {battery === -1 ? 'Charging' : 'Discharging'}
              </Badge>
            </Group>
          </Paper>

          <Paper
            radius="md"
            withBorder
            className={classes.card}
            mt={ICON_SIZE / 3}
          >
            <ThemeIcon
              className={classes.icon}
              size={ICON_SIZE}
              radius={ICON_SIZE}
            >
              <BiHeadphone size={34} />
            </ThemeIcon>

            <Text align="center" weight={700} className={classes.title}>
              Sidetone Volume
            </Text>
            {/*<Text color="dimmed" align="center" size="sm">*/}
            {/*  Adjust slider*/}
            {/*</Text>*/}

            <Group position="apart" mt="xs">
              <Text size="sm" color="dimmed">
                Progress
              </Text>
              <Text size="sm" color="dimmed">
                {sidetoneVolume}
              </Text>
            </Group>

            <Slider
              marks={[
                { value: 0, label: '0%' },
                { value: 20, label: '20%' },
                { value: 50, label: '50%' },
                { value: 80, label: '80%' },
                { value: 100, label: '100%' },
              ]}
              defaultValue={sidetoneVolume}
              onChange={setSidetoneVolume}
              onChangeEnd={adjustSidetoneVolume}
            />

            <Group position="apart" mt="md" style={{ marginTop: '2rem' }}>
              <Text size="sm"></Text>
              <Badge size="sm">
                {sidetoneVolume < 30
                  ? 'Too Low'
                  : sidetoneVolume < 50
                  ? 'Low'
                  : sidetoneVolume < 70
                  ? 'Okay'
                  : sidetoneVolume < 85
                  ? 'Loud'
                  : 'Very Loud'}
              </Badge>
            </Group>
          </Paper>
        </>
      ) : (
        <SimpleGrid style={{ marginTop: '1rem' }}>
          <Skeleton style={{ height: '90vh' }}>
            <Text>Test</Text>
          </Skeleton>
        </SimpleGrid>
      )}
    </>
  );
};
