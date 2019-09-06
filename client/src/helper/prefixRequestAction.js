export default function prefixRequestAction(action) {
  return [
    `${action}_START`,
    `${action}_SUCCESS`,
    `${action}_FAIL`,
  ]
}