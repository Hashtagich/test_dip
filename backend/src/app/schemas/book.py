from pydantic import BaseModel, HttpUrl


class FotoBookFull(BaseModel):
    foto: str

    class Config:
        from_attributes = True


class AuthorBookFull(BaseModel):
    title: str
    foto: str

    class Config:
        from_attributes = True


class IllustratorBookFull(BaseModel):
    title: str
    description: str
    foto: str

    class Config:
        from_attributes = True


class ConstructorBookFull(BaseModel):
    title: str
    description: str
    foto: str

    class Config:
        from_attributes = True


class BookFull(BaseModel):
    id: int
    title: str
    description: str
    avatar: str
    url: HttpUrl | None = None
    fotos: list[FotoBookFull]
    authors: list[AuthorBookFull]

    illustrators: list[IllustratorBookFull]
    constructors: list[ConstructorBookFull]

    class Config:
        from_attributes = True


class BookAllFull(BaseModel):
    id: int
    title: str
    photo_preview: str | None

    class Config:
        from_attributes = True


class FeedbackFull(BaseModel):
    author: str
    text: str

    class Config:
        from_attributes = True
