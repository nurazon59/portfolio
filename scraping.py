import json
import requests
from bs4 import BeautifulSoup

url = 'https://atcoder.jp/users/Itsuki_54/history'
response = requests.get(url)
html_content = response.content

soup = BeautifulSoup(html_content, 'html.parser')

rows = soup.find_all('tr', class_='text-center')

data_list = []

for row in rows:
    date = row.find('td', {'data-order': True}).text.strip()
    contest_name = row.find('a').text.strip()
    rank = row.find_all('td')[2].text.strip()
    submissions = row.find_all('td')[3].text.strip()
    rating = row.find_all('td')[4].text.strip()

    data_list.append({
        'date': date,
        'contest_name': contest_name,
        'rank': rank,
        'submissions': submissions,
        'rating': rating
    })

    with open('src/data/contest.json', 'w') as f:
        json.dump(data_list, f, indent=4, ensure_ascii=False)