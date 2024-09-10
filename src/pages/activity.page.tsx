import { useContext } from "react";
import { useGetTxByStatus } from "../api/tx-api";
import { ActivityColumn } from "../components/layout/activity-column";
import { ActivityFilters } from "../components/layout/activity-filters";
import { AuthPageContainer } from "../components/shared/containers";
import { Flex } from "../components/shared/flex";
import { Loading } from "../components/shared/loading";
import { AuthContext } from "../contexts/auth.context";

export const ActivityPage = () => {
  const { userId } = useContext(AuthContext);
  const { data: transactions, loading: transactionsLoading } = useGetTxByStatus({ userId, status: "tracked" });
  const isLoading = transactionsLoading;

  return (
    <AuthPageContainer>
      <Flex y gap3>
        <ActivityFilters userId={userId} status="tracked" />
        {isLoading ? <Loading /> : <ActivityColumn transactions={transactions} />}
      </Flex>
    </AuthPageContainer>
  );
};
