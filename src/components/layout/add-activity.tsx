import { Button, Typography } from "@mui/joy";
import { useState } from "react";
import { AddActivityModal } from "../modals/add-activity-modal";
import { Flex } from "../shared/flex";

type AddActivityProps = {
  userId: string;
  status: "tracked" | "planned";
};

export const AddActivity = ({ userId, status }: AddActivityProps) => {
  const [addTxModal, setAddTxModal] = useState(false);
  return (
    <Flex x xe>
      <Button onClick={() => setAddTxModal(true)} sx={{ width: { xs: "100%", md: "auto" } }}>
        <Typography sx={{ color: "neutral.50" }}>Add Activity</Typography>
      </Button>
      <AddActivityModal open={addTxModal} onClose={() => setAddTxModal(false)} userId={userId} status={status} />
    </Flex>
  );
};
