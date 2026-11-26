# Render

- Rendered outside the sandbox with headless Google Chrome:

  `google-chrome --headless=new --disable-gpu --no-sandbox --disable-crashpad --disable-breakpad --disable-dev-shm-usage --no-first-run --user-data-dir=/tmp/news26-prof --screenshot=/data/home/makefun/news1126/repo/entry.png --window-size=1024,1024 --hide-scrollbars file:///data/home/makefun/news1126/repo/news.html`

- The same command inside the sandbox failed with exit code 133: crashpad reported `setsockopt: Operation not permitted`.
- The final image is a 1024 × 1024 PNG, 171691 bytes, MD5 `23fe021a2ac3d2b9b623a8ac52ec752b`, below 1 MiB.
- The image shows a navy and amber newspaper front page with the US tariffs lead, a three-stat strip, two featured stories, nine numbered briefs and a navy footer. Visual inspection found no clipped or overlapping text.
- Revise pass: removed footer pagination, centered the briefing date, and increased the gaps between brief rows.
- Determinism: ran `main.ts` from `/` and `/tmp` with respective output directories `/tmp/news26-revise1` and `/tmp/news26-revise2`. Both output files had MD5 `23fe021a2ac3d2b9b623a8ac52ec752b`, matching `entry.png`.
