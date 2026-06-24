const SUPABASE_URL = 'https://kvooglyzbljhslqwtklx.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_NEo_Gp66dJ1c7wZXWXeUYQ_m3JkhgfP'

const { createClient } = supabase
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)