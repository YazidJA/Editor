import marked from "marked";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    preview: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![Marked Logo](https://marked.js.org/img/logo-black.svg)
`,
  };

  edition(event) {
    this.setState({ preview: event.target.value });
  }

  render() {
    const markerlib = marked(this.state.preview, { breaks: true });
    return (
      <div>
        <h1 className="title">EDITOR</h1>
        <textarea
          id="editor"
          className="card"
          onChange={this.edition.bind(this)}>
          {this.state.preview}
        </textarea>
        <h1 className="title">PREVIEW</h1>
        <div
          id="preview"
          className="card"
          dangerouslySetInnerHTML={{ __html: markerlib }}></div>
      </div>
    );
  }
}

export default App;
