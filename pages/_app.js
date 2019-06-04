import React,{Fragment} from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import  ThemeProvider  from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from 'lib/getPageContext';

class MyApp extends App {

  pageContext = getPageContext();

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
      {/* Wrap every thing in JSS and Theme providers */}
      <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
        <Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={this.pageContext.theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
        </Fragment>
        </JssProvider>
      </Container>
    );
  }
}

export default MyApp;
