export { Api, ApiUser };

class Api {

  static token = null;
  static username = null;

  static setToken(token) {
    this.token = token;
  }

  static setUsername(username) {
    this.username = username;
  }

  static isLoggedIn() {
    return token !== null && username !== null;
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

      init.headers['x-token'] = `${Api.token}`;
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

  static async get(url, controller) {
    return await Api.fetch(url, controller);
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

  static async login(user, rememberMe) {
    try{
      /**
      const url = `${Api.baseUrl}/auth/login`
      const res = await Api.post(url, user);
      Api.token = res.token;
      const username = user.email.substring(0, user.email.indexOf('@'))
      Api.username = username
      //if(rememberMe) {
        window.localStorage.setItem("x-token", res.token);
        window.localStorage.setItem("username", username ); 
      return res.token;
         */
        Api.token = "AAAAA"
        Api.username = "BBBBB"
        window.localStorage.setItem("x-token", "AAAAA");
        window.localStorage.setItem("username", "BBBBBB");
        return "AAAAAA"
      //}
    } catch (e) {
      // console.log(e);
      console.log("Fallo esto");
      return 0;
    }
  }

  static async logout () {
    console.log("logout")
    this.token = null;
    this.username = null;
    window.localStorage.removeItem("x-token");
    window.localStorage.removeItem("username");
}

  static async createUser(user) {
    const url = `${Api.baseUrl}/users`
    return await Api.post(url, user);
  }

  static async getEmailData (mail) {
    const url = `${Api.baseUrl}/email_verification?mail=${mail}`
    return await Api.get(url)
  }

  static async getPhoneData (number) {
    const url = `${Api.baseUrl}/phone_verification?phone=${number}`
    return await Api.get(url)
  }

  static async getSwiftData (swift) {
    const url = `${Api.baseUrl}/swift_verification?swift=${swift}`;
    return await Api.get(url)
  }

  static async getUserEmail () {
    try{
      const url = `${Api.baseUrl}/users/userData`;
      const res = await Api.post(url);
      return res;
    } catch (e) {
      return '';
    }
  }
}

class ApiUser {
  constructor(email, pass) {
    this.email = email;
    this.password = pass;
}
}