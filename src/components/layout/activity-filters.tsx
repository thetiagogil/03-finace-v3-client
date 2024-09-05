import { Button, Select } from "@mui/joy";
import { useState } from "react";
import { BUTTON_BORDER_RADIUS } from "../../utils/constants";
import { AddTxModal } from "../modals/add-tx-modal";
import { Flex } from "../shared/flex";

type ActivityFiltersProps = {
  userId: string;
  status: "tracked" | "planned";
};

export const ActivityFilters = ({ userId, status }: ActivityFiltersProps) => {
  const [addTxModal, setAddTxModal] = useState(false);
  const stylesSelect = { width: { xs: "100%", sm: 200 }, borderRadius: BUTTON_BORDER_RADIUS };
  return (
    <Flex sx={{ flexDirection: { xs: "column-reverse", sm: "row" }, justifyContent: "space-between" }}>
      <Flex gap2>
        <Select placeholder="Mock Filter" sx={stylesSelect} />
        <Select placeholder="Mock Filter" sx={stylesSelect} />
      </Flex>
      <Flex>
        <Button
          onClick={() => setAddTxModal(true)}
          sx={{ width: { xs: "100%", sm: "auto" }, borderRadius: BUTTON_BORDER_RADIUS }}
        >
          Add activity
        </Button>
        <AddTxModal open={addTxModal} onClose={() => setAddTxModal(false)} userId={userId} status={status} />
      </Flex>
    </Flex>
  );
};
