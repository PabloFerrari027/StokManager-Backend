import { injectable as tsyringeInjectable } from "tsyringe";

export default function injectable() {
  return function (target: any) {
    tsyringeInjectable()(target);
  };
}
