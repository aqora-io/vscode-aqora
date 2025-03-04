type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;

export type CamelToSnakeCaseNested<T> = T extends object
  ? {
      [K in keyof T as CamelToSnakeCase<K & string>]: CamelToSnakeCaseNested<
        T[K]
      >;
    }
  : T;

type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S;

export type SnakeToCamelCaseNested<T extends Record<string, any>> = {
  [K in keyof T as SnakeToCamelCase<K & string>]: T[K];
};
