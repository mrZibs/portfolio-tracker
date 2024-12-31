import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function CashSection() {
  const cashBalances = [
    {
      currency: "Euro",
      code: "EUR",
      balance: "€608.32",
      balanceInReportingCurrency: "€608.32",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Currency</TableHead>
          <TableHead>Balance</TableHead>
          <TableHead>Balance in Reporting Currency</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cashBalances.map((balance) => (
          <TableRow key={balance.code}>
            <TableCell className="font-medium">
              <div>{balance.currency}</div>
              <div className="text-sm text-muted-foreground">{balance.code}</div>
            </TableCell>
            <TableCell>{balance.balance}</TableCell>
            <TableCell>{balance.balanceInReportingCurrency}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

