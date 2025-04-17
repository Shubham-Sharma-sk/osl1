import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body with Zod schema
      const contactData = contactSchema.parse(req.body);
      
      // Store contact data
      const savedContact = await storage.saveContact(contactData);
      
      // Return success response
      res.status(201).json({
        message: "Contact form submitted successfully",
        contact: savedContact
      });
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      
      // Validation error
      if (error.errors) {
        res.status(400).json({
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        // Generic error
        res.status(500).json({
          message: "Failed to submit contact form"
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        message: "Failed to fetch contacts"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
