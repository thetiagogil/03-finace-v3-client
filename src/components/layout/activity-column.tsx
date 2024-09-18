import { Divider, Typography } from "@mui/joy";
import { useContext, useState } from "react";
import { useDeleteTxById } from "../../api/tx-api";
import { InfoContext } from "../../contexts/info.context";
import { TxModel } from "../../models/tx.model";
import { AddEditActivityModal } from "../modals/add-edit-activity-modal";
import { ComponentTitle } from "../shared/component-title";
import { Flex } from "../shared/flex";
import { ActivityFilters } from "./activity-filters";
import { ActivityItemCard } from "./activity-item-card";

type ActivityTableProps = {
  transactions: TxModel[];
};

export const ActivityColumn = ({ transactions }: ActivityTableProps) => {
  const { userHasData } = useContext(InfoContext);
  const { deleteTxById, loading: deleting } = useDeleteTxById();
  const [editTxModal, setEditTxModal] = useState(false);
  const [currentTx, setCurrentTx] = useState<TxModel | null>(null);

  const groupedTransactions = transactions.reduce(
    (acc, tx) => {
      const date = tx.date;
      if (!acc[date]) acc[date] = [];
      acc[date].push(tx);
      return acc;
    },
    {} as Record<string, TxModel[]>
  );

  const handleEdit = (tx: TxModel) => {
    setCurrentTx(tx);
    setEditTxModal(true);
  };

  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <ComponentTitle title="Activity" />
      <ActivityFilters />
      {userHasData && (
        <Flex>
          <Flex y fullwidth gap3>
            {Object.entries(groupedTransactions).map(([date, transactionsArray]) => (
              <Flex y gap1 key={date}>
                <Typography level="body-sm" sx={{ color: "neutral.400" }}>
                  {formatDate(date).toUpperCase()}
                </Typography>
                <Flex y sx={{ border: "1px solid", borderColor: "neutral.300", borderRadius: 4 }}>
                  {transactionsArray.map((tx: TxModel, index: number) => (
                    <Flex y key={index}>
                      <ActivityItemCard onClick={() => handleEdit(tx)} tx={tx} />
                      {index < transactionsArray.length - 1 && <Divider orientation="horizontal" sx={{ mx: 2 }} />}
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            ))}
            {currentTx && (
              <AddEditActivityModal
                open={editTxModal}
                onClose={() => setEditTxModal(false)}
                userId={currentTx.user_id}
                status={currentTx.status}
                editMode={true}
                initialData={currentTx}
                handleDelete={() => deleteTxById(currentTx.id)}
                deleting={deleting}
              />
            )}
          </Flex>
        </Flex>
      )}
    </>
  );
};
