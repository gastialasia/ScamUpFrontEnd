export { Api }

class Api {
//   static token;

  static get baseUrl() {
    return "http://scam-up.herokuapp.com/";
  }

  static get timeout() {
    return 60 * 1000;
  }

  static async fetch (url, controller) {
    controller = controller || new AbortController();
    init.signal = controller.signal;
    const timer = setTimeout(() => controller.abort(), Api.timeout);
    try {
        const response = await fetch(url, init);
        const text = await response.text();
        const result = text ? (JSON).parse(text) : {};
        if (result.code)
          throw result;
        return result;
      } catch (error) {
        if (error.code)
          throw error;
        if (error.name === "AbortError")
          throw { "code": 98, "description": error.message.toLowerCase() };
        else if (error.name === "TypeError")
          throw { "code": 99, "description": error.message.toLowerCase() };
      } finally {
        clearTimeout(timer);
      }
  }

  static async email (mail) {
    const url = `${Api.baseUrl}/phone_verification?mail=${mail}`;
    return await Api.fetch(url)
  }

  static async phone (number) {
    const url = `${Api.baseUrl}/phone_verification?phone=+${number}`;
    return await Api.fetch(url)
  }

  static async swift (code) {
    const url = `${Api.baseUrl}/phone_verification?phone=+${code}`;
    return await Api.fetch(url)
  }


//   static async fetch(url, secure, init = {}, controller) {
//     if (secure && Api.token) {
//       if (!init.headers)
//         init.headers = {};

//       init.headers['Authorization'] = `bearer ${Api.token}`;
//     }

//     controller = controller || new AbortController();
//     init.signal = controller.signal;
//     const timer = setTimeout(() => controller.abort(), Api.timeout);

//     try {
//       const response = await fetch(url, init);
//       const text = await response.text();
//       const result = text ? (JSON).parse(text) : {};
//       if (result.code)
//         throw result;
//       return result;
//     } catch (error) {
//       if (error.code)
//         throw error;
//       if (error.name === "AbortError")
//         throw { "code": 98, "description": error.message.toLowerCase() };
//       else if (error.name === "TypeError")
//         throw { "code": 99, "description": error.message.toLowerCase() };
//     } finally {
//       clearTimeout(timer);
//     }
//   }
//   static async get(url, secure, controller) {
//     return await Api.fetch(url, secure, {}, controller);
//   }

//   static async post(url, secure, data, controller) {
//     return await Api.fetch(url, secure, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8"
//       },
//       body: JSON.stringify(data)
//     }, controller);
//   }

//   static async put(url, secure, data, controller) {
//     return await Api.fetch(url, secure,{
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8"
//       },
//       body: JSON.stringify(data)
//     }, controller);
//   }

//   static async delete(url, secure, controller) {
//     return await Api.fetch(url, secure, {
//       method: "DELETE",
//     }, controller);
//   }
}