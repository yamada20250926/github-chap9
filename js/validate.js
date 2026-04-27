function validateLogin() {
    // フォームからユーザー名とパスワードを取得
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // エラーメッセージを表示する要素
    var errorMessagesElement = document.getElementById("errorMessages");

    // エラーメッセージをリセット
    errorMessagesElement.innerHTML = "";

    // ユーザー名とパスワードの検証ルール
    var usernameRegex = /^[a-zA-Z0-9_]+$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    // ユーザー名の検証
    if (!usernameRegex.test(username)) {
        errorMessagesElement.innerHTML += "ユーザー名は英数字とアンダースコア(_)のみ使用できます。<br>";
    }

    // パスワードの検証
    if (!passwordRegex.test(password)) {
        errorMessagesElement.innerHTML += "パスワードは少なくとも8文字で、英字と数字が必要です。<br>";
    }

    // 全ての検証が成功した場合はログイン成功とする
    if (errorMessagesElement.innerHTML === "") {
        alert("ログイン成功！");
    }
}
