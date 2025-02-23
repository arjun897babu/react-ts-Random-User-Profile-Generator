interface Coordinates {
  lat: number;
  lng: number;
}

interface Address {
  city: string;
  street_name: string;
  street_address: string;
  zip_code: string;
  state: string;
  country: string;
  coordinates: Coordinates;
}

interface Employment {
  title: string;
  key_skill: string;
}

interface Subscription {
  plan: string;
  status: string;
  payment_method: string;
  term: string;
}

interface CreditCard {
  cc_number: string;
}

export interface User {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: Employment;
  address: Address;
  credit_card: CreditCard;
  subscription: Subscription;
}


export interface ApiResponse{
  data:User;
  status: number;
  statusText: string;
}