# What's on your mind Summary

```dataviewjs
let pages = dv.pages("notes/journal/daily") .where(p => p.file.content.includes("## What's on your mind?")) .sort(p => p.file.name, 'desc'); for (let page of pages) { dv.header(3, page.file.name); let content = page.file.content.match(/## What's on your mind\?([\s\S]*?)(##|$)/); if (content) { dv.paragraph(content[1].trim()); } }
```


