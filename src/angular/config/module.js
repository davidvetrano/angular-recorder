angular.module('angularAudioRecorder.config', [])
  .constant('recorderScriptUrl', '/')
  .constant('recorderPlaybackStatus', {
    STOPPED: 0,
    PLAYING: 1,
    PAUSED: 2
  })
;
