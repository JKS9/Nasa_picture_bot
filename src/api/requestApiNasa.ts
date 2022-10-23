import axios, {AxiosResponse} from 'axios';
import 'dotenv/config';

import MessageSetting from '../helpers/message';

const API_NASA_KEY: string = process.env.API_NASA_KEY as string;

const ApiNasaRequest = async () => {
  const URL = 'https://api.nasa.gov/planetary/apod?api_key=' + API_NASA_KEY;
  try {
    const result: AxiosResponse<any, any> = await axios.get(URL);

    const content: string = MessageSetting(result.data);

    return content;
  } catch (e: any) {
    console.log(e, e);
    return false;
  }
};

export default ApiNasaRequest;
