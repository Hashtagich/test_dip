from src.app.schemas.user import AdminFull
from src.app.utils.unitofwork import IUnitOfWork, UnitOfWork


class UserService:

    @classmethod
    async def create_admin(
        cls,
        id: int,
        login: str,
        email: str,
        password: str,
        uow: IUnitOfWork = UnitOfWork(),
    ) -> AdminFull:
        async with uow:
            result = await uow.admin.add_one(data=dict(id=id, login=login, email=email, password=password))
            await uow.commit()
        return result
