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

export type TOrders = {
  createdAt: string
  ingredients: Array<string>
  name: string
  number: number
  status: string
  updatedAt: string
  _id: string
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