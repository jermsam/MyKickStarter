import React from 'react';
import {Container,Divider} from 'semantic-ui-react'
import {Box,Heading }from 'grommet';
import MadeWithLove from 'components/MadeWithLove'
import ProTip from 'components/ProTip';
import {MyLink }from 'components/navigation';
import { NextSeo } from 'next-seo';



export default function Index() {
  return (
    <Container text>
       <Divider section hidden/>
      <NextSeo title='About'/>
    <Box >
      <Heading level="2">
        Next.js v4-beta example
      </Heading>
      <MyLink color='grey' href='/'>
        Go to the Home page
        </MyLink>
      <ProTip />
      <MadeWithLove />
    </Box>
  </Container>
    
  );
}
