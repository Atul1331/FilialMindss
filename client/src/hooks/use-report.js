import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const useReport = () => {
  const [loading, setLoading] = useState(false)
  const [reportData, setReportData] = useState(null)
  const navigate = useNavigate()

  const report = (name, value) => {
    console.log(value)

    let closenessTotal = 0
    let conflictsTotal = 0

    value.forEach((item) => {
      if (item.type === 'closeness') {
        closenessTotal += parseInt(item.val, 10)
      } else if (item.type === 'conflicts') {
        conflictsTotal += parseInt(item.val, 10)
      }
    })
    setReportData({ name, closenessTotal, conflictsTotal })
  }

  useEffect(() => {
    const sendReport = async () => {
      if (reportData) {
        setLoading(true)
        try {
          console.log(reportData.name)
          console.log(reportData.closenessTotal)
          console.log(reportData.conflictsTotal)
          const res = await fetch('/api/parentChild/score', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: reportData.name,
              closenessScore: reportData.closenessTotal,
              conflictsScore: reportData.conflictsTotal
            })
          })

          const data = await res.json()
          console.log('After Database Save')
          console.log(data)
          navigate('/parent-dashboard')
          if (data.error) {
            throw new Error(data.error)
          }
        } catch (error) {
          toast.error(error.message)
        } finally {
          setLoading(false)
        }
      }
    }

    sendReport()
  }, [reportData])

  return { loading, report }
}
export default useReport
