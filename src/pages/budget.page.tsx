import { useContext } from "react";
import { ActivityFilters } from "../components/layout/activity-filters";
import { BudgetColumn } from "../components/layout/budget-column";
import { AuthPageContainer } from "../components/shared/containers";
import { Flex } from "../components/shared/flex";
import { AuthContext } from "../contexts/auth.context";

export const BudgetPage = () => {
  const { userId } = useContext(AuthContext);
  return (
    <AuthPageContainer>
      <Flex y gap3>
        <ActivityFilters userId={userId} status="tracked" />
        <BudgetColumn />
      </Flex>
    </AuthPageContainer>
  );
};
