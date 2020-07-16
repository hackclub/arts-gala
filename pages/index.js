import { Container, Heading, Text, Flex, Grid, Avatar, Box } from 'theme-ui'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import Categories from '../components/categories.mdx'
import Flag from '../components/flag'

export default () => (
  <>
    <Meta
      as={Head}
      name="Hack Club Events"
      title="Fine Arts Gala"
      description="A weeklong celebration of artists in the Hack Club Slack."
    />
    <Flag />
    <Container
      sx={{
        pt: [4, 5, null, 6],
        pb: [4, null, 5],
        textAlign: 'center',
        color: 'black'
      }}
    >
      <Heading
        as="h1"
        variant="title"
        sx={{ fontSize: [5, 6], px: 2, mb: [3, 4] }}
      >
        Hack Club Fine Arts Gala
      </Heading>
      <Text as="p" variant="subtitle" sx={{ variant: 'layout.narrow' }}>
        A weeklong celebration of remarkable artists in the esteemed Orpheus
        tradition.
      </Text>
      <Text as="p" sx={{ variant: 'layout.narrow', color: 'muted', mt: 3 }}>
        July 20–27, 2020
      </Text>
    </Container>
    <Container
      sx={{
        ul: {
          display: 'grid',
          gridGap: 3,
          pl: 0,
          mb: 4,
          listStyle: 'none',
          gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))'
        },
        li: { variant: 'cards.primary' }
      }}
    >
      <Heading as="h2" variant="headline" sx={{ textAlign: 'center' }}>
        Categories
      </Heading>
      <Categories />
      <Heading as="h2" variant="headline" sx={{ textAlign: 'center' }}>
        Judges
      </Heading>
      <Grid
        columns={[null, 2]}
        gap={3}
        sx={{
          my: 2,
          img: { mr: 3 },
          div: { placeItems: 'center', fontSize: 2 }
        }}
      >
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
    </Container>
  </>
)
