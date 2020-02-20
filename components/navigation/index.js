import React from 'react'
import {Anchor,}from 'grommet';
import Link from 'next/link'

const MyAnchor= ({children,...rest})=>{

    return <Anchor style={{
        textDecoration: 'none'
    }} 
    {...rest}
    >
      {children}
    </Anchor>

}

const MyLink =({children,...rest})=>{

    return(
       <Link {...rest}>
        <MyAnchor color={rest.color}>
            {children}
        </MyAnchor>
       </Link>
    )
}

export {MyLink,MyAnchor}