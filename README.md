# 🌍 PEACEFUL REVOLUTION - Website System

## 📂 Struktur

```
peacefulrevolution/
│
├── assets/
│   ├── styles/
│   │   └── main.css          ← ALLES Design (Farben, Fonts, Layout)
│   ├── components/
│   │   ├── header.html       ← Header für ALLE Seiten
│   │   └── footer.html       ← Footer für ALLE Seiten
│   └── scripts/
│       └── load-components.js ← Lädt Header/Footer automatisch
│
├── index.html                 ← Landing Page
├── evolution-des-bewusstseins.html
├── stammbaum-der-religionen.html
├── globale-vermoegensverteilung.html
├── wurzeln-der-konflikte.html
├── warum-passiert-es-nicht.html
├── vision-2050.html
└── friedliche-revolution-beginnt-bei-dir.html
```

## 🎨 Design ändern

### Farben ändern (ALLE Seiten gleichzeitig):
1. Öffne `assets/styles/main.css`
2. Finde die Zeile: `--primary-green: #4caf50;`
3. Ändere zu neuer Farbe, z.B.: `--primary-green: #2196f3;`
4. Speichern → ALLE 8 Seiten haben neue Farbe!

### Verfügbare Farb-Variablen:
- `--primary-white` (Haupt-Hintergrund)
- `--primary-black` (Text)
- `--primary-green` (Akzent-Farbe 1)
- `--primary-gold` (Akzent-Farbe 2)
- `--text-primary` (Haupt-Text)
- `--text-secondary` (Sekundär-Text)

### Schriftarten ändern:
1. Öffne `assets/styles/main.css`
2. Finde: `--font-heading: 'Poppins', sans-serif;`
3. Ändere zu anderer Schrift
4. Speichern → ALLE Seiten aktualisiert!

## 🔧 Navigation/Header ändern

### Logo tauschen:
1. Öffne `assets/components/header.html`
2. Ersetze das SVG durch dein echtes Logo
3. Speichern → ALLE Seiten haben neues Logo!

### Navigation ändern (Link hinzufügen/entfernen):
1. Öffne `assets/components/header.html`
2. Ändere die Links in `<nav>`
3. Speichern → ALLE Seiten aktualisiert!

## 📝 Footer ändern

1. Öffne `assets/components/footer.html`
2. Ändere Texte, Links, oder füge neue Sektionen hinzu
3. Speichern → ALLE Seiten aktualisiert!

## ✏️ Seiten-Inhalt ändern

### Nur EINE Seite ändern:
1. Öffne die entsprechende HTML-Datei (z.B. `evolution-des-bewusstseins.html`)
2. Ändere nur den Inhalt im `<main>` Bereich
3. Speichern → Nur diese Seite ändert sich!

## 🚀 GitHub/Vercel Upload

Wenn alles fertig ist:
1. **Alle Dateien** uploaden (mit Ordner-Struktur!)
2. GitHub: Stelle sicher dass `assets/` Ordner mit hochgeladen wird
3. Vercel deployed automatisch

## ⚠️ WICHTIG

- **NIEMALS** Header/Footer direkt in HTML-Dateien ändern
- **IMMER** über `assets/components/header.html` und `footer.html`
- **Design** immer in `main.css` ändern, nicht in einzelnen HTML-Dateien

## 💡 Später: Mehrsprachigkeit

Für Englisch/weitere Sprachen:
```
peacefulrevolution/
├── de/
│   ├── index.html
│   └── ... (alle 7 Seiten)
├── en/
│   ├── index.html
│   └── ... (alle 7 Seiten)
└── assets/  ← GLEICH für alle Sprachen!
```

= 1x Design ändern, ALLE Sprachen aktualisiert!