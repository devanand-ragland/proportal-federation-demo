import gql from "graphql-tag";

class Schema {
  getCameraGridData = gql`
    query ($ceid: Int!, $brandingType: BrandingType!) {
      getCameraGrid(ceid: $ceid, brandingType: $brandingType) {
        deviceId
        deviceName
      }
    }
  `;

  getQosGridData = gql`
    query ($ceid: Int!, $brandingType: BrandingType!) {
      getQosGrid(ceid: $ceid, brandingType: $brandingType) {
        deviceId
        deviceName
      }
    }
  `;
  getActivityGridData = gql`
    query ($ceid: Int!, $brandingType: BrandingType!) {
      getActivityGrid(ceid: $ceid, brandingType: $brandingType) {
        deviceId
        deviceName
      }
    }
  `;
  getDeviceInfo = gql`
    query ($ceid: Int!, $brandingType: BrandingType!) {
      getDeviceInformation(ceid: $ceid, brandingType: $brandingType) {
        deviceId
        deviceName
      }
    }
  `;
  getDeviceListData = gql`
    query ($ceid: Int!, $brandingType: BrandingType!) {
      getDeviceList(ceid: $ceid, brandingType: $brandingType) {
        deviceId
        deviceName
      }
    }
  `;
  getMobileCameraGrid = gql`
    query ($ceid: Int!, $brandingType: BrandingType!) {
      getMobileCameraGridData(ceid: $ceid, brandingType: $brandingType) {
        deviceId
        deviceName
      }
    }
  `;
  getPanelData = gql`
    query ($ceid: Int!, $brandingType: BrandingType!) {
      getPanelData(ceid: $ceid, brandingType: $brandingType) {
        deviceId
        deviceName
      }
    }
  `;
}

export default new Schema();
