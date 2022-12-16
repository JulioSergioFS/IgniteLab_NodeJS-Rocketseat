import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is the content',
      category: 'social',
      recipientId: 'example-id',
    });

    expect(notification).toBeTruthy();
  });
});
