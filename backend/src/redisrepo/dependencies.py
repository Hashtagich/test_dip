from src.app_config.config_redis import RedisRepository
from src.app.utils.ftp_serv import FTPServer
from src.app.utils.ftp_repo import FTPClient


async def get_redis_repo() -> RedisRepository:
    return await RedisRepository.connect()


def get_ftp_client():
    ftp_server = FTPServer()
    return FTPClient(server=ftp_server)
