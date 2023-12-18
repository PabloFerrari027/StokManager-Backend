import { randomUUID } from "node:crypto";

export default class UniqueEntityID {
  private value: string;

  get id() {
    return this.value;
  }

  constructor(value?: string) {
    this.value = value ?? randomUUID();
  }
}
