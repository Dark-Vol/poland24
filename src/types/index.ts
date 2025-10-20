export type Intersect<
  T extends Record<string, unknown>,
  K extends Record<keyof T, unknown>,
> = {
  [P in keyof T & keyof K]: T[P] | K[P];
};
