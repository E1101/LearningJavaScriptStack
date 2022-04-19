import { setTimeout } from 'timers/promises'

// `AbortController` construct is global
const ac = new AbortController()
// `AbortController` instance has an `AbortSignal` instance on it's `signal` property.
// Many part of Node system accept `signal` option, include fs, net, http, events, stream, ...
const timeout = setTimeout(1000, 'will NOT be logged', { signal: ac.signal })

// Nothing is logged out because the timer is canceled
// before it can complete.
setImmediate(() => {
  ac.abort()
})

try {
  console.log(await timeout)
} catch (err) {
  // Promise will be fulfilled with AbortError so we ignore abort errors:
  if (err.code !== 'ABORT_ERR') throw err
}
