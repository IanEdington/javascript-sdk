// TODO: live/not live boolean
// TODO: allow passing a timeout to onReady
// TODO: Logging all over the place
// TODO: handle setForceVariation before ready and when internal instance is re-instantiated
// TODO: handle notificationCenter before ready and when internal instance is re-instantiated
// TODO: use a 3rd-party library for event emitter instead of writing my own?

export {
  default as createInstanceWithManagedDatafile,
  OptimizelyWithManagedDatafileConfig,
} from './optimizely_with_managed_datafile'

export {
  Datafile,
  DatafileManager,
} from './datafile_manager_types'

export {
  default as createDefaultDatafileManager,
} from './node_datafile_manager'
