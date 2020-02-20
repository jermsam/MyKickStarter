import React from 'react'
import {Anchor,}from 'grommet';
import Link from 'next/link'

const MyAnchor= React.forwardRef(({children,...rest}, ref) => (
    <Anchor 
    style={{textDecoration: 'none'}} 
    ref={ref}
    {...rest}
    >
      {children}
    </Anchor>
    
  ));




const MyLink= React.forwardRef(({children,href,...rest}, ref) => (
    <Link {...{href,ref}} >
        <MyAnchor {...rest} >
            {children}
        </MyAnchor>
    </Link>
    
  ));

export {MyLink,MyAnchor}
