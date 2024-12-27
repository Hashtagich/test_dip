from pydantic_settings import BaseSettings, SettingsConfigDict


class FTPSettings(BaseSettings):
    model_config = SettingsConfigDict(
        case_sensitive=False,
        env_prefix="FTP__",
        env_file=".env",
        extra="ignore",
    )

    HOST: str = "eu-central-1.sftpcloud.io"
    USER: str = "ac7f61cfeb6c4164950e26b0c69778d9"
    PASS: str = "BZWUfCmUOdWyXheNJirh2uQfsTCmn4nK"
    PORT: int = 22
