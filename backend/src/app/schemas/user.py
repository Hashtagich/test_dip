from pydantic import BaseModel


class AdminFull(BaseModel):
    id: int
    login: str
    email: str
    password: str

    class Config:
        from_attributes = True
