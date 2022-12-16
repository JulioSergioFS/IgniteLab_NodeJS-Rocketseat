import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface SendNotificationProps {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: SendNotificationProps,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    return { notification };
  }
}
