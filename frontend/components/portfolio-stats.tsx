import { Card, CardContent } from "@/components/ui/card"

export function PortfolioStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Price return"
        value="37.06%/year"
        subValue="€19,872.79"
      />
      <StatCard
        title="Income return"
        value="0.15%/year"
        subValue="€91.01"
      />
      <StatCard
        title="Cost ratio"
        value="-0.37%/year"
        subValue="-€224.55"
      />
    </div>
  )
}

function StatCard({ title, value, subValue }: { title: string; value: string; subValue: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-sm font-medium">{title}</div>
        <div className="mt-2 text-2xl font-bold">{value}</div>
        <div className="text-sm text-muted-foreground">{subValue}</div>
      </CardContent>
    </Card>
  )
}

