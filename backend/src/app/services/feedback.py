from src.app.utils.unitofwork import IUnitOfWork, UnitOfWork
from src.app.schemas.book import FeedbackFull


class FeedbackService:
    @classmethod
    async def get_all(cls, uow: IUnitOfWork = UnitOfWork()):
        async with uow:
            return await uow.feedback.get_all()

    @classmethod
    async def add_one(cls, data: FeedbackFull, uow: IUnitOfWork = UnitOfWork()):
        async with uow:
            result = await uow.feedback.add_one(data=data.model_dump())
            await uow.commit()
            return result
