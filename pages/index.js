import {
  Container,
  Card,
  Heading,
  Text,
  Flex,
  Grid,
  Avatar,
  Box
} from 'theme-ui'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import Categories from '../components/categories.mdx'
import Event from '../components/event'
import Flag from '../components/flag'
import Posts from '../components/posts'

export default ({ events = [], scraps = [] }) => (
  <>
    <Meta
      as={Head}
      name="Hack Club Events"
      title="Fine Arts Gala"
      description="A weeklong celebration of artists in the Hack Club Slack. July 20–27, 2020."
      image="https://cloud-bw5p4o2o8.vercel.app/2020-07-20_bke7618b4raj3cavaywfcv5hreq2e5z9.jpeg"
    />
    <Flag />
    <Container
      sx={{
        py: [4, null, 5],
        textAlign: 'center',
        color: 'black'
      }}
    >
      <Text as="p" variant="eyebrow" mt={[3, 4]}>
        Hack&nbsp;Club
      </Text>
      <Heading
        as="h1"
        variant="title"
        sx={{ fontSize: [5, 6, 7], px: 2, mb: [3, 4] }}
      >
        Fine Arts Gala
      </Heading>
      <Text as="p" variant="subtitle" sx={{ variant: 'layout.narrow' }}>
        A weeklong celebration of remarkable artists in the esteemed Orpheus
        tradition.
      </Text>
      <Text as="p" sx={{ variant: 'layout.narrow', color: 'muted', mt: 3 }}>
        July 20–27, 2020
      </Text>
      <Card
        sx={{
          maxWidth: 'fit-content',
          color: 'fuschia',
          borderRadius: 'circle',
          borderColor: 'currentColor',
          fontWeight: 'bold',
          fontSize: 2,
          py: [2, 3],
          px: [3, 4],
          mx: 'auto',
          mt: [3, 4],
          strong: { color: 'primary' }
        }}
      >
        Join <strong>#art</strong> on Slack to&nbsp;participate
      </Card>
    </Container>
    <Container
      as="section"
      sx={{
        pb: [4, 5],
        ul: {
          display: 'grid',
          gridGap: 3,
          pl: 0,
          listStyle: 'none',
          gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
          textAlign: 'center'
        },
        li: { variant: 'cards.primary' }
      }}
    >
      <Heading as="h2" variant="headline">
        5 categories, unlimited possibilities.
      </Heading>
      <Categories />
    </Container>
    <Container as="section" sx={{ pb: [4, 5] }}>
      <Heading as="h2" variant="headline">
        4 events across the week.
      </Heading>
      <Grid columns={[2, 3, 4]} gap={3}>
        {events.map((event) => (
          <Event {...event} key={event.id} />
        ))}
      </Grid>
    </Container>
    <Grid
      as="section"
      variant="layout.container"
      columns={[null, 3]}
      gap={3}
      sx={{
        pb: [4, 5],
        img: { mr: 3 },
        div: { placeItems: 'center', fontSize: 2 }
      }}
    >
      <Heading as="h2" variant="headline">
        Judged by the finest critics.
      </Heading>
      <Flex>
        <Avatar
          src="https://windyhacks-2020-1o2intz8b.now.sh/static/amogh-414e656c4de10e3454b026840c67e287.jpg"
          alt="amogh"
          size={72}
        />
        <Text>Amogh Chaubey</Text>
      </Flex>
      <Flex sx={{ placeItems: 'center' }}>
        <Avatar
          src="https://hackclub.com/team/chris.jpg"
          alt="chris"
          size={72}
        />
        <Text>Chris Walker</Text>
      </Flex>
    </Grid>
    <Container>
      <Heading as="h2" variant="headline">
        A few recent submissions…
      </Heading>
    </Container>
    <Posts data={scraps} />
  </>
)

export const getStaticProps = async () => {
  let scraps = []
  const { take, filter, shuffle, orderBy, map } = require('lodash')
  let posts = await fetch('https://scrapbook.hackclub.com/api/r/art')
    .then((r) => r.json())
    .then((posts) => orderBy(posts, 'postedAt', 'desc'))
    .then((posts) =>
      filter(posts, (p) =>
        ['image/jpg', 'image/jpeg', 'image/png'].includes(
          p.attachments?.[0]?.type
        )
      )
    )
  scraps = take(posts, 16)
  let events = require('../components/events.json')
  const eventIds = map(events, 'id')
  // Gracefully update events from API if possible
  await fetch('https://events.hackclub.com/api/events/all')
    .then((r) => r.json())
    .then((events) => filter(events, (e) => eventIds.includes(e.id)))
    .then((e) => {
      if (e.length > 2) events = e
    })
  return { props: { events, scraps }, unstable_revalidate: 8 }
}
