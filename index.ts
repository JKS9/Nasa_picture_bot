import {Client, CommandInteraction} from 'discord.js';

import 'dotenv/config';

import ready from './src/ready';
import interactionCreate from './src/interaction/interactionCreate';

const token: string = process.env.TOKEN_BOT_DISCORD_SECRET as string;

console.log('Bot is starting...');

const client: Client<boolean> = new Client({
  intents: [],
});

ready(client);
interactionCreate(client);

client.login(token);
