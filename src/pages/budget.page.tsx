import { useContext } from "react";
import { ActivityFilters } from "../components/layout/activity-filters";
import { AddActivity } from "../components/layout/add-activity";
import { BudgetColumn } from "../components/layout/budget-column";
import { AuthPageContainer } from "../components/shared/containers";
import { Flex } from "../components/shared/flex";
import { AuthContext } from "../contexts/auth.context";

export const BudgetPage = () => {
  const { userId } = useContext(AuthContext);
  return (
    <AuthPageContainer
      leftChildren={
        <Flex y gap2>
          <ActivityFilters />
          <BudgetColumn />
        </Flex>
      }
      rightChildren={
        <Flex y gap2>
          <AddActivity userId={userId} status="tracked" />
        </Flex>
      }
    />
  );
};
