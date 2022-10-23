import {CommandInteraction, Client} from 'discord.js';
import {Command} from '../config/Command';

import Nasa from '../controller/nasaController';

const heur: number = 1000 * 60 * 60;
const jours: number = 1000 * 60 * 60 * 24;

export const NasaPicture: Command = {
  name: 'start',
  description: 'Returns a Nasa Picture',
  type: 1,
  run: async (client: Client, interaction: CommandInteraction) => {
    await Nasa(interaction);

    setInterval(() => {
      Nasa(interaction);
      console.log('looping');
    }, heur);
  },
};
