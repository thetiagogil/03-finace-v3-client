import { ReactNode } from "react";
import { MAIN_WIDTH, NAVBAR_HEIGHT } from "../../utils/constants";
import { Navbar } from "../navigation/navbar";
import { Flex } from "../shared/flex";

type Props = {
  children?: ReactNode;
  hasTabs?: boolean;
};

export const HomePageContainer = ({ children }: Props) => {
  return (
    <Flex y xc yc sx={{ height: "80vh" }}>
      {children}
    </Flex>
  );
};

export const FormPageContainer = ({ children }: Props) => {
  return (
    <Flex y xc sx={{ mt: 4 }}>
      {children}
    </Flex>
  );
};

export const AuthPageContainer = ({ children, hasTabs }: Props) => {
  return (
    <Flex y fullwidth fullheight sx={{ bgcolor: "neutral.100", height: "100vh", overflow: "hidden" }}>
      <Navbar />
      <Flex x fullwidth sx={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)`, overflowX: "hidden" }}>
        <Flex
          x
          xc
          component="main"
          sx={{
            flex: 1,
            overflowY: "auto",
            height: "100%"
          }}
        >
          <Flex
            y
            sx={{ height: "100%", width: { xs: "100%", lg: hasTabs ? "100%" : MAIN_WIDTH }, mt: hasTabs ? 0 : 2 }}
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
