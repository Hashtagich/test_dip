from sqlalchemy import Integer, String
from sqlalchemy.orm import mapped_column, Mapped
from src.app.models.mixin import CreationDateMixin, UpdateDateMixin
from src.app.schemas.user import AdminFull
from src.database.database_metadata import Base


class AdminORM(Base, CreationDateMixin, UpdateDateMixin):
    __tablename__ = "admin"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    login: Mapped[str] = mapped_column(String, nullable=False)
    email: Mapped[str] = mapped_column(String, nullable=False)
    password: Mapped[str] = mapped_column(String, nullable=False)

    def get_schema(self) -> AdminFull:
        return AdminFull.from_orm(self)
