import 'dotenv/config';

import {CommandInteraction, Client, Interaction} from 'discord.js';
import {Commands} from './route';

import {BotError} from '../constant/text';

export default (client: Client): void => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleSlashCommand(client, interaction);
    }
  });
};

const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction
): Promise<void> => {
  const slashCommand = Commands.find((c) => c.name === interaction.commandName);
  if (!slashCommand) {
    interaction.followUp({content: BotError});
    return;
  }
  await interaction.deferReply();

  if (interaction.user.id != process.env.SECRET_AUTHOR) {
    interaction.followUp({content: BotError});
    return;
  }

  if (interaction.channelId != process.env.SECRET_CHANNEL_ID) {
    interaction.followUp({content: BotError});
    return;
  }

  slashCommand.run(client, interaction);
};
