interface IDuplicityErrorInCategoryName {
  SKUPrefix: string;
  message?: string;
}

export default class DuplicityErrorInCategorySKUPrefix extends Error {
  constructor({ SKUPrefix, message }: IDuplicityErrorInCategoryName) {
    const errorMessage =
      message ??
      `Uma categoria com o prefixo do SKU ${SKUPrefix} já existe, portanto não poderá ser cadastrada novamente!`;

    super(errorMessage);
  }
}
