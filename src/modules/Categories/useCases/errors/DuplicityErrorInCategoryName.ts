interface IDuplicityErrorInCategoryName {
  name: string;
  message?: string;
}

export default class DuplicityErrorInCategoryName extends Error {
  constructor({ name, message }: IDuplicityErrorInCategoryName) {
    const errorMessage =
      message ??
      `Uma categoria com o nome ${name} já existe, portanto não poderá ser cadastrada novamente!`;

    super(errorMessage);
  }
}
