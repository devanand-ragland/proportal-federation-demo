import React from "react";
import { errorCodeMap, SignalStrength } from "../models/commonInterfaces";


export const convertToLocalDate: any = (date: any, dataType = 0) => {
  if (!date) {
    return "N/A";
  }
  date = new Date(date);
  const localOffset = date.getTimezoneOffset() * 60000;
  const localTime = date.getTime();
  date = localTime - localOffset;
  date = new Date(date);
  switch (dataType) {
    case 0:
      date = date.toString();
      break;
    case 1:
      date = date.toLocaleDateString();
      break;
    case 2:
      date = date.toLocaleString();
      break;
    default:
      break;
  }
  return date;
};

let successObj: {
  title: "";
  body: "";
  isOpen: "";
  modalType: "success";
};
let failureObj: {
  title: "";
  body: "";
  isOpen: "";
  modalType: "error";
};

/* success and failure popups */
export const successFailurePopup = (
  popupType: string,
  ModalText?: any,
  errorCode?: any
) => {
  if (popupType === "success") {
    const successObj = {
      title: "Total Connect",
      body: ModalText,
      modalType: "success",
    };
    return successObj;
  } else if (popupType === "error") {
    const errorObj = {
      title: "Error",
      body: getPopUpMessage(errorCode),
      modalType: "error",
    };
    return errorObj;
  }
};

/* Formating citycssub to mac */
export const generateMAC: any = (cityCS: any) => {
  try {
    const cityCSTuples = cityCS.split("-");
    if (cityCSTuples.length === 3)
      return (
        "DD" +
        cityCSTuples[0].toString() +
        pad(cityCSTuples[1].toString(), 4) +
        pad(cityCSTuples[2].toString(), 4)
      );
  } catch (ex) {
    console.log("error :>> ", ex);
  }
};
const pad = function (num: string | any[], size: number) {
  while (num.length < size) num = "0" + num.toString();
  return num;
};



export const getPopUpMessage: any = (resultCode: number) => {
  switch (resultCode) {
    case errorCodeMap.Success:
      return "Success.";
    case errorCodeMap.FailedToSaveData:
      return "Failed to save data.";
    case errorCodeMap.ParameterOutOfRange:
      return "Parameter out of range.";
    case errorCodeMap.InvalidParameter:
      return "Invalid parameter.";
    case errorCodeMap.DeviceAdditionLimitReached:
      return "Device addition limit reached.";
    case errorCodeMap.InputValidationFailed:
      return "Input validation failed.";
    case errorCodeMap.UserDoesNotHaveAccess:
      return "User does not have access.";
    case errorCodeMap.LocationDoesNotExistsInTheDatabase:
      return "Location does not exists in the database.";
    case errorCodeMap.FailedToGetData:
      return "Failed to get data.";
    case errorCodeMap.FailedToDeleteData:
      return "Failed to delete data.";
    case errorCodeMap.UnsupportedDeviceClassId:
      return "Unsupported device class id.";
    case errorCodeMap.DeviceDoesNotExistsInTheDatabase:
      return "Device does not exists in the database.";
    case errorCodeMap.NewDeviceAlreadyExists:
      return "New device already exists.";
    case errorCodeMap.PanelAlreadyExists:
      return "Panel already exists.";
    case errorCodeMap.FailedToGetDeviceID:
      return "Failed to get device id.";
    case errorCodeMap.UnknownError:
      return "Unknown error";
    case errorCodeMap.NotAllowedToAddIpcamera:
      return "Cannot Add IP Camera as you have opted Video Service as None";
    case errorCodeMap.OneOrMoreError:
      return "One or more errors occurred during save";
    case errorCodeMap.IncorrectCrc:
      return "Incorrect Mac or Crc";
  }
};

export const renderwifiSignalStrength: any = (signalLevel: number) => {
  switch (true) {
    case signalLevel > SignalStrength.Excellent &&
      signalLevel < SignalStrength.NoSignal:
      return <span className="iconExcellentSignal"></span>;
    case signalLevel >= SignalStrength.VeryGood &&
      signalLevel <= SignalStrength.Excellent:
      return <span className="iconGoodSignal"></span>;
    case signalLevel >= SignalStrength.Average &&
      signalLevel <= SignalStrength.Good:
      return <span className="iconGooiconOkSignaldSignal"></span>;
    case signalLevel >= SignalStrength.fair &&
      signalLevel <= SignalStrength.BelowAverage:
      return <span className="iconMarginalSignal"></span>;
    case signalLevel >= SignalStrength.Terrible &&
      signalLevel <= SignalStrength.Poor:
      return <span className="iconOneSignal"></span>;
    case signalLevel <= SignalStrength.Terrible:
      return <span className="iconZeroSignal"></span>;
    case signalLevel == SignalStrength.NoSignal:
      return <span className="iconZeroSignal"></span>;
  }
};
