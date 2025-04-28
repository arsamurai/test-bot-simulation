import { Outlet } from '@tanstack/react-router'

const RootLayout = () => {
  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 py-14 md:py-24">
      <div className="container mx-auto flex flex-1 px-4">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
