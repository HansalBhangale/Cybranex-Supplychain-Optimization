'use server'

// import { z } from 'zod'

// // const BusinessProfileSchema = z.object({
// //   companyName: z.string().min(1, "Company name is required"),
// //   contactName: z.string().min(1, "Contact name is required"),
// //   contactEmail: z.string().email("Invalid email address"),
// //   contactPhone: z.string().min(10, "Phone number must be at least 10 digits"),
// //   companyAddress: z.string().min(1, "Company address is required"),
// //   supplyChainRole: z.enum(["Manufacturer", "Distributor", "Retailer", "Other"]),
// // })
// export interface BusinessProfileData {
//     companyName: string;
//     contactName: string;
//     contactEmail: string;
//     contactPhone: string;
//     companyAddress: string;
//     supplyChainRole: string;
//   }
  
//   export async function createBusinessProfile(data: BusinessProfileData) {
//     const response = await fetch("http://127.0.0.1:8000/create-profile/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
  
//     if (!response.ok) {
//       throw new Error("Failed to create business profile");
//     }
  
//     return response.json();
//   }
  


// export type BusinessProfileData = z.infer<typeof BusinessProfileData>

// export async function createBusinessProfile(data: BusinessProfileData) {
//   const validatedData = BusinessProfileData.parse(data)
  
//   // Here you would typically save the data to your database
//   console.log('Business profile created:', validatedData)

//   // Simulate API call delay
//   await new Promise(resolve => setTimeout(resolve, 1000))

//   return { success: true, message: 'Business profile created successfully' }
// }




export interface BusinessProfileData {
    companyName: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    companyAddress: string;
    supplyChainRole: string;
  }

  // Load API URL from environment variables
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
  export async function createBusinessProfile(data: BusinessProfileData) {
    try {
      
      const response = await fetch(`${API_URL}/api/profiles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("response", data);
  
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.detail || "Failed to create business profile");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error creating business profile:", error);
      throw error;
    }
  }
  