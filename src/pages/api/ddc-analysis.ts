
import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { buildResult} from '@/data-dev';
import { RequestData, ResponseData } from '@/type-dev';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { baseline, gttscope } = (await req.json()) as RequestData;

  const bresult = gttscope === 'normal' ? 'ok' : 'fail';

  const buildresult: ResponseData = {
    baseline: baseline,
    result: gttscope ? buildResult[bresult] : Object.values(buildResult).flat(),
    today: Date.now(),
  };

//   console.log(buildresult);

  return new Response(JSON.stringify(buildresult));
};
