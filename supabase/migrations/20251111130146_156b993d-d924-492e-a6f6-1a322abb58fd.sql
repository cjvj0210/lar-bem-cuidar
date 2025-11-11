-- Add accept_whatsapp column to contact_messages table
ALTER TABLE public.contact_messages 
ADD COLUMN IF NOT EXISTS accept_whatsapp BOOLEAN DEFAULT false;

-- Add comment to the column
COMMENT ON COLUMN public.contact_messages.accept_whatsapp IS 'Indica se o usuário aceita receber contato por WhatsApp';