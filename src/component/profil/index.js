import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "./index.module.sass"
import { Profile } from '../../component/formpro/index.jsx'
import { Historycontent } from '../history_content/index.jsx'
import { Settings } from '../settings_block/index.jsx'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs className={styles.tab_content}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab className={styles.tab_item} label="Профиль" {...a11yProps(0)} />
        <Tab className={styles.tab_item} label="История заказов" {...a11yProps(1)} />
        <Tab className={styles.tab_item} label="История поиска" {...a11yProps(2)} />
        <Tab className={styles.tab_item} label="Настройки безопасности" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Profile/>

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Historycontent/>
        
      </TabPanel>
      <TabPanel className={styles.item4}  value={value} index={3}>
        <Settings/>
      </TabPanel>
      
    </Box>
  );
}