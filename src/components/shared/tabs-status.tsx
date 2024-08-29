import { Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy";
import { DataCard } from "./data-card";
import { Flex } from "./flex";

type TabsStatusProps = {
  trackedTab?: any;
  plannedTab?: any;
};

export const TabsStatus = ({ trackedTab, plannedTab }: TabsStatusProps) => {
  const stylesTabPanel = { m: 0, p: 0 };
  return (
    <Tabs defaultValue={0} sx={{ bgcolor: "transparent", height: "100%", width: "100%" }}>
      <DataCard>
        <Flex x yc xsb>
          <Typography level="h3" sx={{ pl: 1 }}>
            Dashboard
          </Typography>
          <TabList
            disableUnderline
            sx={{
              p: 0.5,
              gap: 1,
              display: "flex",
              justifyContent: "center",
              borderRadius: 8
            }}
          >
            <Tab disableIndicator sx={{ px: 2 }}>
              Tracked
            </Tab>
            <Tab disableIndicator>Planned</Tab>
          </TabList>
        </Flex>
      </DataCard>
      <TabPanel value={0} sx={stylesTabPanel}>
        {trackedTab}
      </TabPanel>
      <TabPanel value={1} sx={stylesTabPanel}>
        {plannedTab}
      </TabPanel>
    </Tabs>
  );
};
