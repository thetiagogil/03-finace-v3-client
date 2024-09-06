import { Grid, Stack, Typography } from "@mui/joy";
import { MAIN_WIDTH } from "../../utils/constants";
import { NavbarMobile } from "../navigation/navbar-mobile";
import { Flex } from "../shared/flex";
import { NavbarDropdown } from "./navbar-dropdown";
import { NavbarList } from "./navbar-list";

export const NavbarContent = () => {
  return (
    <Grid container sx={{ width: MAIN_WIDTH }}>
      <Grid xs={4} sx={{ display: { xs: "block", lg: "none" }, pl: 2 }}>
        <NavbarMobile />
      </Grid>
      <Grid xs={4} lg={2}>
        <Flex x yc fullheight sx={{ justifyContent: { xs: "center", lg: "start" } }}>
          <Typography level="title-md">FIN/ACE</Typography>
        </Flex>
      </Grid>
      <Grid lg={8} sx={{ display: { xs: "none", lg: "block" } }}>
        <NavbarList />
      </Grid>
      <Stack component={Grid} xs={4} lg={2} sx={{ alignItems: "end", pr: { xs: 2, lg: 0 } }}>
        <NavbarDropdown />
      </Stack>
    </Grid>
  );
};
