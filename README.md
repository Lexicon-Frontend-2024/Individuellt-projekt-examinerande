# Produktportalen
Examinerande individuellt arbete i react

#### Tema:
Du får själv välja vad för typ av "produkter" som ska ingå i din portal, exempelvis:
- Böcker du vill läsa eller har läst
- Dina träningsresultat på gymmet
- Hundar på ett hunddagis
- Besökare på ett tivoli
- Vin i din vinkyl
- Spel i din bokhylla
- Event på en mässa
- Drönare som kommer med kaffe
- Mat i ditt kylskåp
- Fåglar på en fågelskådarlista
- Växter i ditt hem
- Mina vänner-bok
- Mjölkkor på din farm
- ...eller något annat liknande tema du finner intressant eller användbart i ditt eget liv.
- [Publika API:er](https://github.com/public-apis/public-apis)

### Projektkrav:
1. **API/Datakälla**: Studenterna kan välja att antingen använda ett befintligt API (exempelvis ett öppet API från GitHub eller liknande) eller skapa din egen JSON-fil som fungerar som datakälla. Data ska omfatta åtminstone:
    - Produktnamn/titel
    - Bild (URL till bild)
    - Beskrivning
    - Pris eller annan relevant attribut

2. **CRUD-funktionalitet**: Applikationen måste kunna hantera:
    - **C**reate: Möjlighet att lägga till en ny produkt
    - **R**ead: Lista och visa detaljer för produkter
    - **U**pdate: Redigera en produkt
    - **D**elete: Ta bort en produkt

3. **React-funktioner**:
    - **Routing**: Använd React Router DOM för att navigera mellan sidor som lista av produkter, detaljer om en produkt, skapa/uppdatera produkt, etc.
    - **State-hantering**: Använd `useState` för att hantera tillstånd (states).
    - **useEffect**: Används för att hämta data från API eller JSON-fil vid laddning av komponenter.
    - **useContext**: Implementera `useContext` för att dela globalt tillstånd mellan olika komponenter (exempelvis för att hantera användarinloggning eller delad data mellan sidor).
    - **Formulärhantering**: Använd `useState` för att hantera formulär för att lägga till/redigera produkter.

4. **Layout i Figma**: Studenterna ska utforma en övergripande layout och wireframes i Figma innan de börjar koda. Detta inkluderar:
    - Startsidan
    - Produktsidan (med lista av produkter)
    - Detaljsidan för en specifik produkt
    - Formulär för att skapa/redigera en produkt
  
5. **Övrigt**:
   - Typescript eller javascript är frivilligt
   - Kom på ett fyndigt och passande namn till din applikation

### Projektets upplägg och tidsplan:
#### Vecka 1: Planering och Design
1. **Dag 1–2:**
    - Välj tema och datakälla (API eller JSON-fil).
    - Skissa applikationens wireframes i Figma och få dessa godkända av en av lärarna.
    - Strukturera komponenterna: Identifiera vilka huvudkomponenter och sidkomponenter som behövs (t.ex. `ProductList`, `ProductDetails`, `ProductForm`, `Navbar`, `Footer`).

2. **Dag 3–5:**
    - Skapa grundstrukturen för React-applikationen.
    - Implementera `React Router` för navigationen mellan olika sidor (startsida, produktsida, produktspecifik sida, skapa/redigera-sida).

#### Vecka 2: Grundläggande Funktionalitet och Hooks
1. **Dag 6–7:**
    - Skapa produktlistan (med data från API eller JSON).
    - Använd `useState` för att hantera produktlistan och `useEffect` för att hämta data när komponenten laddas.
    - Implementera `ProductDetails`-komponenten som visar detaljer för en enskild produkt när användaren klickar på en produkt i listan (router-baserad navigering).

2. **Dag 8–9:**
    - Implementera formulär för att skapa och uppdatera produkter.
    - Använd `useState` för att hantera formulärdata.
    - Skriv funktionalitet för att skapa/uppdatera data i useContext eller localStorage.

3. **Dag 10:**
    - Skapa en funktion för att radera en produkt från listan som du har i useContext eller Local Storage.

#### Vecka 3: Avancerad Funktionalitet och Slutgiltig Presentation
1. **Dag 11–12:**
    - Implementera en `useContext`-lösning för att dela tillstånd mellan komponenter (exempelvis en varukorg eller favoritlista).
    - Förbättra användarupplevelsen (UX) med till exempel laddningsindikatorer vid datahämtning, samt felhantering vid nätverksproblem.

2. **Dag 13–14:**
    - Refaktorisera och optimera koden: Se till att komponenter är återanvändbara och att koden är organiserad.
    - Lägg till grundläggande CSS-styling eller använd ett CSS-ramverk som Bootstrap/Tailwind för en mer professionell look.

3. **Dag 15:**
    - Slutgiltig testning: Se till att alla funktioner (CRUD, routing, state management) fungerar korrekt.
    - Förbered en kort presentation av applikationen och genomför kodgranskning med andra studenter och lärare.

### Bedömningskriterier:
1. **Funktionalitet**: Alla CRUD-operationer fungerar korrekt.
2. **Användning av React-funktioner**: Effektiv användning av `useState`, `useEffect`, `useContext`, och React Router.
3. **Design**: Layouten följer den planerade designen i Figma och är användarvänlig.
4. **Kodstruktur**: Tydlig och välorganiserad kod med återanvändbara komponenter.
5. **Testning och felsökning**: Applikationen fungerar utan större buggar, och eventuell felhantering är implementerad.
