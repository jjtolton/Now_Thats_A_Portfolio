# Database Logger

For all kinds of reasons, I like logging to MySQL.  Great way to query logs, run analytics on them, etc. etc.

`log.py` contains a technique for using SQLAlchemy as an ORM and a some custom handlers
for some super sexy logging both to a standard `run.log` file and to a MySQL database.

