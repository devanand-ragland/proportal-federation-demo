export interface ModalProps {
  title?: string;
  body?: string;
  isOpen: boolean;
  onClose: () => void;
  onAction?: () => void;
  modalType?: string;
  leavePage?: boolean;
  errorText?: string;
  data?: any;
}
export interface DeviceModalProps {
  title?: string;
  body?: string;
  isOpen: boolean;
  onClose: () => void;
  onAction?: () => void;
  onSaveAnother?: () => void;
  onSendFormData: (data: any) => any;
  modalDatas: any;
  deviceType: any;
  serviceLevelOptions: any;
  modalType?: string;
  leavePage?: boolean;
  errorText?: string;
}

export enum AlertTypes {
  success = "success",
  info = "info",
  warn = "warn",
  error = "error",
}

export enum errorCodeMap {
  Success = 0,
  FailedToSaveData = -401,
  ParameterOutOfRange = 100,
  DeviceAdditionLimitReached = -121,
  InputValidationFailed = -50004,
  InvalidParameter = -501,
  UserDoesNotHaveAccess = -105,
  LocationDoesNotExistsInTheDatabase = -116,
  FailedToGetData = -304,
  //Delete and replace device
  FailedToDeleteData = -402,
  UnsupportedDeviceClassId = -109,
  DeviceDoesNotExistsInTheDatabase = -117,
  NewDeviceAlreadyExists = -119,
  PanelAlreadyExists = -4700,
  FailedToGetDeviceID = -4800,
  UnknownError = -999,
  IncorrectCrc = -203,
  NotAllowedToAddIpcamera = 2000 /* UI Error code  */,
  OneOrMoreError = 2001 /* UI Error code  */,
}

export enum DeviceCid {
  SecurityPanel = 1,
  IpCamera = 2,
  Automation = 3,
  GPS = 4,
  CAMIR = 5,
  BuiltInVideo = 6,
  VideoDoorBell = 7,
  RSI = 8,
  HdCamera = 9,
  MotionViewer = 10,
  HoneywellHomeDoorBell = 11,
  ResideoDoorbell = 12,
}
export enum CameraName {
  // HD cameras
  IPCAM_WOC2 = "IPCAM-WOC2",
  IPCAM_WOC1 = "IPCAM-WOC1",
  IPCAM_WIC1 = "IPCAM-WIC1",
  IPCAM_WIC2 = "IPCAM-WIC2",
  // IP Cameras
  IPCAM_PT = "iPCAM-PT",
  IPCAM_PT2A = "iPCAM-PT2A",
  IPCAM_WI = "iPCAM-WI",
  IPCAM_WI2 = "iPCAM-WI2",
  IPCAM_WL = "iPCAM-WL",
  IPCAM_WO = "iPCAM-WO",
  // Built in cameras
  BICAM_LYRICS = 143,
  BICAM_PROA7 = 4187,
  BICAM_PROA7PLUS = 4162,
}

export enum SignalStrength {
  NoSignal = 0,
  Terrible = -90,
  Poor = -71,
  fair = -70,
  BelowAverage = -66,
  Average = -65,
  Good = -51,
  VeryGood = -50,
  Excellent = -40,
}
