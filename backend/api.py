from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd
from io import StringIO

app = FastAPI()

# Allow CORS for frontend-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust to your frontend's URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload-csv/")
async def upload_csv(file: UploadFile):
    try:
        # Read the uploaded file
        content = await file.read()
        csv_data = content.decode('utf-8')

        # Parse the CSV
        data = pd.read_csv(StringIO(csv_data))

        # Define required columns
        required_columns = ['date', 'symbol', 'quantity', 'price']

        # Validate columns
        missing_columns = [col for col in required_columns if col not in data.columns]
        if missing_columns:
            return JSONResponse(
                content={"success": False, "error": f"Missing required columns: {', '.join(missing_columns)}"},
                status_code=400,
            )

        # Process the records (you can add your own logic here)
        records = data.to_dict(orient="records")

        return JSONResponse(
            content={"success": True, "data": records},
            status_code=200,
        )

    except Exception as e:
        return JSONResponse(content={"success": False, "error": str(e)}, status_code=500)
