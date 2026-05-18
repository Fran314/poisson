[default]
_default:
	just --list

deploy:
	export BASE_URL="/~baldino/"; npm run build && rsync dist/ baldino@poisson.phc.dm.unipi.it:public_html/ -avzh
