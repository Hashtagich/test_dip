from pydantic_settings import BaseSettings, SettingsConfigDict


class AdminSettings(BaseSettings):
    model_config = SettingsConfigDict(
        case_sensitive=False,
        env_prefix="ADMIN__",
        env_file=".env",
        extra="ignore",
    )

    SECRET_KEY: str = "8e6df0531e17149e7d7681be472c6393f7579ac0d595135a90a1b59990d4d6a9"

    PASS: str = "password"
    LOGIN: str = "admin"


settings = AdminSettings()
