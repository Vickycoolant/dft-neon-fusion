-- Add UPDATE and DELETE policies for admins on user_roles table
CREATE POLICY "Admins can update roles" 
ON public.user_roles
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete roles" 
ON public.user_roles
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));