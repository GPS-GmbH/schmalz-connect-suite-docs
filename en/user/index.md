---

---
# Benutzerhandbuch

## Type Plate

The type plate is permanently attached to the SCS and must always be clearly legible.
It includes the following information:
• Part sales designation/type
• Article/part number
• Manufacturing date
• Hardware version
• Serial number
• UID number
• QR code
• CE label
• FCC label
• Host name

## Product Design

(1) IT network (FRONT END)
(2) System management
(3) OT network (PRODUCTION)
(4) ON/OFF BUTTON
(5) Industrial power supply
(6) USB connections

![](/aufbau-scs.png)

# Network Connection

The connection to the Schmalz Connect Suite can be established in two ways.

## Connection to the SCS via the IT Side

### Network connection

![](/Bild2.png)

Sollten Sie keinen DHCP Server im Netzwerk haben fahren Sie bitte mit der Beschreibung „IBN über den OT  Netzwerkanschluss“ fort

Stellen sie sicher, dass sie den oben beschriebenen Netzwerkaufbau hergestellt haben.

Stellen Sie die die Netzwerkkonfiguration ihres PCs auf DHCP (Netzwerkkonfiguration automatisch beziehen, siehe Screenshot)

![](/Bild3.png)

Die SCS ist unter folgender Hostname-Adresse zu erreichen:

http://scs-xxxx.local/

Der Hostname ist auf dem Typenschild aufgedruckt.

Geben Sie hierfür die entsprechende Zeile in ihren Webbrowser ein.

### Verbindung zur SCS herstellen – IP Adresse

Sie können eine Verbindung zur SCS über die vom DHCP Server zugewiesene IP Adresse herstellen.

Die IP Adresse ist unter den Netzwerkteilnehmern des DHCP Servers aufgelistet.

Optional kann die IP Adresse auch vom Netzwerkadministrator bereitgestellt werden.

Um die Verbindung zur SCS herzustellen geben Sie die vom DHCP Server generierte IP Adresse in ihren Webbrowser sein.

## Inbetriebnahme über den OT Netzwerkanschluss der SCS

### Netzwerkaufbau

![](/Bild4.png)

Stellen sie sicher, dass sie den oben beschriebenen Netzwerkaufbau hergestellt haben.

Stellen Sie die die Netzwerkkonfiguration ihres PCs eine feste Ip Adresse. Die IP Adresse muss im Bereich 192.168.0.X(alles außer 10) sein.

Die IP Adresse der SCS ist auf der OT Seite fest auf 192.168.0.10 eingestellt.

![](/Bild5.png)

### Verbindung zur SCS herstellen – IP Adresse

Sie können eine Verbindung zur SCS über die IP Adresse herstellen.

Die IP Adresse ist 192.168.0.10

Um die Verbindung zur SCS herzustellen geben Sie die IP Adresse in ihren Webbrowser sein.

## Einrichten des Maschinennetzwerks und Konfiguration

![](/bild1-1.png)

1\.) Durch anklicken des Symbols "Devices" wird die Devices Seite angezeigt.
2\.) Geräte über den "PreRegistered Devices " button,
3\.) oder über den "New Device from Catalog " button
anlegen bzw. registrieren.

Bei Auswahl des PreRegistered Devices button erscheint folgendes Fenster.

![](/bild2-1.png)

4\.) Durch klicken auf den Button "Search New Devices" startet ein Netzwerkscan über das gesamte OT Maschinennetzwerk.

![](/bild3-1.png)

5\.) Alle gefundenen Geräte gesamt oder einzeln auf der SCS registrieren.

Bei Auswahl des New Device from Catalog button erscheint folgendes Fenster

![](/bild6.png)

Aus dem angezeigten Auswahlkatalog das gewünschte Device auswählen.

![](/bild7.png)

1\.) Geräte IP Adresse direkt eingeben.
2\.) Bevor das Gerät registriert wird können noch gerätespezifische Angaben gemacht werden. z.B. Anlagen/Ortskennzeichen & BMK.
3\.) Registrierungsprozesses starten.

Unabhängig von der gewählten Art der Eingabe (Katalog oder Scan) ist das Endergebnis das selbe. Die nachfolgende Abbildung zeigt die Anzeige nach dem Registrierungsprozess. Es werden alle Geräte inkl. der Parameter gezeigt.

![](/bild4-1.png)

## Funktionsbeschreibung Monitor

Die Vergabe von Anlagen Orts Kennzeichnung & Betriebsmittelkennzeichnung (AOK&BMK) werden über den Bereich "Monitor" angezeigt.

![](/bild5-1.png)