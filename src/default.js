import { marked } from "marked";

marked.setOptions({
    breaks: true
});

export const markDownDefault = 
`
# Main Header

## Sub Header

### Link

Here's a link to my portofolio  [Sakis Trentsios](https://codepen.io).

### Code Block

1.  Main.
2.  Code block :

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Another Folder.

### Inline Code

I think you should use an \`<a>\` element here instead.

### List

- First item
- Second item


### Bold Text
I just love **bold text**.

### Image

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png "Markdown Logo")

### Blockquote

> I'm done.
`;