from src.app.models.theme_page.theme_page import ThemePageORM
from src.app.schemas.theme_page import ThemePageFull
from src.app.utils.repository import SQLAlchemyRepository
from sqlalchemy import select


class ThemePageRepository(SQLAlchemyRepository):
    model = ThemePageORM

    async def get_active(self):
        stmt = select(self.model).where(self.model.is_active)

        res = await self.session.execute(stmt)
        theme_page = res.scalars().first()
        theme_page_full = ThemePageFull.from_orm(theme_page)

        return theme_page_full
