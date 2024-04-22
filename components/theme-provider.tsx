"user client"

import { ThemeProvider as NexThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props}: ThemeProviderProps) {
    return <NexThemesProvider {...props}>{children}</NexThemesProvider>
}