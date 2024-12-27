from src.app.models.user.user import AdminORM
from src.app.utils.repository import SQLAlchemyRepository


class AdminRepository(SQLAlchemyRepository):
    model = AdminORM

    # async def add_document(self, create_data) -> DocumentData:
    #     stmt = insert(self.book).values(**create_data).returning(self.book)
    #     result = await self.session.execute(stmt)
    #     new_document = result.scalar_one()
    #     return new_document.get_schema()
