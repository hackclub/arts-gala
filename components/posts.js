import { Button, Box, Card, Text, Image, Grid, Avatar, Flex } from 'theme-ui'
import { formatDate } from '../lib/dates'
import { filter } from 'lodash'
import Masonry from 'react-masonry-css'

const Post = ({
  id = new Date().toISOString(),
  profile = false,
  user = {
    username: 'abc',
    avatar: '',
    streakDisplay: false,
    streakCount: 0
  },
  text,
  attachments = [],
  mux = [],
  postedAt
}) => (
  <Card
    className="post"
    sx={{ p: [3, 3], width: '100%', bg: 'rgba(255,255,255,0.9)' }}
  >
    <Flex
      as="a"
      href={`https://scrapbook.hackclub.com/${user.username}`}
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        alignItems: 'center',
        mb: 3
      }}
    >
      <Avatar loading="lazy" src={user.avatar} alt={user.username} mr={2} />
      <Box>
        <Text variant="subheadline" my={0} fontSize={[1, 1]}>
          @{user.username}
        </Text>
        <Text as="time" variant="caption" fontSize={0}>
          {formatDate(postedAt)}
        </Text>
      </Box>
    </Flex>
    <Text as="p" fontSize={3}>
      {text}
    </Text>
    {attachments.length > 0 && (
      <>
        <Grid
          gap={2}
          columns={2}
          sx={{ alignItems: 'center', textAlign: 'center', mt: 2 }}
        >
          {filter(attachments, a => a.type.startsWith('image')).map(img => (
            <Image
              key={img.thumbnails.large.url}
              alt={img.filename}
              src={img.thumbnails.large.url}
              sx={{
                maxWidth: '100%',
                maxHeight: 256,
                borderRadius: 'default',
                bg: 'sunken',
                gridColumn: attachments.length === 1 ? 'span 2' : null
              }}
            />
          ))}
        </Grid>
      </>
    )}
  </Card>
)

const Posts = ({ data = [] }) => (
  <Box
    as="section"
    sx={{
      display: ['none', 'block'],
      position: 'relative'
    }}
  >
    <Masonry
      breakpointCols={{
        default: 4,
        1024: 3,
        640: 2,
        480: 1
      }}
      className="masonry-posts"
      columnClassName="masonry-posts-column"
    >
      {data.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </Masonry>
    <style>{`
      .masonry-posts {
        display: flex;
        width: 100%;
        max-width: 100%;
      }

      .masonry-posts-column {
        background-clip: padding-box;
      }

      .post {
        margin-bottom: 2px;
      }

      @media (min-width: 32em) {
        .masonry-posts {
          padding-right: 12px;
        }

        .masonry-posts-column {
          padding-left: 12px;
        }

        .post {
          border-radius: 12px;
          margin-bottom: 12px;
        }
      }

      @media (min-width: 72em) {
        .masonry-posts {
          padding-right: 24px;
        }

        .masonry-posts-column {
          padding-left: 24px;
        }

        .post {
          margin-bottom: 24px;
        }
      }
    `}</style>
    <Flex
      as="footer"
      sx={{
        placeItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        pt: 3,
        pb: 4,
        textAlign: 'center'
      }}
    >
      <Text as="p" variant="subheadline" sx={{ color: 'indigo', my: 0, px: 3 }}>
        These are just a few posts…
      </Text>
      <Button
        as="a"
        variant="cta"
        href="https://scrapbook.hackclub.com/r/art"
        sx={{ bg: 'fuschia', color: 'white' }}
      >
        Keep exploring →
      </Button>
    </Flex>
  </Box>
)

export default Posts
