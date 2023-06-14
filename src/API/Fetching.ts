import { objectToQueryString } from "../utils/serialize";

class Fetching {
  static async getAll(url: string, method: string = 'GET', params?: object) {
    if (typeof sessionStorage.getItem(url) === 'string') {
      const resultStor: string = sessionStorage.getItem(url) || '';
      return JSON.parse(resultStor);
    }
    let result;

    const queryParams: string = params ? "?" + objectToQueryString(params) : "";
    
    try {
      const response = await fetch(url + queryParams, {
        method,
        headers: {
            'X-API-KEY': 'bd41c576-b9b8-455e-b3fa-dc54c04dc1dd',
            'Content-Type': 'application/json',
        },
      });
      result = await response.json();
      sessionStorage.setItem(url, JSON.stringify(result));
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  static async getNewAll(url: string, method: string = 'GET', params?: object) {
    try {
      const queryParams: string = params ? "?" + objectToQueryString(params) : "";

      console.log(url + queryParams)
      const response = await fetch(url + queryParams, {
        method,
        headers: {
          'Content-Type': 'application/jsnpm install @react-oauth/google@lateston'
        }
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  static async putEditObject(url: string, body: object) {
    try {
      console.log(body)

      const response = await fetch(url, {
        mode: 'cors',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(body)
      });

      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  static async getFilters(url: string, method: string = 'GET', params?: object) {
    try {
      const queryParams: string = params ? objectToQueryString(params) : "";

      const response = await fetch(url + `?timestamp=${new Date().getTime()}&` + queryParams, {
        mode: 'cors',
        method,
        headers: {
          'Content-Type': 'application/json',
          'Pragma': 'no-cache',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'X-Requested-With': 'XMLHttpRequest',
          'Expires': '0',
        },
        cache: 'reload'
      });

      const result = await response.json();
      console.log(url + `?timestamp=${new Date().getTime()}&` + queryParams)
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

export default Fetching;
