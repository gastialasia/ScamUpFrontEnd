export { Api, User }

class Api {

  static token = null;

  static isLoggedIn() {
    return token !== null;
  }

  static get baseUrl() {
    return "https://scam-up.herokuapp.com/api/v1";
  }

  static get timeout() {
    return 60 * 1000;
  }

  static async MyFetch (url, controller) {
    if(!this.isLoggedIn()){
      throw "No user is logged in"
    }
    const response = await fetch(url)
    return response;
  }

  static async fetch(url, init = {}, controller) {
    if (Api.token) {
      if (!init.headers)
        init.headers = {};

      init.headers['Authorization'] = `bearer ${Api.token}`;
    }

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

  static async get(url, data, controller) {
    return await Api.fetch(url, data, controller);
  }

  static async post(url, data, controller) {
    return await Api.fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    }, controller);
  }

  static async put(url, data, controller) {
    return await Api.fetch(url,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    }, controller);
  }

  static async delete(url, controller) {
    return await Api.fetch(url, {
      method: "DELETE",
    }, controller);
  }

  static async login(user) {
    const url = `${Api.baseUrl}/api/v1/auth/login`
    return await Api.get(url);
  }

  static async createUser(user) {
    const url = `${Api.baseUrl}/api/v1/users`
    return await Api.post(url, user);
  }

  static async getEmailData (mail) {
    const url = `${Api.baseUrl}/email_verification?mail=${mail}`
    return await Api.get(url)
  }

  static async getPhoneData (number) {
    const url = `${Api.baseUrl}/phone_verification?phone=+${number}`
    return await Api.myFetch(url)
  }

  static async getSwiftData (code) {
    const url = `${Api.baseUrl}/swift_verification?swift=+${code}`;
    return await Api.myFetch(url)
  }
}

class User {
  constructor(email, pass) {
    this.email = email;
    this.pass = pass;
}
}