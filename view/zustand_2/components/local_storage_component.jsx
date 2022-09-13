import useLocalStorageCounter from '../store/use_local_storage_counter.js'

const LocalStorageComponent = () => {
  const { counter, incr, decr } = useLocalStorageCounter()
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


export default LocalStorageComponent