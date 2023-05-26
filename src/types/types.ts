export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddressType;
  phone: string;
  website: string;
  company: UserCompanyType;
};

export type UserAddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserGeoType;
};

export type UserGeoType = {
  lat: string;
  lng: string;
};

export type UserCompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};
