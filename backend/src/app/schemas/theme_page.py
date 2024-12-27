from pydantic import BaseModel
from typing import Optional


class ThemePageFull(BaseModel):
    title: str
    header: Optional[str]
    foto_1: Optional[str]
    foto_2: Optional[str]
    foto_3: Optional[str]
    foto_4: Optional[str]
    foto_5: Optional[str]
    foto_6: Optional[str]
    foto_7: Optional[str]
    foto_8: Optional[str]
    foto_9: Optional[str]
    foto_10: Optional[str]
    foto_11: Optional[str]
    footer_bg: Optional[str]
    footer_logo: Optional[str]

    class Config:
        from_attributes = True
