import { lobeChat } from '@lobehub/chat-plugin-sdk/client';
import { Button } from 'antd';
import { memo, useEffect, useState } from 'react';
import { Center } from 'react-layout-kit';

import Data from '@/components/Render';
import { startBuild } from '@/services/startbuild';
import { ResponseData } from '@/type-dev';

const Render = memo(() => {
  // 初始化渲染状态
  const [data, setData] = useState<ResponseData>();

  // 初始化时从主应用同步状态
  useEffect(() => {
    lobeChat.getPluginMessage().then(setData);
  }, []);

  // 记录请求参数
  const [payload, setPayload] = useState<any>();

  useEffect(() => {
    lobeChat.getPluginPayload().then((payload) => {
      if (payload.name === 'startBuildAssistant') {
        setPayload(payload.arguments);
        // console.log(payload.arguments);
      }
    });
  }, []);

  const fetchData = async () => {
    const data = await startBuild(payload);
    setData(data);
    lobeChat.setPluginMessage(data);
  };

  return data ? (
    <Data {...data}></Data>
  ) : (
    <Center style={{ height: 150 }}>
      <Button
        disabled={!payload}
        onClick={() => {
          fetchData();
        }}
        type={'primary'}
      >
        Start Build
      </Button>
    </Center>
  );
});

export default Render;
