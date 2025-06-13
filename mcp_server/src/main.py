from fastapi import FastAPI
from fastapi_mcp import FastApiMCP
from src.domain.valueobject.reverse_text import ReverseTextRequest, ReverseTextResponse

# Create a FastAPI app
app = FastAPI()


# MCPツールとして登録されるエンドポイント（mcp作成前に定義）
@app.post(
    "/reverse-text/",
    operation_id="reverse_text",
    summary="文字列を逆順にする",
    description="入力された文字列を逆順にして返します",
)
async def reverse_text(request: ReverseTextRequest):
    """文字列を逆順にするMCPツール"""
    reversed_text = f"{request.text[::-1]}🚀"
    return ReverseTextResponse(original_text=request.text, reversed_text=reversed_text)


# Create an MCP server based on this app（エンドポイント定義後）
mcp = FastApiMCP(app)

# Mount the MCP server directry to your app
mcp.mount()
