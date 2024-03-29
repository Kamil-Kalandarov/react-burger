export type TIngredients = {
  [x: string]: any;
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: "bun" | "main" | "sauce";

  _id: string;
  id: string;
  count?: number;
};

export type TOrder = {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
};

export type TOrders = {
  orders: Array<TOrder>;
  total: number;
  totalToday: number
};

export type TUser = {
  readonly name: string;
  readonly email: string;
}

export type TGetUser = {
  success: boolean;
  user: TUser;
}

export type TError = {
  success: boolean;
  message: string;
}

export type TLocation = {
  background: {
    pathname: string;
    search: string;
    hash: string;
    state: null;
    key: string;
  }
  from: string;
  state?: object; 
}