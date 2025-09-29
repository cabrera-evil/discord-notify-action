import { TDiscordMessage } from '@/types/discord';
import * as core from '@actions/core';
import axios, { AxiosInstance } from 'axios';

export class DiscordService {
	private static instance: DiscordService;
	private axiosInstance: AxiosInstance;

	constructor() {
		this.axiosInstance = axios.create({
			baseURL: core.getInput('webhook_url', { required: true }),
			headers: {
				'X-GitHub-Event': core.getInput('event_name') ?? 'default_event',
			},
		});
		DiscordService.instance = this;
	}

	public static getInstance(): DiscordService {
		return DiscordService.instance ?? new DiscordService();
	}

	async notify(payload: TDiscordMessage) {
		await this.axiosInstance.post('', payload, {
			params: {
				wait: true,
			},
		});
	}
}
