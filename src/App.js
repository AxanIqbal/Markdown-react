import './App.css';
import React from "react";
import marked from "marked/lib/marked.esm";
import {
    Card,
    CardContent,
    CardHeader,
    Container,
    IconButton,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import {GitHub} from "@material-ui/icons";

const useStyles = makeStyles((Theme) => ({
    editor: {
        "padding-top": "20px",
        width: "auto"
    },
    preview: {
        "margin-top": "20px",
        maxWidth: "80vw",
    }
}));

function App() {
    const classes = useStyles();
    const [value, setValue] = React.useState(`# Welcome to my React Markdown Previewer!

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

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
            <Container className={classes.editor}>
                <TextField multiline rowsMax={10} variant={"outlined"} label="Editor"
                           onChange={handleChange} value={value} id="editor"/>
            </Container>
            <Card className={classes.preview} variant={"outlined"}>
                <CardHeader title={"Preview"}/>
                <CardContent>
                    <div id={"preview"} dangerouslySetInnerHTML={{__html: marked(value, {sanitize: true,breaks: true,})}}/>
                </CardContent>
            </Card>
            <Typography align={"center"} color={"textSecondary"} variant={"body2"}>By Ahsan Iqbal<br/><IconButton
                href={"https://github.com/AxanIqbal/Markdown-react"}>
                <GitHub/>
            </IconButton>
            </Typography>
        </>
    );
}

export default App;
