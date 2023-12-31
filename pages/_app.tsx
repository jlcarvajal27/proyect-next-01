import { EntriesProvider } from '@/context/entries'
import { UiProvider } from '@/context/ui'
import { darkTheme, lightTheme } from '@/themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
    <UiProvider>
    <ThemeProvider theme={darkTheme}>
   <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
    </UiProvider>
    </EntriesProvider>
  )
}
