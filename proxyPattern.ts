interface IUserServices {
  getUser(id: number): string;
}

class UserServices implements IUserServices {
  getUser(id: number): string {
    console.log("fetching user data");
    return `User data from Id ${id}`;
  }
}

class UserServicesProxy implements IUserServices {
  private userServices: IUserServices;
  private authorizedUser: Set<number>;

  constructor() {
    this.userServices = new UserServices();
    this.authorizedUser = new Set<number>([1, 2, 3, 4]);
  }

  getUser(id: number): string {
    console.log("proxy: checking authorization...");
    if (!this.authorizedUser.has(id)) {
      throw new Error("unauthorized access");
    }
    console.log("proxy: access granted.");
    return this.userServices.getUser(id);
  }
}

const proxy = new UserServicesProxy();

try {
  console.log(proxy.getUser(1));
  console.log(proxy.getUser(2));
} catch (error) {
  console.log(error);
}
