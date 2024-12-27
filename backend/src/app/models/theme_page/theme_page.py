from sqlalchemy import Integer, String
from sqlalchemy.orm import mapped_column, Mapped
from src.app.models.mixin import IsActiveMixin, CreationDateMixin, UpdateDateMixin
from src.app.schemas.theme_page import ThemePageFull
from src.database.database_metadata import Base


class ThemePageORM(Base, IsActiveMixin, CreationDateMixin, UpdateDateMixin):
    __tablename__ = "theme_page"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String, nullable=False)
    header: Mapped[str] = mapped_column(String, nullable=True)

    foto_1: Mapped[str] = mapped_column(String, nullable=True)
    foto_2: Mapped[str] = mapped_column(String, nullable=True)
    foto_3: Mapped[str] = mapped_column(String, nullable=True)
    foto_4: Mapped[str] = mapped_column(String, nullable=True)
    foto_5: Mapped[str] = mapped_column(String, nullable=True)
    foto_6: Mapped[str] = mapped_column(String, nullable=True)
    foto_7: Mapped[str] = mapped_column(String, nullable=True)
    foto_8: Mapped[str] = mapped_column(String, nullable=True)
    foto_9: Mapped[str] = mapped_column(String, nullable=True)
    foto_10: Mapped[str] = mapped_column(String, nullable=True)
    foto_11: Mapped[str] = mapped_column(String, nullable=True)

    footer_bg: Mapped[str] = mapped_column(String, nullable=True)
    footer_logo: Mapped[str] = mapped_column(String, nullable=True)

    def get_schema(self) -> ThemePageFull:
        return ThemePageFull.from_orm(self)
