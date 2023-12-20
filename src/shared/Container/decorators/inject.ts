import { inject as tsyringeInject } from "tsyringe";

export default function inject(token: string) {
  return tsyringeInject(token);
}
