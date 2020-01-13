import requests 
from bs4 import BeautifulSoup


url = "https://awoiaf.westeros.org/index.php/Special:Random"
r = requests.get(url)
print(r.url[38:])



soup = BeautifulSoup(r.text,"html.parser")

#print(soup.prettify())



