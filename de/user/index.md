---

---
# 1. Typenschild

Das Typenschild ist fest mit dem SCS verbunden und muss immer gut lesbar sein.
Es enthält folgende Daten:
• Artikelverkaufsbezeichnung / Type
• Artikelnummer
• Herstelldatum
• Hardware-Version
• Seriennummer
• UID-Nummer
• QR-Code
• CE-Kennzeichnung
• FCC-Kennzeichnung
• Hostname

# 2. Aufbau der Schmalz Connect Suite

(1) IT-Anschluss
(2) Systemmanagement
(3) OT-Anschluss
(4) Ein/Aus-Button
(5) Spannungsversorgung
(6) USB-Anschlüsse

![](/aufbau-scs.png)

# 3. Inbetriebnahme

Die Verbindung zur SCS kann über zwei Varianten hergestellt werden:
• Variante 1: über den IT Netzwerkanschluss der SCS
• Variante 2: über den OT Netzwerkanschluss der SCS

## 3.1. Inbetriebnahme über den IT Netzwerkanschluss der SCS

![](/Bild2.png)

1\. Stellen sie den oben dargestellten Netzwerkaufbau her.

2\. Schalten Sie die Schmalz Connect Suite über den Ein/Aus Knopf an.

3\. Stellen Sie sicher, dass ihrem Endgerät vom DHCP Server eine IP-Adresse zugewiesen wurde.

a) Hierfür ist es erforderlich, dass Sie ihre Netzwerkkonfiguration automatisch beziehen.

![](/Bild3.png)

4\. Verbindung zur SCS durch Eingabe des Hostnames oder der IP Adresse im Webbrowser herstellen.

a) Der Hostname befindet sich auf dem Typenschild der SCS.

b) Die IP Adresse kann von ihrem IT-Netzwerkadministrator bereitgestellt werden.

## 3.2. Inbetriebnahme über den OT Netzwerkanschluss der SCS

![](/Bild4.png)

1\. Stellen sie den oben dargestellten Netzwerkaufbau her.

2\. Schalten Sie die Schmalz Connect Suite über den Ein/Aus Knopf an.

3\. Weisen Sie ihrem Endgerät eine IP Adresse in dem Adressbereich 192.168.77.xxx zu.

a) Hierfür ist es erforderlich, dass Sie ihre Netzwerkkonfiguration manuell konfigurieren.

b) Die IP Adresse der SCS am OT Port ist defaultmäßig auf 192.168.77.220 eingestellt.

Netzwerkkonfiguration Endgerät

![](/Bild5.png)

# 4. Einrichten des Maschinennetzwerks und Konfiguration

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

# 5. Funktionsbeschreibung Monitor

Die Vergabe von Anlagen Orts Kennzeichnung & Betriebsmittelkennzeichnung (AOK&BMK) werden über den Bereich "Monitor" angezeigt.

![](/bild5-1.png)