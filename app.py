from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return "EC2 system check"
