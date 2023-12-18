import Entity from "shared/entities/Entity";
import UniqueEntityID from "shared/entities/UniqueEntityID";

interface INotificationEntity {
  id: UniqueEntityID;
  title: string;
  readed: boolean;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export default class NotificationEntity extends Entity<INotificationEntity> {
  get title() {
    return this.props.title;
  }

  get readed() {
    return this.props.readed;
  }

  get content() {
    return this.props.content;
  }
}
