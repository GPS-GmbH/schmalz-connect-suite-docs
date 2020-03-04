---

---
# Certificates

Certificates are automatically created using the hostname.

When changing the hostname, this certificate is always updated to serve `<hostname>.local`.

If needed, this certificate can be overwritten to match with company requirements like different certificate signing authority or subject.

This can be done in **Settings > Security > Certificate**.

![](/certificate.jpg)

## Default Certificate Settings

Certificates are generated using these settings.

**Key:**

    openssl genrsa -out sicon.key 2048

**Certificate:**

    Subject
        /C=DE
        /ST=Baden-Wuerttemberg
        /L=Stuttgart
        /O=Gesellschaft fuer Produktionssysteme GmbH
        /OU=Development Department/CN=*.${HOSTNAME}.local"

**Sign Certificate:**

    openssl x509 
    	-days 707 
        -sha256
        -extensions 'v3_req'