export const settings = {
  videoDoorBellName: "",
  isDoorbellNameUpdated: false,
  partitionId: 0,
  zones: [
    {
      name: "",
      isEnabled: false,
      objectClassification: {
        person: false,
        vehicle: false,
        animal: false,
        motion: false,
      },
      threshold: {
        motion: 1,
        motionSensitivity: 1,
      },
    },
  ],
  isDoorbellSpeakerEnabled: false,
  doorbellSpeakerVolume: 1,
  isSoundDetectionEnabled: false,
  soundDetectionSensitivity: 1,
  isMicrophoneEnabled: false,
  microphoneSensitivity: 1,
  isMicrophoneRecordingEnabled: false,
  isRingLightLedOn: false,
  isStatusLedOn: false,
  isWiredChimeEnabled: false,
  videoQuality: 1,
  nightVision: 1,
  fieldOfView: 1,
};

export const rangeOptions = [
  { key: "Low", value: 1 },
  { key: "Medium", value: 2 },
  { key: "High", value: 3 },
];
export const videoQuality = [
  { key: "Auto", value: 1 },
  { key: "High", value: 2 },
  { key: "Low", value: 3 },
];
export const nightVision = [
  { key: "Off", value: 1 },
  { key: "Black and White", value: 2 },
  { key: "Color on Detection", value: 3 },
  { key: "Color", value: 4 },
];
export const fieldView = [
  { key: "Vertical", value: 1 },
  { key: "Wide", value: 2 },
  { key: "Full", value: 3 },
];
export const radioOptions = [
  { key: "Enabled", value: true },
  { key: "Disabled", value: false },
];
export const onandoff = [
  { key: "On", value: true },
  { key: "Off", value: false },
];
