from typing import List

from fastapi import APIRouter, status

from src.app.services.book import BookService
from src.app.schemas.book import BookFull, BookAllFull


router = APIRouter(tags=["Book"], prefix="/book")


@router.get("/all/", status_code=status.HTTP_200_OK, response_model=List[BookAllFull])
async def get_all_book(id: int):
    """Получение списка всех книг кроме текущего, на странице которого находимся. Надо передать её id."""
    return await BookService.get_all(id=id)


@router.get("/{id}", status_code=status.HTTP_200_OK, response_model=BookFull)
async def get_book(id: int):
    """Получение конкретной книги по id."""
    return await BookService.get_book(id=id)
