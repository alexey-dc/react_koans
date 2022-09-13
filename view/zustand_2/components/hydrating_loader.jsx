import React from 'react'

const HydratingLoader = (props) => {
  const [isHydrated, setIsHydrated] = React.useState(false)
  React.useEffect(() => {
    /**
     * Zustand's persistence middleware should only hydrate on the client,
     * since the data is only available in the browser.
     * 
     * With server-based react frameworks like NextJS, this causes issues:
     * if a component is rendered server-side, it will render with
     * incorrect values.
     * 
     * This useEffect will only run on the client, so we won't attempt 
     * to render views before hydrating from the browser's cache.
     */
    setIsHydrated(true)
  }, [])

  if(isHydrated) {
    return props.children
  }
  return <></>
}

export default HydratingLoader