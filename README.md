# Pigeon_Food_Website

**Live demo:** [https://csilla-gulyas.github.io/Pigeon_Food/](https://csilla-gulyas.github.io/Pigeon_Food/)

## Projektleírás
A **Pigeon Food** projekt egy **statikus weboldal** front-endjét valósítja meg.  
A rendszer célja, hogy lehetővé tegye a felhasználók számára az ételek böngészését, a rendelés leadását, valamint a felhasználói fiókok kezelését.

A weboldal fő funkciói:
- Felhasználói regisztráció és bejelentkezés
- Étlap böngészése kategóriák szerint (előételek, főételek, desszertek, szezonális ajánlatok)
- Termékkártyák **dinamikus létrehozása JavaScript segítségével**, a többi oldal tartalom statikus
- Interaktív elemek és vizuális effektek (hover animációk, ikonok)
- Kapcsolatfelvételi űrlap és hírlevél feliratkozás

---

## Felhasznált technológiák
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)  
- **CSS keretrendszer:** Bootstrap 5 (néhány elemhez)  
- **Ikonok:** Font Awesome  
- **Betűtípus:** Google Fonts – Roboto  

---

## Oldal struktúrája

A weboldal fő részei:

| Komponens         | Funkció |
|------------------|---------|
| `header`         | Navigációs sáv logóval és menüpontokkal |
| `footer`         | Kapcsolati adatok, közösségi média ikonok, jogi információk |
| `main`           | Dinamikus tartalom minden oldalon (slider, termékkártyák, űrlapok) |
| `index.html`     | Főoldal, slider és bemutatkozó tartalom |
| `menu.html`      | Étlap, termékkártyák kategóriák szerint |
| `register.html`  | Felhasználói regisztráció |
| `login.html`     | Felhasználói bejelentkezés |
| `contacts.html`  | Kapcsolatfelvételi űrlap és hírlevél feliratkozás |

---

## Dinamikus elemek

A termékkártyák és szezonális ajánlatok a `createCards` JavaScript függvénnyel jönnek létre.  
Főbb funkciói:
- Termékek adatait tömbökből (`sessionalOffers`, `appetizers`, `poultryDishes`, stb.) tölti be
- Klónozza a HTML template-et, majd feltölti a képpel, névvel és árral
- Hozzáadja a konténerhez a megfelelő szekcióban

>  A weboldal **egyébként statikus**, minden tartalom fix HTML-ből jön, csak a kártyák generálódnak dinamikusan.

---

## Oldalelemek és stílus

A weboldal stílusa:
- **Flexbox** és **grid** alapú elrendezés
- Interaktív hover effektek ikonokra és gombokra
- **Input mezők animált labeljei** (floating labels)
- Színek: fő szín `#e8491c` (narancs), kiegészítő `#0c2f3b` (sötétkék), fehér háttér és szövegek

---

## Készítette

Gulyás Csilla  
Frontend weboldal projekt, 2024
