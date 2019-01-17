import { accessToken } from '../../.env';

// "apiUrlGithub" gives 30 results from number "fromId"
const apiUrlGithub = (fromId = 0) => `https://api.github.com/users?since=${fromId}&access_token=${accessToken}`;
const apiUrlJson = 'https://fetchbutton.free.beeceptor.com/json';
const apiUrlText = 'https://fetchbutton.free.beeceptor.com/text';

export default {
  giveGithubUsers: apiUrlGithub,
  jsonType: apiUrlJson,
  textType: apiUrlText,
};
