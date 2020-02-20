import React from 'react'
import {Text, }from 'grommet';
import {MyAnchor} from 'components/navigation'

export default()=>{

    return(
        <Text color="grey" align="center">
        {'Built with love using '}
        <MyAnchor href="https://v2.grommet.io/">
          Grommet v2
        </MyAnchor> and <MyAnchor color='teal' href="https://react.semantic-ui.com/usage">
          Semantic ui react
        </MyAnchor>
        {' team.'}
      </Text>
    )
}

