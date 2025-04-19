import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl shadow-xl p-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Contact Information</h2>
        <div className="space-y-8 text-lg">
          <p className="flex items-center">
            <Mail className="mr-4 h-6 w-6 text-accent flex-shrink-0" />
            <span>contact@oslstrategy.com</span>
          </p>
          <p className="flex items-center">
            <Phone className="mr-4 h-6 w-6 text-accent flex-shrink-0" />
            <span>+33 766616725</span>
          </p>
          <p className="flex items-center">
            <MapPin className="mr-4 h-6 w-6 text-accent flex-shrink-0" />
            <span>25 RUE des Bas, 92600 Asnières-sur-Seine, FRANCE</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
