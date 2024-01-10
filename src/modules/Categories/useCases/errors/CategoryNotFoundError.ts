interface IDuplicityErrorInCategoryName {
  id: string;
  message?: string;
}

export default class CategoryNotFoundError extends Error {
  constructor({ id, message }: IDuplicityErrorInCategoryName) {
    const errorMessage =
      message ?? `A categoria com ID ${id} não foi encontrada!`;

    super(errorMessage);
  }
}
