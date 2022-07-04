import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Img7 from '../images/img7.png'
import Img8 from '../images/img8.png'
import Img9 from '../images/img9.png'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div className="wrap-6">
     <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
       
          <Tab   label="Download the App" className='bag-11' {...a11yProps(0)} />
          <Tab label="Fund your wallet" className='bag-12' {...a11yProps(1)} />
          <Tab label="Buy Assets" className='bag-13' {...a11yProps(2)} />
          <Tab label="Start Farming" className='bag-14' {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="bag-15">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="bag-17">
                  <button className='btn btn-primary'>Step 1</button>
                  <h2>Download the MyFarmPet App</h2>
                  <p>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</p>
                  <a href="">
                  <img src={Img8} alt="" />
                  <img src={Img9} alt="" />
                  <h6>Get the App</h6>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bag-18">
                 <img src={Img7} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>











      <TabPanel value={value} index={1}>
      <div className="bag-15">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="bag-17">
                  <button className='btn btn-primary'>Step 1</button>
                  <h2>Download the MyFarmPet App</h2>
                  <p>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</p>
                  <a href="">
                  <img src={Img8} alt="" />
                  <img src={Img9} alt="" />
                  <h6>Get the App</h6>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bag-18">
                 <img src={Img7} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="bag-15">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="bag-17">
                  <button className='btn btn-primary'>Step 1</button>
                  <h2>Download the MyFarmPet App</h2>
                  <p>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</p>
                  <a href="">
                  <img src={Img8} alt="" />
                  <img src={Img9} alt="" />
                  <h6>Get the App</h6>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bag-18">
                 <img src={Img7} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="bag-15">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="bag-17">
                  <button className='btn btn-primary'>Step 1</button>
                  <h2>Download the MyFarmPet App</h2>
                  <p>Both iOS and Android devices support the "Myfarmpet App." The app is available for download from the Apple Store or Google Play Store.</p>
                  <a href="">
                  <img src={Img8} alt="" />
                  <img src={Img9} alt="" />
                  <h6>Get the App</h6>
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bag-18">
                 <img src={Img7} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
   </div>
  );
}
