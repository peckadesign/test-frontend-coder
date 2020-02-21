### Rozjetí projektu

Projekt využívá jednoduchý devstack postavený na npm a Gruntu.

1. `npm ci` pro instalaci balíčků nezbytných pro vývoj.
2. `grunt development` pro sestavení stylů.

V šabloně jsou použité relativní cesty, je tedy možné ji otevřít v prohlížeči
bez nastavování serveru.

### Zadání testu

1. Vytvořte si na githubu fork repozitáře pod vlastním účtem.
2. Podle grafického návrhu v Zeplinu (pozvánka do projektu vám dojde na e-mail,
[odkaz na webovou verzi](https://zpl.io/VqeWvy5), odkaz do aplikace - `zpl://screen?pid=5e4f8f8588012672f2844066&sid=5e4f9005f1689c65865a9a5d`)
nakódujte obsahovou část stránky.
    1. Používejte sémantické tagy.
    2. Výsledek musí být responzivní stránka (viz ostatní návrhy v projektu).
    3. Dbejte na znovupoužitelnost použitých komponent.
    
Pro potřeby vypracování můžete devstack libovolně doplnit např. o hot reloading
nebo watch task dle libosti. V takovém případě připište do README části
"Rozjetí projektu" jednoduchý popis zvoleného řešení.     
    
### Odevzdání

Test ve svém forknutém repozitáři vypracujte do větve. Před odevzdáním vytvořte
v rámci svého repozitáře Pull Request, jehož odkaz nám prosím zašlete zpět na
e-mail. Případné poznámky k řešení můžete psát přímo v rámci PR.
