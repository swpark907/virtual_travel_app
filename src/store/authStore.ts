import { makeAutoObservable } from "mobx";

class AuthStore {
  isAuthenticated: boolean;
  user: any;
  err: boolean;

  constructor() {
    this.isAuthenticated = false;
    this.user = null;
    this.err = false;
    makeAutoObservable(this);
  }

  login(user: any) {
    this.user = user;
    this.isAuthenticated = true;
  }

  logout() {
    this.user = null;
    this.isAuthenticated = false;
  }

  loginErr() {
    this.user = null;
    this.isAuthenticated = false;
    this.err = true;
  }

  setUser(user: any) {
    this.user = user;
  }
}

const authStore = new AuthStore();
export default authStore;
