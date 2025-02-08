export type UserI = {
  id?: string;
  username: string;
};

type TokensI = string;

type AuthUserI = UserI | null | undefined;
type AuthTokenI = TokensI | null | undefined;

export interface AuthStateI {
  user?: AuthUserI;
  token?: AuthTokenI;
  error?: string;
  loading?: boolean;
}
