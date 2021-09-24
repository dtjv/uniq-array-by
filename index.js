import dotProp from 'dot-prop'

const identity = (v) => v
const dotPropGet = dotProp.get

export default function uniqArrayBy(array, property = identity) {
  const accessor =
    typeof property === 'function' ? property : (v) => dotPropGet(v, property)
  const map = new Map(
    (array ?? [])
      .map((value) => {
        const key = accessor(value)
        return key ? [key, value] : undefined
      })
      .filter((value) => value)
  )

  return [...map.values()]
}
