function convertHtmlToMd(html) {
	const turndownService = new TurndownService();
	const markdown = turndownService.turndown(html);
	return markdown;
}

function getRawHTML(content, title) {
	const html = `<!DOCTYPE html>\n\
    <html>\n\
    <head>\n\
      <meta charset='utf-8'>\n\
      <meta name='viewport' content='width=device-width'>\n\
      <title>${title}</title>\n\
      <style> body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding:1em; } </style>\n\
    </head>\n\
    <body>\n\
    ${content}\n\
    </body>\n\
    </html>\n\
      `;
	return html;
}

function getContent(id) {
	const content = document.getElementById(id);
	return content.innerHTML;
}

function getTitle(id) {
	const content = document.getElementById(id);
	const title = content.getElementsByTagName("h1")[0];
	return title.innerHTML;
}

function loadInTextView(id, content) {
	document.getElementById(id).value = content;
}
