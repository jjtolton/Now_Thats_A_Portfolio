import time

import pandas as pd

a1 = pd.Series((100, 1, None, 65))
a2 = pd.Series((-85, -234, 32, 104))
a3 = pd.Series((100, 1, 0, 65)) # like a1 but with clean data
b = pd.Series((205.3, 3.5, 234.3, 8403.32))

df1 = pd.DataFrame({'a':a1, 'b':b})
df2 = pd.DataFrame({'a':a2, 'b':b})
df3 = pd.DataFrame({'a':a3, 'b':b})

for df in (df1, df2, df3):
    t = time.time()
    for x in range(int(1e4)):
        df['a'] * df['b']
    print(time.time() - t)

