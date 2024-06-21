import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { manClothes, womanClothes } from '@/data';
import { RequestData, ResponseData } from '@/type';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { gttscope, baseline } = (await req.json()) as RequestData;

  const clothes = gttscope === 'normal' ? manClothes : womanClothes;

  const result: ResponseData = {
    baseline,
    clothes: baseline ? clothes[baseline] : Object.values(clothes).flat(),
    today: Date.now(),
  };

  return new Response(
    `the build ${result.baseline} you want to start,result is ${result.clothes.map((c) => c.name).join('、')}.`,
  );
};
