"use client";

import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    confirm: Palette["primary"];
    cancel: Palette["primary"];
  }

  interface PaletteOptions {
    confirm?: PaletteOptions["primary"];
    cancel?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    confirm: true;
    cancel: true;
  }
}
// 기본 테마 설정
const defaultOptions = {
  palette: {
    primary: {
      main: "rgba(66, 165, 245, 1)",
      light: "rgba(66, 165, 245, 1)",
      dark: "rgba(66, 165, 245, 1)",
      contrastText: "#fff",
    },
    confirm: {
      main: "rgba(66, 165, 245, 1)",
      light: "rgba(66, 165, 245, 0.6)",
      dark: "rgba(66, 165, 245, 1)",
      contrastText: "#fff",
    },
    cancel: {
      main: "rgba(0, 0, 0, 0.12)",
      light: "rgba(0, 0, 0, 0.12)",
      dark: "rgba(0, 0, 0, 0.12)",
      contrastText: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "var(--font-pretendard)",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          gap: "4px",
          minHeight: "36px",
          px: "10px",
          py: "7px",
          fontSize: "13px",
          lineHeight: 1,
          textTransform: "none",
          variants: [
            {
              props: { variant: "outlined" },
              style: {
                borderColor: "var(--color-default)",
                color: "var(--color-default)",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.05)",
                  borderColor: "var(--color-default)",
                },
              },
            },
            {
              props: { variant: "contained" },
              style: {
                borderColor: "transparent",
                color: "#fff",
              },
            },
          ],
        },
      },
    },
  },
};

//

// 기본 테마 생성
export const theme = createTheme(defaultOptions);

// MUI DataGrid 테마 설정
export const MUIDataGridTheme: Theme = createTheme({
  ...defaultOptions,
  components: {
    ...defaultOptions.components,
    MuiDataGrid: {
      styleOverrides: {
        root: {
          overflow: "hidden",
          borderRadius: 0,
          border: 0,
          outline: "none!important",
          "& *": { outline: "none !important" },
          "& .MuiDataGrid-main": {
            ".MuiDataGrid-virtualScroller": {
              ".MuiDataGrid-topContainer": {
                /* HEADERS */
                ".MuiDataGrid-columnHeaders": {
                  "& .MuiDataGrid-columnHeader, & .MuiDataGrid-filler, & .MuiDataGrid-scrollbarFiller": {
                    backgroundColor: defaultOptions.palette.primary.main,
                    color: "#fff",
                    cursor: "default",
                  },
                  "& .MuiDataGrid-columnHeader": {
                    "& .MuiCheckbox-root, & .Mui-checked": {
                      color: "#fff",
                    },
                  },
                },
                "& .MuiDataGrid-columnHeaders:hover .MuiDataGrid-columnSeparator": { display: "none" },
              },
              ".MuiDataGrid-virtualScrollerContent": {
                /* ROWS */
                "& .MuiDataGrid-row.Mui-selected": {
                  backgroundColor: "transparent",
                },
                "& .MuiDataGrid-row:hover, & .MuiDataGrid-row.Mui-selected:hover": {
                  backgroundColor: "var(--color-cell-selected)",
                },
              },
            },
          },
        },
      },
    },
  } as ThemeOptions["components"],
});

// MUI DataTable 테마 설정
export const MUIDataTableTheme: Theme = createTheme({
  ...defaultOptions,
  components: {
    ...defaultOptions.components,
    MUIDataTable: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "100%",
          boxShadow: "none!important",
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          backgroundColor: "#f0f0f0",
          "& > span": {
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          },
          Button: {
            textTransform: "none",
            whiteSpace: "nowrap",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          textAlign: "center",
        },
      },
    },
  } as ThemeOptions["components"],
});

export default theme;
