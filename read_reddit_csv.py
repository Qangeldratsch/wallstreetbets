import csv

def read_data():

    file = open('data/reddit_wsb.csv')
    csvreader = csv.reader(file)

    rows = []
    for row in csvreader:
        rows.append(row)

        if len(rows) > 10:
            break

    # title,score,id,url,comms_num,created,body,timestamp

    posts = []
    for row in rows:
        post = [row[0] + row[-2], row[-1]]

        posts.append(post)

    for post in posts:
        print(post)

    return posts

