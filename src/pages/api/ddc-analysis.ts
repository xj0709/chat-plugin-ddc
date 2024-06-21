
import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { extractResult} from '@/data-dev';
import { RequestData, ResponseData } from '@/type-dev';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const data = (await req.json()) as RequestData;

  //{ dirpath, endtime='0', starttime='0', time='0' }
  const ddcresult = data.dirpath === 'no' ? 'fail' : 'ok';

  const extractresult: ResponseData = {
    dirpath: data.dirpath,
    result: extractResult[ddcresult],
    today: Date.now(),
  };

//   console.log(buildresult);

  return new Response(JSON.stringify(extractresult));
};
