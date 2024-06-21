
import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { extractResult} from '@/data-dev';
import { RequestData, ResponseData } from '@/type-dev';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { dirpath, endtime, starttime, time } = (await req.json()) as RequestData;

  const ddcresult = dirpath === 'no' ? 'fail' : 'ok';

  const extractresult: ResponseData = {
    dirpath: `${dirpath} from ${starttime} to ${endtime} and ${time}`,
    result: extractResult[ddcresult],
    today: Date.now(),
  };

//   console.log(buildresult);

  return new Response(JSON.stringify(extractresult));
};
