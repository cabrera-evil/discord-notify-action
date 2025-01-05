import { main } from '@/index';
import { DiscordService } from '@/services/discord';
import { createEmbed } from '@/utils/embed';
import * as core from '@actions/core';

jest.mock('@/services/discord');
jest.mock('@/utils/embed');
jest.mock('@actions/core');

const mockNotify = jest.fn();
DiscordService.getInstance = jest.fn().mockReturnValue({
  notify: mockNotify,
});

describe('main function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (core.getInput as jest.Mock).mockImplementation(
      (input: keyof { username: string; avatar_url: string }) => {
        const inputs: { username: string; avatar_url: string } = {
          username: 'test-username',
          avatar_url: 'test-avatar-url',
        };
        return inputs[input];
      },
    );
    (createEmbed as jest.Mock).mockReturnValue({ title: 'Test Embed' });
  });

  it('should send a notification with the correct payload', async () => {
    await main();
    expect(DiscordService.getInstance).toHaveBeenCalledTimes(1);
    expect(createEmbed).toHaveBeenCalledTimes(1);
    expect(mockNotify).toHaveBeenCalledWith(
      expect.objectContaining({
        embeds: [{ title: 'Test Embed' }],
        username: 'test-username',
        avatar_url: 'test-avatar-url',
      }),
    );
  });

  it('should omit nil values from the payload', async () => {
    (core.getInput as jest.Mock).mockImplementation(
      (input: keyof { username: string | null; avatar_url: string }) => {
        const inputs: { username: string | null; avatar_url: string } = {
          username: null,
          avatar_url: 'test-avatar-url',
        };
        return inputs[input];
      },
    );
    await main();
    expect(mockNotify).toHaveBeenCalledWith(
      expect.not.objectContaining({ username: null }),
    );
  });

  it('should call core.setFailed when an error is thrown', async () => {
    const errorMessage = 'Test Error';
    mockNotify.mockRejectedValueOnce(new Error(errorMessage));
    await main();
    expect(core.setFailed).toHaveBeenCalledWith(
      `Failed to send Discord notification: ${errorMessage}`,
    );
  });
});
