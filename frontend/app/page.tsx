import { CashSection } from "@/components/cash-section"
import { PortfolioChart } from "@/components/portfolio-chart"
import { PortfolioHoldings } from "@/components/portfolio-holdings"
import { PortfolioStats } from "@/components/portfolio-stats"
import { TimeframeSelector } from "@/components/timeframe-selector"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Simple Portfolio</h1>
          <Button>Add trades</Button>
        </div>

        {/* Timeframe Selector */}
        <Card className="overflow-hidden">
          <CardContent className="p-3">
            <TimeframeSelector />
          </CardContent>
        </Card>

        {/* Portfolio Value and Stats */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold tracking-tight">€53,400.26</div>
              <div className="text-sm text-muted-foreground mt-1">
                ↑ 36.77%/year (€19,739.25)
              </div>
            </CardContent>
          </Card>
          <PortfolioStats />
        </div>

        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <PortfolioChart />
          </CardContent>
        </Card>

        {/* Holdings */}
        <Card>
          <CardHeader>
            <CardTitle>Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <PortfolioHoldings />
          </CardContent>
        </Card>

        {/* Cash Section */}
        <Card>
          <CardHeader>
            <CardTitle>Cash</CardTitle>
          </CardHeader>
          <CardContent>
            <CashSection />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

