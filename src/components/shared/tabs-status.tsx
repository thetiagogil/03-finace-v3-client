import { Tab, tabClasses, TabList, TabPanel, Tabs } from "@mui/joy";
import { BUTTON_BORDER_RADIUS } from "../../utils/constants";
import { Flex } from "./flex";

type TabsStatusProps = {
  trackedTab?: any;
  plannedTab?: any;
};

export const TabsStatus = ({ trackedTab, plannedTab }: TabsStatusProps) => {
  const stylesTabPanel = { m: 0, p: 0 };
  return (
    <Tabs
      defaultValue={0}
      sx={{
        bgcolor: "transparent",
        borderRadius: BUTTON_BORDER_RADIUS,
        [`& .${tabClasses.root}`]: {
          mx: 1,
          px: 3,
          color: "neutral.400",
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
      <Flex y xc yc fullwidth>
        <TabList disableUnderline sx={{ mb: 4, borderRadius: 8 }}>
          <Tab disableIndicator>Tracked</Tab>
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
