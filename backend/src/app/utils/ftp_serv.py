import aioftp
from src.app_config.config_ftp import FTPSettings


class FTPServer:
    def __init__(self):
        settings = FTPSettings()
        self.host = settings.HOST
        self.username = settings.USER
        self.password = settings.PASS
        self.ftp = None

    async def __aenter__(self):
        self.ftp = aioftp.Client()
        await self.ftp.connect(self.host)
        await self.ftp.login(self.username, self.password)
        return self.ftp

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.ftp:
            await self.ftp.quit()
