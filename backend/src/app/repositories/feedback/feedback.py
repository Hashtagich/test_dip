from src.app.models.book.book import FeedbackORM
from src.app.utils.repository import SQLAlchemyRepository


class FeedbackRepository(SQLAlchemyRepository):
    model = FeedbackORM
