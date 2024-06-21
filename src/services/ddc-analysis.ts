import { RequestData } from '@/type-dev';

export const startBuild = async (params: RequestData) => {
  const res = await fetch('/api/ddc-analysis', {
    body: JSON.stringify(params),
    method: 'POST',
  });
  // console.log(res.json());
  return res.json();
};
