export default class InstanceEntity<T> {
  protected instance: T;

  constructor(instance: T) {
    this.instance = instance;
  }

  get getInstance() {
    return this.instance;
  }
}
