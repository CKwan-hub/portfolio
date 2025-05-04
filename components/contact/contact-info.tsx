import { Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a href="mailto:apathy.zone@tutanota.com" className="text-primary hover:underline">
          apathy.zone@tutanota.com
          </a>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Buffalo, NY</p>
          <p className="text-muted-foreground">Available for remote work worldwide</p>
        </CardContent>
      </Card>
    </div>
  )
}
