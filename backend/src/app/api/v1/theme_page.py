from fastapi import APIRouter, status
from src.app.schemas.theme_page import ThemePageFull
from src.app.services.theme_page import ThemePageService

router = APIRouter(tags=["ThemePage"], prefix="/theme_page")


@router.get("/", status_code=status.HTTP_200_OK, response_model=ThemePageFull)
async def get_active():
    """Получение первой активной темы для главной страницы."""
    return await ThemePageService.get_active()
