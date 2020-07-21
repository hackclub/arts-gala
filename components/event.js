import { Card, Box, Text, Flex, Avatar, Heading } from 'theme-ui'
import tt from 'tinytime'

const past = (dt) => new Date(dt) < new Date()

const Event = ({ id, slug, title, desc, leader, avatar, start, end, cal }) => (
  <Box
    as="a"
    href={`https://events.hackclub.com/${slug}`}
    variant="cards.interactive"
    sx={{
      textDecoration: 'none',
      borderColor: 'fuschia',
      display: 'flex',
      flexDirection: 'column',
      p: [3, 3]
    }}
  >
    <Text as="p" variant="caption">
      <strong>{tt('{dddd} ({Do})').render(new Date(start))}</strong>{' '}
      {tt('{h}').render(new Date(start))}–{tt('{h} {a}').render(new Date(end))}
    </Text>
    <Heading variant="subheadline" sx={{ mt: 1, mb: 'auto' }}>
      {title}
    </Heading>
    <Text variant="caption" sx={{ variant: 'styles.a', pt: 1, fontSize: 0 }}>
      Details
    </Text>
  </Box>
)

export default Event
