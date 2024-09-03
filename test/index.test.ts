import { getInput, info, setFailed } from '@actions/core';
import { main } from '../src/index';
import { DiscordService } from '../src/services/discord.service';

jest.mock('../src/services/discord.service', () => ({
  DiscordService: {
    getInstance: jest.fn().mockReturnValue({
      notify: jest.fn().mockResolvedValue(true),
    }),
  },
}));

describe('main function tests', () => {
  it('should send a Discord notification successfully', async () => {
    await main();
    expect(getInput).toHaveBeenCalledWith('webhook_url', { required: true });
    expect(DiscordService.getInstance).toHaveBeenCalled();
    expect(info).toHaveBeenCalledWith('Discord notification sent successfully');
  });

  it('should handle errors gracefully', async () => {
    const mockNotify = jest.spyOn(DiscordService.getInstance(), 'notify');
    mockNotify.mockRejectedValueOnce(new Error('Mock error'));
    await main();
    expect(setFailed).toHaveBeenCalledWith(
      'Failed to send Discord notification: Mock error',
    );
  });
});
