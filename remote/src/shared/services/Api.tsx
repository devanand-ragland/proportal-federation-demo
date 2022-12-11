import { http } from "./httpService"; //import contains methods for (GET, PUT, POST, DELETE etc) -- token auth menthods implemented here
import { CameraGrid } from "../models/modelTypes"; //add type validation for axios/fetch/graphql requests

class Api {
  constructor() {
    console.log("");
  }

  /* GET Location data */
  getLocationData = async (mac: any): Promise<any> => {
    return await http.get("RemoteServices/" + mac);
  };

  /* GET Settings data */
  getsettingsData = async (deviceId: any, locationId: any): Promise<any> => {
    return await http.get(
      "locations/" + locationId + "/cameras/" + deviceId + "/settings"
    );
  };

  /* Post Settings data */
  saveSettings = async (
    deviceId: any,
    locationId: any,
    postData: any
  ): Promise<any> => {
    return await http.put(
      "locations/" + locationId + "/cameras/" + deviceId + "/settings",
      postData
    );
  };

  /* GET camera grid data */
  getCameraGridJSON = async (locationId: any): Promise<CameraGrid[]> => {
    return await http.get(`locations/${locationId}/cameras`);
  };

  /* API to check if automation is supported */
  isAutomation = async () => {
    return await http.get(`cameras/AutomationDeviceCheck`);
  };

  /* Edit Device*/
  editDevice = async (postData: any): Promise<CameraGrid[]> => {
    return await http.put(
      `locations/${postData.locationID}/cameras/${postData.deviceSerialNumber}`,
      postData
    );
  };

  /* Replace Ip camera*/
  replaceIpcamera = async (postData: any): Promise<CameraGrid[]> => {
    return await http.patch(
      `locations/${postData.locationID}/cameras/${postData.olddeviceSerialNumber}`,
      postData
    );
  };

  /* Delete Device */
  deleteDevice = async (postData: any): Promise<any> => {
    return await http.delete(
      `locations/${postData.locationID}/cameras/${postData.deviceSerialNumber}`,
      postData
    );
  };

  /* Refresh Ip camera */
  refreshIpCamera = async (postData: any): Promise<CameraGrid[]> => {
    return await http.get(
      `locations/${postData.locationID}/cameras/${postData.deviceSerialNumber}`
    );
  };

  /* Add Device */
  addDevice = async (postData: any): Promise<any> => {
    return await http.put(
      `locations/${postData.locationID}/cameras/${postData.deviceSerialNumber}`,
      postData
    );
  };

  getConnectivityInfo = async (
    deviceId: string,
    locationID: string
  ): Promise<any> => {
    return await http.get(
      `locations/${locationID}/cameras/${deviceId}/connectivitydata`
    );
  };

  /* GET Service Level */
  getServiceLevel = async (mac: any): Promise<any> => {
    return await http.get(`cameras/${mac}/ServiceLevel`);
  };

  getBillingPackageData = async (
    cityCsSub: any,
    IsAccountCreation: boolean
  ): Promise<any> => {
    const citycssub = cityCsSub && cityCsSub.split("-");
    if (citycssub && citycssub.length === 3) {
      return await http.get(
        `BillingPackages?city=${citycssub[0]}&cs=${citycssub[1]}&sub=${citycssub[2]}&deviceType=1&boardId=-999&country=USA&commPathType=0&IsAccountCreationFlow=${IsAccountCreation}`
      );
    }
  };

  rebootDiagnostics = async (
    deviceId: string,
    locationID: string
  ): Promise<any> => {
    return await http.post(`cameras/${deviceId}/reboot`);
  };
}

export default new Api();
