
```dataviewjs
const pages = dv.pages('"notes/journal/daily"').sort(p => p.file.name, 'desc');
const sectionHeader = "## Media Inbox";

async function extractSectionContent(filePath) {
	const separator = "---"; // Define the separator
    let fileContents = await dv.io.load(filePath);
    let lines = fileContents.split('\n');
    let sectionContent = [];
    let inSection = false;

    for (let line of lines) {
        if (line.trim() === sectionHeader) {
            inSection = true;
            continue;
        }
        if (inSection) {
            if (line.startsWith("## ") || line.trim() === separator) { 
            break; // End of the section 
            }
            if (line.trim() !== '') { // Avoid adding empty lines
                sectionContent.push(line.trim());
            }
        }
    }

    return sectionContent.join(' ');
}

let results = [];

for (let page of pages) {
    let sectionContent = await extractSectionContent(page.file.path);
    if (sectionContent) {
        results.push([
            `<span style="display: inline-block; width: 150px;">[[${page.file.name}|${page.file.name}]]</span>`,
            sectionContent
        ]);
    }
}

if (results.length > 0) {
    dv.table(["Date", "Media Inbox"], results);
} else {
    dv.paragraph("No results found."); // Informative message if no results
}


```

