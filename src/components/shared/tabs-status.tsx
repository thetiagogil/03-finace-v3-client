import { Divider, Tab, tabClasses, TabList, TabPanel, Tabs } from "@mui/joy";
import { MAIN_BGCOLOR, MAIN_BORDER_RADIUS, MAIN_WIDTH, NAVBAR_HEIGHT } from "../../utils/constants";
import { Flex } from "./flex";

type TabsStatusProps = {
  trackedTab?: any;
  plannedTab?: any;
};

export const TabsStatus = ({ trackedTab, plannedTab }: TabsStatusProps) => {
  const stylesTabPanel = {
    m: 0,
    py: 0,
    px: { xs: 2, lg: 0 },
    width: { xs: "100%", lg: MAIN_WIDTH },
    alignSelf: "center"
  };
  return (
    <Tabs
      defaultValue={0}
      sx={{
        bgcolor: MAIN_BGCOLOR,
        borderRadius: MAIN_BORDER_RADIUS,
        height: "100vh",
        overflow: "hidden",
        [`& .${tabClasses.root}`]: {
          color: "neutral.400",
          alignSelf: "center",
          height: 16,
          mx: 1,
          px: 3,
          transition: "0.3s",
          "&:hover": {
            bgcolor: "neutral.300",
            color: "primary.500",
            borderRadius: MAIN_BORDER_RADIUS
          }
        },
        [`& .${tabClasses.selected}`]: {
          color: "primary.400",
          borderRadius: MAIN_BORDER_RADIUS,
          fontWeight: 600
        }
      }}
    >
      <Flex y>
        <TabList disableUnderline sx={{ height: NAVBAR_HEIGHT, width: "100%", justifyContent: "center" }}>
          <Tab disableIndicator>Tracked</Tab>
          <Tab disableIndicator>Planned</Tab>
        </TabList>
        <Divider orientation="horizontal" />
      </Flex>
      <Flex x fullwidth sx={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)`, overflow: "hidden", mb: 2 }}>
        <Flex
          y
          xc
          component="main"
          sx={{
            flex: 1,
            overflowY: "auto",
            height: "100%"
          }}
        >
          <Flex y sx={{ height: "100%", width: { xs: "100%", lg: MAIN_WIDTH }, mt: 4 }}>
            <TabPanel value={0} sx={stylesTabPanel}>
              {trackedTab}
            </TabPanel>
            <TabPanel value={1} sx={stylesTabPanel}>
              {plannedTab}
            </TabPanel>
          </Flex>
        </Flex>
      </Flex>
    </Tabs>
  );
};
