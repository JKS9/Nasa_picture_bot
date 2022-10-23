import {CommandInteraction, Client} from 'discord.js';

import ApiNasaRequest from '../api/requestApiNasa';

import {BotError} from '../constant/text';

const Nasa = async (interaction: CommandInteraction) => {
  let content: string | boolean = await ApiNasaRequest();

  if (content != false) {
    await interaction.followUp({
      content,
    });
    return;
  } else {
    content = BotError;
    await interaction.followUp({
      content,
    });
    return;
  }
};

export default Nasa;
