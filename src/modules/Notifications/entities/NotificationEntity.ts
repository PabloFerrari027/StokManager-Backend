import Entity from "shared/entities/Entity";

interface INotificationEntity {
  id: string;
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
