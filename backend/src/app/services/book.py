from src.app.utils.unitofwork import IUnitOfWork, UnitOfWork


class BookService:
    @classmethod
    async def get_all(cls, id: int, uow: IUnitOfWork = UnitOfWork()):
        async with uow:
            return await uow.book.get_all(id)

    @classmethod
    async def get_book(cls, id: int, uow: IUnitOfWork = UnitOfWork()):
        async with uow:
            return await uow.book.get_by_id(id)
