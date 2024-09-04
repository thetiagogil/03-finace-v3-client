import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import { Flex } from "./flex";

type TabsStatusProps = {
  trackedTab?: any;
  plannedTab?: any;
};

export const TabsStatus = ({ trackedTab, plannedTab }: TabsStatusProps) => {
  const stylesTabPanel = { m: 0, p: 0 };
  return (
    <Tabs defaultValue={0} sx={{ bgcolor: "transparent", height: "100%", width: "100%" }}>
      <Flex x xc yc>
        <TabList disableUnderline sx={{ mb: 4, borderRadius: 8 }}>
          <Tab disableIndicator sx={{ px: 2 }}>
            Tracked
          </Tab>
          <Tab disableIndicator>Planned</Tab>
        </TabList>
      </Flex>
      <TabPanel value={0} sx={stylesTabPanel}>
        {trackedTab}
      </TabPanel>
      <TabPanel value={1} sx={stylesTabPanel}>
        {plannedTab}
      </TabPanel>
    </Tabs>
  );
};
