from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}


def reverse(text: str) -> str:
    """
    与えられた文字列を逆順にして返す。

    この関数はpytestのテスト用に作成されています。

    Args:
        text (str): 逆順にする文字列。

    Returns:
        str: 逆順になった文字列。
    """
    return text[::-1]
