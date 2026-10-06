import { useEffect } from 'react'

export default function HostingExpired() {
  useEffect(() => {
    document.title = 'Hosting Expired'
    // Send every route to "/" so no other page is reachable
    if (window.location.pathname !== '/') {
      window.history.replaceState(null, '', '/')
    }
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl">
          ⚠️
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Hosting Server Expired</h1>
        <p className="text-gray-600 mb-2">
          The hosting server for this website has expired.
        </p>
        <p className="text-gray-600 mb-6">
          Please renew it to restore access. All other pages are currently not accessible.
        </p>
        <p className="text-sm text-gray-400">If you are the site owner, please contact your developer to renew.</p>
      </div>
    </main>
  )
}
