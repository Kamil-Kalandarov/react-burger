export type TIngredients = {
  readonly calories: number;
  readonly carbohydrates: number;
  readonly fat: number;
  readonly image: string;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly name: string;
  readonly price: number;
  readonly proteins: number;
  readonly type: "bun" | "main" | "sauce";
  readonly __v: number;
  readonly _id: string;
  id?: string;
  count?: number;
};

export type TOrder = {
  createdAt: string,
  ingredients: ReadonlyArray<TIngredients>,
  name: string,
  number: number,
  status: string,
  updatedAt: string,
  _id: string,
};

export type TOrders = {
  orders: Array<TOrder>,
  total: number,
  totalToday: number
};

export type TUser = {
  readonly name: string;
  readonly email: string;
}

export type TGetUser = {
  success: boolean
  user: TUser
}

export type TError = {
  success: boolean;
  message: string;
}