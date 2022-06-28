export interface Employee {
    name: {
      first: string;
      last: string;
    };
    login: {
      uuid: string;
    };
    phone: string;
    email: string;
    dob: {
      date: string;
    };
    picture: {
      large: string;
    };
}
