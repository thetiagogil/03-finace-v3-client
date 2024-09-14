import { useContext } from "react";
import { useGetTxByStatus } from "../api/tx-api";
import { ActivityColumn } from "../components/layout/activity-column";
import { AddActivity } from "../components/layout/add-activity";
import { AuthPageContainer } from "../components/shared/containers";
import { Flex } from "../components/shared/flex";
import { Loading } from "../components/shared/loading";
import { AuthContext } from "../contexts/auth.context";

export const ActivityPage = () => {
  const { userId } = useContext(AuthContext);
  const { data: transactions, loading: transactionsLoading } = useGetTxByStatus({ userId, status: "tracked" });
  const isLoading = transactionsLoading;

  return (
    <AuthPageContainer
      leftChildren={
        <Flex y gap3>
          {isLoading ? <Loading /> : <ActivityColumn transactions={transactions} />}
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
