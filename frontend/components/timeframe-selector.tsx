import { Button } from "@/components/ui/button"

export function TimeframeSelector() {
  const timeframes = ["From the beginning", "YTD", "1Y", "MTD", "1M", "1W", "1D"]
  
  return (
    <div className="flex flex-wrap gap-2">
      {timeframes.map((period) => (
        <Button
          key={period}
          variant="outline"
          size="sm"
        >
          {period}
        </Button>
      ))}
    </div>
  )
}

