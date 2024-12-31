'use client'

import { useState } from "react"
import { Upload } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { uploadCsv } from "@/app/actions"

export function CsvUploadModal() {
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.name.endsWith('.csv')) {
      setError('Please upload a CSV file')
      return
    }

    try {
      setIsUploading(true)
      setError(null)
      
      // Simulate upload progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            clearInterval(interval)
            return prev
          }
          return prev + 5
        })
      }, 100)

      const formData = new FormData()
      formData.append('file', file)
      
      const result = await uploadCsv(formData)
      
      clearInterval(interval)
      setProgress(100)
      
      if (result.success) {
        setTimeout(() => {
          setIsUploading(false)
          setProgress(0)
        }, 500)
      } else {
        throw new Error(result.error)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload file')
    } finally {
      setIsUploading(false)
      setProgress(0)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add trades</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Trades</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Upload your CSV file containing trades
              </p>
              <p className="text-xs text-muted-foreground">
                Supported format: CSV
              </p>
            </div>
            <Input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              disabled={isUploading}
              className="cursor-pointer"
            />
          </div>
          
          {isUploading && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2 w-full" />
              <p className="text-sm text-muted-foreground text-center">
                Uploading... {progress}%
              </p>
            </div>
          )}
          
          {error && (
            <p className="text-sm text-destructive text-center">
              {error}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

