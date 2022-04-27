export interface IPost {
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: IAddress;
}

export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}
