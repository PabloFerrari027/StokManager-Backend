import ICreateNotificationDTO from "../DTOs/ICreateNotificationDTO";
import IDeleteNotificationDTO from "../DTOs/IDeleteNotificationDTO";
import IFindNotificationDTO from "../DTOs/IFindNotificationDTO";
import IListNotificationsDTO from "../DTOs/IListNotificationsDTO";

import NotificationEntity from "../entities/NotificationEntity";

export default interface INotificationsRepository {
  create(data: ICreateNotificationDTO): Promise<NotificationEntity>;
  findById(data: IFindNotificationDTO): Promise<NotificationEntity | null>;
  list(data: IListNotificationsDTO): Promise<NotificationEntity[]>;
  delete(data: IDeleteNotificationDTO): Promise<void>;
}
