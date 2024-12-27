from typing import AsyncGenerator

from sqlalchemy.ext.asyncio import AsyncSession

from src.app_config.config_db import db_settings
from .db_accessor import DatabaseAccessor

database_accessor = DatabaseAccessor(db_settings=db_settings)

database_accessor.new_run()


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with database_accessor.get_session() as session:
        yield session


# async def get_user_db(session: AsyncSession = Depends(get_async_session)):
#     from models.user import User
#     yield SQLAlchemyUserDatabase(session, User)
#

# def init_db(engine) -> None:
#     Base.metadata.create_all(bind=engine)
#
