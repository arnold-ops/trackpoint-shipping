// js/supabase-config.js
const SUPABASE_URL = 'https://kvooglyzbljhslqwtklx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_NEo_Gp66dJ1c7wZXWXeUYQ_m3JkhgfP'; // Make sure your real key is here!

// Expose 'db' globally on the window object so admin.html and tracking.html can read it instantly
window.db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);