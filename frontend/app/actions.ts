'use server'

import { parse } from 'csv-parse/sync'

export async function uploadCsv(formData: FormData) {
  try {
    const file = formData.get('file') as File
    if (!file) {
      throw new Error('No file uploaded')
    }

    const fileContent = await file.text()
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true
    })

    // Process the records here
    // For now, we'll just return the parsed data
    return { success: true, data: records }
  } catch (error) {
    console.error('Error parsing CSV:', error)
    return { success: false, error: 'Failed to parse CSV file' }
  }
}

