from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, federation, policies, access, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(federation.router, prefix="/federation", tags=["federation"])
api_router.include_router(policies.router, prefix="/policies", tags=["policies"])
api_router.include_router(access.router, prefix="/access", tags=["access"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
