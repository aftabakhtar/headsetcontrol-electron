import {
  Badge,
  createStyles,
  Group,
  Paper,
  Progress,
  SimpleGrid,
  Skeleton,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { BsBatteryHalf } from 'react-icons/bs';
import { useHeadsetStore } from '../../stores/useHeadsetStore';

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
              Swimming challenge
            </Text>
            <Text color="dimmed" align="center" size="sm">
              32 km / week
            </Text>

            <Group position="apart" mt="xs">
              <Text size="sm" color="dimmed">
                Progress
              </Text>
              <Text size="sm" color="dimmed">
                62%
              </Text>
            </Group>

            <Progress value={62} mt={5} />

            <Group position="apart" mt="md">
              <Text size="sm">20 / 36 km</Text>
              <Badge size="sm">4 days left</Badge>
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
              <BsBatteryHalf size={34} />
            </ThemeIcon>

            <Text align="center" weight={700} className={classes.title}>
              Swimming challenge
            </Text>
            <Text color="dimmed" align="center" size="sm">
              32 km / week
            </Text>

            <Group position="apart" mt="xs">
              <Text size="sm" color="dimmed">
                Progress
              </Text>
              <Text size="sm" color="dimmed">
                62%
              </Text>
            </Group>

            <Progress value={62} mt={5} />

            <Group position="apart" mt="md">
              <Text size="sm">20 / 36 km</Text>
              <Badge size="sm">4 days left</Badge>
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
