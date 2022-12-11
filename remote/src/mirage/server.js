/*
 * Mirage server file.
 * Fetch mock data from payload.json
 * Get mock data for getMenuData, getPageData, getMultiplePanelConfigData api
 *
 */

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

import { Server } from "miragejs";


const makeServer = ({ environment = "development" } = {}) => {

  const data = require('./payload.json');
  const qosdata = require('./qos.json');
  const activityLogData = require('./activityLog.json');
  const mobileCamGrid = require('./mobileCameraGrid.json');
  const deviceInformation = require('./deviceInformation.json');
  const deviceList = require('./selectList.json');
  const panelData = require('./mobileDiagnosticPanelData.json');
  const refreshData = require('./refreshData.json');
  return new Server({
    environment,

    routes() {
      this.namespace = 'api';

      this.post("http://localhost:3008/graphql", (schema, request) => {
       console.log(request)
        if (request.requestBody.indexOf('getCameraGrid') !== -1) {
          return data;
        } else if (request.requestBody.indexOf('getQosGrid') !== -1) {
          return qosdata;
        }else if (request.requestBody.indexOf('getActivityGrid') !== -1) {
          return activityLogData;
        }else if (request.requestBody.indexOf('getDeviceInformation') !== -1) {
          return deviceInformation;
        }else if (request.requestBody.indexOf('getDeviceList') !== -1) {
          return deviceList;
        }else if (request.requestBody.indexOf('getMobileCameraGridData') !== -1) {
          return mobileCamGrid;
        }else if (request.requestBody.indexOf('getPanelData') !== -1) {
          return panelData;
        }

        else { return null; }
      }, { timing: 6500 }); //set delay in mirage mock server

      this.get("https://webdev2.alarmnet.com/Alarmnet360API/v3/api/Camera/:city/:cs/:hub", () => {
        return data;
    }, { timing: 1000 })

  this.get("https://webdev2.alarmnet.com/Alarmnet360API/v3/api/camera/:deviceSerialText/:deviceClassId", () => {
    return refreshData;
}, { timing: 1000 })
    // resets the namespace to the root
    this.namespace = "" // or this.namespace = "/"
    this.passthrough()

    }});
}
export default makeServer;





