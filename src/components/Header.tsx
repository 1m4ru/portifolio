'use client'

import { AppBar, Box, Toolbar, Typography, IconButton, Avatar } from '@mui/material'
import { useThemeSwitch } from '@/app/design-system/providers/ThemeProvider'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

export function Header() {
  const { mode, toggleTheme } = useThemeSwitch()

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 1.5,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #7b2ff7, #00c6ff)',
              p: 0.3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 8px 2px rgba(123,47,247,0.45)`,
            }}
          >
            <Avatar
              src="/avatar.png"
              alt="Logo"
              sx={{
                width: '100%',
                height: '100%',
                border: '2px solid rgba(255,255,255,0.2)',
              }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(90deg, #7b2ff7, #00c6ff)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Portfólio
          </Typography>
        </Box>
        <IconButton onClick={toggleTheme} sx={{ color: 'text.primary' }}>
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
