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