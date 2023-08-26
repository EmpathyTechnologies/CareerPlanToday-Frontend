import { createTheme } from "@mui/material/styles";
import { brandBlack, brandAqua, brandBlack_Pure, brandWhite_Pure, brandBlue_Dark, brandGrey_Light } from "../../brandColors";

let Theme = createTheme({
  palette: {
    primary: {
      light: brandWhite_Pure,
      main: brandBlue_Dark,
      dark: brandBlack_Pure,
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

Theme = {
  ...Theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: brandGrey_Light,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        contained: {
          boxShadow: "none",
          "&:active": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: Theme.spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: brandAqua, // Change this to brandAqua

          // backgroundColor: Theme.palette.common.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          margin: "0 16px",
          minWidth: 0,
          padding: 0,
          [Theme.breakpoints.up("md")]: {
            padding: 0,
            minWidth: 0,
          },
          "&.Mui-selected": {
            color: brandBlack, // Change this to the desired color for selected tabs
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: Theme.spacing(1),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: brandBlack_Pure,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: brandBlack,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: Theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
          minWidth: "auto",
          marginRight: Theme.spacing(2),
          "& svg": {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  },
};

export default Theme;
