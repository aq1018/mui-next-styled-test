import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Link from 'next/link'
import { styled } from '@mui/material/styles'

const Offset = styled('div')(() => ({ height: 64 }))

export function TopNav() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ p: 2 }}><Link href="/">Logo</Link></Toolbar>
        <Offset />
      </AppBar>
    </>
  )
}
