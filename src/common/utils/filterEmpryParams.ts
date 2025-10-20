export function filterEmptyParam<ParamsType>(paramsObject): ParamsType {
  return Object.entries(paramsObject).reduce(
    (acc, [key, value]) =>
      typeof value === "boolean" || value ? { ...acc, [key]: value } : acc,
    {}
  ) as ParamsType;
}
