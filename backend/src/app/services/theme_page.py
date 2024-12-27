from src.app.utils.unitofwork import IUnitOfWork, UnitOfWork


class ThemePageService:
    @classmethod
    async def get_active(cls, uow: IUnitOfWork = UnitOfWork()):
        async with uow:
            return await uow.theme_page.get_active()
