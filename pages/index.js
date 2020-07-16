import { Container, Heading, Text } from 'theme-ui'

export default () => (
  <Container variant="copy" sx={{ py: [4, 5, (textAlign: 'center')] }}>
    <Heading as="h1" variant="title">
      Hack Club Fine Arts Gala
    </Heading>
    <Text as="p" variant="subtitle">
      A weeklong celebration of remarkable artists in the Orheus tradition.
    </Text>
  </Container>
)
