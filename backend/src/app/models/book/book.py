from sqlalchemy import Integer, String, ForeignKey
from sqlalchemy.orm import mapped_column, Mapped, relationship, validates
import validators
from src.app.schemas.book import (
    BookFull,
    FotoBookFull,
    AuthorBookFull,
    FeedbackFull,
    IllustratorBookFull,
    ConstructorBookFull,
)
from src.database.database_metadata import Base

from src.app.models.mixin import IsActiveMixin, CreationDateMixin, UpdateDateMixin


class BookORM(Base, CreationDateMixin, UpdateDateMixin):
    __tablename__ = "book"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String, nullable=False)
    description: Mapped[str] = mapped_column(String, nullable=False)
    avatar: Mapped[str] = mapped_column(String, nullable=False)
    photo_preview: Mapped[str] = mapped_column(String, nullable=True)
    url: Mapped[str] = mapped_column(String, nullable=True)
    fotos: Mapped[list["FotoBookORM"]] = relationship(
        "FotoBookORM", back_populates="book", cascade="all, delete-orphan"
    )

    authors: Mapped[list["AuthorBookORM"]] = relationship(
        "AuthorBookORM", back_populates="book", cascade="all, delete-orphan"
    )

    illustrators: Mapped[list["IllustratorBookORM"]] = relationship(
        "IllustratorBookORM", back_populates="book", cascade="all, delete-orphan"
    )

    constructors: Mapped[list["ConstructorBookORM"]] = relationship(
        "ConstructorBookORM", back_populates="book", cascade="all, delete-orphan"
    )

    def __str__(self):
        return f"{self.title}"

    @validates("url")
    def validate_url(self, key, url):
        if url is not None and not validators.url(url):
            raise ValueError("Invalid URL format")
        return url

    def get_schema(self) -> BookFull:
        return BookFull.from_orm(self)


class FotoBookORM(Base, IsActiveMixin, CreationDateMixin, UpdateDateMixin):
    __tablename__ = "foto_book"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    foto: Mapped[str] = mapped_column(String, nullable=False)

    book_id: Mapped[int] = mapped_column(Integer, ForeignKey("book.id"))
    book: Mapped["BookORM"] = relationship("BookORM", back_populates="fotos")

    def get_schema(self) -> FotoBookFull:
        return FotoBookFull.from_orm(self)


class AuthorBookORM(Base, IsActiveMixin, CreationDateMixin, UpdateDateMixin):
    __tablename__ = "author_book"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String, nullable=False)
    foto: Mapped[str] = mapped_column(String, nullable=False)

    book_id: Mapped[int] = mapped_column(Integer, ForeignKey("book.id"))
    book: Mapped["BookORM"] = relationship("BookORM", back_populates="authors")

    def __str__(self):
        return f"{self.title}"

    def get_schema(self) -> AuthorBookFull:
        return AuthorBookFull.from_orm(self)


class IllustratorBookORM(Base, IsActiveMixin, CreationDateMixin, UpdateDateMixin):
    __tablename__ = "illustrator_book"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String, nullable=False)
    description: Mapped[str] = mapped_column(String, nullable=False)
    foto: Mapped[str] = mapped_column(String, nullable=False)

    book_id: Mapped[int] = mapped_column(Integer, ForeignKey("book.id"))
    book: Mapped["BookORM"] = relationship("BookORM", back_populates="illustrators")

    def __str__(self):
        return f"{self.title}"

    def get_schema(self) -> IllustratorBookFull:
        return IllustratorBookFull.from_orm(self)


class ConstructorBookORM(Base, IsActiveMixin, CreationDateMixin, UpdateDateMixin):
    __tablename__ = "constructor_book"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String, nullable=False)
    description: Mapped[str] = mapped_column(String, nullable=False)
    foto: Mapped[str] = mapped_column(String, nullable=False)

    book_id: Mapped[int] = mapped_column(Integer, ForeignKey("book.id"))
    book: Mapped["BookORM"] = relationship("BookORM", back_populates="constructors")

    def __str__(self):
        return f"{self.title}"

    def get_schema(self) -> ConstructorBookFull:
        return ConstructorBookFull.from_orm(self)


class FeedbackORM(Base, IsActiveMixin, CreationDateMixin, UpdateDateMixin):
    __tablename__ = "feedback"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    author: Mapped[str] = mapped_column(String, nullable=False)
    text: Mapped[str] = mapped_column(String, nullable=False)

    def __str__(self):
        return f"{self.author} {self.text[:10]}"

    def get_schema(self) -> FeedbackFull:
        return FeedbackFull.from_orm(self)
