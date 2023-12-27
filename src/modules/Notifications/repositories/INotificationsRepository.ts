import NotificationEntity from "../entities/NotificationEntity";

import {
  ICreateNotification,
  IFindNotificationByID,
  IListNotifications,
  IDeleteNotification,
} from "./types";

export default interface INotificationsRepository {
  create(data: ICreateNotification): Promise<NotificationEntity>;
  findByID(data: IFindNotificationByID): Promise<NotificationEntity | null>;
  list(data: IListNotifications): Promise<NotificationEntity[]>;
  delete(data: IDeleteNotification): Promise<void>;
}
