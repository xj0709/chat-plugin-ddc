
import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { extractResult} from '@/data-dev';
import { RequestData, ResponseData } from '@/type-dev';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { dirpath, endtime, starttime, time } = (await req.json()) as RequestData;

  const ddcresult = dirpath !== 'no' ? 'ok' : 'fail';

  const buildresult: ResponseData = {
    dirpath: `${starttime}_${endtime}_or_${time}`,
    result: extractResult[ddcresult],
    today: Date.now(),
  };

//   console.log(buildresult);

  return new Response(JSON.stringify(buildresult));
};
