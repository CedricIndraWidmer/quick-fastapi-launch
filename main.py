import os
from fastapi import FastAPI

app = FastAPI(root_path=os.getenv("ROOT_PATH", ""))


@app.get("/")
def read_root():
    return "Github Actions system check successful 10.02 v.1!"
