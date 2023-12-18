import ICreateNotificationDTO from "modules/Notifications/DTOs/ICreateNotificationDTO";
import IDeleteNotificationDTO from "modules/Notifications/DTOs/IDeleteNotificationDTO";
import IFindNotificationDTO from "modules/Notifications/DTOs/IFindNotificationDTO";
import IListNotificationsDTO from "modules/Notifications/DTOs/IListNotificationsDTO";
import NotificationEntity from "modules/Notifications/entities/NotificationEntity";

import INotificationsRepository from "modules/Notifications/repositories/INotificationsRepository";

export default class FakeNotificationDatabase
  implements INotificationsRepository
{
  public notifications: NotificationEntity[] = [];

  public async create({ data }: ICreateNotificationDTO) {
    this.notifications.push(data);

    return data;
  }

  public async findById({ id }: IFindNotificationDTO) {
    const notification = this.notifications.find((i) => i.id === id) || null;

    return notification;
  }

  public async list({ skip = 0, take = 10 }: IListNotificationsDTO) {
    return this.notifications.slice(skip, take);
  }

  public async delete({ id }: IDeleteNotificationDTO) {
    const index = this.notifications.findIndex((i) => i.id === id);
    this.notifications.splice(index, 1);
  }
}
