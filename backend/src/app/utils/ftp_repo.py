from .ftp_serv import FTPServer


class FTPClient:
    def __init__(self, server: FTPServer):
        self.server = server

    async def upload_file(self, local_path, remote_path, file_name):
        async with self.server as ftp:
            remote_file_path = f"{remote_path}/{file_name}"
            await ftp.upload(local_path, remote_file_path)
            return remote_file_path

    async def download_file(self, remote_path, local_path):
        async with self.server as ftp:
            await ftp.download(remote_path, local_path)

    async def list_files(self, remote_path):
        async with self.server as ftp:
            return [path async for path in ftp.list(remote_path)]

    async def delete_file(self, remote_path):
        async with self.server as ftp:
            await ftp.remove_file(remote_path)
