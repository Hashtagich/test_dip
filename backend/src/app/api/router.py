from fastapi import APIRouter

from src.app_config.config_api import settings

from .v1.book import router as book_v1
from .v1.feedback import router as feedback_v1
from .v1.theme_page import router as theme_page_v1
from .v1.upload_file import router as upload_file_v1

router = APIRouter(prefix=settings.APP_PREFIX)

router.include_router(book_v1)
router.include_router(feedback_v1)
router.include_router(theme_page_v1)
router.include_router(upload_file_v1)
