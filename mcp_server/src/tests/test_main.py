from src.main import reverse


def test_reverse():
    assert reverse("hello") == "olleh"
    assert reverse("") == ""
    assert reverse("123") == "321"
    assert reverse("あいう") == "ういあ"
