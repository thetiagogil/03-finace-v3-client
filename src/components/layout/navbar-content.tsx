import { Grid, Link, List, ListItem, Stack, Typography } from "@mui/joy";
import { useContext } from "react";
import { Link as ReactLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import { MAIN_WIDTH, SIDEBAR_WIDTH } from "../../utils/constants";
import { linksArray } from "../arrays/links-array";
import { SidebarMobile } from "../navigation/navbar-mobile";
import { Flex } from "../shared/flex";
import { NavbarDropdown } from "./navbar-dropdown";

export const NavbarContent = () => {
  const { pathname } = useLocation();
  const { hasData, loadingData } = useContext(AuthContext);
  return (
    <Grid container sx={{ width: MAIN_WIDTH }}>
      <Grid xs={4} sx={{ display: { xs: "block", lg: "none" }, pl: 2 }}>
        <SidebarMobile />
      </Grid>
      <Grid xs={4} lg={2}>
        <Flex
          x
          yc
          fullheight
          sx={{ width: { xs: "100%", lg: SIDEBAR_WIDTH }, justifyContent: { xs: "center", lg: "start" } }}
        >
          <Typography level="title-md" sx={{ color: "neutral.50" }}>
            FIN/ACE
          </Typography>
        </Flex>
      </Grid>
      <Grid lg={8} sx={{ display: { xs: "none", lg: "block  " } }}>
        {!loadingData && (
          <List sx={{ py: 0, display: "flex", flexDirection: "row", justifyContent: "center" }}>
            {linksArray.map((link, index) => {
              const selected = pathname.startsWith(link.path);
              const isDisabled = link.path !== "/activity" && !hasData;
              return (
                <ListItem
                  key={index}
                  sx={{
                    px: 2,
                    py: 0
                  }}
                >
                  <Link
                    component={ReactLink}
                    color="neutral"
                    underline="none"
                    to={link.path}
                    disabled={isDisabled}
                    sx={{
                      height: "100%",
                      color: selected ? "primary.300" : "neutral.400",
                      transition: "0.3s",
                      "&:hover": { color: "primary.300" }
                    }}
                  >
                    {link.title}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        )}
      </Grid>
      <Stack component={Grid} xs={4} lg={2} sx={{ alignItems: "end", pr: { xs: 2, lg: 0 } }}>
        <NavbarDropdown />
      </Stack>
    </Grid>
  );
};
