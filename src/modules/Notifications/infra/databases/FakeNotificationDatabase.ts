import NotificationEntity from "modules/Notifications/entities/NotificationEntity";

import INotificationsRepository from "modules/Notifications/repositories/INotificationsRepository";
import {
  ICreateNotification,
  IFindNotificationByID,
  IListNotifications,
  IDeleteNotification,
} from "modules/Notifications/repositories/types";

export default class FakeNotificationDatabase
  implements INotificationsRepository
{
  public notifications: NotificationEntity[] = [];

  public async create({ data }: ICreateNotification) {
    this.notifications.push(data);

    return data;
  }

  public async findByID({ id }: IFindNotificationByID) {
    const notification = this.notifications.find((i) => i.id === id) || null;

    return notification;
  }

  public async list({ skip = 0, take = 10 }: IListNotifications) {
    return this.notifications.slice(skip, take);
  }

  public async delete({ id }: IDeleteNotification) {
    const index = this.notifications.findIndex((i) => i.id === id);
    this.notifications.splice(index, 1);
  }
}
