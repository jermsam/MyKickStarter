import React from 'react';
import {Text} from 'grommet'
import {Info} from 'grommet-icons'




export default function ProTip() {
 
  return (
    <Text  color="grey">
      <Info color='accent-1'  size='medium'/>
     Pro tip: Hi <Text color='teal'> {process.env.ME}</Text>{'. '} See more{' '}
   
      
      on the Grommet v2 documentation.
    </Text>
  );
}
