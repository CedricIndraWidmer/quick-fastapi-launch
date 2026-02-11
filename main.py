import os
from datetime import datetime
from fastapi import FastAPI

app = FastAPI(root_path=os.getenv("ROOT_PATH", ""))

version = "1.2.0"
now = datetime.now()
formatted_date = now.strftime("%Y.%m.%d")
message = f"Github Actions system check successful. Running dual environments on {formatted_date} - v.{version}!"


@app.get("/staging/")
def read_root():
    return message


@app.get("/prod/")
def read_root():
    return message


@app.get("/")
def read_root():
    return "This is the root path. Please access /staging/ or /prod/ to see the message."
