# Zadanie dla Junior AI Developera

Zadanie polega na stworzeniu aplikacji w Pythonie lub JavaScript, która:
- Łączy się z API OpenAI.
- Odczytuje plik tekstowy z artykułem.
- Przesyła artykuł i prompt do OpenAI w celu obróbki, generując kod HTML z treścią artykułu.
- Zapisuje wygenerowany kod HTML w pliku artykul.html, zachowując odpowiednią strukturę HTML, w tym tagi <img> dla grafik z atrybutami src="image_placeholder.jpg" oraz alt (z odpowiednim promptem do generowania grafiki) i podpisami pod obrazkami.
- Wygenerowany kod HTML nie zawiera tagów html, head, ani body, a jedynie zawartość między tagami body.
<br><br>Opcjonalnie, do wykonania jest szablon HTML z możliwością podglądu artykułu, zapisując go w pliku szablon.html oraz pełny podgląd w pliku podglad.html. Kod JS i CSS do podglądu można umieścić w plikach, ale nie należy ich dodawać do repozytorium. Wszystkie pliki (kod aplikacji, artykuł i plik artykul.html) należy umieścić w repozytorium.

## Technologie
- Node.js
- React
- Javascript
- OpenAI API

## Co zostało wykonane
Wykonane zostały wszystkie obowiązkowe zadania jak i te opcjonalne, program działą zgodnie z wymaganiami oraz oczekiwaniami.

## Instalacja
1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/Pietra323/task.git
   
2. Będąc w domowym folderze "task" wpisz w terminalu:
   ```bash
   npm install
3. Następnie przejdź do folderu "ReactApp" za pomocą:
   ```bash
   cd WebApp/ReactApp
4. Następnie:
   ```bash
   npm install
5. Aby uruchomić obowiązkową część zadania należy w terminalu w katalogu domowym wpisać:
   ```bash
   npm start
6. Aby uruchomić dodatkową część zadania należy w terminalu w katalogu "ReactApp" wpisać:
   ```bash
   npm run dev