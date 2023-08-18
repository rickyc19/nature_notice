import os

PROJECT_NAME = "nature-notice-fastapi"

SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")

API_V1_STR = "/api/v1"
