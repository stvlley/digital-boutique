import { ServerStyleSheets } from "@material-ui/core";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";


export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                    <link rel="icon" href='/Users/stvlley/digital-boutique/public/images/dhf.png'/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => {
        return originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} ></App>)
        })
    }
    const initialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles), 
            sheets.getStyleElement(),
        ],
    }
}