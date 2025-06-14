from pydantic import BaseModel


class ReverseTextRequest(BaseModel):
    """文字列逆順化リクエストのVO"""

    text: str


class ReverseTextResponse(BaseModel):
    """文字列逆順化レスポンスのVO"""

    original_text: str
    reversed_text: str
