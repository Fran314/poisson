# Baldo Poisson

Questo è il mio sito poisson. È fortemente ispirato alla schermata menu di Final
Fantasy IX. È mio tutto mio, ed è bello, e adesso si vede decentemente anche da
mobile

Per buildare e deployare il sito, usare:

```bash
export BASE_URL="/"; npm run build && rsync dist/* baldino.dev:/var/www/html/baldino.dev/. -r
```

```bash
export BASE_URL="/~baldino/"; npm run build && rsync dist/* baldino@poisson.phc.dm.unipi.it:public_html/. -r
```

Per utilizzarlo su poisson è necessario aggiungere il seguente file `.htaccess`
alla radice di `public_html`

```
RewriteEngine On

# If the request is not a file or directory, serve index.html
RewriteCond %{REQUEST_FILENAME} !-f
# RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /~baldino/index.html [L]
```
