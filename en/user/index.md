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

# Commissioning 

The connection to the Schmalz Connect Suite can be established in two ways.

## Connection to the SCS via the IT Side

### Network connection

![](/Bild2.png)

Establish the network connection shown above.

Switch on the Schmalz Connect Suite via the on/off button.

Make sure that your end device has been assigned an IP address by the DHCP server.

This requires that you obtain your network configuration automatically.
End device network configuration

![](/Bild3.png)

Connect to the SCS by entering the host name or IP address in your web browser.

The host name can be found on the SCS type plate.

The IP address can be provided by your IT network administrator.

## Connection to the SCS via the OT Side

![](/Bild4.png)

Establish the network connection shown above.

Switch on the Schmalz Connect Suite via the on/off button.

Assign an IP address to your end device in the address range 192.168.77.xxx.

This requires you to manually configure your network configuration.

The SCS IP address on the OT port is set to 192.168.77.220 by default.

End device network configuration

![](/Bild5.png)

Connect to the SCS by entering the host name or IP address in your web browser.

The host name can be found on the SCS type plate.

The factory default IP address is 192.168.77.220.

## Setting Up the Machine Network and Configuration

![](/bild1-1.png)

1.) Click the “Devices” symbol to display the Devices page.
2.) Create or register the devices via the “PreRegistered Devices” button
3.) or via the “New Device from Catalog” button.

The following window appears when the PreRegistered Devices button is selected.

![](/bild2-1.png)

4.) A network scan of the entire OT machine network is started by clicking the “Search New Devices” button.

![](/bild3-1.png)

5.) Register all discovered devices together or individually on the SCS.

The following window appears when the New Device from Catalog button is selected

![](/bild6.png)

Select the desired Device from the displayed selection catalog.

![](/bild7.png)

1.) Enter the IP address of the device directly on the page.
2.) You can still enter device-specific specifications, such as system/location ID and equipment ID, before the device is registered.
3.) Start the registration process.

Regardless of the selected type of input (catalog or scan), the final result is the same. The following figure shows the display after the registration process. All devices including the parameters are shown.

![](/bild4-1.png)

## Description of Functions – Monitor

The system/location ID and equipment ID assignments are displayed in the “Monitor” area.

![](/bild5-1.png)