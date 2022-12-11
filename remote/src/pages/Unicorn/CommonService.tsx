/* eslint-disable */
import { DeviceCid, SignalStrength } from './commonInterfaces';

//disable typescript next line
// @ts-ignore
import BuiltInCam from '../../assets/unicornImages/uc_proseries.jpg';
// @ts-ignore
import noimage from '../../assets/unicornImages/camera_noimage.svg';
// @ts-ignore
import IPCAM_WIC2 from '../../assets/unicornImages/uc_c2cam.jpg';
// @ts-ignore
import ResideoDoorBell from '../../assets/unicornImages/uc_resideo_doorbell.png';
// @ts-ignore
import Skybell from '../../assets/unicornImages/uc_skybell.jpg';
// @ts-ignore
import Ipcamera from '../../assets/unicornImages/uc_ipcam.png';
// @ts-ignore
import IPCAM_WOC from '../../assets/unicornImages/uc_ipcam1.jpg';
// @ts-ignore
import lyric from '../../assets/unicornImages/uc_ipcam1.jpg';
// @ts-ignore
import IPCAM_WIC1 from '../../assets/unicornImages/uc_c1camera.jpg';
// @ts-ignore
import IPCAM_PT2A from '../../assets/unicornImages/UC_IPCAMPT2.jpg';
// @ts-ignore
import IPCAM_PT from '../../assets/unicornImages/UC_IPCAMPT.jpg';
// @ts-ignore
import IPCAM_WL from '../../assets/unicornImages/UC_IPCAMWL.jpg';
// @ts-ignore
import IPCAM_WI from '../../assets/unicornImages/UC_IPCAMWI.jpg';
// @ts-ignore
import IPCAM_WI2 from '../../assets/unicornImages/UC_IPCAMWI2.jpg';
// @ts-ignore
import IPCAM_WO from '../../assets/unicornImages/UC_IPCAMWO.jpg';
// @ts-ignore
import BICAM_LYRICS from '../../assets/unicornImages/BICAM_LYRICS.png';
// @ts-ignore
import BICAM_PROA7PLUS from '../../assets/unicornImages/BICAM_PROA7PLUS.jpg';
import React from 'react';

export const convertToLocalDate: any = (date: any, dataType = 0) => {
  if (!date) {
    return 'N/A';
  }
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

export const Image = {
  BuiltInCam: BuiltInCam,
  IPCAM_WIC2: IPCAM_WIC2,
  ResideoDoorBell: ResideoDoorBell,
  Skybell: Skybell,
  Ipcamera: Ipcamera,
  IPCAM_WOC: IPCAM_WOC,
  NoImage: noimage,
  lyric: lyric,
  IPCAM_WIC1: IPCAM_WIC1,
  IPCAM_PT2A: IPCAM_PT2A,
  IPCAM_PT: IPCAM_PT,
  IPCAM_WL: IPCAM_WL,
  IPCAM_WI2: IPCAM_WI2,
  IPCAM_WO: IPCAM_WO,
  BICAM_LYRICS: BICAM_LYRICS,
  IPCAM_WI: IPCAM_WI,

  BICAM_PROA7PLUS: BICAM_PROA7PLUS,
};

export const renderwifiSignalStrength: any = (signalLevel: number) => {
  switch (true) {
    case signalLevel > SignalStrength.Excellent &&
      signalLevel < SignalStrength.NoSignal:
      return <span className='iconExcellentSignal'></span>;
    case signalLevel >= SignalStrength.VeryGood &&
      signalLevel <= SignalStrength.Excellent:
      return <span className='iconGoodSignal'></span>;
    case signalLevel >= SignalStrength.Average &&
      signalLevel <= SignalStrength.Good:
      return <span className='iconGooiconOkSignaldSignal'></span>;
    case signalLevel >= SignalStrength.fair &&
      signalLevel <= SignalStrength.BelowAverage:
      return <span className='iconMarginalSignal'></span>;
    case signalLevel >= SignalStrength.Terrible &&
      signalLevel <= SignalStrength.Poor:
      return <span className='iconOneSignal'></span>;
    case signalLevel <= SignalStrength.Terrible:
      return <span className='iconZeroSignal'></span>;
    case signalLevel == SignalStrength.NoSignal:
      return <span className='iconZeroSignal'></span>;
  }
};

export const getCameraName: any = (deviceClassId: any, cameraType: any) => {
  switch (true) {
    case deviceClassId === DeviceCid.ResideoDoorbell:
      return   <h5>  Resideo<sup>TM </sup> Video Doorbell</h5>
    case deviceClassId === DeviceCid.VideoDoorBell:
      return   <h5>  Skybell<sup>TM </sup> Video Doorbell</h5>
    case deviceClassId === DeviceCid.IpCamera && (cameraType === null || cameraType === '') :
      return   <h5>IP Camera</h5>
    case deviceClassId === DeviceCid.Automation && (cameraType === null || cameraType === '') :
      return   <h5>Automation</h5>
    case deviceClassId === DeviceCid.BuiltInVideo && (cameraType === null || cameraType === '') :
      return    <h5>Built-In Camera</h5>
    case deviceClassId === DeviceCid.HdCamera && (cameraType === null || cameraType === '') :
      return    <h5>HD Camera</h5>
    default:
      return <h5>{cameraType}</h5>
  }
};

// const getSignalStrength = (deviceClassId: any, signalStrength: any) => {
//   switch (true) {
//     case deviceClassId === DeviceCid.ResideoDoorbell:
//       return   <h5>  Resideo<sup>TM </sup> Video Doorbell</h5>
//     case deviceClassId === DeviceCid.VideoDoorBell:
//       return   <h5>  Skybell<sup>TM </sup> Video Doorbell</h5>
//     case deviceClassId === DeviceCid.IpCamera && (cameraType === null || cameraType === '') :
//       return   <h5>IP Camera</h5>
//     case deviceClassId === DeviceCid.Automation && (cameraType === null || cameraType === '') :
//       return   <h5>Automation</h5>
//     case deviceClassId === DeviceCid.BuiltInVideo && (cameraType === null || cameraType === '') :
//       return    <h5>Built-In Camera</h5>
//     case deviceClassId === DeviceCid.HdCamera && (cameraType === null || cameraType === '') :
//       return    <h5>HD Camera</h5>
//     default:
//       return <h5>{cameraType}</h5>
//   }
// }
/* eslint-disable */
