import React from 'react'

export default function(props: { text: any | undefined; caption: string }) {
  return (
    <>
      {props.text ? (
        <>
          {props.caption} : {props.text}
          <br />
        </>
      ) : null}
    </>
  )
}
