import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Note!</AlertTitle>
      <AlertDescription>
        Your total will be converted to it Ghana cedis equivalent
      </AlertDescription>
    </Alert>
  )
}
