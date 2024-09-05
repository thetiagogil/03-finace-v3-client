import { Divider, Tab, tabClasses, TabList, TabPanel, Tabs } from "@mui/joy";
import { BUTTON_BORDER_RADIUS, MAIN_WIDTH, NAVBAR_HEIGHT } from "../../utils/constants";
import { Flex } from "./flex";

type TabsStatusProps = {
  trackedTab?: any;
  plannedTab?: any;
};

export const TabsStatus = ({ trackedTab, plannedTab }: TabsStatusProps) => {
  const stylesTabPanel = { m: 0, p: 0, width: MAIN_WIDTH, alignSelf: "center" };
  return (
    <Tabs
      defaultValue={0}
      sx={{
        bgcolor: "transparent",
        borderRadius: BUTTON_BORDER_RADIUS,
        [`& .${tabClasses.root}`]: {
          color: "neutral.400",
          alignSelf: "center",
          height: 16,
          mx: 1,
          px: 3,
          transition: "0.3s",
          "&:hover": {
            bgcolor: "neutral.200",
            color: "primary.400",
            borderRadius: BUTTON_BORDER_RADIUS
          },
          "&:focus": {
            borderRadius: BUTTON_BORDER_RADIUS
          }
        },
        [`& .${tabClasses.selected}`]: {
          color: "primary.400",
          borderRadius: BUTTON_BORDER_RADIUS,
          fontWeight: 600
        }
      }}
    >
      <Flex y sx={{ mb: 4 }}>
        <TabList disableUnderline sx={{ height: NAVBAR_HEIGHT, width: "100%", justifyContent: "center" }}>
          <Tab disableIndicator>Tracked</Tab>
          <Tab disableIndicator>Planned</Tab>
        </TabList>
        <Divider orientation="horizontal" />
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
