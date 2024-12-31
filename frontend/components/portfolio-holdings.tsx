import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function PortfolioHoldings() {
  const holdings = [
    {
      security: "iShares S&P 500 USD",
      symbol: "IE00B3WJKG14",
      position: "560",
      holdingPeriod: "728 days",
      cumulativeFlow: "€12,168.45\n€21.73/share",
      value: "€18,485.60\n€33.01/share",
      netProfitLoss: "€6,295.15\n45.54%/year",
      allocation: "35.02%",
    },
    {
      security: "Tesla Inc",
      symbol: "US88160R1014",
      position: "30.52",
      holdingPeriod: "786 days",
      cumulativeFlow: "€5,646.91\n€185.04/share",
      value: "€12,623.72\n€413.47/share",
      netProfitLoss: "€6,927.80\n115.88%/year",
      allocation: "23.91%",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Security</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Holding Period</TableHead>
          <TableHead>Cumulative Cashflow</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Net Profit/Loss</TableHead>
          <TableHead>Allocation %</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {holdings.map((holding) => (
          <TableRow key={holding.symbol}>
            <TableCell className="font-medium">
              <div>{holding.security}</div>
              <div className="text-sm text-muted-foreground">{holding.symbol}</div>
            </TableCell>
            <TableCell>{holding.position}</TableCell>
            <TableCell>{holding.holdingPeriod}</TableCell>
            <TableCell>
              {holding.cumulativeFlow.split('\n').map((line, i) => (
                <div key={i} className={i === 1 ? "text-sm text-muted-foreground" : ""}>
                  {line}
                </div>
              ))}
            </TableCell>
            <TableCell>
              {holding.value.split('\n').map((line, i) => (
                <div key={i} className={i === 1 ? "text-sm text-muted-foreground" : ""}>
                  {line}
                </div>
              ))}
            </TableCell>
            <TableCell>
              {holding.netProfitLoss.split('\n').map((line, i) => (
                <div key={i} className={i === 1 ? "text-sm text-muted-foreground" : ""}>
                  {line}
                </div>
              ))}
            </TableCell>
            <TableCell>{holding.allocation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

