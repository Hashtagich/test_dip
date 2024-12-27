from fastapi import APIRouter, status, UploadFile, File, Depends

from src.app.utils.ftp_repo import FTPClient
import aiofiles
from src.redisrepo.dependencies import get_ftp_client
import os
import urllib.parse

router = APIRouter(tags=["UploadFileOnFTP"], prefix="/file")


@router.post("/upload/", status_code=status.HTTP_201_CREATED)
async def upload_file(file: UploadFile = File(...), ftp_client: FTPClient = Depends(get_ftp_client)):
    """Загрузка файла на FTP сервер и возврат ссылки на файл."""
    file_location = f"/uploads/{file.filename}"
    async with aiofiles.open(file.filename, "wb") as out_file:
        content = await file.read()
        await out_file.write(content)

    remote_file_path = await ftp_client.upload_file(file.filename, "/uploads", file.filename)

    os.remove(file.filename)

    encoded_path = urllib.parse.quote(remote_file_path)
    correct_path = f"{encoded_path}/{file.filename}"

    return {
        "file_url": f"https://app.sftpcloud.io/sftp-instances/b95d9f64-d5f2-4ec7-81cd-0f8e38a92f64/file-manager/download-url?downloadedFilePath={correct_path}"
    }
