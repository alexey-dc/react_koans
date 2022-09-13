import useSessionStorageCounter from '../store/use_session_storage_counter.js'

const SessionStorageComponent = () => {
  const { counter, incr, decr } = useSessionStorageCounter()
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


export default SessionStorageComponent