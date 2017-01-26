# mangaripper

## fun if you're into that sort of thing :)

### Overview
I got annoyed by the intrusive/gross spyware ads on mangareader.net so I decided to rip the 
images and make them into pdfs, now you can too :)

### Requirements
```pip install BeautifulSoup futures```

```sudo apt-get install imagemagick```

### Basic Usage

#### This will download issues 1-10 of Onepunch from mangareader.net and compile them into a .pdf. If you're having trouble completing the downloads, reduce the job/thread count to a more manageable level.
```python rip.py --manga onepunch-man --issue 1 --range 10 --threads 50 --timeout 75 --jobs 5```

#### This will take the downloaded pdfs and combine them "range" at a time
```python anthology.py --manga onepunch-man --range 10```

#### this will clean up everything not in an anthology
```python cleanup.py --manga onepunch-man```