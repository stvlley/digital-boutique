import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({

    // doc : {
    //     backgroundColor: '#f6f6f6',
    //     paddingBottom: 10,
    // },
    navbar: {
        backgroundColor: '#1a2124',
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        },
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    grow: {
        flexGrow: 1,
    },

    main: {
        minHeight: '80vh',
    },
    footer: {
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 0,
    },
    section: {
        marginTop: 10,
        marginBottom: 10,
    },
    form: {
        maxWidth: 800,
        margin: '0 auto',
      },
      navbarButton: {
          color: '#ffffff',
          textTransform: 'initial',
      },
      transparentBackground: {
          backgroundColor: 'transparent',
          marginTop: 50,
          marginBottom: 50,
      },
      error: {
        color: '#f04040',
      },
});

export default useStyles;