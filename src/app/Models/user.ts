export class User {

  id: number;
  private username: string;
  private password: string;
  private email: string;

  constructor() {
    this.username = '';
  }


  setUsername(value: string) {
    this.username = value;
  }

  setPassword(value: string) {
    this.password = value;
  }

  setEmail(value: string) {
    this.email = value;
  }
}
