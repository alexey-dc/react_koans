import useSessionStorageCounter2 from '../store/use_session_storage_counter_2.js'

/**
 * There's nothing special about this component itself - hydration is managed externally.
 * 
 * The only reason it's made into a separate component is to avoid sharing data
 * between this component and other components - so that it would fail only
 * when its own data is modified.
 * 
 * It uses a separate zustand store, which writes to a separate sessionStorage
 * key - so other examples can safely be toggled w/o introducing an error on page load.
 */
const HydrationDemoComponent = () => {
  const { counter, incr, decr } = useSessionStorageCounter2()
  return <div className="f-row f-j-space-between">
    <div className="button" onClick={decr}>
      -
    </div>
    <div className="f-col f-j-center">
      {counter}
    </div>
    <div className="button" onClick={incr}>
      +
    </div>
  </div>
}


export default HydrationDemoComponent