+++

+++
### **![](/aufbau-scs.png)Benutzerhandbuch**

**Beschreibung der IBN über den IT Netzwerkanschluss auf der SCS**

1. **Netzwerkaufbau**

![](/Bild2.png)

Sollten Sie keinen DHCP Server im Netzwerk haben fahren Sie bitte mit der Beschreibung „IBN über den OT  Netzwerkanschluss“ fort

Stellen sie sicher, dass sie den oben beschriebenen Netzwerkaufbau hergestellt haben.

Stellen Sie die die Netzwerkkonfiguration ihres PCs auf DHCP (Netzwerkkonfiguration automatisch beziehen, siehe Screenshot)

![](/Bild3.png)

1. **Verbindung zur SCS herstellen - Hostname**

Die SCS ist unter folgender Adresse zu erreichen:

[https://schmalzconnectsuite.local/](https://schmalzconnectsuite.local/ "https://schmalzconnectsuite.local/")

Geben Sie hierfür die entsprechende Zeile in ihren Webbrowser ein.

1. **Verbindung zur SCS herstellen – IP Adresse**

Sie können eine Verbindung zur SCS über die vom DHCP Server zugewiesene IP Adresse herstellen.

Die IP Adresse ist unter den Netzwerkteilnehmern des DHCP Servers aufgelistet.

Optional kann die IP Adresse auch vom Netzwerkadministrator bereitgestellt werden.

Um die Verbindung zur SCS herzustellen geben Sie die vom DHCP Server generierte IP Adresse in ihren Webbrowser sein.

* **Beschreibung der IBN über den OT Netzwerkanschluss auf der SCS**

1. **Netzwerkaufbau**

![](/Bild4.png)

Stellen sie sicher, dass sie den oben beschriebenen Netzwerkaufbau hergestellt haben.

Stellen Sie die die Netzwerkkonfiguration ihres PCs eine feste Ip Adresse. Die IP Adresse muss im Bereich 192.168.0.X(alles außer 10) sein.

Die IP Adresse der SCS ist auf der OT Seite fest auf 192.168.0.10 eingestellt.

![](/Bild5.png)

1. **Verbindung zur SCS herstellen – IP Adresse**

Sie können eine Verbindung zur SCS über die IP Adresse herstellen.

Die IP Adresse ist 192.168.0.10

Um die Verbindung zur SCS herzustellen geben Sie die IP Adresse in ihren Webbrowser sein.

**Aufbau der Schmalz Connect Suite**

(1) IT-Anschluss  
(2) Systemmanagement  
(3) OT-Anschluss  
(4) Ein/Aus-Button  
(5) Spannungsversorgung  
(6) USB-Anschlüsse

![](/aufbau-scs.png)

**Schritte für die Einbindung der SCS ins Maschinennetzwerk**

1. Die SCS einschalten und auf Werkseinstellung setzen
2. Die SCS mit dem Maschinennetzwerk verbinden (Netzwerkkabel am OT-Anschluss der SCS)
3. Die IP-Adresse der OT-Seite der SCS auf eine freie IP-Adresse im Maschinennetzwerk einstellen 
4. Einstellung speichern

**Schritte für die Verbindung zur SCS OT-Seite**

1. Die SCS einschalten
2. Die SCS mit dem PC verbinden (Netzwerkkabel am Systemmanagement-Anschluss der SCS)
3. Netzwerkverbindungen auf dem PC öffnen
4.  Netzwerkeigenschaften der aktiven Netzwerkverbindung öffnen
5. Das Internetprotokoll IPv4 auf eine feste IP-Adresse stellen
6. Im Browser die IP-Adresse 192.168.0.10 eingeben und sich mit der SCS verbinden

**Schritte für die Verbindung zur SCS IT-Seite**

1. Die SCS einschalten
2. Die SCS mit dem IT-Netzwerk verbinden (Netzwerkkabel am IT-Anschluss der SCS)
3. Der PC oder das Handy/Tablet mit dem IT Netzwerk (Via Kabel oder W-Lan) verbinden
4. Netzwerkverbindungen auf dem PC öffnen
5.  Netzwerkeigenschaften der aktiven Netzwerkverbindung öffnen
6. Das Internetprotokoll IPv4 auf „IP-Adresse automatisch beziehen“ stellen
7. Im Browser die Adresse [https://schmalzconnectsuite.local/](https://schmalzconnectsuite.local/ "https://schmalzconnectsuite.local/") eingeben und sich mit der SCS verbinden