import { lobeChat } from '@lobehub/chat-plugin-sdk/client';
import { memo, useEffect, useState } from 'react';

import Data from '@/components/Render';
import { ResponseData } from '@/type-dev';

const Render = memo(() => {
  const [data, setData] = useState<ResponseData>();
  useEffect(() => {
    lobeChat.getPluginMessage().then((e: ResponseData) => {
      setData(e);
    });
  }, []);

  return <Data {...data}></Data>;
});

export default Render;
