
// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://hmivichyptfyicgjqsmi.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)



import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hmivichyptfyicgjqsmi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtaXZpY2h5cHRmeWljZ2pxc21pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MjAwMzcsImV4cCI6MjAzNDE5NjAzN30.EjFdKYpHbxNZWiEIwKMuYfg7nP4MAKabLdpq1UQ9PnM'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
