import { singleton as tsyringeSingleton } from "tsyringe";

export default function singleton() {
  return tsyringeSingleton();
}
