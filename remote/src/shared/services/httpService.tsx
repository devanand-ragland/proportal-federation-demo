import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { generateMAC } from "./CommonService";
import { errorSubject } from "./messageService";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}
let HeaderMac = "";
const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  // "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": "*",
  "X-Requested-With": "XMLHttpRequest",
};

// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the localStorage that we set when we authenticate
const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    if (typeof window !== "undefined") {
      let token: any = "BFFB0CC76D9FE43E7958A252A69336BCFE504DC4325EA198C30EB4CAA44656133216DCD41FD334C9C1F844F1588C70CBD1CF2B7861BE9DFEC0EE231EF2E1731F8ECAB5D18CD32C346A78A8C258C1F9F1B363595D44E6A9A608F4A5DA7670A6856472682B609207953AED20695F119796F3352623DD0CCF784454A92AC16D9140E36D4AB39B81D3677A0EB1E2B4D134C43C254F56F8EE89CEF8309744D3A7761A5B6569B3A706E3B41DE4FD4BA05D1366BF84FDE8F084F26F636443307C7C645A5B5B89141D3513AE43A8DDB5CB44DB88AA72514DF3506439243D52C0974A82AB437F3CE7923F1F80588EF9B60C3751BAF523E05F32BDEB19ED48AC0FACB1A76FE287B3582F85707E9E98B58B439FAA00B2196FCD304991BE5F68BBA501275CF3380E7A3D20DAA2914DA6E8B9809FA6647324C1AC967A1E151D58706238FACD488C10F045C7265D0333B98D80A5542D3A5F30CAEE407B14ED365F004BA9F84E200E46B26E03A0C52A61FDB777867325BE47467ABA8972910C834AF6C9A406637599CE16FA94922B92A8D3F767AD5FFD60CE16A4E6DE5610C569210AFE96435F30E38CE03D1A26AF8B6CD11489BEB1290BC7758B481BB2A68C274F4284F2354E4030371B8C6B4921782BB4CADC43F7CF64907E4206B08B7949A25C5FC8FDFDE59C06C9D67F8B5407DC3695C53DE0E735C97D5E43F94A94BFA67006A86F40519A0ECC2BA0C688A29EACE1E45FF2A5AC11C3EF27EEEC2D3311A29B6CE58A1F67B2228B45C4074EFE578CD9B4E779808273F96EAB8658EA01E10B74EC4C6E1662549CF3CF24973B64BDA3D48FDDB030923D9D82C2DB655393A56DE49FB1428DE35E7B445634EBAE9EBD413078A8B71FEA411A6658658A81B857266650868A09CD38FAFF18CA2704156C4C8DB8AE3168699AB5F315B3C1A6FC222DBF2811F8AE3157E19D891C2CA62E30F9B486626D5C4B3104AD3AB40BA7C8DD02B8EB8C97BFFB1C797C33D23E21FD7259A2330DBA7E9434B5ADEEB34B1D1D273DD1D8F7459B0AF9BAE13EB5B2669FB1DB6EC8E0F0981D116A7C744133461B55B31BB726D278B8E90163150953E062940D234398A16788356D7D4368328D9D7F6F5BA69B48EA6206AB9188A9CDE3CFFAB99D227116D1739D49E073016FB67D25615CCA5BB45A873E928D928B85CEA7B0228C371DDA6671745AB5ED933725727DD473F34A281C602BAF1D59672AB96DCA58417F25DF048D1D030F2311C23E1377E7169CAF1D440985B219C0329DED81E950A26F023C7AD81D48A70C197A2D8D461E1595EB1E03110036917FD45C0B9BE89CF468700C44E8B9D35EABE343EF2929D3AE8BFA0BB924B73718A4BEAB9D4CC3C2502D0B11AB0E53D81F643B172A8DF0FAE7ACC4E3133A2A2D55450520E4E45DCFF980B7F45142EC14D131647D85D6970E64CC2626F1E225F2C47E9D1AA5AFFBBEE6ACCD31474CF10FD9D87029";

      if (process.env.NODE_ENV === "production") {
        token =
          sessionStorage.getItem("idToken") !== null
            ? sessionStorage.getItem("idToken")
            : (window as any).parent.idToken || "";

        sessionStorage.setItem("idToken", token);
      } else token = sessionStorage.getItem("idToken");

     // if (token != null) {
        //config.headers.Authorization = `Bearer ${token}`;
         config.headers.Authorization = `Bearer BFFB0CC76D9FE43E7958A252A69336BCFE504DC4325EA198C30EB4CAA44656133216DCD41FD334C9C1F844F1588C70CBD1CF2B7861BE9DFEC0EE231EF2E1731F8ECAB5D18CD32C346A78A8C258C1F9F1B363595D44E6A9A608F4A5DA7670A6856472682B609207953AED20695F119796F3352623DD0CCF784454A92AC16D9140E36D4AB39B81D3677A0EB1E2B4D134C43C254F56F8EE89CEF8309744D3A7761A5B6569B3A706E3B41DE4FD4BA05D1366BF84FDE8F084F26F636443307C7C645A5B5B89141D3513AE43A8DDB5CB44DB88AA72514DF3506439243D52C0974A82AB437F3CE7923F1F80588EF9B60C3751BAF523E05F32BDEB19ED48AC0FACB1A76FE287B3582F85707E9E98B58B439FAA00B2196FCD304991BE5F68BBA501275CF3380E7A3D20DAA2914DA6E8B9809FA6647324C1AC967A1E151D58706238FACD488C10F045C7265D0333B98D80A5542D3A5F30CAEE407B14ED365F004BA9F84E200E46B26E03A0C52A61FDB777867325BE47467ABA8972910C834AF6C9A406637599CE16FA94922B92A8D3F767AD5FFD60CE16A4E6DE5610C569210AFE96435F30E38CE03D1A26AF8B6CD11489BEB1290BC7758B481BB2A68C274F4284F2354E4030371B8C6B4921782BB4CADC43F7CF64907E4206B08B7949A25C5FC8FDFDE59C06C9D67F8B5407DC3695C53DE0E735C97D5E43F94A94BFA67006A86F40519A0ECC2BA0C688A29EACE1E45FF2A5AC11C3EF27EEEC2D3311A29B6CE58A1F67B2228B45C4074EFE578CD9B4E779808273F96EAB8658EA01E10B74EC4C6E1662549CF3CF24973B64BDA3D48FDDB030923D9D82C2DB655393A56DE49FB1428DE35E7B445634EBAE9EBD413078A8B71FEA411A6658658A81B857266650868A09CD38FAFF18CA2704156C4C8DB8AE3168699AB5F315B3C1A6FC222DBF2811F8AE3157E19D891C2CA62E30F9B486626D5C4B3104AD3AB40BA7C8DD02B8EB8C97BFFB1C797C33D23E21FD7259A2330DBA7E9434B5ADEEB34B1D1D273DD1D8F7459B0AF9BAE13EB5B2669FB1DB6EC8E0F0981D116A7C744133461B55B31BB726D278B8E90163150953E062940D234398A16788356D7D4368328D9D7F6F5BA69B48EA6206AB9188A9CDE3CFFAB99D227116D1739D49E073016FB67D25615CCA5BB45A873E928D928B85CEA7B0228C371DDA6671745AB5ED933725727DD473F34A281C602BAF1D59672AB96DCA58417F25DF048D1D030F2311C23E1377E7169CAF1D440985B219C0329DED81E950A26F023C7AD81D48A70C197A2D8D461E1595EB1E03110036917FD45C0B9BE89CF468700C44E8B9D35EABE343EF2929D3AE8BFA0BB924B73718A4BEAB9D4CC3C2502D0B11AB0E53D81F643B172A8DF0FAE7ACC4E3133A2A2D55450520E4E45DCFF980B7F45142EC14D131647D85D6970E64CC2626F1E225F2C47E9D1AA5AFFBBEE6ACCD31474CF10FD9D87029`;
        config.headers.Mac = HeaderMac;
      //}
    }

    return config;
  } catch (error) {
    throw new Error("API Failed");
  }
};

class Http {
  private instance: AxiosInstance | null = null;
  private baseUrl = "";
  private macid = "";
  private cityCs = "";
  private formattedMac = "";

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }
  constructor() {
    if (typeof window !== "undefined") {
      this.baseUrl = process.env.REACT_PUBLIC_SERVICE_URL ||
        "https://webdev2.alarmnet.com/AlarmNet360API/v3/api";
      const oldWorkflow =
        new URL(window.location.href).searchParams.get("oldWorkflow") || false;

      this.cityCs =
        new URL(window.location.href).searchParams.get("cityCs") || "87-CD-1712";
      this.macid =
        new URL(window.location.href).searchParams.get("DeviceID") || "";
      this.formattedMac = generateMAC(this.cityCs);
      if (!oldWorkflow) {
        if (this.macid === "" || this.macid === "false") {
          HeaderMac = this.formattedMac; /*if macid is not available*/
        } else {
          HeaderMac = this.macid; /*if macid is available*/
        }
      } else {
        if (
          this.macid === "" ||
          this.macid === "false" ||
          this.macid === null
        ) {
          HeaderMac = this.cityCs;
        } else {
          HeaderMac = this.macid;
        }
      }
    }
  }

  initHttp() {
    const http = axios.create({
      baseURL: this.baseUrl,
      headers,
      withCredentials: false,
    });

    http.interceptors.request.use(injectToken, (error) =>
      Promise.reject(error)
    );

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    );

    this.instance = http;
    return http;
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }
  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.patch<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const payload = { data: {} };
    payload.data = { ...data };
    if (config) config.data = payload.data;
    return this.http.delete<T, R>(url, payload);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private handleError(error: any) {
    if (error !== undefined) {
      errorSubject.next("true");

      const { status } = error;

      switch (status) {
        case StatusCode.InternalServerError: {
          // Handle InternalServerError
          break;
        }
        case StatusCode.Forbidden: {
          // Handle Forbidden
          break;
        }
        case StatusCode.Unauthorized: {
          // Handle Unauthorized
          break;
        }
        case StatusCode.TooManyRequests: {
          // Handle TooManyRequests
          break;
        }
      }

      return Promise.reject(error);
    }
  }
}

export const http = new Http();
