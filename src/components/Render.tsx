import { Card } from 'antd';
import { createStyles } from 'antd-style';
import dayjs from 'dayjs';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ResponseData } from '@/type-dev';

const useStyles = createStyles(({ css, token }) => ({
  date: css`
    color: ${token.colorTextQuaternary};
  `,
}));

const Render = memo<Partial<ResponseData>>(({ dirpath, result, today }) => {
  const { styles } = useStyles();

  return (
    <Flexbox gap={24}>
      <Flexbox distribution={'space-between'} horizontal>
        🌟directory_path:{dirpath}
        <span className={styles.date}>{dayjs(today).format('YYYY/MM/DD')}</span>
      </Flexbox>
      <Flexbox gap={8}>
        extractDDC
        <Flexbox gap={12} horizontal style={{ overflow: 'scroll' }}>
          {result?.map((item) => (
            <Card key={item.dir} size={'small'} title={item.dir}>
              {item.description}
            </Card>
          ))}
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
});

export default Render;
