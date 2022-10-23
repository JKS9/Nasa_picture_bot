import {IDataApiNasa} from '../types/interface';

const MessageSetting = (data: IDataApiNasa) => {
  const content: string =
    ' > **' +
    data.title +
    '** \n \n **date :** \n' +
    data.date +
    ' \n \n **description :** \n' +
    data.explanation +
    ' \n \n **copyright :** \n' +
    data.copyright +
    ' \n \n' +
    data.hdurl;

  return content;
};

export default MessageSetting;
