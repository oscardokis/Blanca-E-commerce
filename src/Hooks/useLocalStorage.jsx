import { useEffect, useState } from "react"


export const useLocalStorage = (key, initialValue) => {
  const [ account, setAccount] = useState(() => {
    const InitialAccounts = JSON.parse(window.localStorage.getItem(key)) ?? initialValue
    return InitialAccounts
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(account))
  },[account, key])

  return [account, setAccount ]
}