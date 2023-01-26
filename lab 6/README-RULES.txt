{
  "rules": {
    ".read":true,".write": "auth != null && root.child('users').child(auth.uid).child('roles').child('ban').val() == false && (
    root.child('users').child(auth.uid).child('roles').child('admin').val() == true || root.child('users').child(auth.uid).child('roles').child('menager').val() == true) ";
  }
}

Konta:
Admin -> email: admin@gmail.com Hasło: admin123
Menager -> email: menager@gmail.com Hasło: menager123
Client -> email: client@gmail.com  Hasło: client123

Każdy nowy użytkownik bazowa ma role tylko klienta, aby nadać mu wyższa role należy zalogować na konto admina
I z widoku admina zwiększyć mu role

Angular: 15
FireBase: (SDK version 9.6.0)
