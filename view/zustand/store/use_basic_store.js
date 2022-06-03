import create from 'zustand'

const useCounter = create(set => ({
  demoInt: 0,
  incr: () => set(state => ({ demoInt: state.demoInt + 1 })),
  decr: () => set(state => ({ demoInt: state.demoInt - 1 }))
}))

export default useCounter
