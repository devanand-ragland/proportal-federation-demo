//-------------------Deprecated Notice, remove this after moving code to Api.tsx------------------//

import { ApolloClient, InMemoryCache, ApolloLink } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import makeServer from "../../mirage/server";
import Schema from "../models/Schema";
import { useEffect } from "react";

const cache = new InMemoryCache({ resultCaching: false });
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const authLink = new ApolloLink((operation, forward) => {
  if (typeof window !== "undefined") {
    let token: any = "";

    if (process.env.NODE_ENV === "production") {
      token =
        sessionStorage.getItem("idToken") !== null
          ? sessionStorage.getItem("idToken")
          : (window as any).parent.idToken || "";

      sessionStorage.setItem("idToken", token);
    } else token = sessionStorage.getItem("idToken");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",

        Origin: window.location.origin,
      },
    });
  }

  return forward(operation);
});

class ApiService {
  client: any;

  constructor() {
    //enable mirage if local flag is set to serve from mirage
    if (typeof window !== "undefined") {
      if (
        new URL(window.location.href).searchParams.get("mirageEnabled") ==
        "true"
      )
        makeServer();
    }

    if (typeof window !== "undefined") {
      console.log("API endpoint :::" + sessionStorage.getItem("graphqlApi"));
      const graphqlUrl: any = "http://localhost:3008/graphql";
      // const graphqlUrl: any =
      //   sessionStorage.getItem("graphqlApi") !== null
      //     ? sessionStorage.getItem("graphqlApi") ||
      //       process.env.NEXT_PUBLIC_SERVICE_URL
      //     : new URL(window.location.href).searchParams.get("graphqlapi") ||
      //       process.env.NEXT_PUBLIC_SERVICE_URL;

      // sessionStorage.setItem(
      //   "graphqlApi",
      //   new URL(window.location.href).searchParams.get("graphqlapi") || ""
      // );

      // sessionStorage.setItem("graphqlApi", graphqlUrl.toString());

      console.log(graphqlUrl);

      const httpLink = createHttpLink({
        uri: graphqlUrl !== undefined ? graphqlUrl.replace(/"/g, "") : "",
      });
      this.client = new ApolloClient({
        link: errorLink.concat(authLink.concat(httpLink)),
        cache,
      });
    }
  }

  // qos grid data
  async getQosGridData(params = {}) {
    try {
      const query = Schema.getQosGridData;
      const data = await this.composeQuery(query, params);
      console.log("Dataa :>> ", data, query);
      if (data) {
        return data;
      }
    } catch (e) {
      console.error(`An error ${e.message} occured in getQosGridData`);
    }
  }
  // activity grid data
  async getActivityGridData(params = {}) {
    try {
      const query = Schema.getActivityGridData;
      const data = await this.composeQuery(query, params);
      console.log("Dataa :>> ", data, query);
      if (data) {
        return data;
      }
    } catch (e) {
      console.error(`An error ${e.message} occured in getActivityGridData`);
    }
  }
  // activity Device information data
  async getDeviceInfo(params = {}) {
    try {
      const query = Schema.getDeviceInfo;
      const data = await this.composeQuery(query, params);
      console.log("Dataa :>> ", data, query);
      if (data) {
        return data;
      }
    } catch (e) {
      console.error(`An error ${e.message} occured in getDeviceInfo`);
    }
  }
  // activity Device List
  async getDeviceListData(params = {}) {
    try {
      const query = Schema.getDeviceListData;
      const data = await this.composeQuery(query, params);
      console.log("Dataa :>> ", data, query);
      if (data) {
        return data;
      }
    } catch (e) {
      console.error(`An error ${e.message} occured in getDeviceListData`);
    }
  }
  // Mobilegrid list
  async getMobileCameraGrid(params = {}) {
    try {
      const query = Schema.getMobileCameraGrid;
      const data = await this.composeQuery(query, params);
      console.log("Dataa :>> ", data, query);
      if (data) {
        return data;
      }
    } catch (e) {
      console.error(`An error ${e.message} occured in getMobileCameraGrid`);
    }
  }
  // Mobilegrid list
  async getPanelData(params = {}) {
    try {
      const query = Schema.getPanelData;
      const data = await this.composeQuery(query, params);
      console.log("Dataa :>> ", data, query);
      if (data) {
        return data;
      }
    } catch (e) {
      console.error(`An error ${e.message} occured in getPanelData`);
    }
  }

  async composeQuery(query: any, params: any) {
    const { data, errors } = await this.client.query({
      query,
      variables: params,
      errorPolicy: "all",
      fetchPolicy: "no-cache",
    });
    if (errors) console.log(errors);
    if (data) return data;
  }

  async composeMutation(mutation: any, params: any) {
    let data: any;
    await this.client
      .mutate({
        mutation,
        variables: params,
        errorPolicy: "all",
        fetchPolicy: "no-cache",
      })
      .then((response: any) => {
        if (response.errors && response.errors.length > 0)
          console.log(response.errors);
        data = response.data;
      })
      .catch((ex: Error) => {
        console.log(ex);
      });
    if (data) return data;
  }
}

export default new ApiService();
