import { Button, Card, LinearProgress, Option, Select, Typography } from "@mui/joy";
import { useState } from "react";
import { AuthPageContainer } from "../components/shared/containers";
import { Flex } from "../components/shared/flex";

export const BudgetPage = () => {
  const [selectedMonth, setSelectedMonth] = useState("September");
  const [selectedYear, setSelectedYear] = useState("2024");

  const budgetData = [
    { category: "Groceries", planned: 400, spent: 350 },
    { category: "Rent", planned: 1200, spent: 1200 },
    { category: "Entertainment", planned: 200, spent: 220 }
  ];

  return (
    <AuthPageContainer>
      <Flex y gap={2} fullwidth>
        {/* Month and Year Selector */}
        <Flex x yc gap={2} sx={{ mb: 2 }}>
          <Select placeholder="Select Month" value={selectedMonth} sx={{ width: 150 }}>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ].map(month => (
              <Option key={month} value={month}>
                {month}
              </Option>
            ))}
          </Select>
          <Select placeholder="Select Year" value={selectedYear} sx={{ width: 100 }}>
            {["2022", "2023", "2024", "2025"].map(year => (
              <Option key={year} value={year}>
                {year}
              </Option>
            ))}
          </Select>
          <Typography level="h4">
            {selectedMonth} {selectedYear} Budget
          </Typography>
        </Flex>

        {/* Budget Categories */}
        {budgetData.map((item, index) => (
          <Card key={index} variant="outlined" sx={{ p: 2, borderRadius: "md" }}>
            <Typography level="body-sm">{item.category}</Typography>
            <Flex x yc gap={1} sx={{ mt: 1 }}>
              <Typography>Planned: ${item.planned}</Typography>
              <Typography>Spent: ${item.spent}</Typography>
            </Flex>
            <LinearProgress
              determinate
              value={(item.spent / item.planned) * 100}
              sx={{ height: 10, borderRadius: "md", mt: 1 }}
            />
            {item.spent > item.planned && (
              <Typography color="danger" level="body-sm">
                Over budget by ${item.spent - item.planned}
              </Typography>
            )}
          </Card>
        ))}

        {/* Summary Section */}
        <Card variant="outlined" sx={{ p: 3, borderRadius: "md", mt: 3 }}>
          <Typography level="body-md">Summary</Typography>
          <Flex x yc gap={2} sx={{ mt: 1 }}>
            <Typography>Total Planned: ${budgetData.reduce((acc, item) => acc + item.planned, 0)}</Typography>
            <Typography>Total Spent: ${budgetData.reduce((acc, item) => acc + item.spent, 0)}</Typography>
          </Flex>
          <Button variant="solid" color="primary" sx={{ mt: 2 }} onClick={() => alert("Adjust your budgets")}>
            Adjust Budgets
          </Button>
        </Card>
      </Flex>
    </AuthPageContainer>
  );
};
