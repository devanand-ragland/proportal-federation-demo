import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Link as RouterLink } from 'react-router-dom';
import { Titled } from 'react-titled';
import styled from 'styled-components';

import DataTable, { TableColumn, TableRow } from '../../shared/grid/index';
import Api from "../../shared/services/Api";

import {
  Box,
  Button,
  Card,
  DescriptionList,
  DescriptionDefinition,
  Flex,
  Label,
  Text,
  Spinner,
} from '@resideo/blueprint-react';

//import camData from './camdata.json';

import { CameraName, DeviceCid } from './commonInterfaces';
import {
  convertToLocalDate,
  renderwifiSignalStrength,
  Image,
  getCameraName,
} from './CommonService';
import MainCell from './components/maincell';
import CameraImage from './components/cameraImage';


const Camera = (): JSX.Element => {
  const { t } = useTranslation();



  const [loading, setLoading] = useState(false);

  const [gridData, setGridData] = useState([]);

  const customStyles = {
    rows: {
      style: {
        borderColor: '#CCCCCC',
        borderSize: '2px',
        fontSize: '13px',
      },
    },
    headRow: {
      style: {
        display: 'none',
      },
    },
  };

  /* Get Grid Data */
  const getGridData = async () => {
    try {

        const cameraData: any = await Api.getCameraGridJSON(
          "527754"
        );

        if (cameraData.data) {

        setGridData(cameraData.data);
    
      } else {
        setGridData([]);
      }
	  
    } catch (err) {
  
      console.log(err);
    }
  };

  useEffect(() => {
    getGridData();
  }, []);

  const getImage = (deviceName: string, classId: number) => {
    try {
      switch (classId) {
        case DeviceCid.IpCamera:
          if (null != deviceName) {
            switch (deviceName.toLowerCase()) {
              case CameraName.IPCAM_PT.toLowerCase():
                return Image.IPCAM_PT;
              case CameraName.IPCAM_PT2A.toLowerCase():
                return Image.IPCAM_PT2A;
              case CameraName.IPCAM_WI.toLowerCase():
                return Image.IPCAM_WI;
              case CameraName.IPCAM_WI2.toLowerCase():
                return Image.IPCAM_WI2;
              case CameraName.IPCAM_WL.toLowerCase():
                return Image.IPCAM_WL;
              case CameraName.IPCAM_WO.toLowerCase():
                return Image.IPCAM_WO;
              default:
                return Image.NoImage;
            }
          } else {
            return Image.NoImage;
          }
        case DeviceCid.HdCamera:
          if (null != deviceName) {
            switch (deviceName.toLowerCase()) {
              case CameraName.IPCAM_WOC1.toLowerCase():
              case CameraName.IPCAM_WOC2.toLowerCase():
                return Image.IPCAM_WOC;
              case CameraName.IPCAM_WIC1.toLowerCase():
                return Image.IPCAM_WIC1;
              case CameraName.IPCAM_WIC2.toLowerCase():
                return Image.IPCAM_WIC2;
              default:
                return Image.NoImage;
            }
          } else {
            return Image.NoImage;
          }
        case DeviceCid.ResideoDoorbell:
          return Image.ResideoDoorBell;
        case DeviceCid.BuiltInVideo:
          if (null != deviceName) {
            switch (Number(deviceName.substring(deviceName.indexOf('_') + 1))) {
              case CameraName.BICAM_LYRICS:
                return Image.BICAM_LYRICS;
              case CameraName.BICAM_PROA7PLUS:
                return Image.BICAM_PROA7PLUS;
              default:
                return Image.NoImage;
            }
          } else {
            return Image.NoImage;
          }
        case DeviceCid.VideoDoorBell:
          return Image.Skybell;
        default:
          return Image.NoImage;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns: any = [
    {
      id: 1,
      selector: (row: any) =>
        row && row.deviceImage && row.cameraType && row.deviceClassId,
      wrap: true,
      // width: "13%",
      cell: function deviceName(row: {
        deviceName: any;
        deviceImage: any;
        cameraType: any;
        deviceClassId: any;
      }) {
        return (
          <MainCell>
            <CameraImage src={getImage(row.cameraType, row.deviceClassId)} />
            {getCameraName(row.deviceClassId, row.cameraType)}
          </MainCell>
        );
      },
    },
    {
      id: 2,
      selector: (row: any) =>
        row && row.deviceName && row.signalStrength && row.deviceClassId,
      wrap: true,
      width: '15%',
      cell: function description(row: {
        deviceName: any;
        signalStrength: any;
        deviceClassId: any;
      }) {
        return (
          <MainCell>
            <Label
              color='faded'
              fontSize='small'
              marginLeft='0.75rem'
              paddingBottom='small'>
              {'Description'}
            </Label>
            <Text marginLeft='0.75rem' marginBottom='medium' fontWeight='500'>
              {row.deviceName}
            </Text>
            <Label
              color='faded'
              fontSize='small'
              marginLeft='0.75rem'
              paddingBottom='small'>
              {'Signal Strength'}
            </Label>
            <Text marginLeft='0.75rem' marginBottom='medium'>
              {'Description2'}
            </Text>
          </MainCell>
        );
      },
    },
    {
      id: 3,
      selector: (row: any) =>
        row &&
        row.signalStrength &&
        row.deviceClassId &&
        row.onlineStatus &&
        row.deviceSerialNumber,
      wrap: true,
      width: '17%',
      cell: function status(row: {
        onlineStatus: any;
        deviceSerialNumber: any;
        deviceClassId: any;
        signalStrength: any;
      }) {
        return (
          // <div className={styles.cells}>
          <div className={''}>
            {row.deviceClassId === DeviceCid.BuiltInVideo ? (
              <>
                <span>Online Status </span>
                <h5 className={'pb-2 '}>N/A</h5>
                <span>Serial #/Mac</span>
                <h5>{row.deviceSerialNumber}</h5>
              </>
            ) : (
              <>
                <span>Online Status </span>
                {row.onlineStatus &&
                row.onlineStatus != null &&
                row.onlineStatus.toLowerCase() == 'online' ? (
                  <h5 className={'pb-2 '}>Online</h5>
                ) : (
                  <h5 className={'pb-2 '}>Offline</h5>
                )}

                <span>Serial #/Mac</span>
                <h5>{row.deviceSerialNumber}</h5>
              </>
            )}
          </div>
        );
      },
    },
    {
      id: 4,
      selector: (row: any) => row && row.firmwareVersion && row.deviceClassId,
      wrap: true,
      width: '15%',
      cell: function firmware(row: {
        firmwareVersion: any;
        deviceClassId: any;
      }) {
        return (
          // <div className={styles.cells}>
          <div className={''}>
            <span>Firmware Version</span>
            {row.deviceClassId === DeviceCid.BuiltInVideo ||
            row.deviceClassId === DeviceCid.IpCamera ||
            row.deviceClassId === DeviceCid.ResideoDoorbell ? (
              row.firmwareVersion === null ? (
                <h5 className='pb-2'>N/A</h5>
              ) : (
                <h5 className='pb-2'>{row.firmwareVersion}</h5>
              )
            ) : (
              ''
            )}
            {row.deviceClassId !== DeviceCid.BuiltInVideo &&
              row.deviceClassId !== DeviceCid.ResideoDoorbell &&
              row.deviceClassId !== DeviceCid.IpCamera && (
                <h5 className='pb-2'>{row.firmwareVersion}</h5>
              )}

            <span></span>
            <h5></h5>
          </div>
        );
      },
    },
    {
      id: 5,
      selector: (row: any) => row && row.lastCheckInUtc && row.deviceClassId,
      wrap: true,
      width: '20%',
      cell: function firmware(row: {
        lastCheckInUtc: any;
        deviceClassId: any;
      }) {
        return (
          // <div className={styles.cells}>
          <div className={''}>
            <span>Last-Check-In</span>
            {row.deviceClassId === DeviceCid.BuiltInVideo ||
            row.deviceClassId === DeviceCid.IpCamera ||
            row.deviceClassId == DeviceCid.ResideoDoorbell ? (
              row.lastCheckInUtc === null ? (
                <h5 className='pb-2'>N/A</h5>
              ) : (
                <h5 className='pb-2'>
                  {convertToLocalDate(row.lastCheckInUtc)}
                </h5>
              )
            ) : (
              ''
            )}
            {row.deviceClassId !== DeviceCid.BuiltInVideo &&
              row.deviceClassId !== DeviceCid.ResideoDoorbell &&
              row.deviceClassId !== DeviceCid.IpCamera && (
                <h5 className='pb-2'>
                  {convertToLocalDate(row.lastCheckInUtc)}
                </h5>
              )}
            <span></span>
            <h5></h5>
          </div>
        );
      },
    },
  ];
  /* eslint-disable */

  return (

        <DataTable
          columns={columns}
          keyField='id'
          data={gridData ? gridData : []}
          progressPending={loading}
          customStyles={customStyles}
          sortServer
        />
  
  );
};

export default Camera;
