export const usePhone = () => ({
  type: "USE_PHONES",
});

export const useSetPhones = (phones) => ({
  type: "SET_PHONES",
  phones,
});
