import React from 'react';
import {Typography, Badge, Popover, Checkbox} from 'antd';
import { DownOutlined} from "@ant-design/icons";

import {ResizedComp} from "./Resize";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
        <div className={styles.filterPanel}>
            <div className={styles.filterItem}>
            <Typography.Text>Title</Typography.Text>
            <Badge color={"#7D52CB"} count={1} />
            <Popover
                // visible={true}
                placement={"bottom"}
                // onVisibleChange={() => {}}
                content={<>Content</>}
                trigger={"click"}
            >
                <DownOutlined />
            </Popover>
            </div>
            <div className={styles.filterItem}>
                <Typography.Text>Title 2</Typography.Text>
                <Badge color={"#7D52CB"} count={1} />
                <Popover
                    // visible={true}
                    placement={"bottom"}
                    // onVisibleChange={() => {}}
                    content={<>Content</>}
                    trigger={"click"}
                >
                    <DownOutlined />
                </Popover>
            </div>
        </div>
        <ResizedComp />
    </div>
  );
}

export default App;
