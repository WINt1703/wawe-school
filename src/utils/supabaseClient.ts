import { Database } from "./types/supabase"
import { createClient } from "@supabase/supabase-js"

const url = "https://sxqlzlelwdslochdutgr.supabase.co"
const apiKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4cWx6bGVsd2RzbG9jaGR1dGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxOTE4MDQsImV4cCI6MjAyMTc2NzgwNH0.7qWZQv_5ht-QMKtCSSMbyUKbKbQ57yh8XXoQWmaar5g"

const client = createClient<Database>(url, apiKey)

export default client
