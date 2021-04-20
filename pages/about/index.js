import { Fragment } from 'react'
import Router from 'next/router'
export default function Index() {

  const linkClickHandler = (e, url = '/') => {
    console.log(url)
    Router.push(url)
  }

  return (
    <Fragment>
      <h1>About page</h1>
      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={(e) => linkClickHandler(e, '/posts')}>Go to posts</button>
    </Fragment>
  )
}