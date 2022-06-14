// Hook that automatically geofences an app
import axios from "axios"
import { useEffect, useState } from "react"

export enum GeofenceCountry {
  PHILIPPINES = "PH",
  SINGAPORE = "SG",
  US = "US",
}

// and then redirects to a URL if not applicable
export const useGeofence = (country: GeofenceCountry) => {
  // If rejected, redirect to rejectedUrl
  const [rejected, setRejected] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    // axios
    //   .get("https://ipapi.co/country")
    //   .then(({ data }) => {
    //     if (data === country) {
    //       setRejected(true)
    //     } else {
    //       setRejected(false)
    //     }
    //   })
    //   .catch((e) => {
    //     // Geofence failed. Should we default to rejected or ok?
    //     console.log(e)
    //     setRejected(false)
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
  }, [country])

  return {
    rejected,
    loading,
  }
}