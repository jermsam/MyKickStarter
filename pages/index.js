import React from 'react';
import {Container,Divider} from 'semantic-ui-react'
import {Box,Heading }from 'grommet';
import MadeWithLove from 'components/MadeWithLove'
import ProTip from 'components/ProTip';
import {MyLink }from 'components/navigation';



export default function Index() {
  return (
    <Container text>
      <Divider section hidden/>
    <Box >
      <Heading level="2">
        Next.js v4-beta example
      </Heading>
      <MyLink color='brand' href='/about'>
        Go to the About Us page
        </MyLink>
      <ProTip />
      <MadeWithLove />
    </Box>
  </Container>
    
  );
}
